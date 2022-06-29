export default class GroupDirections{
    constructor(group, eventName) {
        this.group = group;
        this.eventName = eventName;
        this.container = group.querySelector('.group__content');
        this.block = group.querySelector('.directions__item');
        this.blockHeight = this.block.clientHeight;
        this.btn = group.querySelector('.group__button');
        this.isClick = true;
        this.init();
    }
    init(){
        this.hiddenBlock();
        if(this.eventName !== "resize") {
            this.addListener();
        }
    }
    hiddenBlock(){
        if(window.innerWidth < 1200){
            this.setParametersGroup(this.blockHeight  + 30, "Показать больше", true, "remove");
        }
        else {
            this.setParametersGroup(this.countRow() * this.blockHeight , "Показать больше", true, "remove");
        }
    }
    addListener(){
        this.btn.addEventListener('click', (e) => {
            e.preventDefault();
            this.eventName = e.type;
            if(this.isClick){
                this.setParametersGroup(this.countRow() * this.blockHeight , "Спрятать", false, "add");
            } else{
                this.setParametersGroup(this.blockHeight  + 30, "Показать больше", true, "remove");
            }
        })
    }
    setParametersGroup(height, text, bool, modOpen){
        this.container.style.maxHeight = height + "px";
        (modOpen === "add") ? this.container.classList.add('open') : this.container.classList.remove('open');
        this.btn.textContent = text;
        this.isClick = bool;
    }
    countRow(){
        let countColumn = Math.floor(this.group.offsetWidth / this.block.offsetWidth);
        return Math.ceil(10 / countColumn)
    }
}