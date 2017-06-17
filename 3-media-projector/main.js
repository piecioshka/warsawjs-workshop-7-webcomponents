class MediaProjectorElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this._renderTemplate();
        this.addEventListener('click', this._onClickHandler);
    }

    disconnectCallback() {
        this.removeEventListener('click', this._onClickHandler);
    }

    _onClickHandler() {
        if (this.slider) {
            // Jeśli slider już istnieje, ignorujemy kliknięcie.
            console.warn('Click handler was disabled');
            return;
        }

        this.slider = new Slider({
            items: this.children,
            callback: ($element) => {
                this._displayMedia($element.cloneNode(true));
            }
        });
    }

    _displayMedia($element) {
        let $screen = this.shadow.querySelector('.media-screen');
        $screen.innerText = '';
        $screen.appendChild($element);
    }

    _renderTemplate() {
        let template = document.querySelector('#media-projector-template')
            .content.cloneNode(true);
        this.shadow.appendChild(template);
    }
}

window.customElements.define('media-projector-element', MediaProjectorElement);
