import Link from "next/link";
import React from 'react';


export default function Blog() {
    

    return (
        <>
            {/*Start Blog Style2 Area*/}
            <section id="news" className="blog-style2-area pdb60">
                <div className="container">
                <div className="sec-title text-center">
                    <h2>Latest From News Room</h2>
                    <div className="sub-title">
                    <p>Our blog post provides you all the updates &amp; guides.</p>
                    </div>
                </div>
                <div className="row">
                    {/*Start Single blog Style2*/}
                    <div className="col-xl-6">
                    <div className="single-blog-style1 single-blog-style1--style2">
                        <div className="img-holder">
                        <div className="inner">
                            <img src="assets/images/blog/blog-v2-1.jpg" alt="" />
                            <div className="overlay-icon">
                            <Link href="/blog-single">
                                <span className="icon-right-arrow" />
                            </Link>
                            </div>
                        </div>
                        <div className="category-date-box">
                            <div className="category">
                            <span className="icon-play-button-1" />
                            <h5>Banking</h5>
                            </div>
                            <div className="date">
                            <h5>May 29, 2022</h5>
                            </div>
                            <div className="author">
                            <h5>
                                By <Link href="#">Henry Theo</Link>
                            </h5>
                            </div>
                        </div>
                        </div>
                        <div className="text-holder">
                        <h3 className="blog-title">
                            <Link href="/blog-single">
                            How Non-US Citizens can Open
                            <br /> a Bank Account
                            </Link>
                        </h3>
                        <div className="bottom">
                            <div className="read-more-btn">
                            <Link href="/blog-single">
                                <span className="icon-right-arrow" />
                                Read More
                            </Link>
                            </div>
                            <div className="meta-box">
                            <ul className="meta-info">
                                <li>
                                <span className="icon-clock" />{" "}
                                <Link href="#">6 Mins Read</Link>
                                </li>
                                <li>
                                <span className="icon-comment" /> <Link href="#">10 Cmnts</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/*End Single blog Style2*/}
                    {/*Start Single blog Style2*/}
                    <div className="col-xl-6">
                    <div className="single-blog-style1 single-blog-style1--style2">
                        <div className="img-holder">
                        <div className="inner">
                            <img src="assets/images/blog/blog-v2-2.jpg" alt="" />
                            <div className="overlay-icon">
                            <Link href="/blog-single">
                                <span className="icon-right-arrow" />
                            </Link>
                            </div>
                        </div>
                        <div className="category-date-box">
                            <div className="category">
                            <span className="icon-play-button-1" />
                            <h5>Press Release</h5>
                            </div>
                            <div className="date">
                            <h5>May 25, 2022</h5>
                            </div>
                            <div className="author">
                            <h5>
                                By <Link href="#">Roman Frederick</Link>
                            </h5>
                            </div>
                        </div>
                        </div>
                        <div className="text-holder">
                        <h3 className="blog-title">
                            <Link href="/blog-single">
                            Board Approves Capital Raise of
                            <br /> Rs. 2000 Crores
                            </Link>
                        </h3>
                        <div className="bottom">
                            <div className="read-more-btn">
                            <Link href="/blog-single">
                                <span className="icon-right-arrow" />
                                Read More
                            </Link>
                            </div>
                            <div className="meta-box">
                            <ul className="meta-info">
                                <li>
                                <span className="icon-clock" />{" "}
                                <Link href="#">6 Mins Read</Link>
                                </li>
                                <li>
                                <span className="icon-comment" /> <Link href="#">10 Cmnts</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/*End Single blog Style2*/}
                </div>
                </div>
            </section>
            {/*End Blog Style2 Area*/}
        </>

        
    )
}