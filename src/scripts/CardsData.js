const CLASSES = {
    ITEM: 'programs__item',
    PROGRAM: 'program-card',
    TITLE: 'program-card__title',
    BODY: 'program-card__body',
    TEXT: 'program-card__text',
    PRICE: 'program-card__price',
};

export default class CardsData {
    constructor(block) {
        this.block = block;

        this.init();
    }

    init() {
        fetch('http://jsonplaceholder.typicode.com/posts/?_limit=6')
            .then(res => res.json())
            .then(data => this.setDataPosts(data))
    }

    setDataPosts(data) {
       const itemsArray = this.getArrayElems(data);
       itemsArray.forEach((item) => this.insertElem(item))
    }

    insertElem(item) {
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

        const newElem = document.createElement('div');
        newElem.classList.add(CLASSES.PROGRAM);

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