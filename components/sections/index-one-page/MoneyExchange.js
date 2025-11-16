'use client'
import Link from "next/link"
import { useState } from "react"

export default function MoneyExchange() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            {/* Start Money Exchange Rates Area */}
            <section className="money-exchange-value-area">
                <div
                    className="money-exchange-value-area-bg"
                    style={{ backgroundImage: "url('/assets/images/backgrounds/money-exchange-value.jpg')" }}
                ></div>
                <div className="container">
                    <div className="sec-title text-center">
                        <h2>Foreign Exchange Rates</h2>
                        <div className="sub-title">
                            <p>Denouncing pleasure & praising pain was born.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="money-exchange-value-tab">

                                {/* Start Money Exchange Value Tab Button */}
                                <div className="money-exchange-value-tab__button">
                                    <ul className="tabs-button-box">
                                        <li 
                                            data-tab="#money-send-receive" 
                                            className={`tab-btn-item ${activeIndex === 1 ? 'active-btn-item' : ''}`}
                                            onClick={() => handleOnClick(1)}
                                        >
                                            <h3>Money Send & Receive</h3>
                                        </li>
                                        <li 
                                            data-tab="#load-redeem-forex-card" 
                                            className={`tab-btn-item ${activeIndex === 2 ? 'active-btn-item' : ''}`}
                                            onClick={() => handleOnClick(2)}
                                        >
                                            <h3>Load & Redeem Forex Card</h3>
                                        </li>
                                    </ul>
                                    <div className="right">
                                        <Link href="/accounts">
                                            <span className="icon-menu"></span>Click to Get Assistant
                                        </Link>
                                    </div>
                                </div>
                                {/* End Money Exchange Value Tab Button */}

                                {/* Start Tabs Content Box */}
                                <div className="tabs-content-box">
                                    {/* Tab */}
                                    <div className={`tab-content-box-item ${activeIndex === 1 ? 'tab-content-box-item-active' : ''}`} id="money-send-receive">
                                        <div className="money-exchange-value-tab-content-box-item">
                                        <div className="row">
                                            {/* Start Single Money Exchange Value */}
                                            <div className="col-xl-2 col-lg-4 col-md-4">
                                                <div className="single-money-exchange-value">
                                                    <div className="flag-box">
                                                        <div className="flag-box-inner">
                                                            <img src="assets/images/resources/flag-1.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <h3>usd</h3>
                                                    <ul>
                                                        <li>
                                                            <div className="left">
                                                                <p>Send</p>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="right">
                                                                <p>79.89</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="left">
                                                                <p>Receive</p>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="right">
                                                                <p>76.54</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* End Single Money Exchange Value */}
                                            {/* Start Single Money Exchange Value */}
                                            <div className="col-xl-2 col-lg-4 col-md-4">
                                                <div className="single-money-exchange-value">
                                                    <div className="flag-box">
                                                        <div className="flag-box-inner">
                                                            <img src="assets/images/resources/flag-2.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <h3>sek</h3>
                                                    <ul>
                                                        <li>
                                                            <div className="left">
                                                                <p>Send</p>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="right">
                                                                <p>8.20</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="left">
                                                                <p>Receive</p>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="right">
                                                                <p>7.25</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* End Single Money Exchange Value */}
                                            {/* Start Single Money Exchange Value */}
                                            <div className="col-xl-2 col-lg-4 col-md-4">
                                                <div className="single-money-exchange-value">
                                                    <div className="flag-box">
                                                        <div className="flag-box-inner">
                                                            <img src="assets/images/resources/flag-3.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <h3>gbp</h3>
                                                    <ul>
                                                        <li>
                                                            <div className="left">
                                                                <p>Send</p>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="right">
                                                                <p>101.88</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="left">
                                                                <p>Receive</p>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="right">
                                                                <p>96.55</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* End Single Money Exchange Value */}
                                            {/* Start Single Money Exchange Value */}
                                            <div className="col-xl-2 col-lg-4 col-md-4">
                                                <div className="single-money-exchange-value">
                                                    <div className="flag-box">
                                                        <div className="flag-box-inner">
                                                            <img src="assets/images/resources/flag-4.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <h3>jpy</h3>
                                                    <ul>
                                                        <li>
                                                            <div className="left">
                                                                <p>Send</p>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="right">
                                                                <p>62.82</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="left">
                                                                <p>Receive</p>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="right">
                                                                <p>58.46</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* End Single Money Exchange Value */}
                                            {/* Start Single Money Exchange Value */}
                                            <div className="col-xl-2 col-lg-4 col-md-4">
                                                <div className="single-money-exchange-value">
                                                    <div className="flag-box">
                                                        <div className="flag-box-inner">
                                                            <img src="assets/images/resources/flag-5.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <h3>aud</h3>
                                                    <ul>
                                                        <li>
                                                            <div className="left">
                                                                <p>Send</p>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="right">
                                                                <p>57.52</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="left">
                                                                <p>Receive</p>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="right">
                                                                <p>54.21</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* End Single Money Exchange Value */}
                                            {/* Start Single Money Exchange Value */}
                                            <div className="col-xl-2 col-lg-4 col-md-4">
                                                <div className="single-money-exchange-value">
                                                    <div className="flag-box">
                                                        <div className="flag-box-inner">
                                                            <img src="assets/images/resources/flag-6.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <h3>cad</h3>
                                                    <ul>
                                                        <li>
                                                            <div className="left">
                                                                <p>Send</p>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="right">
                                                                <p>63.41</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="left">
                                                                <p>Receive</p>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="right">
                                                                <p>59.75</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* End Single Money Exchange Value */}
                                        </div>
                                        </div>
                                    </div>

                                    {/* Tab */}
                                    <div className={`tab-content-box-item ${activeIndex === 2 ? 'tab-content-box-item-active' : ''}`} id="load-redeem-forex-card">
                                        <div className="money-exchange-value-tab-content-box-item">
                                        <div className="row">
                                            {/* Start Single Money Exchange Value */}
                                            <div className="col-xl-2 col-lg-4 col-md-4">
                                                <div className="single-money-exchange-value">
                                                <div className="flag-box">
                                                    <div className="flag-box-inner">
                                                    <img src="/assets/images/resources/flag-4.png" alt="" />
                                                    </div>
                                                </div>
                                                <h3>jpy</h3>
                                                <ul>
                                                    <li>
                                                    <div className="left">
                                                        <p>Send</p>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="right">
                                                        <p>62.82</p>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div className="left">
                                                        <p>Receive</p>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="right">
                                                        <p>58.46</p>
                                                    </div>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                            {/* End Single Money Exchange Value */}

                                            {/* Start Single Money Exchange Value */}
                                            <div className="col-xl-2 col-lg-4 col-md-4">
                                                <div className="single-money-exchange-value">
                                                <div className="flag-box">
                                                    <div className="flag-box-inner">
                                                    <img src="/assets/images/resources/flag-5.png" alt="" />
                                                    </div>
                                                </div>
                                                <h3>aud</h3>
                                                <ul>
                                                    <li>
                                                    <div className="left">
                                                        <p>Send</p>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="right">
                                                        <p>57.52</p>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div className="left">
                                                        <p>Receive</p>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="right">
                                                        <p>54.21</p>
                                                    </div>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                            {/* End Single Money Exchange Value */}

                                            {/* Start Single Money Exchange Value */}
                                            <div className="col-xl-2 col-lg-4 col-md-4">
                                                <div className="single-money-exchange-value">
                                                <div className="flag-box">
                                                    <div className="flag-box-inner">
                                                    <img src="/assets/images/resources/flag-6.png" alt="" />
                                                    </div>
                                                </div>
                                                <h3>cad</h3>
                                                <ul>
                                                    <li>
                                                    <div className="left">
                                                        <p>Send</p>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="right">
                                                        <p>63.41</p>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div className="left">
                                                        <p>Receive</p>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="right">
                                                        <p>59.75</p>
                                                    </div>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                            {/* End Single Money Exchange Value */}

                                            {/* Start Single Money Exchange Value */}
                                            <div className="col-xl-2 col-lg-4 col-md-4">
                                                <div className="single-money-exchange-value">
                                                <div className="flag-box">
                                                    <div className="flag-box-inner">
                                                    <img src="/assets/images/resources/flag-1.png" alt="" />
                                                    </div>
                                                </div>
                                                <h3>usd</h3>
                                                <ul>
                                                    <li>
                                                    <div className="left">
                                                        <p>Send</p>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="right">
                                                        <p>79.89</p>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div className="left">
                                                        <p>Receive</p>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="right">
                                                        <p>76.54</p>
                                                    </div>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                            {/* End Single Money Exchange Value */}

                                            {/* Start Single Money Exchange Value */}
                                            <div className="col-xl-2 col-lg-4 col-md-4">
                                                <div className="single-money-exchange-value">
                                                <div className="flag-box">
                                                    <div className="flag-box-inner">
                                                    <img src="/assets/images/resources/flag-2.png" alt="" />
                                                    </div>
                                                </div>
                                                <h3>sek</h3>
                                                <ul>
                                                    <li>
                                                    <div className="left">
                                                        <p>Send</p>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="right">
                                                        <p>8.20</p>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div className="left">
                                                        <p>Receive</p>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="right">
                                                        <p>7.25</p>
                                                    </div>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                            {/* End Single Money Exchange Value */}

                                            {/* Start Single Money Exchange Value */}
                                            <div className="col-xl-2 col-lg-4 col-md-4">
                                                <div className="single-money-exchange-value">
                                                <div className="flag-box">
                                                    <div className="flag-box-inner">
                                                    <img src="/assets/images/resources/flag-3.png" alt="" />
                                                    </div>
                                                </div>
                                                <h3>gbp</h3>
                                                <ul>
                                                    <li>
                                                    <div className="left">
                                                        <p>Send</p>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="right">
                                                        <p>101.88</p>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div className="left">
                                                        <p>Receive</p>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="right">
                                                        <p>96.55</p>
                                                    </div>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                            {/* End Single Money Exchange Value */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Tabs Content Box */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Money Exchange Rates Area */}
        </>
    )
}
