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
        0: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        992: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
    },
}

export default function Blog() {
    return (
        <section className="blog-style1-area" id="news">
            <div className="container">
                <div className="sec-title">
                    <h2>Latest From News Room</h2>
                    <div className="sub-title">
                        <p>Our blog post provides you all the updates & guides.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper {...swiperOptions} className="wealth-secure-carousel">
                            <SwiperSlide>
                                {/*Start Single Blog Box Style1*/}
                                <div className="single-blog-style1 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="img-holder">
                                        <div className="inner">
                                            <img src="/assets/images/blog/blog-v1-1.jpg" alt="" />
                                            <div className="overlay-icon">
                                                <Link href="/blog-single">
                                                    <span className="icon-right-arrow"></span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-date-box">
                                            <div className="category">
                                                <span className="icon-play-button-1"></span>
                                                <h5>Banking</h5>
                                            </div>
                                            <div className="date">
                                                <h5>May 29, 2022</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-holder">
                                        <h3 className="blog-title">
                                            <Link href="/blog-single">Including Animation In Your Design Technologies System</Link>
                                        </h3>
                                        <div className="bottom">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li><span className="icon-clock"></span> <Link href="/blog-single">6 Mins Read</Link></li>
                                                    <li><span className="icon-comment"></span> <Link href="/blog-single">10 Cmnts</Link></li>
                                                </ul>
                                            </div>
                                            <div className="share-btn">
                                                <Link href="/blog-single"><span className="icon-share"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Blog Box Style1*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Single Blog Box Style1*/}
                                <div className="single-blog-style1 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="img-holder">
                                        <div className="inner">
                                            <img src="/assets/images/blog/blog-v1-2.jpg" alt="" />
                                            <div className="overlay-icon">
                                                <Link href="/blog-single">
                                                    <span className="icon-right-arrow"></span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-date-box">
                                            <div className="category">
                                                <span className="icon-play-button-1"></span>
                                                <h5>Press Release</h5>
                                            </div>
                                            <div className="date">
                                                <h5>May 25, 2022</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-holder">
                                        <h3 className="blog-title">
                                            <Link href="/blog-single">Board Approves Capital Raise of Rs. 2000 Crores</Link>
                                        </h3>
                                        <div className="bottom">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li><span className="icon-clock"></span> <Link href="/blog-single">4 Mins Read</Link></li>
                                                    <li><span className="icon-comment"></span> <Link href="/blog-single">10 Cmnts</Link></li>
                                                </ul>
                                            </div>
                                            <div className="share-btn">
                                                <Link href="/blog-single"><span className="icon-share"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Blog Box Style1*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Single Blog Box Style1*/}
                                <div className="single-blog-style1 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="img-holder">
                                        <div className="inner">
                                            <img src="/assets/images/blog/blog-v1-3.jpg" alt="" />
                                            <div className="overlay-icon">
                                                <Link href="/blog-single">
                                                    <span className="icon-right-arrow"></span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-date-box">
                                            <div className="category">
                                                <span className="icon-play-button-1"></span>
                                                <h5>Finance</h5>
                                            </div>
                                            <div className="date">
                                                <h5>May 10, 2022</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-holder">
                                        <h3 className="blog-title">
                                            <Link href="/blog-single">The National Avg Interest Rate for Savings Accounts</Link>
                                        </h3>
                                        <div className="bottom">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li><span className="icon-clock"></span> <Link href="/blog-single">3 Mins Read</Link></li>
                                                    <li><span className="icon-comment"></span> <Link href="/blog-single">10 Cmnts</Link></li>
                                                </ul>
                                            </div>
                                            <div className="share-btn">
                                                <Link href="/blog-single"><span className="icon-share"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Blog Box Style1*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Single Blog Box Style1*/}
                                <div className="single-blog-style1 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="img-holder">
                                        <div className="inner">
                                            <img src="/assets/images/blog/blog-v1-1.jpg" alt="" />
                                            <div className="overlay-icon">
                                                <Link href="/blog-single">
                                                    <span className="icon-right-arrow"></span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-date-box">
                                            <div className="category">
                                                <span className="icon-play-button-1"></span>
                                                <h5>Banking</h5>
                                            </div>
                                            <div className="date">
                                                <h5>May 29, 2022</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-holder">
                                        <h3 className="blog-title">
                                            <Link href="/blog-single">Including Animation In Your Design Technologies System</Link>
                                        </h3>
                                        <div className="bottom">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li><span className="icon-clock"></span> <Link href="/blog-single">6 Mins Read</Link></li>
                                                    <li><span className="icon-comment"></span> <Link href="/blog-single">10 Cmnts</Link></li>
                                                </ul>
                                            </div>
                                            <div className="share-btn">
                                                <Link href="/blog-single"><span className="icon-share"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Blog Box Style1*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Single Blog Box Style1*/}
                                <div className="single-blog-style1 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="img-holder">
                                        <div className="inner">
                                            <img src="/assets/images/blog/blog-v1-2.jpg" alt="" />
                                            <div className="overlay-icon">
                                                <Link href="/blog-single">
                                                    <span className="icon-right-arrow"></span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-date-box">
                                            <div className="category">
                                                <span className="icon-play-button-1"></span>
                                                <h5>Press Release</h5>
                                            </div>
                                            <div className="date">
                                                <h5>May 25, 2022</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-holder">
                                        <h3 className="blog-title">
                                            <Link href="/blog-single">Board Approves Capital Raise of Rs. 2000 Crores</Link>
                                        </h3>
                                        <div className="bottom">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li><span className="icon-clock"></span> <Link href="/blog-single">4 Mins Read</Link></li>
                                                    <li><span className="icon-comment"></span> <Link href="/blog-single">10 Cmnts</Link></li>
                                                </ul>
                                            </div>
                                            <div className="share-btn">
                                                <Link href="/blog-single"><span className="icon-share"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Blog Box Style1*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Single Blog Box Style1*/}
                                <div className="single-blog-style1 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="img-holder">
                                        <div className="inner">
                                            <img src="/assets/images/blog/blog-v1-3.jpg" alt="" />
                                            <div className="overlay-icon">
                                                <Link href="/blog-single">
                                                    <span className="icon-right-arrow"></span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-date-box">
                                            <div className="category">
                                                <span className="icon-play-button-1"></span>
                                                <h5>Finance</h5>
                                            </div>
                                            <div className="date">
                                                <h5>May 10, 2022</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-holder">
                                        <h3 className="blog-title">
                                            <Link href="/blog-single">The National Avg Interest Rate for Savings Accounts</Link>
                                        </h3>
                                        <div className="bottom">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li><span className="icon-clock"></span> <Link href="/blog-single">3 Mins Read</Link></li>
                                                    <li><span className="icon-comment"></span> <Link href="/blog-single">10 Cmnts</Link></li>
                                                </ul>
                                            </div>
                                            <div className="share-btn">
                                                <Link href="/blog-single"><span className="icon-share"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Blog Box Style1*/}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
