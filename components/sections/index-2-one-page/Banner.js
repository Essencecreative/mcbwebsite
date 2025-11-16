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
            <section className="main-slider main-slider-style2" id="home">
                <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                    <div className="swiper-wrapper">
                        {/* Start Single Swiper Slide */}
                        <SwiperSlide className="swiper-slide">
                            <div className="content-layer">
                                <div className="main-slider-content">
                                    <div className="main-slider-content__inner">
                                        <div className="big-title">
                                            <h2>Providing<br /> the best future<br /> for your best <br /> living.</h2>
                                        </div>
                                        <div className="text">
                                            <p>Don’t just make a deposit, make an investment today.</p>
                                        </div>
                                        <div className="btns-box">
                                            <Link href="/about" className="btn-one">
                                                <span className="txt">Read More</span>
                                            </Link>
                                            <Link href="/contact" className="btn-one style2">
                                                <span className="txt">Check Eligibility</span>
                                            </Link>
                                        </div>
                                        <div className="bottom-text">
                                            <p><span>*</span> In a free hour, when our power.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="image-layer" style={{ backgroundImage: "url('/assets/images/slides/slide-v2-1.jpg')" }}>
                                {/* Start Slide Single Features */}
                                <div className="slide-single-features one">
                                    <span className="icon-accept"></span>
                                    <h3>From 6.65% p.a</h3>
                                </div>
                                {/* End Slide Single Features */}
                                {/* Start Slide Single Features */}
                                <div className="slide-single-features two">
                                    <span className="icon-accept"></span>
                                    <h3>High Repayment Tenure </h3>
                                </div>
                                {/* End Slide Single Features */}
                            </div>
                        </SwiperSlide>
                        {/* End Single Swiper Slide */}

                        {/* Start Single Swiper Slide */}
                        <SwiperSlide className="swiper-slide">
                            <div className="content-layer">
                                <div className="main-slider-content">
                                    <div className="main-slider-content__inner">
                                        <div className="big-title">
                                            <h2>Prestige bank<br /> makes access to<br /> savings fast & <br /> simple.</h2>
                                        </div>
                                        <div className="text">
                                            <p>We help businesses and customers achieve more.</p>
                                        </div>
                                        <div className="btns-box">
                                            <Link href="/about" className="btn-one">
                                                <span className="txt">Read More</span>
                                            </Link>
                                            <Link href="/contact" className="btn-one style2">
                                                <span className="txt">Check Eligibility</span>
                                            </Link>
                                        </div>
                                        <div className="bottom-text">
                                            <p><span>*</span> In a free hour, when our power.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="image-layer" style={{ backgroundImage: "url('/assets/images/slides/slide-v2-2.jpg')" }}>
                                {/* Start Slide Single Features */}
                                <div className="slide-single-features one">
                                    <span className="icon-accept"></span>
                                    <h3>6.5k Personal Account</h3>
                                </div>
                                {/* End Slide Single Features */}
                                {/* Start Slide Single Features */}
                                <div className="slide-single-features two">
                                    <span className="icon-accept"></span>
                                    <h3>14.2k Corporate Account</h3>
                                </div>
                                {/* End Slide Single Features */}
                            </div>
                        </SwiperSlide>
                        {/* End Single Swiper Slide */}

                        {/* Start Single Swiper Slide */}
                        <SwiperSlide className="swiper-slide">
                            <div className="content-layer">
                                <div className="main-slider-content">
                                    <div className="main-slider-content__inner">
                                        <div className="big-title">
                                            <h2>Bank with<br /> the happiest<br /> employees in the <br /> country.</h2>
                                        </div>
                                        <div className="text">
                                            <p>We help businesses and customers achieve more.</p>
                                        </div>
                                        <div className="btns-box">
                                            <Link href="/about" className="btn-one">
                                                <span className="txt">Read More</span>
                                            </Link>
                                            <Link href="/contact" className="btn-one style2">
                                                <span className="txt">Check Eligibility</span>
                                            </Link>
                                        </div>
                                        <div className="bottom-text">
                                            <p><span>*</span> In a free hour, when our power.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="image-layer" style={{ backgroundImage: "url('/assets/images/slides/slide-v2-3.jpg')" }}>
                                {/* Start Slide Single Features */}
                                <div className="slide-single-features one">
                                    <span className="icon-accept"></span>
                                    <h3>86 Branches In Country</h3>
                                </div>
                                {/* End Slide Single Features */}
                                {/* Start Slide Single Features */}
                                <div className="slide-single-features two">
                                    <span className="icon-accept"></span>
                                    <h3>1.6k On Role Employees</h3>
                                </div>
                                {/* End Slide Single Features */}
                            </div>
                        </SwiperSlide>
                        {/* End Single Swiper Slide */}
                    </div>
                </Swiper>
                <div className="swiper-pagination" id="main-slider-pagination" />
                <div className="main-slider__nav main-slider__nav--style2">
                    <div className="swiper-button-prev" id="main-slider__swiper-button-prev">
                        <i className="icon-chevron left"></i>
                    </div>
                    <div className="swiper-button-next" id="main-slider__swiper-button-next">
                        <i className="icon-chevron right"></i>
                    </div>
                </div>
            </section>
            {/* Main Slider */}
        </>
    );
}
