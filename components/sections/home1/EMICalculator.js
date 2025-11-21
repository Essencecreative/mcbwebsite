"use client"
import React, { useState } from 'react';
import Link from "next/link"

export default function EMICalculator() {
    const [activeTab, setActiveTab] = useState('home-loan');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <>
            <section className="emi-calculator-area">
                <div className="container">
                    <div className="sec-title text-center">
                        <h2>Flexible EMI Calculator Online</h2>
                        <div className="sub-title">
                            <p>Easily calculate your equated monthly instalment online.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="emi-calculator-tab">
                                <div className="emi-calculator-tab__button">
                                    <div
                                        className="emi-calculator-tab__button--bg"
                                        style={{ backgroundImage: 'url(/assets/images/resources/emi-calculator.jpg)' }}
                                    ></div>
                                    <ul className="tabs-button-box">
                                        <li
                                            className={`tab-btn-item ${activeTab === 'home-loan' ? 'active-btn-item' : ''}`}
                                            onClick={() => handleTabClick('home-loan')}
                                        >
                                            <div className="icon-box">
                                                <span className="icon-loan-1"></span>
                                                <div className="overlay-text">
                                                    <p>Home Loan</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li
                                            className={`tab-btn-item ${activeTab === 'personal-loan' ? 'active-btn-item' : ''}`}
                                            onClick={() => handleTabClick('personal-loan')}
                                        >
                                            <div className="icon-box">
                                                <span className="icon-loan-2"></span>
                                                <div className="overlay-text">
                                                    <p>Personal Loan</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li
                                            className={`tab-btn-item ${activeTab === 'vehicle-loan' ? 'active-btn-item' : ''}`}
                                            onClick={() => handleTabClick('vehicle-loan')}
                                        >
                                            <div className="icon-box">
                                                <span className="icon-car-loan"></span>
                                                <div className="overlay-text">
                                                    <p>Vehicle Loan</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="emi-calculator-tab-content-box-outer">
                                    <div className="tabs-content-box">
                                        {/* Home Loan Tab */}
                                        <div className={`tab-content-box-item ${activeTab === 'home-loan' ? 'tab-content-box-item-active' : ''}`} id="home-loan">
                                            <div className="emi-calculator-tab-content-box-item">
                                                <div className="range-box">
                                                    {/* Home Loan content */}
                                                    <div className="row">
                                                        <div className="col-lg-12 column">
                                                            <div className="price-range-box">
                                                                <div className="inner">
                                                                    <h4>Loan Amount</h4>
                                                                    <div className="price-range-slider">
                                                                        <div className="price-range"></div>
                                                                    </div>
                                                                    <div className="range-input">
                                                                        <div className="input">
                                                                            <input
                                                                                type="text"
                                                                                className="property-amount"
                                                                                name="field-name"
                                                                                readOnly
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right-box">
                                                                    <h5>$1,000,000</h5>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12 column">
                                                            <div className="loan-term-range-box">
                                                                <div className="inner">
                                                                    <h4>
                                                                        Loan Term <span>(Years)</span>
                                                                    </h4>
                                                                    <div className="loan-term-range-slider">
                                                                        <div className="price-range"></div>
                                                                    </div>
                                                                    <div className="range-input">
                                                                        <div className="input">
                                                                            <input
                                                                                type="text"
                                                                                className="loan-term-range"
                                                                                name="field-name"
                                                                                readOnly
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right-box">
                                                                    <h5>20Yrs</h5>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12 column">
                                                            <div className="interest-rate-range-box">
                                                                <div className="inner">
                                                                    <h4>Interest Rate</h4>
                                                                    <div className="interest-rate-range-slider">
                                                                        <div className="price-range"></div>
                                                                    </div>
                                                                    <div className="range-input">
                                                                        <div className="input">
                                                                            <input
                                                                                type="text"
                                                                                className="interest-rate-range"
                                                                                name="field-name"
                                                                                readOnly
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right-box">
                                                                    <h5>8%</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="emi-calculator-output-box clearfix">
                                                  <div className="left-box">
                                                    <div className="top">
                                                      <div className="icon">
                                                        <span className="icon-loan-3"></span>
                                                      </div>
                                                      <div className="inner-title">
                                                        <h3>Your Monthly EMI</h3>
                                                        <h2>
                                                          <span>$</span>10,250
                                                        </h2>
                                                      </div>
                                                    </div>
                                                    <div className="btns-box">
                                                      <Link className="btn-one" href="/contact">
                                                        <span className="txt">Apply Online</span>
                                                      </Link>
                                                    </div>
                                                  </div>
                                                  <div className="right-box">
                                                    <ul>
                                                      <li>
                                                        <div className="inner">
                                                          <div className="icon">
                                                            <span className="icon-right-arrow"></span>
                                                          </div>
                                                          <div className="text">
                                                            <Link href="#">Interest Amount</Link>
                                                            <p>$720,260</p>
                                                          </div>
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div className="inner">
                                                          <div className="icon">
                                                            <span className="icon-right-arrow"></span>
                                                          </div>
                                                          <div className="text">
                                                            <Link href="#">Total Amount Payable</Link>
                                                            <p>$720,260</p>
                                                          </div>
                                                        </div>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Personal Loan Tab */}
                                        <div className={`tab-content-box-item ${activeTab === 'personal-loan' ? 'tab-content-box-item-active' : ''}`} id="personal-loan">
                                            <div className="emi-calculator-tab-content-box-item">
                                                <div className="range-box">
                                                    {/* Personal Loan content */}
                                                    <div className="row">
                                                        <div className="col-lg-12 column">
                                                            <div className="price-range-box">
                                                                <div className="inner">
                                                                    <h4>Loan Amount</h4>
                                                                    <div className="price-range-slider">
                                                                        <div className="price-range"></div>
                                                                    </div>
                                                                    <div className="range-input">
                                                                        <div className="input">
                                                                            <input
                                                                                type="text"
                                                                                className="property-amount"
                                                                                name="field-name"
                                                                                readOnly
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right-box">
                                                                    <h5>$1,000,000</h5>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12 column">
                                                            <div className="loan-term-range-box">
                                                                <div className="inner">
                                                                    <h4>
                                                                        Loan Term <span>(Years)</span>
                                                                    </h4>
                                                                    <div className="loan-term-range-slider">
                                                                        <div className="price-range"></div>
                                                                    </div>
                                                                    <div className="range-input">
                                                                        <div className="input">
                                                                            <input
                                                                                type="text"
                                                                                className="loan-term-range"
                                                                                name="field-name"
                                                                                readOnly
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right-box">
                                                                    <h5>20Yrs</h5>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12 column">
                                                            <div className="interest-rate-range-box">
                                                                <div className="inner">
                                                                    <h4>Interest Rate</h4>
                                                                    <div className="interest-rate-range-slider">
                                                                        <div className="price-range"></div>
                                                                    </div>
                                                                    <div className="range-input">
                                                                        <div className="input">
                                                                            <input
                                                                                type="text"
                                                                                className="interest-rate-range"
                                                                                name="field-name"
                                                                                readOnly
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right-box">
                                                                    <h5>8%</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="emi-calculator-output-box clearfix">
                                                  <div className="left-box">
                                                    <div className="top">
                                                      <div className="icon">
                                                        <span className="icon-loan-3"></span>
                                                      </div>
                                                      <div className="inner-title">
                                                        <h3>Your Monthly EMI</h3>
                                                        <h2>
                                                          <span>$</span>10,250
                                                        </h2>
                                                      </div>
                                                    </div>
                                                    <div className="btns-box">
                                                      <Link className="btn-one" href="/contact">
                                                        <span className="txt">Apply Online</span>
                                                      </Link>
                                                    </div>
                                                  </div>
                                                  <div className="right-box">
                                                    <ul>
                                                      <li>
                                                        <div className="inner">
                                                          <div className="icon">
                                                            <span className="icon-right-arrow"></span>
                                                          </div>
                                                          <div className="text">
                                                            <Link href="#">Interest Amount</Link>
                                                            <p>$720,260</p>
                                                          </div>
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div className="inner">
                                                          <div className="icon">
                                                            <span className="icon-right-arrow"></span>
                                                          </div>
                                                          <div className="text">
                                                            <Link href="#">Total Amount Payable</Link>
                                                            <p>$720,260</p>
                                                          </div>
                                                        </div>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Vehicle Loan Tab */}
                                        <div className={`tab-content-box-item ${activeTab === 'vehicle-loan' ? 'tab-content-box-item-active' : ''}`} id="vehicle-loan">
                                            <div className="emi-calculator-tab-content-box-item">
                                                <div className="range-box">
                                                    {/* Vehicle Loan content */}
                                                    <div className="row">
                                                        <div className="col-lg-12 column">
                                                            <div className="price-range-box">
                                                                <div className="inner">
                                                                    <h4>Loan Amount</h4>
                                                                    <div className="price-range-slider">
                                                                        <div className="price-range"></div>
                                                                    </div>
                                                                    <div className="range-input">
                                                                        <div className="input">
                                                                            <input
                                                                                type="text"
                                                                                className="property-amount"
                                                                                name="field-name"
                                                                                readOnly
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right-box">
                                                                    <h5>$1,000,000</h5>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12 column">
                                                            <div className="loan-term-range-box">
                                                                <div className="inner">
                                                                    <h4>
                                                                        Loan Term <span>(Years)</span>
                                                                    </h4>
                                                                    <div className="loan-term-range-slider">
                                                                        <div className="price-range"></div>
                                                                    </div>
                                                                    <div className="range-input">
                                                                        <div className="input">
                                                                            <input
                                                                                type="text"
                                                                                className="loan-term-range"
                                                                                name="field-name"
                                                                                readOnly
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right-box">
                                                                    <h5>20Yrs</h5>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12 column">
                                                            <div className="interest-rate-range-box">
                                                                <div className="inner">
                                                                    <h4>Interest Rate</h4>
                                                                    <div className="interest-rate-range-slider">
                                                                        <div className="price-range"></div>
                                                                    </div>
                                                                    <div className="range-input">
                                                                        <div className="input">
                                                                            <input
                                                                                type="text"
                                                                                className="interest-rate-range"
                                                                                name="field-name"
                                                                                readOnly
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right-box">
                                                                    <h5>8%</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="emi-calculator-output-box clearfix">
                                                  <div className="left-box">
                                                    <div className="top">
                                                      <div className="icon">
                                                        <span className="icon-loan-3"></span>
                                                      </div>
                                                      <div className="inner-title">
                                                        <h3>Your Monthly EMI</h3>
                                                        <h2>
                                                          <span>$</span>10,250
                                                        </h2>
                                                      </div>
                                                    </div>
                                                    <div className="btns-box">
                                                      <Link className="btn-one" href="/contact">
                                                        <span className="txt">Apply Online</span>
                                                      </Link>
                                                    </div>
                                                  </div>
                                                  <div className="right-box">
                                                    <ul>
                                                      <li>
                                                        <div className="inner">
                                                          <div className="icon">
                                                            <span className="icon-right-arrow"></span>
                                                          </div>
                                                          <div className="text">
                                                            <Link href="#">Interest Amount</Link>
                                                            <p>$720,260</p>
                                                          </div>
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div className="inner">
                                                          <div className="icon">
                                                            <span className="icon-right-arrow"></span>
                                                          </div>
                                                          <div className="text">
                                                            <Link href="#">Total Amount Payable</Link>
                                                            <p>$720,260</p>
                                                          </div>
                                                        </div>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
