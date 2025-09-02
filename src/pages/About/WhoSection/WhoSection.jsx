import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import whoWeArePoster from '../../../assets/who-we-are.png';

import 'swiper/css';
import 'swiper/css/navigation';
import './WhoSection.css';

const WhoSection = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.params.navigation) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <div className="who-section">
            <div className="who-inner">
                {/* Left Section */}
                <div className="who-text">
                    <div className="who-safe-place">
                        <span className="heart"> <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.235 2.03375C16.7881 1.58662 16.2575 1.23194 15.6734 0.989944C15.0894 0.747952 14.4634 0.623398 13.8313 0.623398C13.1991 0.623398 12.5731 0.747952 11.9891 0.989944C11.405 1.23194 10.8744 1.58662 10.4275 2.03375L9.50001 2.96125L8.57251 2.03375C7.66978 1.13101 6.44542 0.623866 5.16876 0.623866C3.89211 0.623866 2.66774 1.13101 1.76501 2.03375C0.862282 2.93648 0.355133 4.16084 0.355133 5.4375C0.355133 6.71415 0.862282 7.93852 1.76501 8.84125L9.50001 16.5762L17.235 8.84125C17.6821 8.39433 18.0368 7.86371 18.2788 7.27968C18.5208 6.69565 18.6454 6.06967 18.6454 5.4375C18.6454 4.80532 18.5208 4.17934 18.2788 3.59531C18.0368 3.01128 17.6821 2.48066 17.235 2.03375Z" fill="#819361" />
                        </svg></span>
                        <span>Who we are</span>
                    </div>

                    <h1 className="who-heading">
                        Growing with Every Story Shared
                    </h1>

                    <p className="who-description">
                        We are a team of licensed psychologists, therapists, and mental health professionals dedicated to helping individuals navigate life’s challenges with compassion and clarity.
                    </p>
                    <p className="who-description">
                        Whether you're seeking support for anxiety, depression, relationship struggles, burnout, or simply want to grow.
                    </p>

                    <div className="who-actions">
                        <div className="cta-button">
                            <span className="cta-text">Discover More</span>
                            <div className="cta-circle">
                                <span className="cta-arrow">
                                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.08906 7.92999L2.01093 0.914054C1.70468 0.609992 1.21 0.612492 0.906246 0.919054C0.602496 1.2253 0.604683 1.71999 0.911246 2.02374L7.43187 8.48687L0.930621 14.9784C0.625308 15.2834 0.624996 15.7781 0.929996 16.0834C1.0825 16.2362 1.2825 16.3125 1.48281 16.3125C1.68312 16.3125 1.88218 16.2362 2.035 16.0841L9.09187 9.03749C9.23906 8.89062 9.32125 8.69124 9.32093 8.48343C9.32062 8.2753 9.23718 8.07624 9.08968 7.92999H9.08906Z" fill="#819361" />
                                    </svg>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Image
                <div className="who-image-container">
                    <img
                        src={whoWeArePoster}
                        alt="Mountains"
                        className="who-image"
                    />
                </div> */}
                {/* Right Section - Image Slider */}
                <div className="who-image-container">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        spaceBetween={20}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="who-swiper"
                    >
                        {[whoWeArePoster, whoWeArePoster, whoWeArePoster].map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <img src={img} alt={`Slide ${idx + 1}`} className="who-image" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <div className="custom-nav-buttons">
                        <button ref={prevRef} className="nav-btn left">
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.08901 14.4766L2.56838 8.01349L9.06963 1.52193C9.37495 1.21693 9.37526 0.722242 9.07026 0.416929C8.76557 0.111929 8.27088 0.111304 7.96526 0.416304L0.908385 7.46287C0.761197 7.60974 0.67901 7.80912 0.679322 8.01693C0.679635 8.22505 0.763072 8.42412 0.910572 8.57037L7.9887 15.5863C8.14088 15.7372 8.33995 15.8129 8.5387 15.8129C8.73995 15.8129 8.94088 15.7357 9.09338 15.5816C9.39713 15.2754 9.39495 14.7807 9.08838 14.4769L9.08901 14.4766Z"
                                    fill="currentColor" />
                            </svg>
                        </button>

                        <button ref={nextRef} className="nav-btn right">
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.08912 7.43005L2.01099 0.414115C1.70474 0.110053 1.21006 0.112553 0.906307 0.419115C0.602557 0.725365 0.604744 1.22005 0.911307 1.5238L7.43193 7.98693L0.930682 14.4785C0.625369 14.7835 0.625057 15.2782 0.930057 15.5835C1.08256 15.7363 1.28256 15.8126 1.48287 15.8126C1.68318 15.8126 1.88224 15.7363 2.03506 15.5841L9.09193 8.53755C9.23912 8.39068 9.32131 8.1913 9.32099 7.98349C9.32068 7.77536 9.23724 7.5763 9.08974 7.43005H9.08912Z"
                                    fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoSection;
