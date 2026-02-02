'use client'
import Link from "next/link"
import ModalVideo from 'react-modal-video';
import { useState } from 'react'
import Layout from "@/components/layout/Layout"

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const showOtherSections = false; // Set to true to show other sections
    const [activeContent, setActiveContent] = useState('mission'); // 'mission', 'vision', or 'coreValues'

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Bank">
                <div>

             
                    {/*About One Start*/}
                    {showOtherSections && (
                        <section className="intro-style1-area">
                            <div className="container">
                                <div className="row">

                                <div className="col-xl-6">
                                    <div className="intro-style1-video-gallery">
                                    <div className="intro-style1-video-gallery-bg"
                                        style={{ backgroundImage: 'url(assets/images/resources/intro-style1-video-gallery.jpg)' }}>
                                    </div>
                                    <div className="intro-video-gallery-style1">
                                        <div className="icon wow zoomIn animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <a className="video-popup" title="Video Gallery" onClick={() => setIsOpen(true)}>
                                            <span className="icon-play-button-1"></span>
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-xl-6">
                                    <div className="intro-style1-content-box">
                                    <div className="sec-title">
                                        <h2>Known for Trust,<br /> Honesty & Customer<br /> Support</h2>
                                    </div>
                                    <div className="text">
                                        <p>Belongs to those who fail in their duty through weakness of will, which is
                                        the same as saying through shrinking from toil and pain. These cases are
                                        perfectly simple and easy to distinguish.</p>

                                        <p>Choice is untrammelled and when nothing prevents our being able to do
                                        what we like best every pleasure is to be welcomed.</p>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="intro-style1-single-box">
                                            <div className="img-box">
                                            <div className="img-box-inner">
                                                <img src="assets/images/resources/intro-style1-1.jpg" alt="Our Journey" />
                                            </div>
                                            <div className="overlay-text">
                                                <h3>Our Journey</h3>
                                            </div>
                                            </div>
                                            <div className="title-box">
                                            <h3><a href="#">For Over Four Decades Our Bank</a></h3>
                                            </div>
                                        </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="intro-style1-single-box">
                                            <div className="img-box">
                                            <div className="img-box-inner">
                                                <img src="assets/images/resources/intro-style1-2.jpg" alt="Our Team" />
                                            </div>
                                            <div className="overlay-text">
                                                <h3>Our Team</h3>
                                            </div>
                                            </div>
                                            <div className="title-box">
                                            <h3><a href="#">Passion & Professional Management</a></h3>
                                            </div>
                                        </div>
                                        </div>
                                    </div>

                                    </div>
                                </div>

                                </div>
                            </div>
                            {/* Modal Video */}
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="06dV9txztKY" onClose={() => setIsOpen(false)} />
                        </section>
                    )}
                    {/*About One End*/}

                    {/*Start Choose Style1 Area*/}
                    {showOtherSections && (
                        <section className="choose-style1-area">
                        <div className="container">
                        <ul className="row choose-style1__content">
                            {/*Start Single Choose Style1*/}
                            <li className="col-xl-4 col-lg-4 single-choose-style1-colum text-center">
                            <div className="single-choose-style1">
                                <div className="icon">
                                <div className="icon-inner">
                                    <span className="icon-crowd" />
                                </div>
                                <div className="counting">01</div>
                                </div>
                                <div className="text">
                                <h3>Community</h3>
                                <p>
                                    Must explain to you how work mistaken give you complete guide
                                    they cannot foresee pain.
                                </p>
                                </div>
                            </div>
                            </li>
                            {/*End Single Choose Style1*/}
                            {/*Start Single Choose Style1*/}
                            <li className="col-xl-4 col-lg-4 single-choose-style1-colum text-center">
                            <div className="single-choose-style1">
                                <div className="icon">
                                <div className="icon-inner">
                                    <span className="icon-commitment" />
                                </div>
                                <div className="counting">02</div>
                                </div>
                                <div className="text">
                                <h3>Commitment</h3>
                                <p>
                                    Business it will frequently occur that pleasures have to be
                                    repudiated and annoyances accepted.
                                </p>
                                </div>
                            </div>
                            </li>
                            {/*End Single Choose Style1*/}
                            {/*Start Single Choose Style1*/}
                            <li className="col-xl-4 col-lg-4 single-choose-style1-colum text-center">
                            <div className="single-choose-style1">
                                <div className="icon">
                                <div className="icon-inner">
                                    <span className="icon-consistency" />
                                </div>
                                <div className="counting">03</div>
                                </div>
                                <div className="text">
                                <h3>Consistency</h3>
                                <p>
                                    Being able to do what we like best every pleasure is to be
                                    welcomed and pain avoided but in certain.
                                </p>
                                </div>
                            </div>
                            </li>
                            {/*End Single Choose Style1*/}
                        </ul>
                        </div>
                    </section>
                    )}
                    {/*End Choose Style1 Area*/}

                    {/*Start Statements Area*/}
                    <section className="statements-area">
                        <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                            <div className="statements-content-box">
                                <ul>
                                <li>
                                    <div 
                                        className={`single-statements-box ${activeContent === 'mission' ? 'active' : ''}`}
                                        onClick={() => setActiveContent('mission')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                    <div className="img-box">
                                        <img
                                        src="/assets/images/resources/statements-1.jpg"
                                        alt="Mission"
                                        />
                                        <div className="static-content">
                                        <h2>Mission</h2>
                                        </div>
                                        <div className="overlay-content">m</div>
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <div 
                                        className={`single-statements-box ${activeContent === 'vision' ? 'active' : ''}`}
                                        onClick={() => setActiveContent('vision')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                    <div className="img-box">
                                        <img
                                        src="/assets/images/resources/statements-2.jpg"
                                        alt="Vision"
                                        />
                                        <div className="static-content">
                                        <h2>Vision</h2>
                                        </div>
                                        <div className="overlay-content">v</div>
                                    </div>
                                    </div>
                                    <div 
                                        className={`single-statements-box ${activeContent === 'coreValues' ? 'active' : ''}`}
                                        onClick={() => setActiveContent('coreValues')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                    <div className="img-box">
                                        <img
                                        src="/assets/images/resources/statements-3.jpg"
                                        alt="Core Values"
                                        />
                                        <div className="static-content">
                                        <h2>Core Value</h2>
                                        </div>
                                        <div className="overlay-content">c</div>
                                    </div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-xl-6">
                            <div className="statements-text-box">
                                <div className="shape">
                                <span className="icon-origami" />
                                </div>
                                <div className="inner-title">
                                {activeContent === 'mission' && (
                                    <h2 key="mission-title">
                                        OUR MISSION
                                    </h2>
                                )}
                                {activeContent === 'vision' && (
                                    <h2 key="vision-title">
                                        OUR VISION
                                    </h2>
                                )}
                                {activeContent === 'coreValues' && (
                                    <h2 key="corevalues-title">
                                        OUR CORE VALUES
                                    </h2>
                                )}
                                </div>
                                <div className="text">
                                {activeContent === 'mission' && (
                                    <p key="mission-text">
                                        To offer financial services to Tanzanian education ecosystem and related sectors, so as to benefit our society economically and socially.
                                    </p>
                                )}
                                {activeContent === 'vision' && (
                                    <p key="vision-text">
                                        To be a preferred financial solution provider in Tanzania
                                    </p>
                                )}
                                {activeContent === 'coreValues' && (
                                    <div key="corevalues-text">
                                        <p style={{ marginBottom: '20px' }}>
                                            Core values are the ideals and enduring principles that underpin the institution's performance and culture MCB shall embrace the following core values in order to effectively and efficiently deliver to our customers:
                                        </p>
                                        <ul style={{ paddingLeft: '20px', marginTop: '15px', listStyleType: 'disc', color: '#ffffff' }}>
                                            <li style={{ marginBottom: '12px', color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Customer Focus:</strong> Everything we do should add value to the customer.</li>
                                            <li style={{ marginBottom: '12px', color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Innovation:</strong> We are innovative in our approach</li>
                                            <li style={{ marginBottom: '12px', color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Efficiency:</strong> Provide services in cost effective and timely manner.</li>
                                            <li style={{ marginBottom: '12px', color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Team work:</strong> Our approach is collaborative</li>
                                            <li style={{ marginBottom: '12px', color: '#ffffff' }}><strong style={{ color: '#ffffff' }}>Integrity:</strong> We observe high levels of integrity in all our actions.</li>
                                        </ul>
                                    </div>
                                )}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/*End Statements Area*/}

                    {/* Styles for transitions */}
                    <style jsx>{`
                        .statements-text-box {
                            transition: opacity 0.3s ease-in-out;
                        }
                        .single-statements-box {
                            transition: transform 0.3s ease, opacity 0.3s ease;
                        }
                        .single-statements-box:hover {
                            transform: scale(1.05);
                        }
                        .single-statements-box.active {
                            opacity: 1;
                        }
                        .single-statements-box.active .img-box {
                            border: 3px solid #E97927;
                            box-shadow: 0 4px 15px rgba(233, 121, 39, 0.3);
                        }
                        .statements-text-box .inner-title,
                        .statements-text-box .text {
                            animation: fadeIn 0.5s ease-in-out;
                        }
                        .statements-text-box .text ul {
                            color: #ffffff !important;
                        }
                        .statements-text-box .text ul li {
                            color: #ffffff !important;
                        }
                        .statements-text-box .text ul li strong {
                            color: #ffffff !important;
                        }
                        @keyframes fadeIn {
                            from {
                                opacity: 0;
                                transform: translateY(10px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                    `}</style>

                    {/*Start Facts Area*/}
                    {showOtherSections && (
                        <section className="facts-area">
                        <div
                        className="facts-area-bg"
                        style={{
                            backgroundImage: "url(assets/images/backgrounds/facts-area-bg.jpg)"
                        }}
                        ></div>
                        <div className="container">
                        <div className="sec-title text-center">
                            <h2>Few Interesting Numbers</h2>
                            <div className="sub-title">
                            <p>Numbers that speak about banking service.</p>
                            </div>
                        </div>
                        <div className="row">
                            {/*Start Single Fact Box*/}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-box">
                                <div className="icon">
                                <span className="icon-bank">
                                    <span className="path1" />
                                    <span className="path2" />
                                    <span className="path3" />
                                    <span className="path4" />
                                    <span className="path5" />
                                    <span className="path6" />
                                    <span className="path7" />
                                    <span className="path8" />
                                    <span className="path9" />
                                    <span className="path10" />
                                    <span className="path11" />
                                    <span className="path12" />
                                    <span className="path13" />
                                    <span className="path14" />
                                    <span className="path15" />
                                    <span className="path16" />
                                </span>
                                </div>
                                <div className="text">
                                <h3>Our Network</h3>
                                <p>86 Branches around the country</p>
                                </div>
                            </div>
                            </div>
                            {/*End Single Fact Box*/}
                            {/*Start Single Fact Box*/}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-box">
                                <div className="icon">
                                <span className="icon-expert">
                                    <span className="path1" />
                                    <span className="path2" />
                                </span>
                                </div>
                                <div className="text">
                                <h3>Customers</h3>
                                <p>More than 1.5 illion customers</p>
                                </div>
                            </div>
                            </div>
                            {/*End Single Fact Box*/}
                            {/*Start Single Fact Box*/}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-box">
                                <div className="icon">
                                <span className="icon-human">
                                    <span className="path1" />
                                    <span className="path2" />
                                    <span className="path3" />
                                    <span className="path4" />
                                    <span className="path5" />
                                    <span className="path6" />
                                    <span className="path7" />
                                    <span className="path8" />
                                    <span className="path9" />
                                    <span className="path10" />
                                    <span className="path11" />
                                    <span className="path12" />
                                    <span className="path13" />
                                    <span className="path14" />
                                    <span className="path15" />
                                </span>
                                </div>
                                <div className="text">
                                <h3>Employee</h3>
                                <p>1.6k professional employees</p>
                                </div>
                            </div>
                            </div>
                            {/*End Single Fact Box*/}
                            {/*Start Single Fact Box*/}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-box">
                                <div className="icon">
                                <span className="icon-money-bag">
                                    <span className="path1" />
                                    <span className="path2" />
                                </span>
                                </div>
                                <div className="text">
                                <h3>Loans Disbursed</h3>
                                <p>45.6 Cr loans for 258 customers</p>
                                </div>
                            </div>
                            </div>
                            {/*End Single Fact Box*/}
                        </div>
                        </div>
                    </section>
                    )}
                    {/*End Facts Area*/}


                    {/*Start Statistics Area*/}
                    {showOtherSections && (
                        <section className="statistics-area">
                        <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                            <div className="statistics-content-box">
                                <div className="sec-title">
                                <h2>
                                    Better Value
                                    <br /> Banking Experience
                                </h2>
                                </div>
                                <div className="text">
                                <p>
                                    Business it will frequently occur that pleasures have to be
                                    repudiated and annoyances accepted. The wise man therefore
                                    always holds these matters to this principle of selection.
                                </p>
                                </div>
                                <div className="download-box">
                                <div className="icon">
                                    <span className="icon-pdf" />
                                </div>
                                <div className="title">
                                    <h5>
                                    <Link href="#">Download</Link>
                                    </h5>
                                    <h3>Report for the Year 2021</h3>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-6">
                            <div className="statistics-chart">
                                <img src="assets/images/resources/statistics-chart.png" alt="" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    )}
                    {/*End Statistics Area*/}


                    {/*Start Awards Achivements Area*/}
                    {showOtherSections && (
                        <section
                            className="awards-achivements-area"
                            style={{ backgroundColor: "#f7f1eb" }}
                        >
                        <div className="container">
                        <div className="sec-title text-center">
                            <h2>Awards &amp; Major Achivements</h2>
                            <div className="sub-title">
                            <p>Outstanding performance and achievements.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4">
                            <div className="awards-achivements-left-box">
                                {/*Start single awards achivements box */}
                                <div className="single-awards-achivements-box">
                                <div className="top">
                                    <div className="icon">
                                    <img src="assets/images/icon/award-1.png" alt="" />
                                    </div>
                                    <div className="inner-title">
                                    <h3>
                                        Bank of the Year
                                        <br /> Europe
                                    </h3>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                    <span>Year</span>
                                    <b>:</b> 2020-2021
                                    </li>
                                    <li>
                                    <span>Award by</span>
                                    <b>:</b> Los Vegas Business Time
                                    </li>
                                </ul>
                                </div>
                                {/*End single awards achivements box */}
                                {/*Start single awards achivements box */}
                                <div className="single-awards-achivements-box">
                                <div className="top">
                                    <div className="icon">
                                    <img src="assets/images/icon/award-1.png" alt="" />
                                    </div>
                                    <div className="inner-title">
                                    <h3>
                                        Best Commercial
                                        <br /> Bank Award
                                    </h3>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                    <span>Year</span>
                                    <b>:</b> 2017-2018
                                    </li>
                                    <li>
                                    <span>Award by</span>
                                    <b>:</b> Los Vegas Business Time
                                    </li>
                                </ul>
                                </div>
                                {/*End single awards achivements box */}
                            </div>
                            </div>
                            <div className="col-xl-4">
                            <div className="awards-img-box">
                                <div className="round-box" />
                                <div className="shape1">
                                <img src="assets/images/resources/trophy-shape-1.png" alt="" />
                                </div>
                                <div className="shape2">
                                <img src="assets/images/resources/trophy-shape-2.png" alt="" />
                                </div>
                                <div className="inner">
                                <img src="assets/images/resources/trophy.png" alt="" />
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-4">
                            <div className="awards-achivements-right-box">
                                {/*Start single awards achivements box */}
                                <div className="single-awards-achivements-box">
                                <div className="top">
                                    <div className="icon">
                                    <img src="assets/images/icon/award-1.png" alt="" />
                                    </div>
                                    <div className="inner-title">
                                    <h3>
                                        Best Private Bank
                                        <br /> Award
                                    </h3>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                    <span>Year</span>
                                    <b>:</b> 2018-2019
                                    </li>
                                    <li>
                                    <span>Award by</span>
                                    <b>:</b> Los Vegas Business Time
                                    </li>
                                </ul>
                                </div>
                                {/*End single awards achivements box */}
                                {/*Start single awards achivements box */}
                                <div className="single-awards-achivements-box">
                                <div className="top">
                                    <div className="icon">
                                    <img src="assets/images/icon/award-1.png" alt="" />
                                    </div>
                                    <div className="inner-title">
                                    <h3>
                                        Banker’s Bank of the
                                        <br /> Year Awards
                                    </h3>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                    <span>Year</span>
                                    <b>:</b> 2014-2015
                                    </li>
                                    <li>
                                    <span>Award by</span>
                                    <b>:</b> Los Vegas Business Time
                                    </li>
                                </ul>
                                </div>
                                {/*End single awards achivements box */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    )}
                    {/*End Awards Achivements Area*/}
                </div>
            </Layout>
        </>
    )
}