import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import './HomeSlider.css';

import homeSlider from '../../../assets/home-slider.png'

const HomeSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            swiperRef.current.navigation
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <div className="slider-wrapper">
            <Swiper
                modules={[Navigation]}
                slidesPerView={2}
                spaceBetween={25}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="custom-swiper"
            >
                <SwiperSlide><div className="slide-box"><img src={homeSlider} /></div></SwiperSlide>
                <SwiperSlide><div className="slide-box"><img src={homeSlider} /></div></SwiperSlide>
                <SwiperSlide><div className="slide-box"><img src={homeSlider} /></div></SwiperSlide>
                <SwiperSlide><div className="slide-box"><img src={homeSlider} /></div></SwiperSlide>
            </Swiper>

            <div className="custom-nav-buttons">
                <button ref={prevRef} className="nav-btn left"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.08901 14.4766L2.56838 8.01349L9.06963 1.52193C9.37495 1.21693 9.37526 0.722242 9.07026 0.416929C8.76557 0.111929 8.27088 0.111304 7.96526 0.416304L0.908385 7.46287C0.761197 7.60974 0.67901 7.80912 0.679322 8.01693C0.679635 8.22505 0.763072 8.42412 0.910572 8.57037L7.9887 15.5863C8.14088 15.7372 8.33995 15.8129 8.5387 15.8129C8.73995 15.8129 8.94088 15.7357 9.09338 15.5816C9.39713 15.2754 9.39495 14.7807 9.08838 14.4769L9.08901 14.4766Z" fill="currentColor" />
                </svg>
                </button>
                <button ref={nextRef} className="nav-btn right"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.08912 7.43005L2.01099 0.414115C1.70474 0.110053 1.21006 0.112553 0.906307 0.419115C0.602557 0.725365 0.604744 1.22005 0.911307 1.5238L7.43193 7.98693L0.930682 14.4785C0.625369 14.7835 0.625057 15.2782 0.930057 15.5835C1.08256 15.7363 1.28256 15.8126 1.48287 15.8126C1.68318 15.8126 1.88224 15.7363 2.03506 15.5841L9.09193 8.53755C9.23912 8.39068 9.32131 8.1913 9.32099 7.98349C9.32068 7.77536 9.23724 7.5763 9.08974 7.43005H9.08912Z" fill="currentColor" />
                </svg>
                </button>
            </div>
        </div>
    );
};

export default HomeSlider;
