import './styles/index.scss';
import 'bootstrap';
import Example from "./scripts/script";
import Slider from "./scripts/slider";

[...document.querySelectorAll('.swiper')].forEach((elem) => new Slider(elem));