const SELECTORS = {
    CONTENT: '.group__content',
    ITEM: '.directions__item',
    BUTTON: '.group__button',
    DIRECTION: '.directions',
}
const CLASSES = {
    OPEN: 'group__content_open',
    ANIMATION: 'group__content_anim',
}


export default class GroupDirections {
    constructor(block) {
        this.block = block;
        this.container = this.block.querySelector(SELECTORS.CONTENT);
        this.directions = this.block.querySelector(SELECTORS.DIRECTION);
        this.card = this.block.querySelector(SELECTORS.ITEM);
        this.btn = this.block.querySelector(SELECTORS.BUTTON);
        this.cardHeight = this.card.clientHeight;
        this.beforeWidth = window.innerWidth;
        this.countRows = this.countRow();
        this.widthLimit = 992;
        this.isClick = true;
        this.isResize = true;
        this.setParametersGroup = this.setParametersGroup.bind(this)
        this.init();
    }

    init() {
        this.hiddenBlock();
        this.addClickListener();
        this.addResizeListener();
    }

    hiddenBlock() {
        if (this.isChangedCountRow() && window.innerWidth < this.widthLimit && this.container.classList.contains(CLASSES.OPEN)) {
            this.countRows = this.countRow();
            this.setMaxHeight(this.directions.offsetHeight);
        }
        if (window.innerWidth < this.widthLimit && this.isResize) {
            this.setMaxHeight(this.cardHeight + 30);
            this.setTextBtn(this.btn.dataset.textOpen);
            this.setIsClick(true);
            this.isResize = false;
        } else if (window.innerWidth >= this.widthLimit && !this.isResize) {
            this.setMaxHeight(this.directions.offsetHeight);
            this.setTextBtn(this.btn.dataset.textOpen);
            if (this.container.classList.contains(CLASSES.OPEN)) this.container.classList.remove(CLASSES.OPEN);
            this.setIsClick(true);
            this.isResize = true;
        }
    }

    addClickListener() {
        this.btn.addEventListener('click', this.setParametersGroup);
    }

    addResizeListener() {
        window.addEventListener('resize', () => {
            if (this.isChangedWidthWindow()) {
                this.beforeWidth = window.innerWidth;
                this.hiddenBlock();
            }
        })
    }

    setParametersGroup(event) {
        event.preventDefault();
        this.setAnim();
        this.setClassOpen();
        if (this.isClick) {
            this.setMaxHeight(this.directions.offsetHeight);
            this.setTextBtn(this.btn.dataset.textClose);
            this.setIsClick(false);
            return;
        }
        this.setMaxHeight(this.cardHeight + 30);
        this.setTextBtn(this.btn.dataset.textOpen);
        this.setIsClick(true);
    }
    setAnim(){
        this.container.classList.add(CLASSES.ANIMATION);
        setTimeout(()=>{
            this.container.classList.remove(CLASSES.ANIMATION)
        }, 1000);
    }
    setMaxHeight(height) {
        this.container.style.maxHeight = height + "px";
    }

    setClassOpen() {
        this.container.classList.toggle(CLASSES.OPEN);
    }

    setTextBtn(text) {
        this.btn.textContent = text;
    }

    setIsClick(bool) {
        this.isClick = bool;
    }

    countRow() {
        let countColumn = Math.floor(this.container.offsetWidth / this.card.offsetWidth);
        return Math.ceil(10 / countColumn)
    }

    isChangedCountRow() {
        return this.countRows !== this.countRow();
    }

    isChangedWidthWindow() {
        return this.beforeWidth !== window.innerWidth;
    }
}