const SELECTORS = {
    CLEAR: '[data-target="clear"]',
    INPUT: '[data-target="input"]',
    SEARCH: '[data-target="search"]',
    ITEM: '[data-target="value"]',
};

const CLASSES = {
    WRAP: 'filter__wrap',
    CONTENT: 'filter__content',
};

export default class Filter {
    constructor(block) {
        this.block = block;
        this.clearControls = [...this.block.querySelectorAll(SELECTORS.CLEAR)]
        this.searchInputs = [...this.block.querySelectorAll(SELECTORS.SEARCH)]

        this.getArrayOfValues = this.getArrayOfValues.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.init();
    }

    init() {
        this.clearControls.forEach((item) => this.clearListener(item));
        this.searchInputs.forEach((item) => this.inputListener(item));
    }

    inputListener(item) {
        item.addEventListener('input', this.inputHandler);
    }

    inputHandler(event) {
        const content = event.target.closest('.' + CLASSES.CONTENT);
        const searchItems = [...content.querySelectorAll(SELECTORS.ITEM)]
        const inputValue = event.target.value;
        const searchedItems = this.getArrayOfValues(inputValue, searchItems);
        this.updateList(searchItems, searchedItems);
    }

    updateList(itemsHide, itemsShow) {
        itemsHide.forEach((item) => {
            item.classList.add('d-none');
        })
        itemsShow.forEach((item) => {
            item.classList.remove('d-none');
        })
    }

    getArrayOfValues(value, searchItems) {
        const arrayOfItems = [];
        const reg = new RegExp('^' + value, 'i')
        searchItems.forEach((item) => {
            const textValue = item.textContent;
            if (reg.test(textValue)) {
                arrayOfItems.push(item);
            }
        })
        return arrayOfItems;
    }

    clearListener(item) {
        item.addEventListener('click', this.clearHandler);
    }

    clearHandler(event) {
        const wrap = event.target.closest('.' + CLASSES.WRAP);
        const input = wrap.querySelector(SELECTORS.INPUT);
        input.value = '';
    }
}