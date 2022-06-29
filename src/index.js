import './styles/index.scss';
import 'bootstrap';
import Menu from './scripts/menuBurger';
import GroupDirections from './scripts/groupDirections';
import Slider from "./scripts/slider";
import InputMaskPlug from "./scripts/inputmask";
import Filter from "./scripts/filter";
import CardsData from "./scripts/CardsData";


document.addEventListener('DOMContentLoaded', (e) => {
    new  Menu(document.querySelector('.header'));
    new GroupDirections(document.querySelector('.group'), e.type);
    [...document.querySelectorAll('.swiper')].forEach((elem) => new Slider(elem));
    [...document.querySelectorAll('[data-inputmask]')].forEach((elem) => new InputMaskPlug(elem));
    [...document.querySelectorAll('.filter')].forEach((elem) => new Filter(elem));
    [...document.querySelectorAll('.programs')].forEach((elem) => new CardsData(elem));
})

window.addEventListener('resize', (e) => {
    new GroupDirections(document.querySelector('.group'),e.type);
})
