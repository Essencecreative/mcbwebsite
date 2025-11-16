'use client'
import Link from "next/link"
import ModalVideo from 'react-modal-video';
import { useState } from 'react'
import Layout from "@/components/layout/Layout"

export default function History() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="History" headTitle="History">
                <div>

             
                    {/*About One Start*/}
                    <section className="intro-style1-area">
                        <div className="container">
                            <div className="row">

                            <div className="col-xl-6">
                                <div className="intro-style1-video-gallery">
                                <div className="intro-style1-video-gallery-bg"
                                    style={{ backgroundImage: 'url(https://finbank-umber.vercel.app/assets/images/resources/intro-style1-video-gallery.jpg)' }}>
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
                                    <h2 style={{fontSize: 30, marginTop: 20}}>HISTORICAL<br/> BACKGROUND</h2>
                                </div>
                                <div style={{width: 100, height: 5, backgroundColor: '#E97927', marginBottom: 20, marginTop: -10}}>

                                </div>
                                <div className="text">
                                    <p style={{textAlign: 'justify'}}>Mwalimu Commercial Bank PLC. (hereinafter referred to as “MCB”) is a commercial bank incorporated in 2012 and is headquartered in Dar es Salaam Tanzania. The genesis of MCB came about as a result of the conditions prevailing in the market at the time of its constitution.</p>

                                    <p style={{textAlign: 'justify'}}>It was realized that teachers as one major single group of employees would have benefited in having their own bank, easily accessible and which would focus in offering affordable services and suitably convenient products to teachers.</p>
                                     <p style={{textAlign: 'justify'}}>Hence, the teachers, through Tanzania Teachers` Union (TTU), together with the economic wing of TTU registered as Teachers` Development Company Limited (TDCL) decided to establish a bank to serve not only teachers but also the general public as whole aiming at minimization of costs of operations while providing affordable and diverse financial solutions.</p>
                                      <p style={{textAlign: 'justify'}}>The Bank’s objective is to empower teachers and other civil servants economically to improve their living conditions and transform their lives.</p>
                                </div>

                                {/* <div className="row">
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
                                </div> */}

                                </div>
                            </div>

                            </div>
                        </div>

                        {/* Modal Video */}
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="06dV9txztKY" onClose={() => setIsOpen(false)} />
                        </section>
                    {/*About One End*/}


                    {/*Start Facts Area*/}
                    <section className="facts-area">
                        <div
                        className="facts-area-bg"
                       
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
                    {/*End Facts Area*/}


                    {/*Start Statistics Area*/}
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
                                    <h3>Report for the Year 2025</h3>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-6">
                            <div className="statistics-chart">
                                <img src="	https://finbank-umber.vercel.app/assets/images/resources/statistics-chart.png" alt="" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/*End Statistics Area*/}


                  
                </div>
            </Layout>
        </>
    )
}