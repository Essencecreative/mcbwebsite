import Link from 'next/link';
export default function BlogStyle2() {
    return (
        <>
        {/*Start Blog Style2 Area*/}
        <section className="blog-style2-area">
            <div className="blog-style2-area__shape1">
            <img src="assets/images/shapes/blog-style2-shape-1.png" alt="" />
            </div>
            <div className="blog-style2-area__shape2">
            <img src="assets/images/shapes/blog-style2-shape-2.png" alt="" />
            </div>
            <div className="container">
            <div className="blog-style2-area__top">
                <div className="sec-title">
                <h2>Latest From News Room</h2>
                <div className="sub-title">
                    <p>Our blog post provides you all the updates &amp; guides.</p>
                </div>
                </div>
                <div className="btns-box">
                <Link className="btn-one" href="/blog">
                    <span className="txt">View All Post</span>
                </Link>
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
            <div className="row">
                <div className="col-xl-12">
                <div className="subscribe-box-style1 subscribe-box-style1--style2">
                    <div className="icon">
                    <img src="assets/images/icon/subscribe-2.png" alt="" />
                    </div>
                    <div className="inner-title">
                    <h3>
                        Subscribe us to
                        <br /> Recieve Career Updates
                    </h3>
                    </div>
                    <form className="subscribe-form-style1" action="#">
                    <div className="input-box">
                        <input type="email" name="email" placeholder="Email address" />
                        <div className="inner-icon">
                        <i className="far fa-envelope-open" />
                        </div>
                    </div>
                    <button className="btn-one" type="submit">
                        <span className="txt">Subscribe</span>
                    </button>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*End Blog Style2 Area*/}
        </>
    )
}
