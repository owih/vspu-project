
export  default  class Menu{
    constructor() {
        this.menuIcon = document.querySelector('.header__icon');
        this.menuBody = document.querySelector('.header__navigation');

        this.init();
    }

    init(){
        this.menuIcon.addEventListener('click', () =>{
            this.menuIcon.classList.toggle('active');
            this.menuBody.classList.toggle('active');
            document.body.classList.toggle('lock');
        })
    }
}