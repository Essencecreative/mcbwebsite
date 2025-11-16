"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react';
import { useEffect } from 'react';
import Faq from "@/components/common/Faq";
export default function Home() {
    const [activeTab, setActiveTab] = useState('#trading');

  useEffect(() => {
    // Tab functionality
    const tabs = document.querySelectorAll('.tab-btn-item');
    const tabContents = document.querySelectorAll('.tab-content-box-item');

    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        const target = this.getAttribute('data-tab');

        // Remove active class from all tabs
        tabs.forEach(tab => tab.classList.remove('active-btn-item'));

        // Add active class to clicked tab
        this.classList.add('active-btn-item');

        // Hide all tab contents
        tabContents.forEach(content => content.classList.remove('tab-content-box-item-active'));

        // Show the clicked tab content
        document.querySelector(target).classList.add('tab-content-box-item-active');
      });
    });
  }, []);

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="All Accounts">
            <>
                {/*Start Accounts Style1 Area*/}
                <section className="account-style1-area">
                    <div className="container">
                    <div className="sec-title text-center">
                        <h2>Let’s Think of saving Money</h2>
                        <div className="sub-title">
                        <p>Convenient banking options for you.</p>
                        </div>
                    </div>
                    <div className="row">
                        {/*Start Single Account Box Style1*/}
                        <div className="col-xl-4 col-lg-4">
                        <div className="single-account-box-style1">
                            <div className="img-holder">
                            <img src="assets/images/resources/account-1.jpg" alt="" />
                            </div>
                            <div className="text-holder">
                            <h3>
                                <Link href="#">Savings Account</Link>
                            </h3>
                            <p>Open account now and earn upto 8%</p>
                            </div>
                        </div>
                        </div>
                        {/*End Single Account Box Style1*/}
                        {/*Start Single Account Box Style1*/}
                        <div className="col-xl-4 col-lg-4">
                        <div className="single-account-box-style1">
                            <div className="img-holder">
                            <img src="assets/images/resources/account-2.jpg" alt="" />
                            </div>
                            <div className="text-holder">
                            <h3>
                                <Link href="#">Current Account</Link>
                            </h3>
                            <p>Open account now and earn upto 5%</p>
                            </div>
                        </div>
                        </div>
                        {/*End Single Account Box Style1*/}
                        {/*Start Single Account Box Style1*/}
                        <div className="col-xl-4 col-lg-4">
                        <div className="single-account-box-style1">
                            <div className="img-holder">
                            <img src="assets/images/resources/account-3.jpg" alt="" />
                            </div>
                            <div className="text-holder">
                            <h3>
                                <Link href="#">Fixed Deposit Account</Link>
                            </h3>
                            <p>Open account now and earn upto 10%</p>
                            </div>
                        </div>
                        </div>
                        {/*End Single Account Box Style1*/}
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                        <div className="account-style1-area_btn">
                            <Link href="/accounts">
                            <span className="icon-right-arrow" />
                            View All Accounts
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*End Accounts Style1 Area*/}

                <section className="banking-tab-area">
                    <div className="auto-container">
                        <div className="banking-tab">
                        {/* Start Tabs Content Box */}
                        <div className="tabs-content-box">
                            {/* Tab - Trading */}
                            <div className="tab-content-box-item tab-content-box-item-active" id="trading">
                            <div className="banking-tab-content-item">
                                <div className="row">
                                <div className="col-xl-6">
                                    <div className="banking-tab-img-box">
                                    <div
                                        className="banking-tab-img-box__bg"
                                        style={{ backgroundImage: 'url(/assets/images/resources/banking-tab-1.jpg)' }}
                                    />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="banking-tab-text-box">
                                    <div className="inner-title">
                                        <h3>Trading & Demat a/c</h3>
                                        <h2>Step to Make<br />Your Dreams Possible</h2>
                                    </div>
                                    <div className="banking-tab-text-box__inner">
                                        <div className="text">
                                        <p>The claims off duty or the obligations business it will frequently pleasures repudiated to distinguish nothing.</p>
                                        </div>
                                        <ul>
                                        <li>Explorer of the master-builder</li>
                                        <li>On the other hand</li>
                                        <li>Perfectly simple & easy</li>
                                        <li>Explorer of the master-builder</li>
                                        <li>On the other hand</li>
                                        <li>Perfectly simple & easy</li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            {/* Tab - Tax */}
                            <div className="tab-content-box-item" id="tax">
                            <div className="banking-tab-content-item">
                                <div className="row">
                                <div className="col-xl-6">
                                    <div className="banking-tab-img-box">
                                    <div
                                        className="banking-tab-img-box__bg"
                                        style={{ backgroundImage: 'url(/assets/images/resources/banking-tab-2.jpg)' }}
                                    />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="banking-tab-text-box">
                                    <div className="inner-title">
                                        <h3>Tax Savings a/c</h3>
                                        <h2>Step to Make<br />Your Dreams Possible</h2>
                                    </div>
                                    <div className="banking-tab-text-box__inner">
                                        <div className="text">
                                        <p>The claims off duty or the obligations business it will frequently pleasures repudiated to distinguish nothing.</p>
                                        </div>
                                        <ul>
                                        <li>Explorer of the master-builder</li>
                                        <li>On the other hand</li>
                                        <li>Perfectly simple & easy</li>
                                        <li>Explorer of the master-builder</li>
                                        <li>On the other hand</li>
                                        <li>Perfectly simple & easy</li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            {/* Tab - Gold */}
                            <div className="tab-content-box-item" id="gold">
                            <div className="banking-tab-content-item">
                                <div className="row">
                                <div className="col-xl-6">
                                    <div className="banking-tab-img-box">
                                    <div
                                        className="banking-tab-img-box__bg"
                                        style={{ backgroundImage: 'url(/assets/images/resources/banking-tab-3.jpg)' }}
                                    />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="banking-tab-text-box">
                                    <div className="inner-title">
                                        <h3>Gold Savings a/c</h3>
                                        <h2>Step to Make<br />Your Dreams Possible</h2>
                                    </div>
                                    <div className="banking-tab-text-box__inner">
                                        <div className="text">
                                        <p>The claims off duty or the obligations business it will frequently pleasures repudiated to distinguish nothing.</p>
                                        </div>
                                        <ul>
                                        <li>Explorer of the master-builder</li>
                                        <li>On the other hand</li>
                                        <li>Perfectly simple & easy</li>
                                        <li>Explorer of the master-builder</li>
                                        <li>On the other hand</li>
                                        <li>Perfectly simple & easy</li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* End Tabs Content Box */}

                        {/* Start Banking Tab Button */}
                        <div className="banking-tab__button">
                            <ul className="tabs-button-box clearfix">
                            <li data-tab="#trading" className="tab-btn-item active-btn-item">
                                <div className="inner">
                                <div className="icon">
                                    <span className="icon-trading"></span>
                                </div>
                                <div className="title">
                                    <h4>Finbank</h4>
                                    <h3>Trading & Demat a/c</h3>
                                </div>
                                </div>
                            </li>

                            <li data-tab="#tax" className="tab-btn-item">
                                <div className="inner">
                                <div className="icon">
                                    <span className="icon-fee"></span>
                                </div>
                                <div className="title">
                                    <h4>Finbank</h4>
                                    <h3>Tax Savings a/c</h3>
                                </div>
                                </div>
                            </li>

                            <li data-tab="#gold" className="tab-btn-item">
                                <div className="inner">
                                <div className="icon">
                                    <span className="icon-gold-ingots"></span>
                                </div>
                                <div className="title">
                                    <h4>Finbank</h4>
                                    <h3>Gold Savings a/c</h3>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        {/* End Banking Tab Button */}
                        </div>
                    </div>
                </section>

           
                {/*Start Account Steps Style2 Area*/}
                <section className="account-steps-style2-area">
                    <div className="container">
                    <div className="sec-title text-center">
                        <h2>Your Account in Easy Steps</h2>
                        <div className="sub-title">
                        <p>We show our value by serving faithfully.</p>
                        </div>
                    </div>
                    <div className="row">
                        {/*Start Single Account Box style2*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-account-steps-box-style2">
                            <div className="inner">
                            <div className="step-box">
                                <h4>Step 01</h4>
                            </div>
                            <div className="icon-holder">
                                <span className="icon-consultation" />
                            </div>
                            <h3>
                                <Link href="#">
                                Consult With Our <br /> Experts
                                </Link>
                            </h3>
                            <div className="text">
                                <p>
                                The claims off duty or the obligations business it will
                                frequently occur.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*End Single Account Box style2*/}
                        {/*Start Single Account Box style2*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-account-steps-box-style2 bg2">
                            <div className="inner">
                            <div className="step-box">
                                <h4>Step 02</h4>
                            </div>
                            <div className="icon-holder">
                                <span className="icon-file" />
                            </div>
                            <h3>
                                <Link href="#">
                                Submit Required <br /> Documents
                                </Link>
                            </h3>
                            <div className="text">
                                <p>
                                Toil and pain cases are perfectly simple and easy to all our
                                distinguish.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*End Single Account Box style2*/}
                        {/*Start Single Account Box style2*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-account-steps-box-style2 bg3">
                            <div className="inner">
                            <div className="step-box">
                                <h4>Step 03</h4>
                            </div>
                            <div className="icon-holder">
                                <span className="icon-file-1" />
                            </div>
                            <h3>
                                <Link href="#">
                                KYC <br /> Verification
                                </Link>
                            </h3>
                            <div className="text">
                                <p>
                                The claims off duty or the obligations business it will
                                frequently occur.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*End Single Account Box style2*/}
                        {/*Start Single Account Box style2*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-account-steps-box-style2 bg4">
                            <div className="inner">
                            <div className="step-box">
                                <h4>Step 04</h4>
                            </div>
                            <div className="icon-holder">
                                <span className="icon-investment" />
                            </div>
                            <h3>
                                <Link href="#">
                                Start Savings for <br /> Your Future
                                </Link>
                            </h3>
                            <div className="text">
                                <p>
                                Toil and pain cases are perfectly simple and easy to all our
                                distinguish.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*End Single Account Box style2*/}
                    </div>
                    </div>
                </section>
                {/*End Account Steps Style2 Area*/}

                {/* Start App Download Area*/}
                <section className="app-download-area">
                    <div
                    className="app-download-area-bg"
                    style={{
                        backgroundImage: "url(assets/images/resources/app-download-1.jpg)"
                    }}
                    />
                    <div className="container">
                    <div className="sec-title text-center">
                        <h2>Open Your Account in 5 Mins</h2>
                        <div className="sub-title">
                        <p>
                            Imaging reaching your goals faster with the help
                            <br /> of our banking tools.
                        </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                        <div className="app-download-content">
                            <p>Available for Android and IOS.</p>
                            <div className="btn-box">
                            <div className="get-app-box">
                                <ul className="clearfix">
                                <li>
                                    <Link href="/contact">
                                    <div className="icon">
                                        <span className="icon-play-store" />
                                    </div>
                                    <div className="text">
                                        <h4>Download</h4>
                                    </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="style2" href="/contact">
                                    <div className="icon">
                                        <span className="icon-apple" />
                                    </div>
                                    <div className="text">
                                        <h4>Contact Us</h4>
                                    </div>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* End App Download Area*/}

                {/* Start Faq Style1 Area */}
                <Faq />
                {/* End Faq Style1 Area */}

            </>


            </Layout>
        </>
    )
}