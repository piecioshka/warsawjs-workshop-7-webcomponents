class GitHubProfileCardElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this._renderTemplate();

        let login = this.attributes.login.value;

        Promise.resolve(login)
            .then(this._fetchProfileDetails.bind(this))
            .then(this._fetchProfileRepositories.bind(this))
    }

    _renderTemplate() {
        let template = document.querySelector('#github-profile-card-template')
            .content.cloneNode(true);
        this.shadow.appendChild(template);
    }

    _fetchProfileDetails(login) {
        // let url = 'mocks/github-piecioshka-profile.json';
        let url = 'https://api.github.com/users/' + login;
        return fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((profile) => {
                console.log(profile);
                this._displayAvatar(profile.avatar_url);
                this._displayName(profile.name);
                this._displayBio(profile.bio);
                this._displayLocation(profile.location);
                return profile;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _displayAvatar(url) {
        this.shadow.querySelector('.profile-avatar').setAttribute('src', url);
    }

    _displayName(text) {
        this.shadow.querySelector('.profile-name').textContent = text;
    }

    _displayBio(text) {
        this.shadow.querySelector('.profile-bio').textContent = text;
    }

    _displayLocation(text) {
        this.shadow.querySelector('.profile-location').textContent = text;
    }

    _fetchProfileRepositories(profile) {
        let url = profile.repos_url;
        // let url = 'mocks/github-piecioshka-repositories.json';
        return fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((repositories) => {
                return repositories.sort(this._sortByPopularity);
            })
            .then((repositories) => {
                repositories.length = 5;
                return repositories;
            })
            .then((repositories) => {
                console.log(repositories);
                this._displayRepositories(repositories);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _sortByPopularity(repository1, repository2) {
        let star1 = repository1.stargazers_count;
        let star2 = repository2.stargazers_count;

        if (star1 < star2) {
            return 1;
        } else if (star1 > star2) {
            return -1;
        } else {
            return 0;
        }
    }

    _displayRepositories(repositories) {
        let $list = document.createDocumentFragment();
        repositories.forEach((repository) => {
            let $li = document.createElement('li');
            $li.innerHTML = `
                <span>${repository.stargazers_count} &#x2B50;</span> 
                <a href="${repository.html_url}" target="_blank">
                    ${repository.name}
                </a>
            `;
            $list.appendChild($li);
        });
        this.shadow.querySelector('.profile-repository-list').appendChild($list);
    }
}

window.customElements.define('github-profile-card-element', GitHubProfileCardElement);
