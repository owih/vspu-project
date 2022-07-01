
export  default  class Menu{
    constructor(block) {
        this.block = block;
        this.menuIcon = this.block.querySelector('.header__icon');
        this.menuBody = this.block.querySelector('.header__navigation');
        this.menuLinks = this.block.querySelectorAll('.header__link[data-goto]')

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
                    this.removeClass();
                    e.preventDefault();
                }
            })
        }

    }
    setClass(){
        this.menuIcon.classList.toggle('active');
        this.menuBody.classList.toggle('active');
        document.body.classList.toggle('lock');
    }
    removeClass(){
        if(this.menuIcon.classList.contains('active')
            && this.menuBody.classList.contains('active')
            && document.body.classList.contains('lock')){
            this.menuIcon.classList.remove('active');
            this.menuBody.classList.remove('active');
            document.body.classList.remove('lock');
        }
    }
    subtractScrollbar(){
        if(!document.body.classList.contains('lock')){
            document.body.style.paddingRight = this.scrollbarWidth() + 'px';
        } else{
            document.body.style.paddingRight = 0 + 'px';
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