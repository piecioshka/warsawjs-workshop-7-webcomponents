const DEFAULT_VALUE = 0;
const DEFAULT_DELAY = 1000;

class Slider {
    constructor({ items, callback, delay = DEFAULT_DELAY }) {
        this.items = items;
        this.currentIndex = DEFAULT_VALUE;

        callback(this.currentElement);

        setInterval(() => {
            this.currentIndex++;

            if (this.currentIndex === this.items.length) {
                this.currentIndex = DEFAULT_VALUE;
            }

            callback(this.currentElement);
        }, delay);
    }

    get currentElement() {
        return this.items[this.currentIndex];
    }
}
