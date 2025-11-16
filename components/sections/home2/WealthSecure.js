'use client'
import Link from "next/link"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Swiper options
const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 500,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    loop: true,
    // Removed pagination settings
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
}

export default function WealthSecure() {
    return (
        <section className="wealth-secure-style2-area">
            <div className="container">
                <div className="sec-title text-center">
                    <h2>Grow Your Wealth Secure</h2>
                    <div className="sub-title">
                        <p>Don’t just make a deposit, make an investment today.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper {...swiperOptions} className="wealth-secure-carousel">
                            <SwiperSlide>
                                {/*Start Single Wealth Secure Box Style2*/}
                                <div className="single-wealth-secure-box single-wealth-secure-box--style2">
                                    <div className="img-box">
                                    <div className="img-box-inner">
                                        <img src="assets/images/resources/wealth-secure-v2-1.jpg" alt="" />
                                    </div>
                                    <div className="inner-title">
                                        <h3>
                                        <a href="#">Trade FX</a>
                                        </h3>
                                    </div>
                                    </div>
                                    <div className="text-box">
                                    <p>Beguiled &amp; demoralized by pleasure of moment.</p>
                                    <ul>
                                        <li>Futures Market</li>
                                        <li>Forward Market</li>
                                        <li>Swap Market</li>
                                    </ul>
                                    </div>
                                </div>
                                {/*End Single Wealth Secure Box Style2*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Single Wealth Secure Box Style2*/}
                                <div className="single-wealth-secure-box single-wealth-secure-box--style2">
                                    <div className="img-box">
                                    <div className="img-box-inner">
                                        <img src="assets/images/resources/wealth-secure-v2-2.jpg" alt="" />
                                    </div>
                                    <div className="inner-title">
                                        <h3>
                                        <a href="#">Multi Currency a/c</a>
                                        </h3>
                                    </div>
                                    </div>
                                    <div className="text-box">
                                    <p>Perfectly simple distinguish our power of choice.</p>
                                    <ul>
                                        <li>10+ Currencies</li>
                                        <li>Transaction Costs</li>
                                    </ul>
                                    </div>
                                </div>
                                {/*End Single Wealth Secure Box Style2*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Single Wealth Secure Box Style2*/}
                                <div className="single-wealth-secure-box single-wealth-secure-box--style2">
                                    <div className="img-box">
                                    <div className="img-box-inner">
                                        <img src="assets/images/resources/wealth-secure-v2-3.jpg" alt="" />
                                    </div>
                                    <div className="inner-title">
                                        <h3>
                                        <a href="#">Mutual Funds</a>
                                        </h3>
                                    </div>
                                    </div>
                                    <div className="text-box">
                                    <p>Duty obligations business it will frequently occur.</p>
                                    <ul>
                                        <li>Money Market Funds</li>
                                        <li>Debt Mutual Funds</li>
                                        <li>Balanced Funds</li>
                                        <li>Monthly Income Plans</li>
                                    </ul>
                                    </div>
                                </div>
                                {/*End Single Wealth Secure Box Style2*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Single Wealth Secure Box Style2*/}
                                <div className="single-wealth-secure-box single-wealth-secure-box--style2">
                                    <div className="img-box">
                                    <div className="img-box-inner">
                                        <img src="assets/images/resources/wealth-secure-v2-4.jpg" alt="" />
                                    </div>
                                    <div className="inner-title">
                                        <h3>
                                        <a href="#">Pension Scheme</a>
                                        </h3>
                                    </div>
                                    </div>
                                    <div className="text-box">
                                    <p>The wise therefore always holds matters this.</p>
                                    <ul>
                                        <li>NPS</li>
                                        <li>Public PF</li>
                                        <li>Employee PF</li>
                                    </ul>
                                    </div>
                                </div>
                                {/*End Single Wealth Secure Box Style2*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Single Wealth Secure Box Style2*/}
                                <div className="single-wealth-secure-box single-wealth-secure-box--style2">
                                    <div className="img-box">
                                    <div className="img-box-inner">
                                        <img src="assets/images/resources/wealth-secure-v2-1.jpg" alt="" />
                                    </div>
                                    <div className="inner-title">
                                        <h3>
                                        <a href="#">Trade FX</a>
                                        </h3>
                                    </div>
                                    </div>
                                    <div className="text-box">
                                    <p>Beguiled &amp; demoralized by pleasure of moment.</p>
                                    <ul>
                                        <li>Futures Market</li>
                                        <li>Forward Market</li>
                                        <li>Swap Market</li>
                                    </ul>
                                    </div>
                                </div>
                                {/*End Single Wealth Secure Box Style2*/}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
