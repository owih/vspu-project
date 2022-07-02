const CLASSES = {
    WRAPPER: 'programs__body',
    ITEM: 'programs__item',
    PROGRAM: 'program-card',
    TITLE: 'program-card__title',
    BODY: 'program-card__body',
    TEXT: 'program-card__text',
    PRICE: 'program-card__price',
    INACTIVATE: 'inactive',
};

const SELECTORS = {
    NEXT: '[data-action"next"]',
    PREV: '[data-action"prev"]',
};

export default class CardsData {
    constructor(block) {
        this.block = block;
        this.wrapper = this.block.getElementsByClassName(CLASSES.WRAPPER).item(0);
        this.controls = this.block.querySelectorAll('[data-action]');
        this.nextControl = this.block.querySelector('[data-action="next"]');
        this.prevControl = this.block.querySelector('[data-action="prev"]');
        this.url = this.block.dataset.url;
        this.maxNumberOfItems = Number(this.block.dataset.max);
        this.numberOfItems = Number(this.block.dataset.show) - 1;
        this.counter = 1;
        // this.link = this.block.getElementsByClassName(CLASSES.WRAPPER).item(0);
        //TODO: доделать переход по ссылке через атрибут

        this.clickHandler = this.clickHandler.bind(this);

        this.init();
    }

    init() {
        console.log(this.controls)
        this.getRequest();
        this.addControlsListener();
    }

    getRequest() {
        const ids = this.getIds();
        const url = this.url + ids;

        console.log(url)

        fetch(url)
            .then(res => res.json())
            .then(data => this.setDataPosts(data))
    }

    getIds() {
        let stringOfId = '';
        for (let i = this.counter; i <= this.numberOfItems + this.counter; i++) {
            console.log(this.counter)
            console.log(this.numberOfItems)
            stringOfId = stringOfId + '&id=' + i.toString(10);
        }
        return stringOfId;
    }

    addControlsListener() {
        this.controls.forEach((item) => {
            item.addEventListener('click', this.clickHandler)
        })
    }

    clickHandler(event) {
        event.preventDefault();
        if (event.target.dataset.action === 'next') this.nextPage();
        if (event.target.dataset.action === 'prev') this.prevPage();
    }

    nextPage() {
        this.counter += this.numberOfItems + 1;
        this.clearList();
        this.getRequest();
        this.isAvailable();
        console.log(this.counter)
    }

    prevPage() {
        this.counter -= this.numberOfItems + 1;
        this.clearList();
        this.getRequest();
        this.isAvailable();
        console.log(this.counter)
    }

    isAvailable() {
        if (this.counter <= this.numberOfItems) this.prevControl.classList.add(CLASSES.INACTIVATE)
        else this.prevControl.classList.remove(CLASSES.INACTIVATE);

        if (this.counter >= this.maxNumberOfItems - this.numberOfItems - 1) this.nextControl.classList.add(CLASSES.INACTIVATE)
        else this.nextControl.classList.remove(CLASSES.INACTIVATE);

        console.log(this.maxNumberOfItems)
        console.log(this.counter)
        console.log('counter')
    }

    clearList() {
        this.itemsArray = [];
    }

    setDataPosts(data) {
        this.itemsArray = this.getArrayElems(data);
        this.wrapper.innerHTML = '';
        this.itemsArray.forEach((item) => this.insertElem(item))
    }

    insertElem(item) {
        this.wrapper.append(item);
    }

    getArrayElems(data) {
        const elemsArray = [];
        data.forEach((item) => {
            const elem = this.createElem(item)
            elemsArray.push(elem);
        })
        return elemsArray;
    }

    createElem(item) {
        const wrapper = document.createElement('div');
        wrapper.classList.add(CLASSES.ITEM);

        const newElem = document.createElement('a');
        newElem.classList.add(CLASSES.PROGRAM);
        newElem.setAttribute('href', '#')

        const title = document.createElement('div');
        title.classList.add(CLASSES.TITLE);
        title.textContent = item.title;

        const body = document.createElement('div');
        body.classList.add(CLASSES.BODY);

        const text = document.createElement('div');
        text.classList.add(CLASSES.TEXT);
        text.textContent = item.body;


        const price = document.createElement('div');
        price.classList.add(CLASSES.PRICE);
        price.textContent = 'от ' + item.id + ' 123.00 руб';

        newElem.prepend(title)
        body.append(text);
        body.append(price);
        newElem.append(body);
        wrapper.append(newElem);

        return wrapper;
    }
}