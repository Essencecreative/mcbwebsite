"use client"
import { useState } from 'react';
import { useEffect } from 'react';
export default function BankingTab() {
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
        </>
    )
}