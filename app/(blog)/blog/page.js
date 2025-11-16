
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="News Grid View">
                <div>

                    {/*Blog Page Start*/}
                    <section className="blog-page-one">
                        <div className="container">
                            <div className="row">

                                {/* Start Single blog Style1 */}
                                <div className="col-xl-4 col-lg-4">
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
                                                <Link href="/blog-single">
                                                    How Non-US Citizens can Open a Bank Account
                                                </Link>
                                            </h3>
                                            <div className="bottom">
                                                <div className="meta-box">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-clock"></span> <Link href="#">6 Mins Read</Link></li>
                                                        <li><span className="icon-comment"></span> <Link href="#">10 Cmnts</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="share-btn">
                                                    <Link href="#"><span className="icon-share"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single blog Style1 */}

                                {/* Start Single blog Style1 */}
                                <div className="col-xl-4 col-lg-4">
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
                                                <Link href="/blog-single">
                                                    Board Approves Capital Raise of Rs. 2000 Crores
                                                </Link>
                                            </h3>
                                            <div className="bottom">
                                                <div className="meta-box">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-clock"></span> <Link href="#">4 Mins Read</Link></li>
                                                        <li><span className="icon-comment"></span> <Link href="#">10 Cmnts</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="share-btn">
                                                    <Link href="#"><span className="icon-share"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single blog Style1 */}

                                {/* Start Single blog Style1 */}
                                <div className="col-xl-4 col-lg-4">
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
                                                <Link href="/blog-single">
                                                    The National Avg Interest Rate for Savings Accounts
                                                </Link>
                                            </h3>
                                            <div className="bottom">
                                                <div className="meta-box">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-clock"></span> <Link href="#">3 Mins Read</Link></li>
                                                        <li><span className="icon-comment"></span> <Link href="#">10 Cmnts</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="share-btn">
                                                    <Link href="#"><span className="icon-share"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single blog Style1 */}

                                {/* Start Single blog Style1 */}
                                <div className="col-xl-4 col-lg-4">
                                    <div className="single-blog-style1 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="img-holder">
                                        <div className="inner">
                                        <img src="/assets/images/blog/blog-v1-4.jpg" alt="" />
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
                                        <Link href="/blog-single">
                                            The National Avg Interest Rate for Savings Accounts
                                        </Link>
                                        </h3>
                                        <div className="bottom">
                                        <div className="meta-box">
                                            <ul className="meta-info">
                                            <li><span className="icon-clock"></span> <Link href="#">3 Mins Read</Link></li>
                                            <li><span className="icon-comment"></span> <Link href="#">10 Cmnts</Link></li>
                                            </ul>
                                        </div>
                                        <div className="share-btn">
                                            <Link href="#"><span className="icon-share"></span></Link>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* End Single blog Style1 */}

                                {/* Start Single blog Style1 */}
                                <div className="col-xl-4 col-lg-4">
                                    <div className="single-blog-style1 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="img-holder">
                                        <div className="inner">
                                        <img src="/assets/images/blog/blog-v1-5.jpg" alt="" />
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
                                        <Link href="/blog-single">
                                            How Non-US Citizens can Open a Bank Account
                                        </Link>
                                        </h3>
                                        <div className="bottom">
                                        <div className="meta-box">
                                            <ul className="meta-info">
                                            <li><span className="icon-clock"></span> <Link href="#">6 Mins Read</Link></li>
                                            <li><span className="icon-comment"></span> <Link href="#">10 Cmnts</Link></li>
                                            </ul>
                                        </div>
                                        <div className="share-btn">
                                            <Link href="#"><span className="icon-share"></span></Link>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* End Single blog Style1 */}

                                {/* Start Single blog Style1 */}
                                <div className="col-xl-4 col-lg-4">
                                    <div className="single-blog-style1 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="img-holder">
                                        <div className="inner">
                                        <img src="/assets/images/blog/blog-v1-6.jpg" alt="" />
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
                                        <Link href="/blog-single">
                                            Board Approves Capital Raise of Rs. 2000 Crores
                                        </Link>
                                        </h3>
                                        <div className="bottom">
                                        <div className="meta-box">
                                            <ul className="meta-info">
                                            <li><span className="icon-clock"></span> <Link href="#">4 Mins Read</Link></li>
                                            <li><span className="icon-comment"></span> <Link href="#">10 Cmnts</Link></li>
                                            </ul>
                                        </div>
                                        <div className="share-btn">
                                            <Link href="#"><span className="icon-share"></span></Link>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* End Single blog Style1 */}

                                {/* Start Single blog Style1 */}
                                <div className="col-xl-4 col-lg-4">
                                    <div className="single-blog-style1 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="img-holder">
                                        <div className="inner">
                                        <img src="/assets/images/blog/blog-v1-7.jpg" alt="" />
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
                                        <Link href="/blog-single">
                                            Board Approves Capital Raise of Rs. 2000 Crores
                                        </Link>
                                        </h3>
                                        <div className="bottom">
                                        <div className="meta-box">
                                            <ul className="meta-info">
                                            <li><span className="icon-clock"></span> <Link href="#">4 Mins Read</Link></li>
                                            <li><span className="icon-comment"></span> <Link href="#">10 Cmnts</Link></li>
                                            </ul>
                                        </div>
                                        <div className="share-btn">
                                            <Link href="#"><span className="icon-share"></span></Link>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* End Single blog Style1 */}

                                {/* Start Single blog Style1 */}
                                <div className="col-xl-4 col-lg-4">
                                    <div className="single-blog-style1 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="img-holder">
                                        <div className="inner">
                                        <img src="/assets/images/blog/blog-v1-8.jpg" alt="" />
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
                                        <Link href="/blog-single">
                                            The National Avg Interest Rate for Savings Accounts
                                        </Link>
                                        </h3>
                                        <div className="bottom">
                                        <div className="meta-box">
                                            <ul className="meta-info">
                                            <li><span className="icon-clock"></span> <Link href="#">3 Mins Read</Link></li>
                                            <li><span className="icon-comment"></span> <Link href="#">10 Cmnts</Link></li>
                                            </ul>
                                        </div>
                                        <div className="share-btn">
                                            <Link href="#"><span className="icon-share"></span></Link>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* End Single blog Style1 */}

                                {/* Start Single blog Style1 */}
                                <div className="col-xl-4 col-lg-4">
                                    <div className="single-blog-style1 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="img-holder">
                                        <div className="inner">
                                        <img src="/assets/images/blog/blog-v1-9.jpg" alt="" />
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
                                        <Link href="/blog-single">
                                            How Non-US Citizens can Open a Bank Account
                                        </Link>
                                        </h3>
                                        <div className="bottom">
                                        <div className="meta-box">
                                            <ul className="meta-info">
                                            <li><span className="icon-clock"></span> <Link href="#">6 Mins Read</Link></li>
                                            <li><span className="icon-comment"></span> <Link href="#">10 Cmnts</Link></li>
                                            </ul>
                                        </div>
                                        <div className="share-btn">
                                            <Link href="#"><span className="icon-share"></span></Link>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* End Single blog Style1 */}

                            </div>

                            <div className="row">
                                <div className="col-xl-12">
                                    <ul className="styled-pagination clearfix">
                                        <li className="arrow prev">
                                            <Link href="#">
                                                <span className="fas fa-arrow-left left"></span>Prev
                                            </Link>
                                        </li>
                                        <li className="active"><Link href="#">1</Link></li>
                                        <li><Link href="#">2</Link></li>
                                        <li><Link href="#">3</Link></li>
                                        <li className="arrow next">
                                            <Link href="#">
                                                Next<span className="fas fa-arrow-right right"></span>
                                            </Link>
                                        </li>
                                    </ul>
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