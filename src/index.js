import './styles/index.scss';
import 'bootstrap';
import Menu from './scripts/menuBurger';
import GroupDirections from './scripts/groupDirections';
import Slider from "./scripts/slider";
import InputMaskPlug from "./scripts/inputmask";
import Filter from "./scripts/filter";
import CardsData from "./scripts/CardsData";

document.addEventListener('DOMContentLoaded', () => {
    new  Menu();
    new GroupDirections(document.querySelector('.direction-card'));
    [...document.querySelectorAll('.swiper')].forEach((elem) => new Slider(elem));
    [...document.querySelectorAll('[data-inputmask]')].forEach((elem) => new InputMaskPlug(elem));
    [...document.querySelectorAll('.filter')].forEach((elem) => new Filter(elem));
    [...document.querySelectorAll('.programs')].forEach((elem) => new CardsData(elem));
})

window.addEventListener('resize', () => {
    new GroupDirections(document.querySelector('.direction-card'));
})
