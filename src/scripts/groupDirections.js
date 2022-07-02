export default class GroupDirections{
    constructor(block) {
        this.block = block;
        this.container =  this.block.querySelector('.group__content');
        this.card =  this.block.querySelector('.directions__item');
        this.btn = this.block.querySelector('.group__button');
        this.cardHeight = this.card.clientHeight;
        this.beforeWidth = window.innerWidth;
        this.isClick = true;
        this.isResize = true;
        this.init();
    }
    init(){
        this.hiddenBlock();
        this.addClickListener();
        this.addResizeListener();
    }
    hiddenBlock(){
        if(window.innerWidth < 768 && this.isResize){
            this.setMaxHeight(this.cardHeight  + 30);
            this.setTextBtn("Показать больше");
            this.setIsClick(true);
            this.isResize = false;
        }
        else if (window.innerWidth >= 768 && !this.isResize){
            this.setMaxHeight(this.countRow() * this.cardHeight + 65);
            this.setTextBtn("Показать больше");
            if(this.container.classList.contains('group__content_open')) this.container.classList.remove('group__content_open');
            this.setIsClick(true);
            this.isResize = true;
        }
    }
    addClickListener(){
        this.btn.addEventListener('click', (e) => {
            e.preventDefault();
            this.setParametersGroup();
        });
    }
    addResizeListener(){
        window.addEventListener('resize', () =>{
            if(this.isChangedWidthWindow()){
                this.hiddenBlock();
            }
        })
    }
    setParametersGroup(){
        if(this.isClick){
            this.setMaxHeight(this.countRow() * this.cardHeight + 65);
            this.setClassOpen();
            this.setTextBtn("Спрятать");
            this.setIsClick(false);
        } else{
            this.setMaxHeight(this.cardHeight  + 30);
            this.setClassOpen();
            this.setTextBtn("Показать больше");
            this.setIsClick(true);
        }
    }
    setMaxHeight(height){
        this.container.style.maxHeight = height + "px";
    }
    setClassOpen(){
        this.container.classList.toggle('group__content_open');
    }
    setTextBtn(text){
        this.btn.textContent = text;
    }
    setIsClick(bool){
        this.isClick = bool;
    }
    countRow(){
        let countColumn = Math.floor(this.container.offsetWidth / this.card.offsetWidth);
        return Math.ceil(10 / countColumn)
    }
    isChangedWidthWindow(){
        return this.beforeWidth !== window.innerWidth;
    }
}