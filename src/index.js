import './styles/index.scss';
import 'bootstrap';
import Example from "./scripts/script";

[...document.querySelectorAll('div')].forEach((elem) => new Example(elem));