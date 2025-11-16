'use client';
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
    return (
        <section className="testimonials-style1-area">
            <div className="container">
                <div className="sec-title text-center">
                    <h2>Check Out Customer Feedback</h2>
                    <div className="sub-title">
                        <p>Pleasure to share some of our customers feedback.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{ delay: 10000 }}
                            loop={false} // Disable loop mode
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 1,
                                },
                                992: {
                                    slidesPerView: 2,
                                },
                                1200: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            {/* Start Single Testimonials style1 */}
                            <SwiperSlide>
                                <div className="single-testimonials-style1">
                                    <div className="quote-box">
                                        <span className="icon-quote"></span>
                                    </div>
                                    <div className="customer-info">
                                        <div className="img-box">
                                            <img
                                                src="/assets/images/testimonial/testimonial-v1-1.jpg"
                                                alt="Nathan Felix"
                                            />
                                        </div>
                                        <div className="title-box">
                                            <h3>Nathan Felix</h3>
                                            <span>California</span>
                                        </div>
                                    </div>
                                    <div className="inner">
                                        <div className="text-box">
                                        <p>Experience with Finbank has been very accommodating for
                                            they have online banking. When I need to transfer funds and pay
                                            bills it can be done at my convenience.</p>
                                        </div>
                                        <div className="review-box">
                                            <ul>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Single Testimonials style1 */}

                            {/* Start Single Testimonials style1 */}
                            <SwiperSlide>
                                <div className="single-testimonials-style1">
                                    <div className="quote-box">
                                        <span className="icon-quote"></span>
                                    </div>
                                    <div className="customer-info">
                                        <div className="img-box">
                                            <img
                                                src="/assets/images/testimonial/testimonial-v1-2.jpg"
                                                alt="Nora Penelope"
                                            />
                                        </div>
                                        <div className="title-box">
                                            <h3>Nora Penelope</h3>
                                            <span>New York</span>
                                        </div>
                                    </div>
                                    <div className="inner">
                                        <div className="text-box">
                                        <p>My experience with transitioning has been great. Everyone at thebank has been
                                        extremely accommodating. They make me feel that my business matters.</p>
                                        </div>
                                        <div className="review-box">
                                            <ul>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Single Testimonials style1 */}
                            {/* Start Single Testimonials style1 */}
                            <SwiperSlide>
                                <div className="single-testimonials-style1">
                                    <div className="quote-box">
                                        <span className="icon-quote"></span>
                                    </div>
                                    <div className="customer-info">
                                        <div className="img-box">
                                            <img
                                                src="/assets/images/testimonial/testimonial-v1-1.jpg"
                                                alt="Nathan Felix"
                                            />
                                        </div>
                                        <div className="title-box">
                                            <h3>Nathan Felix</h3>
                                            <span>California</span>
                                        </div>
                                    </div>
                                    <div className="inner">
                                        <div className="text-box">
                                        <p>Experience with Finbank has been very accommodating for
                                            they have online banking. When I need to transfer funds and pay
                                            bills it can be done at my convenience.</p>
                                        </div>
                                        <div className="review-box">
                                            <ul>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Single Testimonials style1 */}

                            {/* Start Single Testimonials style1 */}
                            <SwiperSlide>
                                <div className="single-testimonials-style1">
                                    <div className="quote-box">
                                        <span className="icon-quote"></span>
                                    </div>
                                    <div className="customer-info">
                                        <div className="img-box">
                                            <img
                                                src="/assets/images/testimonial/testimonial-v1-2.jpg"
                                                alt="Nora Penelope"
                                            />
                                        </div>
                                        <div className="title-box">
                                            <h3>Nora Penelope</h3>
                                            <span>New York</span>
                                        </div>
                                    </div>
                                    <div className="inner">
                                        <div className="text-box">
                                        <p>My experience with transitioning has been great. Everyone at thebank has been
                                        extremely accommodating. They make me feel that my business matters.</p>
                                        </div>
                                        <div className="review-box">
                                            <ul>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Single Testimonials style1 */}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
