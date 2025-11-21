import Link from 'next/link';

export default function OffersArea() {
    return (
        <> 
        <section className="offers-area">
            <div className="container">
                <div className="sec-title text-center">
                    <h2>Exciting Offers For You</h2>
                    <div className="sub-title">
                        <p>Enjoy exclusive deals & offers with our bank.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-4">
                        {/* Start Single Offer Box */}
                        <div className="single-offer-box">
                            <div className="top">
                                <div className="offer-logo">
                                    <img src="/assets/images/resources/offer-logo-1.png" alt="" />
                                </div>
                                <div className="date-box">
                                    <p>Till: 25th Jun’22</p>
                                </div>
                            </div>
                            <div className="category">
                                <h4>Medical</h4>
                                <div className="border-box"></div>
                            </div>
                            <h3>Get 10% Cashback on Xfinity Restaurant.</h3>
                            <div className="bottom">
                                <div className="btn-box">
                                    <Link href="/accounts">
                                        <span className="icon-right-arrow"></span>Know More
                                    </Link>
                                </div>
                                <div className="share-btn">
                                    <Link href="/contact">
                                        <span className="icon-share"></span>Share
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* End Single Offer Box */}

                        {/* Start Single Offer Box */}
                        <div className="single-offer-box">
                            <div className="top">
                                <div className="offer-logo">
                                    <img src="/assets/images/resources/offer-logo-2.png" alt="" />
                                </div>
                                <div className="date-box">
                                    <p>Till: 10th Jul’22</p>
                                </div>
                            </div>
                            <div className="category">
                                <h4>Entertainment</h4>
                                <div className="border-box"></div>
                            </div>
                            <h3>Get 10% Cashback on Xfinity Restaurant.</h3>
                            <div className="bottom">
                                <div className="btn-box">
                                    <Link href="/accounts">
                                        <span className="icon-right-arrow"></span>Know More
                                    </Link>
                                </div>
                                <div className="share-btn">
                                    <Link href="/contact">
                                        <span className="icon-share"></span>Share
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* End Single Offer Box */}
                    </div>

                    <div className="col-xl-4">
                        <div className="subscribe-box-style1">
                            <div className="icon">
                                <img src="/assets/images/icon/subscribe-1.png" alt="" />
                            </div>
                            <div className="inner-title">
                                <h3>Subscribe Us</h3>
                                <p>Subscribe us & Stay updated.</p>
                            </div>
                            <form className="subscribe-form-style1" action="/contact">
                                <div className="input-box">
                                    <input type="email" name="email" placeholder="Email address" />
                                    <div className="inner-icon">
                                        <i className="far fa-envelope-open"></i>
                                    </div>
                                </div>
                                <button className="btn-one" type="submit">
                                    <span className="txt">Subscribe</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        {/* Start Single Offer Box */}
                        <div className="single-offer-box">
                            <div className="top">
                                <div className="offer-logo">
                                    <img src="/assets/images/resources/offer-logo-3.png" alt="" />
                                </div>
                                <div className="date-box">
                                    <p>Till: 28th Jun’22</p>
                                </div>
                            </div>
                            <div className="category">
                                <h4>Dining</h4>
                                <div className="border-box"></div>
                            </div>
                            <h3>Get 10% Cashback on Xfinity Restaurant.</h3>
                            <div className="bottom">
                                <div className="btn-box">
                                    <Link href="/accounts">
                                        <span className="icon-right-arrow"></span>Know More
                                    </Link>
                                </div>
                                <div className="share-btn">
                                    <Link href="/contact">
                                        <span className="icon-share"></span>Share
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* End Single Offer Box */}

                        {/* Start Single Offer Box */}
                        <div className="single-offer-box">
                            <div className="top">
                                <div className="offer-logo">
                                    <img src="/assets/images/resources/offer-logo-1.png" alt="" />
                                </div>
                                <div className="date-box">
                                    <p>Till: 10th Jul’22</p>
                                </div>
                            </div>
                            <div className="category">
                                <h4>Medical</h4>
                                <div className="border-box"></div>
                            </div>
                            <h3>Get 10% Cashback on Xfinity Restaurant.</h3>
                            <div className="bottom">
                                <div className="btn-box">
                                    <Link href="/accounts">
                                        <span className="icon-right-arrow"></span>Know More
                                    </Link>
                                </div>
                                <div className="share-btn">
                                    <Link href="/contact">
                                        <span className="icon-share"></span>Share
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* End Single Offer Box */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="view-all-offer-btn">
                            <Link href="/cards">
                                <span className="icon-right-arrow"></span>View All Offers
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
