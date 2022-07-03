const SELECTORS ={
    ICON: '.header__icon',
    NAVIGATION: '.header__navigation',
    LINKS: '.header__link[data-goto]',
}

const CLASSES = {
    ACTIVE: 'active',
    LOCK: 'lock',
}


export  default  class MenuBurger{
    constructor(block) {
        this.block = block;
        this.menuIcon = this.block.querySelector(SELECTORS.ICON);
        this.menuBody = this.block.querySelector(SELECTORS.NAVIGATION);
        this.menuLinks = this.block.querySelectorAll(SELECTORS.LINKS)

        this.init();
    }

    init(){
        this.addOpenListener();
        this.addScrollListener();
    }

    addOpenListener(){
        this.menuIcon.addEventListener('click', () =>{
            this.subtractScrollbar()
            this.setClass();
        })
    }
    addScrollListener(){
        for(let menuLink of this.menuLinks){
            menuLink.addEventListener('click', (e) =>{
                if(this.isGoto(menuLink)) {
                    this.scrollToSection(menuLink);
                    this.subtractScrollbar();
                    this.removeClass();
                    e.preventDefault();
                }
            })
        }

    }
    setClass(){
        this.menuIcon.classList.toggle(CLASSES.ACTIVE);
        this.menuBody.classList.toggle(CLASSES.ACTIVE);
        document.body.classList.toggle(CLASSES.LOCK);
    }
    removeClass(){
        if(this.isStateActive()){
            this.menuIcon.classList.remove(CLASSES.ACTIVE);
            this.menuBody.classList.remove(CLASSES.ACTIVE);
            document.body.classList.remove(CLASSES.LOCK);
        }
    }
    isStateActive(){
       return  this.menuIcon.classList.contains(CLASSES.ACTIVE)
        && this.menuBody.classList.contains(CLASSES.ACTIVE)
        && document.body.classList.contains(CLASSES.LOCK);
    }
    subtractScrollbar(){
        if(window.innerWidth <= 767){
            if(!document.body.classList.contains(CLASSES.LOCK)) {
                document.body.style.paddingRight = this.scrollbarWidth() + 'px';
            } else{
                document.body.style.paddingRight = 0 + 'px';
            }
        }
    }
    scrollbarWidth() {
       return  window.innerWidth - document.body.clientWidth
    }

    scrollToSection(menuLink){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 20;
        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
    }
    isGoto(menuLink){
        return  menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto);
    }
}