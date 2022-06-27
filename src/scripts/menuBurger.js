const menuIcon = document.querySelector('.header__icon');
if(menuIcon) {
    const menuBody = document.querySelector('.header__navigation');
    menuIcon.addEventListener('click', () =>{
        menuIcon.classList.toggle('active');
        menuBody.classList.toggle('active');
        document.body.classList.toggle('lock')
    })
}