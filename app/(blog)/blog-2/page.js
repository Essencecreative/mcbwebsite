'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="News List View">
                <div>

                    {/*Blog Page Start*/}
                    <section className="blog-page-three">
                        <div className="container">
                            <div className="row">
                            <div className="col-xl-9">
                                <div className="blog-page-content-box">
                                {/* Start Single blog Style3 */}
                                <div className="single-blog-style1 single-blog-style1--style3">
                                    <div className="image-colum">
                                    <div className="img-holder">
                                        <div className="inner">
                                        <img src="/assets/images/blog/blog-v4-1.jpg" alt="" />
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
                                    </div>
                                    <div className="text-colum">
                                    <div className="text-holder">
                                        <h3 className="blog-title">
                                        <Link href="/blog-single">
                                            How Non-US Citizens can Open a Bank Account
                                        </Link>
                                        </h3>
                                        <div className="text">
                                        <p>
                                            Righteous indignation and dislike men who are so beguiled
                                            demoralized by the charms of pleasure.
                                        </p>
                                        </div>
                                        <div className="bottom">
                                        <div className="meta-box">
                                            <ul className="meta-info">
                                            <li>
                                                <span className="icon-clock"></span>
                                                <Link href="#">6 Mins Read</Link>
                                            </li>
                                            <li>
                                                <span className="icon-comment"></span>
                                                <Link href="#">10 Cmnts</Link>
                                            </li>
                                            </ul>
                                        </div>
                                        <div className="share-btn">
                                            <Link href="#">
                                            <span className="icon-share"></span>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* End Single blog Style3 */}

                                {/* Repeat the blog structure for other posts */}
                                <div className="single-blog-style1 single-blog-style1--style3">
                                    <div className="image-colum">
                                    <div className="img-holder">
                                        <div className="inner">
                                        <img src="/assets/images/blog/blog-v4-2.jpg" alt="" />
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
                                    </div>
                                    <div className="text-colum">
                                    <div className="text-holder">
                                        <h3 className="blog-title">
                                        <Link href="/blog-single">
                                            Board Approves Capital Raise of Rs. 2000 Crores
                                        </Link>
                                        </h3>
                                        <div className="text">
                                        <p>
                                            In a free hour, when our power of choice is untrammelled
                                            and when nothing prevents.
                                        </p>
                                        </div>
                                        <div className="bottom">
                                        <div className="meta-box">
                                            <ul className="meta-info">
                                            <li>
                                                <span className="icon-clock"></span>
                                                <Link href="#">4 Mins Read</Link>
                                            </li>
                                            <li>
                                                <span className="icon-comment"></span>
                                                <Link href="#">2 Cmnts</Link>
                                            </li>
                                            </ul>
                                        </div>
                                        <div className="share-btn">
                                            <Link href="#">
                                            <span className="icon-share"></span>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* End Single blog Style3 */}

                                <div className="single-blog-style1 single-blog-style1--style3">
                                    <div className="image-colum">
                                    <div className="img-holder">
                                        <div className="inner">
                                        <img src="/assets/images/blog/blog-v4-3.jpg" alt="" />
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
                                    </div>
                                    <div className="text-colum">
                                    <div className="text-holder">
                                        <h3 className="blog-title">
                                        <Link href="/blog-single">
                                            The National Avg Interest Rate for Savings Accounts
                                        </Link>
                                        </h3>
                                        <div className="text">
                                        <p>
                                            Business it will frequently occur that pleasures have to be
                                            repudiated and annoyances accepted.
                                        </p>
                                        </div>
                                        <div className="bottom">
                                        <div className="meta-box">
                                            <ul className="meta-info">
                                            <li>
                                                <span className="icon-clock"></span>
                                                <Link href="#">3 Mins Read</Link>
                                            </li>
                                            <li>
                                                <span className="icon-comment"></span>
                                                <Link href="#">5 Cmnts</Link>
                                            </li>
                                            </ul>
                                        </div>
                                        <div className="share-btn">
                                            <Link href="#">
                                            <span className="icon-share"></span>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* End Single blog Style3 */}

                                {/* Start Single blog Style3 */}
                                <div className="single-blog-style1 single-blog-style1--style3">
                                    <div className="image-colum">
                                    <div className="img-holder">
                                        <div className="inner">
                                        <img src="/assets/images/blog/blog-v4-4.jpg" alt="Blog Post 1" />
                                        <div className="overlay-icon">
                                            <Link  href="/blog-single">
                                            <span className="icon-right-arrow"></span>
                                            </Link >
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
                                    </div>
                                    <div className="text-colum">
                                    <div className="text-holder">
                                        <h3 className="blog-title">
                                        <Link  href="/blog-single">
                                            How Non-US Citizens can Open a Bank Account
                                        </Link >
                                        </h3>
                                        <div className="text">
                                        <p>
                                            Righteous indignation and dislike men who are so beguiled
                                            demoralized by the charms of pleasure.
                                        </p>
                                        </div>
                                        <div className="bottom">
                                        <div className="meta-box">
                                            <ul className="meta-info">
                                            <li>
                                                <span className="icon-clock"></span> <Link  href="#">6 Mins Read</Link >
                                            </li>
                                            <li>
                                                <span className="icon-comment"></span> <Link  href="#">10 Cmnts</Link >
                                            </li>
                                            </ul>
                                        </div>
                                        <div className="share-btn">
                                            <Link  href="#"><span className="icon-share"></span></Link >
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* End Single blog Style3 */}

                                {/* Start Single blog Style3 */}
                                <div className="single-blog-style1 single-blog-style1--style3">
                                    <div className="image-colum">
                                    <div className="img-holder">
                                        <div className="inner">
                                        <img src="/assets/images/blog/blog-v4-5.jpg" alt="Blog Post 2" />
                                        <div className="overlay-icon">
                                            <Link  href="/blog-single">
                                            <span className="icon-right-arrow"></span>
                                            </Link >
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
                                    </div>
                                    <div className="text-colum">
                                    <div className="text-holder">
                                        <h3 className="blog-title">
                                        <Link  href="/blog-single">
                                            Board Approves Capital Raise of Rs. 2000 Crores
                                        </Link >
                                        </h3>
                                        <div className="text">
                                        <p>
                                            In a free hour, when our power of choice is untrammelled and when nothing
                                            prevents.
                                        </p>
                                        </div>
                                        <div className="bottom">
                                        <div className="meta-box">
                                            <ul className="meta-info">
                                            <li>
                                                <span className="icon-clock"></span> <Link  href="#">4 Mins Read</Link >
                                            </li>
                                            <li>
                                                <span className="icon-comment"></span> <Link  href="#">2 Cmnts</Link >
                                            </li>
                                            </ul>
                                        </div>
                                        <div className="share-btn">
                                            <Link  href="#"><span className="icon-share"></span></Link >
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* End Single blog Style3 */}

                                {/* Start Single blog Style3 */}
                                <div className="single-blog-style1 single-blog-style1--style3">
                                    <div className="image-colum">
                                    <div className="img-holder">
                                        <div className="inner">
                                        <img src="/assets/images/blog/blog-v4-6.jpg" alt="Blog Post 3" />
                                        <div className="overlay-icon">
                                            <Link  href="/blog-single">
                                            <span className="icon-right-arrow"></span>
                                            </Link >
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
                                    </div>
                                    <div className="text-colum">
                                    <div className="text-holder">
                                        <h3 className="blog-title">
                                        <Link  href="/blog-single">
                                            The National Avg Interest Rate for Savings Accounts
                                        </Link >
                                        </h3>
                                        <div className="text">
                                        <p>
                                            Business it will frequently occur that pleasures have to be repudiated
                                            and annoyances accepted.
                                        </p>
                                        </div>
                                        <div className="bottom">
                                        <div className="meta-box">
                                            <ul className="meta-info">
                                            <li>
                                                <span className="icon-clock"></span> <Link  href="#">3 Mins Read</Link >
                                            </li>
                                            <li>
                                                <span className="icon-comment"></span> <Link  href="#">5 Cmnts</Link >
                                            </li>
                                            </ul>
                                        </div>
                                        <div className="share-btn">
                                            <Link  href="#"><span className="icon-share"></span></Link >
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* End Single blog Style3 */}

                                {/* Additional blog entries can be added here following the same structure */}

                                <div className="row">
                                    <div className="col-xl-12">
                                    <ul className="styled-pagination clearfix">
                                        <li className="arrow prev">
                                        <Link href="#">
                                            <span className="fas fa-arrow-left left"></span>Prev
                                        </Link>
                                        </li>
                                        <li className="active">
                                        <Link href="#">1</Link>
                                        </li>
                                        <li>
                                        <Link href="#">2</Link>
                                        </li>
                                        <li>
                                        <Link href="#">3</Link>
                                        </li>
                                        <li className="arrow next">
                                        <Link href="#">
                                            Next
                                            <span className="fas fa-arrow-right right"></span>
                                        </Link>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-7">
                                <div className="thm-sidebar-box">
                                    {/* Start Single Sidebar Box: Search */}
                                    <div className="single-sidebar-box">
                                        <div className="sidebar-title">
                                            <div className="dot-box"></div>
                                            <h3>Search</h3>
                                        </div>
                                        <div className="sidebar-search-box">
                                            <form className="search-form" action="#">
                                                <input placeholder="Keyword" type="text" />
                                                <button type="submit">
                                                    <i className="icon-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    {/* End Single Sidebar Box */}

                                    {/* Start Single Sidebar Box: Categories */}
                                    <div className="single-sidebar-box">
                                        <div className="sidebar-title">
                                            <div className="dot-box"></div>
                                            <h3>Categories</h3>
                                        </div>
                                        <ul className="sidebar-categories-box">
                                            <li><Link href="#">Announcements</Link></li>
                                            <li><Link href="#">Banking</Link></li>
                                            <li><Link href="#">Finance</Link></li>
                                            <li><Link href="#">Investment</Link></li>
                                            <li><Link href="#">Press Release</Link></li>
                                            <li><Link href="#">Technology</Link></li>
                                        </ul>
                                    </div>
                                    {/* End Single Sidebar Box */}

                                    <div className="single-sidebar-box">
                                        <div className="sidebar-title">
                                            <div className="dot-box"></div>
                                            <h3>Popular Post</h3>
                                        </div>
                                        <div className="sidebar-blog-post">
                                            <Swiper
                                                modules={[Navigation]}
                                                navigation={{
                                                    nextEl: '.swiper-button-next',
                                                    prevEl: '.swiper-button-prev',
                                                }}
                                                loop={true}
                                                autoplay={true}
                                                speed={500}
                                                spaceBetween={0}
                                                slidesPerView={1}
                                            >
                                                {/* Slide 1 */}
                                                <SwiperSlide>
                                                    <ul>
                                                        <li className="sidebar-blog-post-single">
                                                            <div className="img-box">
                                                                <img
                                                                    src="/assets/images/sidebar/sidebar-blog-post-1.jpg"
                                                                    alt="Awesome Image"
                                                                />
                                                                <div className="overlay-content">
                                                                    <Link href="/blog-single">
                                                                        <i className="fa fa-link" aria-hidden="true"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="title-box">
                                                                <div className="post-date">May 29, 2022</div>
                                                                <h4>
                                                                    <Link href="/blog-single">
                                                                        How Non-US Citizens can Open a Bank Account
                                                                    </Link>
                                                                </h4>
                                                            </div>
                                                        </li>
                                                        <li className="sidebar-blog-post-single">
                                                            <div className="img-box">
                                                                <img
                                                                    src="/assets/images/sidebar/sidebar-blog-post-2.jpg"
                                                                    alt="Awesome Image"
                                                                />
                                                                <div className="overlay-content">
                                                                    <Link href="/blog-single">
                                                                        <i className="fa fa-link" aria-hidden="true"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="title-box">
                                                                <div className="post-date">May 25, 2022</div>
                                                                <h4>
                                                                    <Link href="/blog-single">
                                                                        Board Approves Capital Raise of Rs. 2000 Crores
                                                                    </Link>
                                                                </h4>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </SwiperSlide>

                                                {/* Slide 2 */}
                                                <SwiperSlide>
                                                    <ul>
                                                        <li className="sidebar-blog-post-single">
                                                            <div className="img-box">
                                                                <img
                                                                    src="/assets/images/sidebar/sidebar-blog-post-1.jpg"
                                                                    alt="Awesome Image"
                                                                />
                                                                <div className="overlay-content">
                                                                    <Link href="/blog-single">
                                                                        <i className="fa fa-link" aria-hidden="true"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="title-box">
                                                                <div className="post-date">May 29, 2022</div>
                                                                <h4>
                                                                    <Link href="/blog-single">
                                                                        How Non-US Citizens can Open a Bank Account
                                                                    </Link>
                                                                </h4>
                                                            </div>
                                                        </li>
                                                        <li className="sidebar-blog-post-single">
                                                            <div className="img-box">
                                                                <img
                                                                    src="/assets/images/sidebar/sidebar-blog-post-2.jpg"
                                                                    alt="Awesome Image"
                                                                />
                                                                <div className="overlay-content">
                                                                    <Link href="/blog-single">
                                                                        <i className="fa fa-link" aria-hidden="true"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="title-box">
                                                                <div className="post-date">May 25, 2022</div>
                                                                <h4>
                                                                    <Link href="/blog-single">
                                                                        Board Approves Capital Raise of Rs. 2000 Crores
                                                                    </Link>
                                                                </h4>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>

                                    {/* Start Single Sidebar Box: Popular Tags */}
                                    <div className="single-sidebar-box">
                                        <div className="sidebar-title">
                                            <div className="dot-box"></div>
                                            <h3>Popular Tags</h3>
                                        </div>
                                        <div className="popular-tag-box">
                                            <ul className="popular-tag">
                                                <li><Link href="#">Cards</Link></li>
                                                <li><Link href="#">Careers</Link></li>
                                                <li><Link href="#">Deposit</Link></li>
                                                <li><Link href="#">Fees</Link></li>
                                                <li><Link href="#">Forms</Link></li>
                                                <li><Link href="#">Insurance</Link></li>
                                                <li><Link href="#">Investor</Link></li>
                                                <li><Link href="#">Loans</Link></li>
                                                <li><Link href="#">Payment</Link></li>
                                                <li><Link href="#">Security</Link></li>
                                                <li><Link href="#">Tenders</Link></li>
                                                <li><Link href="#">Women's Accounts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* End Single Sidebar Box */}

                                    {/* Start Sidebar Banner Box */}
                                    <div className="sidebar-banner-box">
                                        <div className="top-box float-bob-y"></div>
                                        <div className="bottom-box float-bob-x"></div>
                                        <div className="logo-box">
                                            <Link href="/">
                                                <img src="/assets/images/resources/banner-logo-1.png" alt="" />
                                            </Link>
                                        </div>
                                        <h3>Small Steps to Your<br /> Better Future.</h3>
                                        <ul>
                                            <li><span className="icon-checkbox-mark"></span> The well master-builder</li>
                                            <li><span className="icon-checkbox-mark"></span> On the other hand</li>
                                        </ul>
                                        <div className="btns-box">
                                            <Link className="btn-one" href="/contact">
                                                <span className="txt">Get Support</span>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* End Sidebar Banner Box */}
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    {/*Blog Page End*/}

                </div>

            </Layout>
        </>
    )
}