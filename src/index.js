import './styles/index.scss';
import 'bootstrap';
import Example from "./scripts/script";
import Slider from "./scripts/slider";
import Box from "./scripts/box";

const Items = document.querySelectorAll('.box__item');
new Box(Items);
[...document.querySelectorAll('.swiper')].forEach((elem) => new Slider(elem));
