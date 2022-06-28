export default class GroupDirections{
    constructor(block) {
        this.container = document.querySelector('.group__content');
        this.btn = document.querySelector('.group__button');
        this.init(this.container,block.clientHeight);
    }
    init(container, blockHeight){
        let isClick = true;
        if(window.outerWidth < 1200) container.style.maxHeight = blockHeight  + 10 + "px";
        else container.style.maxHeight = 13 * blockHeight + "px";
        this.btn.addEventListener('click', (e) => {
            e.preventDefault();
            if(isClick){
                container.style.maxHeight = 13 * blockHeight + "px";
                setTimeout(() =>{
                    this.btn.textContent = "Свернуть";
                }, 1500);
                isClick = false;
            } else{
                container.style.maxHeight = blockHeight  + 10 + "px";
                setTimeout(() =>{
                    this.btn.textContent = "Развернуть";
                }, 1500);
                isClick = true;
            }
        })
    }
}