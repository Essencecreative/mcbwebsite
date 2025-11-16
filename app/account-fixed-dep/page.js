"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import CountUp from "react-countup";
import Faq from "@/components/common/Faq";
export default function Home() {
    

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Fixed Deposit Account">
            <>

                {/*Start Overview Area*/}
                <section className="overview-area">
                    <div className="container">
                    <div className="sec-title text-center">
                        <h2>Get More From Your Money</h2>
                        <div className="sub-title">
                        <p>Access your money anytime and anywhere.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6">
                        <div className="overview-content-box-one">
                            <ul className="clearfix">
                            <li>
                                <div className="single-overview-box">
                                <div className="icon">
                                    <span className="icon-checkbox-mark" />
                                </div>
                                <div className="title">
                                    <h3>
                                    <Link href="#">
                                        Instant Account
                                        <br /> Opening
                                    </Link>
                                    </h3>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="single-overview-box">
                                <div className="icon">
                                    <span className="icon-checkbox-mark" />
                                </div>
                                <div className="title">
                                    <h3>
                                    <Link href="#">
                                        Exciting Offers &amp;
                                        <br /> Discounts
                                    </Link>
                                    </h3>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="single-overview-box">
                                <div className="icon">
                                    <span className="icon-checkbox-mark" />
                                </div>
                                <div className="title">
                                    <h3>
                                    <Link href="#">
                                        Secure Internet &amp;
                                        <br /> Mob Banking
                                    </Link>
                                    </h3>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="single-overview-box">
                                <div className="icon">
                                    <span className="icon-checkbox-mark" />
                                </div>
                                <div className="title">
                                    <h3>
                                    <Link href="#">
                                        Earn
                                        <br /> Reward Points
                                    </Link>
                                    </h3>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-xl-6">
                        <div className="overview-content-box-two">
                            <div className="inner-title">
                            <h5>Know About</h5>
                            <h2>Savings Account</h2>
                            </div>
                            <div className="text">
                            <p>
                                Fail in their duty through weakness of will which is the same as
                                saying through shrinking from toil and pain cases are perfectly
                                simple and easy to distinguish. In a free hour, when our power
                                of choice.
                            </p>
                            <p>
                                The claims off duty or the obligations business it will
                                frequently occur that pleasures be repudiated to distinguish
                                nothing prevents.
                            </p>
                            </div>
                            <div className="btns-box">
                            <Link className="btn-one" href="/contact">
                                <span className="txt">
                                <i className="icon-payment" />
                                Open an Account
                                </span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*End Overview Area*/}

                {/* Start Statistics Style2 Area */}
                <section className="statistics-style2-area">
                    <div className="statistics-style2-area-shape1">
                        <img
                        src="assets/images/shapes/statistics-style2-area-shape-1.png"
                        alt=""
                        />
                    </div>
                    <div
                        className="statistics-style2-area-bg"
                        style={{
                        backgroundImage:
                            "url(assets/images/backgrounds/statistics-style2-area-bg.jpg)",
                        }}
                    />
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="statistics-content-box-style2">
                            <div className="sec-title">
                                <h2>
                                Reach Your
                                <br /> Savings Goal With Us
                                </h2>
                            </div>
                            <div className="progress-block">
                                <div className="inner-box">
                                <div className="graph-outer">
                                    <div className="outer-text">
                                    <h3>
                                        Year of
                                        <br /> 2021
                                    </h3>
                                    </div>
                                </div>
                                </div>
                                <div className="inner-text count-box">
                                <div className="count-text-outer">
                                    <span className="count-text">
                                    <CountUp end={84} duration={2} />
                                    </span>
                                    %
                                </div>
                                <h3>Income Statement</h3>
                                <p>Long established fact that a reader will be distracted</p>
                                <div className="btn-box">
                                    <Link href="#">
                                    <span className="icon-right-arrow" />
                                    Download
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* End Statistics Style2 Area */}

                {/*Start page Contains Area*/}
                <section className="page-contains-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                        <div className="page-contains-box">
                            <div className="page-contains-btn">
                            <ul className="navigation clearfix scroll-nav">
                                <li className="current">
                                <Link href="#benefits">
                                    <span className="icon-right-arrow" />
                                    Benefits
                                </Link>
                                </li>
                                <li>
                                <Link href="#eligibility">
                                    <span className="icon-right-arrow" />
                                    Eligibility
                                </Link>
                                </li>
                                <li>
                                <Link href="#required">
                                    <span className="icon-right-arrow" />
                                    Documents Required
                                </Link>
                                </li>
                                <li>
                                <Link href="#interest">
                                    <span className="icon-right-arrow" />
                                    Interest &amp; Charges
                                </Link>
                                </li>
                            </ul>
                            </div>
                            <div className="right-btn">
                            <Link href="/faq">Customers faq’s</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*End page Contains Area*/}

                {/*Start Benefits Style2 Area*/}
                <section id="benefits" className="benefits-style2-area">
                    <div className="container">
                    <div className="sec-title text-center">
                        <h2>Our Savings Account Benefits</h2>
                        <div className="sub-title">
                        <p>We help businesses and customers achieve more.</p>
                        </div>
                    </div>
                    <ul className="row benefits-content text-center">
                        {/*Start Single Benefits Box Colum*/}
                        <li className="col-xl-4 single-benefits-box-colum">
                        <div className="single-benefits-box">
                            <div className="icon">
                            <span className="icon-high" />
                            </div>
                            <div className="text">
                            <h3>Earn Interest up to 7%</h3>
                            <p>
                                Holds these matters principles selection right some rejects.
                            </p>
                            </div>
                        </div>
                        </li>
                        {/*End Single Benefits Box Colum*/}
                        {/*Start Single Benefits Box Colum*/}
                        <li className="col-xl-4 single-benefits-box-colum">
                        <div className="single-benefits-box">
                            <div className="icon">
                            <span className="icon-notification" />
                            </div>
                            <div className="text">
                            <h3>Free SMS Alerts</h3>
                            <p>
                                Business will frequently occur that pleasure have to be
                                repudiated.
                            </p>
                            </div>
                        </div>
                        </li>
                        {/*End Single Benefits Box Colum*/}
                        {/*Start Single Benefits Box Colum*/}
                        <li className="col-xl-4 single-benefits-box-colum">
                        <div className="single-benefits-box">
                            <div className="icon">
                            <span className="icon-safebox" />
                            </div>
                            <div className="text">
                            <h3>Discounts on Locker</h3>
                            <p>
                                The wise man therefore always holds these principle of
                                selection.
                            </p>
                            </div>
                        </div>
                        </li>
                        {/*End Single Benefits Box Colum*/}
                        {/*Start Single Benefits Box Colum*/}
                        <li className="col-xl-4 single-benefits-box-colum">
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
                        </li>
                        {/*End Single Benefits Box Colum*/}
                        {/*Start Single Benefits Box Colum*/}
                        <li className="col-xl-4 single-benefits-box-colum">
                        <div className="single-benefits-box">
                            <div className="icon">
                            <span className="icon-shield-1" />
                            </div>
                            <div className="text">
                            <h3>Provides Safety</h3>
                            <p>
                                Holds these matters principles selection right some rejects.
                            </p>
                            </div>
                        </div>
                        </li>
                        {/*End Single Benefits Box Colum*/}
                        {/*Start Single Benefits Box Colum*/}
                        <li className="col-xl-4 single-benefits-box-colum">
                        <div className="single-benefits-box">
                            <div className="icon">
                            <span className="icon-paperless" />
                            </div>
                            <div className="text">
                            <h3>Paperless Banking</h3>
                            <p>
                                Business will frequently occur that pleasure have to be
                                repudiated.
                            </p>
                            </div>
                        </div>
                        </li>
                        {/*End Single Benefits Box Colum*/}
                    </ul>
                    </div>
                </section>
                {/*End Benefits Style2 Area*/}

                {/* Start Eligibility Area */}
                <section id="eligibility" className="eligibility-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                        <div className="eligibility-img-box">
                            <div className="sec-title">
                            <h2>
                                Eligibility to <br />
                                Open Savings Account
                            </h2>
                            <div className="sub-title">
                                <p>Eligibility parameters for saving account.</p>
                            </div>
                            </div>
                            <div className="eligibility-img-box__inner">
                            <img
                                src="assets/images/resources/eligibility-img-1.jpg"
                                alt="Eligibility Image"
                            />
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6">
                        <div className="eligibility-content-box">
                            <div className="eligibility-content-box__inner">
                            <ul>
                                <li>
                                <div className="inner">
                                    <div className="counting">1</div>
                                    <div className="text">
                                    <h3>Nationality</h3>
                                    <p>Indian Residents, and Non-Resident individuals</p>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="inner">
                                    <div className="counting">2</div>
                                    <div className="text">
                                    <h3>Age</h3>
                                    <p>18 Years old or above</p>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="inner">
                                    <div className="counting">3</div>
                                    <div className="text">
                                    <h3>Nationality</h3>
                                    <p>Residents, and Non-Resident individuals</p>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="inner">
                                    <div className="counting">4</div>
                                    <div className="text">
                                    <h3>Age</h3>
                                    <p>18 Years old or above</p>
                                    </div>
                                </div>
                                </li>
                            </ul>
                            </div>
                            <div className="facts-box-style2">
                            <div className="counting">
                                <h2 className="odometer">
                                <CountUp end={20} duration={5} />
                                </h2>
                                <span className="k">k</span>
                            </div>
                            <div className="inner-title">
                                <h3>
                                Saving account opened
                                <br /> in last year
                                </h3>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* End Eligibility Area */}

                {/*Start Documents Area*/}
                <section id="required" className="documents-area">
                    <div className="container">
                    <div className="sec-title text-center">
                        <h2>Savings A/c Required Documents</h2>
                        <div className="sub-title">
                        <p>Basic documents required for opening a savings account.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6">
                        {/*Start Single Documents Box*/}
                        <div className="single-documents-box">
                            <div className="inner-title">
                            <h3>
                                PAN Card
                                <br /> is Mandatory
                            </h3>
                            </div>
                        </div>
                        {/*End Single Documents Box*/}
                        {/*Start Single Documents Box*/}
                        <div className="single-documents-box">
                            <div className="inner-title">
                            <h3>
                                Duly Filled
                                <br /> Application Form
                            </h3>
                            </div>
                        </div>
                        {/*End Single Documents Box*/}
                        </div>
                        <div className="col-xl-3 col-lg-6">
                        {/*Start Single Documents Box*/}
                        <div className="single-documents-box">
                            <div className="inner-title">
                            <h3>Non Resident</h3>
                            </div>
                            <ul>
                            <li>
                                <span className="icon-play-button-1" />
                                <Link href="#">Passport</Link>
                            </li>
                            <li>
                                <span className="icon-play-button-1" />
                                <Link href="#">Driving License</Link>
                            </li>
                            <li>
                                <span className="icon-play-button-1" />
                                <Link href="#">Aadhaar Number</Link>
                            </li>
                            <li>
                                <span className="icon-play-button-1" />
                                <Link href="#">Voter’s Identity Card</Link>
                            </li>
                            </ul>
                        </div>
                        {/*End Single Documents Box*/}
                        </div>
                        <div className="col-xl-3 col-lg-6">
                        {/*Start Single Documents Box*/}
                        <div className="single-documents-box">
                            <div className="inner-title">
                            <h3>For Resident</h3>
                            </div>
                            <ul>
                            <li>
                                <span className="icon-play-button-1" />
                                <Link href="#">Passport</Link>
                            </li>
                            <li>
                                <span className="icon-play-button-1" />
                                <Link href="#">Visa</Link>
                            </li>
                            <li>
                                <span className="icon-play-button-1" />
                                <Link href="#">Bank Statement (If any)</Link>
                            </li>
                            <li>
                                <span className="icon-play-button-1" />
                                <Link href="#">Company Proof</Link>
                            </li>
                            </ul>
                        </div>
                        {/*End Single Documents Box*/}
                        </div>
                        <div className="col-xl-3 col-lg-6">
                        {/*Start Single Documents Box*/}
                        <div className="single-documents-box">
                            <div className="inner-title">
                            <h3>
                                Color &amp; Passport Size
                                <br />
                                Photographs
                            </h3>
                            </div>
                        </div>
                        {/*End Single Documents Box*/}
                        {/*Start Single Documents Box*/}
                        <div className="single-documents-box">
                            <div className="inner-title">
                            <h3>
                                Color &amp; Passport Size
                                <br />
                                Photographs
                            </h3>
                            </div>
                        </div>
                        {/*End Single Documents Box*/}
                        </div>
                    </div>
                    </div>
                </section>
                {/*End Documents Area*/}

                {/*Start Interest Charges Area*/}
                <section id="interest" className="interest-charges-area">
                    <div className="interest-charges-area-shape1">
                    <img
                        src="assets/images/shapes/interest-charges-area-shape-1.png"
                        alt=""
                    />
                    </div>
                    <div className="container">
                    <div className="sec-title text-center">
                        <h2>Account Interest &amp; Charges</h2>
                        <div className="sub-title">
                        <p>Your money is making money for you &amp; Your Family.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                        <div className="interest-charges-table-box">
                            <div className="table-outer">
                            <table className="interest-charges-table">
                                <tbody>
                                <tr>
                                    <td className="title">
                                    <h3>
                                        Account Interest Rates
                                        <br /> Per Annum
                                    </h3>
                                    </td>
                                    <td className="balance">
                                    <div className="inner-title">
                                        <h3>Balance in a/c</h3>
                                    </div>
                                    <ul>
                                        <li>Up to Rs. 1 Lakh</li>
                                        <li>Above 1 Lakh to 5 Lakh</li>
                                        <li>Above 5 Lakh to 10 Lakh</li>
                                        <li>Above 10Lakh</li>
                                    </ul>
                                    </td>
                                    <td className="interest">
                                    <div className="inner-title">
                                        <h3>Interest</h3>
                                    </div>
                                    <ul>
                                        <li>3.00%</li>
                                        <li>5.00%</li>
                                        <li>8.25%</li>
                                        <li>10.00%</li>
                                    </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="title">
                                    <h3>Debit Card</h3>
                                    </td>
                                    <td className="balance">
                                    <ul>
                                        <li>Annual Fees</li>
                                        <li>Transaction Limit</li>
                                        <li>Card Replacement</li>
                                    </ul>
                                    </td>
                                    <td className="interest">
                                    <ul>
                                        <li>Nill</li>
                                        <li>20 Lakh / Annum</li>
                                        <li>Rs.600+Taxes</li>
                                    </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="title">
                                    <h3>Credit Card</h3>
                                    </td>
                                    <td className="balance">
                                    <ul>
                                        <li>Annual Fees</li>
                                        <li>Card Replacement</li>
                                    </ul>
                                    </td>
                                    <td className="interest">
                                    <ul>
                                        <li>Rs.1500</li>
                                        <li>Rs.600+Taxes</li>
                                    </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*End Interest Charges Area*/}

                {/* Start Faq Style1 Area */}
                <Faq />
                {/* End Faq Style1 Area */}


            </>


            </Layout>
        </>
    )
}