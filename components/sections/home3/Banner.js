'use client';
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'; // Ensure to import Swiper styles

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    
    navigation: {
        nextEl: "#main-slider__swiper-button-next",
        prevEl: "#main-slider__swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
    },
};

export default function MainSlider() {
    return (
        <>
            {/* Main Slider */}
            <section className="main-slider main-slider-style3">
                <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                    <div className="swiper-wrapper">
                        {/* Start Single Swiper Slide */}
                        <SwiperSlide className="swiper-slide">
                        <div
                            className="image-layer"
                            style={{
                            backgroundImage: "url(/assets/images/slides/slide-v3-1.jpg)",
                            }}
                        ></div>
                        <div className="container">
                            <div className="row">
                            <div className="col-xl-12">
                                <div className="main-slider-content">
                                <div className="main-slider-content__inner">
                                    <div className="big-title">
                                    <h2>Convenient<br /> Banking Options</h2>
                                    </div>
                                    <div className="text">
                                    <p>
                                        On the other hand, we denounce with righteous indignation<br />
                                        and dislike men who are so beguiled.
                                    </p>
                                    </div>
                                    <div className="btns-box">
                                    <Link className="btn-one" href="/accounts">
                                        <span className="txt">Our Services</span>
                                    </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* End Single Swiper Slide */}

                        {/* Start Single Swiper Slide */}
                        <SwiperSlide className="swiper-slide">
                        <div
            className="image-layer"
            style={{
              backgroundImage: "url(/assets/images/slides/slide-v3-2.jpg)",
            }}
                            ></div>
                            <div className="container">
                                <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-content">
                                    <div className="main-slider-content__inner">
                                        <div className="big-title">
                                        <h2>Make a Pay<br /> Anyone & Anywhere</h2>
                                        </div>
                                        <div className="text">
                                        <p>
                                            On the other hand, we denounce with righteous indignation<br />
                                            and dislike men who are so beguiled.
                                        </p>
                                        </div>
                                        <div className="btns-box">
                                        <Link className="btn-one" href="/accounts">
                                            <span className="txt">Make Payment</span>
                                        </Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                        </SwiperSlide>
                        {/* End Single Swiper Slide */}

                        {/* Start Single Swiper Slide */}
                        <SwiperSlide className="swiper-slide">
                        <div
            className="image-layer"
            style={{
              backgroundImage: "url(/assets/images/slides/slide-v3-3.jpg)",
            }}
                            ></div>
                            <div className="container">
                                <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-content">
                                    <div className="main-slider-content__inner">
                                        <div className="big-title">
                                        <h2>Make Yourself<br /> Richer and Smarter</h2>
                                        </div>
                                        <div className="text">
                                        <p>
                                            On the other hand, we denounce with righteous indignation<br />
                                            and dislike men who are so beguiled.
                                        </p>
                                        </div>
                                        <div className="btns-box">
                                        <Link className="btn-one" href="/accounts">
                                            <span className="txt">Start Your Investment</span>
                                        </Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                        </SwiperSlide>
                        {/* End Single Swiper Slide */}
                    </div>
                </Swiper>
            </section>
            {/* Main Slider */}
        </>
    );
}
