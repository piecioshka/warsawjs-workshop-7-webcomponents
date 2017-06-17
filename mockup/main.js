class MockupElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        let template = document
            .querySelector('link[rel=import]')
            .import
            .querySelector('#mockup-template')
            .content.cloneNode(true);
        this.shadow.appendChild(template);

        let $style = document.createElement('link');
        let directory = getDirectory();
        $style.href = directory + '/main.css';
        $style.rel = 'stylesheet';
        this.shadow.appendChild($style);

        let photo = this.attributes.getNamedItem('photo').value;
        this.shadow.querySelector('img').setAttribute('src', photo);

        let label = this.attributes.getNamedItem('label').value;
        this.shadow.querySelector('h1').textContent = label;
    }
}

function getDirectory() {
    let url = document.currentScript.src;
    let page = location.href;
    return url
        .replace(page, '')
        .replace(/\/(.*)$/, '');
}

window.customElements.define('mockup-element', MockupElement);
