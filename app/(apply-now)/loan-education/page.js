import Layout from "@/components/layout/Layout"
import React from 'react';
import BrandSlider1 from "@/components/slider/BrandSlider1";
export default function Home() {
    
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Education Loan">
                <div>
                <section className="applying-process-area">
                    <div className="container">
                        <div className="sec-title text-center">
                        <h2>Explore and Apply Now</h2>
                        <div className="sub-title">
                            <p>Customised solutions for all your banking needs.</p>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-xl-12">
                            <div className="applying-process-step-box-top"></div>
                        </div>
                        {/* Start Single Applying Process box */}
                        <div className="col-xl-4 col-lg-4">
                            <div className="single-applying-process-box">
                            <div className="applying-process-single-step-box">01</div>
                            <h3>Apply Here</h3>
                            <p>Perfectly simple & easy to distinguish of choice is prevents.</p>
                            </div>
                        </div>
                        {/* End Single Applying Process box */}
                        {/* Start Single Applying Process box */}
                        <div className="col-xl-4 col-lg-4">
                            <div className="single-applying-process-box">
                            <div className="applying-process-single-step-box">02</div>
                            <h3>Get Call Back</h3>
                            <p>Claims off duty or the obligations it will pleasures be repudiated.</p>
                            </div>
                        </div>
                        {/* End Single Applying Process box */}
                        {/* Start Single Applying Process box */}
                        <div className="col-xl-4 col-lg-4">
                            <div className="single-applying-process-box">
                            <div className="applying-process-single-step-box">03</div>
                            <h3>Process Your Request</h3>
                            <p>Demoralized by charms pleasure of the they cannot and trouble.</p>
                            </div>
                        </div>
                        {/* End Single Applying Process box */}
                        </div>
                    </div>
                </section>

                <section className="apply-form-area">
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-12">
                            <div className="apply-form-box clearfix">
                            <div
                                className="apply-form-box-bg"
                                style={{ backgroundImage: 'url(assets/images/resources/apply-form-box-bg.jpg)' }}
                            ></div>
                            <div className="apply-form-box__content">
                                <div className="sec-title">
                                <h2>
                                    Send Your Request &<br /> Get Call Back
                                </h2>
                                <div className="sub-title">
                                    <p>Fill all the necessary details and Get call from experts.</p>
                                </div>
                                </div>

                                <form id="apply-form" name="apply_form" className="default-form2" action="index.html" method="post">
                                <div className="row">
                                    <div className="col-xl-6">
                                    <div className="form-group">
                                        <div className="input-box">
                                        <input type="text" name="form_name" id="formName" placeholder="Your Name" required />
                                        <div className="icon">
                                            <i className="fas fa-user"></i>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-xl-6">
                                    <div className="form-group">
                                        <div className="input-box">
                                        <input type="email" name="form_email" id="formEmail" placeholder="Email" required />
                                        <div className="icon">
                                            <i className="fas fa-envelope-open"></i>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6">
                                    <div className="form-group">
                                        <div className="input-box">
                                        <input type="text" name="form_phone" id="formPhone" placeholder="Phone" />
                                        <div className="icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-xl-6">
                                    <div className="form-group">
                                        <div className="select-box clearfix">
                                        <select className="wide">
                                            <option data-display="State">State</option>
                                            <option value="1">Alaska</option>
                                            <option value="2">Florida</option>
                                            <option value="3">Georgia</option>
                                            <option value="4">Indiana</option>
                                        </select>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6">
                                    <div className="form-group">
                                        <div className="select-box clearfix">
                                        <select className="wide">
                                            <option data-display="City">City</option>
                                            <option value="1">Alaska</option>
                                            <option value="2">Florida</option>
                                            <option value="3">Georgia</option>
                                            <option value="4">Indiana</option>
                                        </select>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-xl-6">
                                    <div className="form-group">
                                        <div className="input-box">
                                        <input type="text" name="date" placeholder="Date" id="datepicker" />
                                        <div className="icon">
                                            <i className="fas fa-calendar"></i>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                    <div className="button-box">
                                        <button className="btn-one" type="submit">
                                        <span className="txt">Send Request</span>
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <section className="partner-area">
                    <div className="container">
                        <div className="partner-area__sec-title">
                        <h3>Corporate Partnership With</h3>
                        </div>
                        <div className="brand-content">
                        <BrandSlider1 />
                        </div>
                    </div>
                </section>
                </div>

            </Layout>
        </>
    )
}