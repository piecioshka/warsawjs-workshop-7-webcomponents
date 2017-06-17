class MockupElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        let template = document.querySelector('#mockup-template').content.cloneNode(true);
        this.shadow.appendChild(template);

        let $style = document.createElement('link');
        $style.href = 'main.css';
        $style.rel = 'stylesheet';
        this.shadow.appendChild($style);

        let photo = this.attributes.getNamedItem('photo').value;
        this.shadow.querySelector('img').setAttribute('src', photo);

        let label = this.attributes.getNamedItem('label').value;
        this.shadow.querySelector('h1').textContent = label;
    }
}

window.customElements.define('mockup-element', MockupElement);
