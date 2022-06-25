import Swiper, { Navigation, Pagination, Autoplay} from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default class Slider {
    constructor(block) {
        this.block = block;
        this.swiper = null;

        this.init();
    }

    init() {
        console.log(this.block)
        if (this.block) {
            this.swiper = new Swiper(this.block, {
                slidesPerView: 1,
                spaceBetween: 0,
                watchSlidesVisibility: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: true,
                },
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },

                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                },
            })

        }
    }
}