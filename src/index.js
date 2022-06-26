import './styles/index.scss';
import 'bootstrap';
import Slider from "./scripts/slider";

[...document.querySelectorAll('.swiper')].forEach((elem) => new Slider(elem));
