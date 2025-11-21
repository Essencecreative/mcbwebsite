"use client";
import Layout from "@/components/layout/Layout";
import { useState } from 'react';
import Link from 'next/link';
export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Card Single">
            <>
            {/*Start Cards Details Area*/}
            <section className="cards-details-area">
                <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                    <div className="sidebar-box-style2">
                        {/*Start Single Sidebar Box Style1*/}
                        <div className="single-sidebar-box-style1">
                        <div className="sidebar-title">
                            <div className="dot-box" />
                            <h3>Card Types</h3>
                        </div>
                        <div className="card-types-box">
                            <ul>
                            <li className="active">
                                <Link href="/cards-business">Business</Link>
                            </li>
                            <li>
                                <Link href="/cards-cashback">Cashback</Link>
                            </li>
                            <li>
                                <Link href="/cards-law-interest">Low Interest</Link>
                            </li>
                            <li>
                                <Link href="/cards-rewards">Rewards</Link>
                            </li>
                            <li>
                                <Link href="/cards-secured">Secured</Link>
                            </li>
                            <li>
                                <Link href="/cards-travel-hotel">Travel &amp; Hotel</Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                        {/*End Single Sidebar Box Style1*/}
                        <div className="border-box-1" />
                        {/*Start Sidebar Banner Box*/}
                        <div className="sidebar-banner-box">
                        <div className="top-box float-bob-y" />
                        <div className="bottom-box float-bob-x" />
                        <div className="logo-box">
                            <Link href="/">
                            <img src="assets/images/resources/banner-logo-1.png" alt="" />
                            </Link>
                        </div>
                        <h3>
                            Apply for Credit
                            <br /> Card Online
                        </h3>
                        <ul>
                            <li>
                            <span className="icon-checkbox-mark" /> The well
                            master-builder
                            </li>
                            <li>
                            <span className="icon-checkbox-mark" /> On the other hand
                            </li>
                        </ul>
                        <div className="btns-box">
                            <Link className="btn-one" href="/contact">
                            <span className="txt">Apply Now</span>
                            </Link>
                        </div>
                        </div>
                        {/*End Sidebar Banner Box*/}
                    </div>
                    </div>
                    <div className="col-xl-8">
                    <div className="cards-deails-content-box">
                        <div className="cards-deails-content-1">
                        <div className="inner-title">
                            <h5>Know About</h5>
                            <h2>Business Cards</h2>
                        </div>
                        <div className="text">
                            <p>
                            Fail in their duty through weakness of will which is the same
                            as saying through shrinking from toil and pain cases are
                            perfectly simple and easy to distinguish. In a free hour, when
                            our power of choice the claims off duty or the obligations
                            business it will frequently occur that pleasures.
                            </p>
                            <p>
                            Through weakness of will which is the same as saying through
                            shrinking from toil and pain cases are per- fectly simple and
                            easy to distinguish in a free hour.
                            </p>
                        </div>
                        </div>
                        <div className="cards-deails-content-2">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                            <div className="img-box">
                                <ul>
                                <li>
                                    <div className="single-img-box">
                                    <img
                                        src="assets/images/resources/card-details-1.jpg"
                                        alt=""
                                    />
                                    </div>
                                </li>
                                <li>
                                    <div className="single-img-box">
                                    <img
                                        src="assets/images/resources/card-details-2.jpg"
                                        alt=""
                                    />
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                            <div className="text-box">
                                <ul>
                                <li>
                                    <span className="icon-shield-2" />
                                    <h3>Welcome Bonus</h3>
                                    <p>
                                    Holds these matters principles selection right some
                                    rejects.
                                    </p>
                                </li>
                                <li>
                                    <span className="icon-shield-2" />
                                    <h3>Accelerated Rewards</h3>
                                    <p>
                                    Business will frequently occur that pleasure have to
                                    be repudiated.
                                    </p>
                                </li>
                                <li>
                                    <span className="icon-shield-2" />
                                    <h3>Fuel Surcharge Waiver</h3>
                                    <p>
                                    The wise man therefore always holds these principle of
                                    selection.
                                    </p>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card-details-features-box">
                        <div className="inner-title">
                            <h2>Features</h2>
                            <p>
                            Same as saying through shrinking from toil and pain cases are
                            perfectly simple and easy to distinguish. In a free hour, when
                            our power of choice the claims off duty or the obligations.
                            </p>
                        </div>
                        <div className="row">
                            {/*Start Card Details Single Features Box*/}
                            <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="card-details-single-features-box">
                                <div className="single-benefits-box">
                                <div className="icon">
                                    <span className="icon-high" />
                                </div>
                                <div className="text">
                                    <h3>Earn Interest up to 7%</h3>
                                    <p>
                                    Holds these matters principles selection right some
                                    rejects.
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Card Details Single Features Box*/}
                            {/*Start Card Details Single Features Box*/}
                            <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="card-details-single-features-box style2">
                                <div className="single-benefits-box">
                                <div className="icon">
                                    <span className="icon-notification" />
                                </div>
                                <div className="text">
                                    <h3>Free SMS Alerts</h3>
                                    <p>
                                    Business will frequently occur that pleasure have to
                                    be repudiated.
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Card Details Single Features Box*/}
                            {/*Start Card Details Single Features Box*/}
                            <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="card-details-single-features-box style3">
                                <div className="single-benefits-box">
                                <div className="icon">
                                    <span className="icon-credit-card-2" />
                                </div>
                                <div className="text">
                                    <h3>International Debit Cards</h3>
                                    <p>
                                    The wise man therefore always holds these principle of
                                    selection.
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Card Details Single Features Box*/}
                            {/*Start Card Details Single Features Box*/}
                            <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="card-details-single-features-box style4">
                                <div className="single-benefits-box">
                                <div className="icon">
                                    <span className="icon-shield-1" />
                                </div>
                                <div className="text">
                                    <h3>Provides Safety</h3>
                                    <p>
                                    Holds these matters principles selection right some
                                    rejects.
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Card Details Single Features Box*/}
                        </div>
                        </div>
                        {/*Start Card details Offer Box*/}
                        <div className="card-details-offer-box">
                        <div className="inner-title">
                            <h2>Exciting Offers for You</h2>
                            <p>
                            Toil and pain cases are perfectly simple and easy to
                            distinguish a free hour.
                            </p>
                        </div>
                        <div className="row">
                            {/*Start Single Offer Box*/}
                            <div className="col-xl-6">
                            <div className="single-offer-box">
                                <div className="top">
                                <div className="offer-logo">
                                    <img
                                    src="assets/images/resources/offer-logo-1.png"
                                    alt=""
                                    />
                                </div>
                                <div className="date-box">
                                    <p>Till: 25th Jun’22</p>
                                </div>
                                </div>
                                <div className="category">
                                <h4>Medical</h4>
                                <div className="border-box" />
                                </div>
                                <h3>Get 10% Cashback on Xfinity Restuarant.</h3>
                                <div className="bottom">
                                <div className="btn-box">
                                    <Link href="#">
                                    <span className="icon-right-arrow" />
                                    Know More
                                    </Link>
                                </div>
                                <div className="share-btn">
                                    <Link href="#">
                                    <span className="icon-share" />
                                    Share
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Single Offer Box*/}
                            {/*Start Single Offer Box*/}
                            <div className="col-xl-6">
                            <div className="single-offer-box">
                                <div className="top">
                                <div className="offer-logo">
                                    <img
                                    src="assets/images/resources/offer-logo-2.png"
                                    alt=""
                                    />
                                </div>
                                <div className="date-box">
                                    <p>Till: 10th Jul’22</p>
                                </div>
                                </div>
                                <div className="category">
                                <h4>Entertainment</h4>
                                <div className="border-box" />
                                </div>
                                <h3>Get 10% Cashback on Xfinity Restuarant.</h3>
                                <div className="bottom">
                                <div className="btn-box">
                                    <Link href="#">
                                    <span className="icon-right-arrow" />
                                    Know More
                                    </Link>
                                </div>
                                <div className="share-btn">
                                    <Link href="#">
                                    <span className="icon-share" />
                                    Share
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Single Offer Box*/}
                        </div>
                        </div>
                        {/*End Card details Offer Box*/}
                        <div className="card-deatils-accordion-box">
                            <ul className="accordion-box">
                                <li className={`accordion block ${activeIndex === 0 ? 'active-block' : ''}`}>
                                <div className={`acc-btn ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>
                                    <div className="icon-outer"><i className="icon-right-arrow"></i></div>
                                    <h3>Eligibility to Apply</h3>
                                </div>
                                <div className={`acc-content ${activeIndex === 0 ? 'current' : ''}`}>
                                    <div className="card-deatils-accordion-box-content">
                                    <h4>To apply for a Credit Card</h4>
                                    <ul>
                                        <li>You will need to be minimum 18 years of age.</li>
                                        <li>For salary person net annual income of Rs 4.5 lakh or more</li>
                                        <li>Consider a credit score between 750 and 900 to be adequate for a Credit Card.</li>
                                        <li>Location is also another factor</li>
                                    </ul>
                                    <div className="btns-box">
                                        <Link className="btn-one" href="/contact">
                                            <span className="txt">Open an Account</span>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                                </li>

                                <li className={`accordion block ${activeIndex === 1 ? 'active-block' : ''}`}>
                                <div className={`acc-btn ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(1)}>
                                    <div className="icon-outer"><i className="icon-right-arrow"></i></div>
                                    <h3>Fees & Charges</h3>
                                </div>
                                <div className={`acc-content ${activeIndex === 1 ? 'current' : ''}`}>
                                    <div className="card-deatils-accordion-box-content">
                                    <h4>To apply for a Credit Card</h4>
                                    <ul>
                                        <li>You will need to be minimum 18 years of age.</li>
                                        <li>For salary person net annual income of Rs 4.5 lakh or more</li>
                                        <li>Consider a credit score between 750 and 900 to be adequate for a Credit Card.</li>
                                        <li>Location is also another factor</li>
                                    </ul>
                                    <div className="btns-box">
                                        <Link className="btn-one" href="/contact">
                                            <span className="txt">Open an Account</span>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/*End Cards Details Area*/}

                

                


            </>


            </Layout>
        </>
    )
}