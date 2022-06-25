export default class Box {
    constructor(boxItems) {
        this.boxItems = boxItems;

        this.init(this.boxItems);
    }

    init(items) {
        console.log(items);
        for (let i = 2; i < items.length; i += 5) {
            items[i].style.transform = 'translateY(-50px)';
            items[i + 1].style.transform = 'translateY(-100px)';
            items[i + 2].style.transform = 'translateY(-150px)';
        }
    }
}