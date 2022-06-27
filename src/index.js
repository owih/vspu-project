import './styles/index.scss';
import 'bootstrap';
import Slider from "./scripts/slider";
import InputMaskPlug from "./scripts/inputmask";
import Filter from "./scripts/filter";
import CardsData from "./scripts/CardsData";

document.addEventListener('DOMContentLoaded', () => {
    [...document.querySelectorAll('.swiper')].forEach((elem) => new Slider(elem));
    [...document.querySelectorAll('[data-inputmask]')].forEach((elem) => new InputMaskPlug(elem));
    [...document.querySelectorAll('.filter')].forEach((elem) => new Filter(elem));
    [...document.querySelectorAll('.programs')].forEach((elem) => new CardsData(elem));
})
