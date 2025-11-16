
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Cards">
            <>
                {/*Start Card Banner Area*/}
                <section className="card-banner-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                        <div className="card-banner-content">
                            <div
                            className="card-banner-content-bg"
                            style={{
                                backgroundImage:
                                "url(assets/images/shapes/card-banner-area-bg.png)"
                            }}
                            ></div>
                            <div className="card-banner-content-img-box">
                            <img src="assets/images/resources/card-banner-img-1.png" alt="" />
                            </div>
                            <div className="inner-title">
                            <h4>Corporate Credit Card</h4>
                            <h2>
                                Higher Efficiencies &amp;
                                <br /> Savings
                            </h2>
                            </div>
                            <div className="text">
                            <p>
                                Rationally encounter consequences that are <br /> who loves or
                                pursues desire.
                            </p>
                            </div>
                            <div className="btns-box">
                            <Link className="btn-one" href="/loan-home">
                                <span className="txt">Apply Now</span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*End Card Banner Area*/}
                
                {/*Start Cards Area*/}
                <section className="cards-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                        <div className="sidebar-box-style1">
                            {/*Start Single Sidebar Box Style1*/}
                            <div className="single-sidebar-box-style1 margintop">
                            <div className="sidebar-title">
                                <div className="dot-box" />
                                <h3>Card Types</h3>
                            </div>
                            <div className="card-types-box">
                                <ul>
                                <li>
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
                        </div>
                        </div>
                        <div className="col-xl-9">
                        <div className="cards-content-box">
                            <div className="cards-content-box-top">
                            <div className="left-box">
                                <h2>Best Cards for Your Needs</h2>
                            </div>
                            <div className="right-box">
                                <div className="short-by">
                                <div className="select-box">
                                    <select className="wide">
                                    <option data-display="Default Sorting">
                                        Default Sorting
                                    </option>
                                    <option value={1}>Popularity</option>
                                    <option value={2}>Popularity</option>
                                    <option value={3}>Popularity</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*Start Single Card Box*/}
                            <div className="single-card-box">
                            <div className="category-box">Rewards</div>
                            <div className="cards-img-box">
                                <div className="inner-title">
                                <h3>Platinum Credit Card</h3>
                                </div>
                                <div className="inner">
                                <img src="assets/images/resources/card-1.jpg" alt="" />
                                </div>
                                <div className="btn-box">
                                <Link className="btn-one style2" href="/contact">
                                    <span className="txt">Apply Now</span>
                                </Link>
                                <Link className="btn-one" href="#">
                                    <span className="txt">Read More</span>
                                </Link>
                                </div>
                            </div>
                            <div className="cards-text-box">
                                <p>
                                Explore a new world of rewards with the Platinum Credit Card.{" "}
                                </p>
                                <h3>Features &amp; Benefits</h3>
                                <ul>
                                <li>Zero Joining and Annual Fees</li>
                                <li>2% Fuel Surcharge waiver at HPCL Petrol Pumps</li>
                                <li>Multi Rewards &amp; Lifestyle Benefits</li>
                                <li>5X TAT Miles on Travel</li>
                                </ul>
                                <div className="compare-box">
                                <div className="checked-box1">
                                    <input
                                    type="checkbox"
                                    name="card"
                                    id="card1"
                                    defaultChecked=""
                                    />
                                    <label htmlFor="card1">
                                    <span />
                                    Add to Compare
                                    </label>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Single Card Box*/}
                            {/*Start Single Card Box*/}
                            <div className="single-card-box">
                            <div className="category-box">Cashback</div>
                            <div className="cards-img-box">
                                <div className="inner-title">
                                <h3>Millinnia Credit Card</h3>
                                </div>
                                <div className="inner">
                                <img src="assets/images/resources/card-2.jpg" alt="" />
                                </div>
                                <div className="btn-box">
                                <Link className="btn-one style2" href="/contact">
                                    <span className="txt">Apply Now</span>
                                </Link>
                                <Link className="btn-one" href="#">
                                    <span className="txt">Read More</span>
                                </Link>
                                </div>
                            </div>
                            <div className="cards-text-box">
                                <p>
                                Righteous indignation and dislike men who are so beguiled and
                                demoralized.
                                </p>
                                <h3>Features &amp; Benefits</h3>
                                <ul>
                                <li>Welcome vouchers worth Rs. 2000+</li>
                                <li>1% Fuel Surcharge waiver at HPCL Petrol Pumps</li>
                                <li>Lifestyle Benefits</li>
                                <li>Access to 1000+ global airport lounges</li>
                                </ul>
                                <div className="compare-box">
                                <div className="checked-box1">
                                    <input type="checkbox" name="card" id="card2" />
                                    <label htmlFor="card2">
                                    <span />
                                    Add to Compare
                                    </label>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Single Card Box*/}
                            {/*Start Single Card Box*/}
                            <div className="single-card-box">
                            <div className="category-box">Rewards</div>
                            <div className="cards-img-box">
                                <div className="inner-title">
                                <h3>Money Back Credit Card</h3>
                                </div>
                                <div className="inner">
                                <img src="assets/images/resources/card-3.jpg" alt="" />
                                </div>
                                <div className="btn-box">
                                <Link className="btn-one style2" href="/contact">
                                    <span className="txt">Apply Now</span>
                                </Link>
                                <Link className="btn-one" href="#">
                                    <span className="txt">Read More</span>
                                </Link>
                                </div>
                            </div>
                            <div className="cards-text-box">
                                <p>
                                Explore a new world of rewards with the Platinum Credit Card.{" "}
                                </p>
                                <h3>Features &amp; Benefits</h3>
                                <ul>
                                <li>Zero Joining and Annual Fees</li>
                                <li>2% Fuel Surcharge waiver at HPCL Petrol Pumps</li>
                                <li>Multi Rewards &amp; Lifestyle Benefits</li>
                                <li>5X TAT Miles on Travel</li>
                                </ul>
                                <div className="compare-box">
                                <div className="checked-box1">
                                    <input type="checkbox" name="card" id="card3" />
                                    <label htmlFor="card3">
                                    <span />
                                    Add to Compare
                                    </label>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Single Card Box*/}
                            {/*Start Single Card Box*/}
                            <div className="single-card-box">
                            <div className="category-box">Cashback</div>
                            <div className="cards-img-box">
                                <div className="inner-title">
                                <h3>Easy EMI Credit Card</h3>
                                </div>
                                <div className="inner">
                                <img src="assets/images/resources/card-4.jpg" alt="" />
                                </div>
                                <div className="btn-box">
                                <Link className="btn-one style2" href="/contact">
                                    <span className="txt">Apply Now</span>
                                </Link>
                                <Link className="btn-one" href="#">
                                    <span className="txt">Read More</span>
                                </Link>
                                </div>
                            </div>
                            <div className="cards-text-box">
                                <p>
                                Righteous indignation and dislike men who are so beguiled and
                                demoralized.
                                </p>
                                <h3>Features &amp; Benefits</h3>
                                <ul>
                                <li>Welcome vouchers worth Rs. 2000+</li>
                                <li>1% Fuel Surcharge waiver at HPCL Petrol Pumps</li>
                                <li>Lifestyle Benefits</li>
                                <li>Access to 1000+ global airport lounges</li>
                                </ul>
                                <div className="compare-box">
                                <div className="checked-box1">
                                    <input type="checkbox" name="card" id="card4" />
                                    <label htmlFor="card4">
                                    <span />
                                    Add to Compare
                                    </label>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Single Card Box*/}
                            {/*Start Single Card Box*/}
                            <div className="single-card-box">
                            <div className="category-box">Rewards</div>
                            <div className="cards-img-box">
                                <div className="inner-title">
                                <h3>Diners Club Privilege Card</h3>
                                </div>
                                <div className="inner">
                                <img src="assets/images/resources/card-5.jpg" alt="" />
                                </div>
                                <div className="btn-box">
                                <Link className="btn-one style2" href="/contact">
                                    <span className="txt">Apply Now</span>
                                </Link>
                                <Link className="btn-one" href="#">
                                    <span className="txt">Read More</span>
                                </Link>
                                </div>
                            </div>
                            <div className="cards-text-box">
                                <p>
                                Explore a new world of rewards with the Platinum Credit Card.{" "}
                                </p>
                                <h3>Features &amp; Benefits</h3>
                                <ul>
                                <li>Zero Joining and Annual Fees</li>
                                <li>2% Fuel Surcharge waiver at HPCL Petrol Pumps</li>
                                <li>Multi Rewards &amp; Lifestyle Benefits</li>
                                <li>5X TAT Miles on Travel</li>
                                </ul>
                                <div className="compare-box">
                                <div className="checked-box1">
                                    <input type="checkbox" name="card" id="card5" />
                                    <label htmlFor="card5">
                                    <span />
                                    Add to Compare
                                    </label>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Single Card Box*/}
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*End Cards Area*/}
            </>


            </Layout>
        </>
    )
}