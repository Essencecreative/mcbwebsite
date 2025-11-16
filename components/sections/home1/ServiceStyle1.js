'use client'
import Link from "next/link"
import { useState } from "react"
export default function ServiceStyle1() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
        <section className="service-style1-area">
            <div
                className="service-style1-bg"
                style={{ backgroundImage: 'url(/assets/images/backgrounds/service-style1.jpg)' }}
            ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="service-style1-title">
                            <div className="sec-title">
                                <h2>Banking For Your Needs</h2>
                                <div className="sub-title">
                                    <p>The bank that builds better relationships.</p>
                                </div>
                            </div>
                            <div className="get-assistant-box">
                                <a href="#"><span className="icon-chatting"></span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="service-style1-tab">
                            {/* Start Service Style1 Tab Button */}
                            <div className="service-style1-tab__button">
                                <ul className="tabs-button-box clearfix">
                                    <li
                                        data-tab="#individuals"
                                        className={`tab-btn-item ${activeIndex === 0 ? 'active-btn-item' : ''}`}
                                        onClick={() => handleOnClick(0)}
                                    >
                                        <div className="inner">
                                            <div className="left">
                                                <h4>Banking for</h4>
                                                <h3>Individuals</h3>
                                            </div>
                                            <div className="right">
                                                <span className="icon-down-arrow"></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        data-tab="#companies"
                                        className={`tab-btn-item ${activeIndex === 1 ? 'active-btn-item' : ''}`}
                                        onClick={() => handleOnClick(1)}
                                    >
                                        <div className="inner">
                                            <div className="left">
                                                <h4>Banking for</h4>
                                                <h3>Companies</h3>
                                            </div>
                                            <div className="right">
                                                <span className="icon-down-arrow"></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* End Service Style1 Tab Button */}

                            {/* Start Tabs Content Box */}
                            <div className="tabs-content-box">
                                {/* Tab */}
                                <div className={`tab-content-box-item ${activeIndex === 0 ? 'tab-content-box-item-active' : ''}`} id="individuals">
                                    <div className="service-style1-tab-content-box-item">
                                        <div className="row">
                                            {/* Start Single Service Box Style1 */}
                                            <div className="col-xl-4 col-lg-4">
                                                <div className="single-service-box-style1">
                                                    <div className="icon">
                                                        <span className="icon-safebox"></span>
                                                    </div>
                                                    <h3><Link href="#">Savings & CDs</Link></h3>
                                                    <div className="border-box"></div>
                                                    <p>Take trivial example which of us ever all undertakes laborious.</p>
                                                    <h6><span>*</span> Interest rate up to 5% p.a</h6>
                                                    <div className="btn-box">
                                                        <Link href="#"><span className="icon-right-arrow"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Service Box Style1 */}
                                            {/* Start Single Service Box Style1 */}
                                            <div className="col-xl-4 col-lg-4">
                                                <div className="single-service-box-style1">
                                                    <div className="icon">
                                                        <span className="icon-online"></span>
                                                    </div>
                                                    <h3><Link href="#">Online & Mobile</Link></h3>
                                                    <div className="border-box"></div>
                                                    <p>Equal blame belongs to those who fail their duty through weakness.</p>
                                                    <h6><span>*</span> Terms & Conditions</h6>
                                                    <div className="btn-box">
                                                        <Link href="#"><span className="icon-right-arrow"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Service Box Style1 */}
                                            {/* Start Single Service Box Style1 */}
                                            <div className="col-xl-4 col-lg-4">
                                                <div className="single-service-box-style1">
                                                    <div className="icon">
                                                        <span className="icon-loan"></span>
                                                    </div>
                                                    <h3><Link href="#">Consumer Loans</Link></h3>
                                                    <div className="border-box"></div>
                                                    <p>Duty or the obligations of business will frequently occur repudiated.</p>
                                                    <h6><span>*</span> Check today’s Interest Rates</h6>
                                                    <div className="btn-box">
                                                        <Link href="#"><span className="icon-right-arrow"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Service Box Style1 */}
                                        </div>
                                    </div>
                                </div>

                                {/* Tab */}
                                <div className={`tab-content-box-item ${activeIndex === 1 ? 'tab-content-box-item-active' : ''}`} id="companies">
                                    <div className="service-style1-tab-content-box-item">
                                        <div className="row">
                                            {/* Start Single Service Box Style1 */}
                                            <div className="col-xl-4 col-lg-4">
                                                <div className="single-service-box-style1">
                                                    <div className="icon">
                                                        <span className="icon-safebox"></span>
                                                    </div>
                                                    <h3><Link href="#">Savings & CDs</Link></h3>
                                                    <div className="border-box"></div>
                                                    <p>Take trivial example which of us ever all undertakes laborious.</p>
                                                    <h6><span>*</span> Interest rate up to 5% p.a</h6>
                                                    <div className="btn-box">
                                                        <Link href="#"><span className="icon-right-arrow"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Service Box Style1 */}
                                            {/* Start Single Service Box Style1 */}
                                            <div className="col-xl-4 col-lg-4">
                                                <div className="single-service-box-style1">
                                                    <div className="icon">
                                                        <span className="icon-online"></span>
                                                    </div>
                                                    <h3><Link href="#">Online & Mobile</Link></h3>
                                                    <div className="border-box"></div>
                                                    <p>Equal blame belongs to those who fail their duty through weakness.</p>
                                                    <h6><span>*</span> Terms & Conditions</h6>
                                                    <div className="btn-box">
                                                        <Link href="#"><span className="icon-right-arrow"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Service Box Style1 */}
                                            {/* Start Single Service Box Style1 */}
                                            <div className="col-xl-4 col-lg-4">
                                                <div className="single-service-box-style1">
                                                    <div className="icon">
                                                        <span className="icon-loan"></span>
                                                    </div>
                                                    <h3><Link href="#">Consumer Loans</Link></h3>
                                                    <div className="border-box"></div>
                                                    <p>Duty or the obligations of business will frequently occur repudiated.</p>
                                                    <h6><span>*</span> Check today’s Interest Rates</h6>
                                                    <div className="btn-box">
                                                        <Link href="#"><span className="icon-right-arrow"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Service Box Style1 */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Tabs Content Box */}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="service-style1__btns-box text-center">
                            <Link className="btn-one" href="/accounts">
                                <span className="txt">View All Services</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    )
}
