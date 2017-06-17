class TestElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        let importDocument = document.currentScript.ownerDocument;
        let template = importDocument.querySelector('#test-template')
            .content.cloneNode(true);
        this.shadow.appendChild(template);

        let label = this.attributes.label.value;
        this.shadow.querySelector('h1').textContent = label;
    }
}

window.customElements.define('test-element', TestElement);
