class MockupElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        let template = MockupElement.DOCUMENT
            .querySelector('#mockup-template')
            .content.cloneNode(true);
        this.shadow.appendChild(template);

        let photo = this.attributes.photo.value;
        this.shadow.querySelector('img').setAttribute('src', photo);

        let label = this.attributes.label.value;
        this.shadow.querySelector('h1').textContent = label;
    }
}

MockupElement.DOCUMENT = document.currentScript.ownerDocument;

window.customElements.define('mockup-element', MockupElement);
