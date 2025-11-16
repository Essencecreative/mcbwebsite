"use client"; 
import { useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Install Swiper modules

const FeaturesStyle2 = () => {
    const [activeTab, setActiveTab] = useState('#tabid11');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <section className="features-style2-area">
            <div className="container">
                <div className="sec-title text-center">
                    <h2>Emergency Service Requests</h2>
                    <div className="sub-title">
                        <p>List of banking service requests all in one place.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="features-style2-content">

                            {/* Start Features Style2 Tab */}
                            <div className="features-style2-tab">
                                {/* Start Features Style2 Tab Button */}
                                <div className="features-style2-tab__button">
                                    <Swiper
                                        spaceBetween={0}
                                        slidesPerView={4}
                                        breakpoints={{
                                            0: { slidesPerView: 1 },
                                            768: { slidesPerView: 2 },
                                            992: { slidesPerView: 3 },
                                            1200: { slidesPerView: 4 }
                                        }}
                                        className="features-style2-carousel"
                                    >
                                        <SwiperSlide>
                                            <li
                                                className={`tab-btn-item ${activeTab === '#tabid11' ? 'active-btn-item' : ''}`}
                                                onClick={() => handleTabClick('#tabid11')}
                                            >
                                                <div className="single-features-box-style2">
                                                    <div className="icon"><span className="icon-credit-card"></span></div>
                                                    <div className="title">
                                                        <h3><a href="#">Credit / Debit Card<br /> Related</a></h3>
                                                    </div>
                                                    <div className="arrow-button">
                                                        <a href="#"><span className="icon-chevron"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <li
                                                className={`tab-btn-item ${activeTab === '#tabid22' ? 'active-btn-item' : ''}`}
                                                onClick={() => handleTabClick('#tabid22')}
                                            >
                                                <div className="single-features-box-style2">
                                                    <div className="icon"><span className="icon-computer"></span></div>
                                                    <div className="title">
                                                        <h3><a href="#">Mobile / Internet<br /> Banking</a></h3>
                                                    </div>
                                                    <div className="arrow-button">
                                                        <a href="#"><span className="icon-chevron"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <li
                                                data-tab="#tabid33"
                                                className={`tab-btn-item ${activeTab === '#tabid33' ? 'active-btn-item' : ''}`}
                                                onClick={() => handleTabClick('#tabid33')}
                                            >
                                                <div className="single-features-box-style2">
                                                    <div className="icon">
                                                        <span className="icon-book"></span>
                                                    </div>
                                                    <div className="title">
                                                        <h3>
                                                            <a href="#">Account Details<br /> Changing</a>
                                                        </h3>
                                                    </div>
                                                    <div className="arrow-button">
                                                        <a href="#">
                                                            <span className="icon-chevron"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <li
                                                data-tab="#tabid44"
                                                className={`tab-btn-item ${activeTab === '#tabid44' ? 'active-btn-item' : ''}`}
                                                onClick={() => handleTabClick('#tabid44')}
                                            >
                                                <div className="single-features-box-style2">
                                                    <div className="icon">
                                                        <span className="icon-check-book"></span>
                                                    </div>
                                                    <div className="title">
                                                        <h3>
                                                            <a href="#">Cheque Book / DD<br /> Related</a>
                                                        </h3>
                                                    </div>
                                                    <div className="arrow-button">
                                                        <a href="#">
                                                            <span className="icon-chevron"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <li
                                                data-tab="#tabid55"
                                                className={`tab-btn-item ${activeTab === '#tabid55' ? 'active-btn-item' : ''}`}
                                                onClick={() => handleTabClick('#tabid55')}
                                            >
                                                <div className="single-features-box-style2">
                                                    <div className="icon">
                                                        <span className="icon-credit-card"></span>
                                                    </div>
                                                    <div className="title">
                                                        <h3>
                                                            <a href="#">Credit / Debit Card<br /> Related</a>
                                                        </h3>
                                                    </div>
                                                    <div className="arrow-button">
                                                        <a href="#">
                                                            <span className="icon-chevron"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <li
                                                data-tab="#tabid66"
                                                className={`tab-btn-item ${activeTab === '#tabid66' ? 'active-btn-item' : ''}`}
                                                onClick={() => handleTabClick('#tabid66')}
                                            >
                                                <div className="single-features-box-style2">
                                                    <div className="icon">
                                                        <span className="icon-computer"></span>
                                                    </div>
                                                    <div className="title">
                                                        <h3>
                                                            <a href="#">Mobile / Internet<br /> Banking</a>
                                                        </h3>
                                                    </div>
                                                    <div className="arrow-button">
                                                        <a href="#">
                                                            <span className="icon-chevron"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </SwiperSlide>
                                        {/* Add other tabs similarly */}
                                    </Swiper>
                                </div>
                                {/* End Features Style2 Tab Button */}

                                {/* Start Tabs Content Box */}
                                <div className="tabs-content-box">
                                    <div className={`tab-content-box-item ${activeTab === '#tabid11' ? 'tab-content-box-item-active' : ''}`} id="tabid11">
                                        <div className="features-style2-tab-content-box-item">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="features-style2-text-box">
                                                        <ul>
                                                            <li><a href="#">Block Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Generate Debit Card Pin Number <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Unlock Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Reissue Lost Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="features-style2-banner-box">
                                                        <div className="text-box">
                                                            <Swiper
                                                                loop={true}
                                                                pagination={{ clickable: true }}
                                                                className="features-style2-banner-carousel"
                                                            >
                                                                <SwiperSlide>
                                                                    <div className="single-item">
                                                                        <span className="icon-headphones"></span>
                                                                        <h4>Call for</h4>
                                                                        <h3>Private Banking</h3>
                                                                        <h2><a href="tel:2512353256">+8 (222) 123 456 78</a></h2>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="single-item">
                                                                        <span className="icon-headphones"></span>
                                                                        <h4>Call for</h4>
                                                                        <h3>Private Banking</h3>
                                                                        <h2><a href="tel:2512353256">+8 (222) 123 456 78</a></h2>
                                                                    </div>
                                                                </SwiperSlide>
                                                                {/* Add other slides */}
                                                            </Swiper>
                                                        </div>
                                                        <div className="img-box">
                                                            <div className="img-box-bg" style={{ backgroundImage: 'url(/assets/images/resources/features-style2-banner-1.jpg)' }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-content-box-item ${activeTab === '#tabid22' ? 'tab-content-box-item-active' : ''}`} id="tabid11">
                                        <div className="features-style2-tab-content-box-item">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="features-style2-text-box">
                                                        <ul>
                                                            <li><a href="#">Block Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Generate Debit Card Pin Number <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Unlock Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Reissue Lost Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="features-style2-banner-box">
                                                        <div className="text-box">
                                                            <Swiper
                                                                loop={true}
                                                                pagination={{ clickable: true }}
                                                                className="features-style2-banner-carousel"
                                                            >
                                                                <SwiperSlide>
                                                                    <div className="single-item">
                                                                        <span className="icon-headphones"></span>
                                                                        <h4>Call for</h4>
                                                                        <h3>Private Banking</h3>
                                                                        <h2><a href="tel:2512353256">+8 (222) 123 456 78</a></h2>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="single-item">
                                                                        <span className="icon-headphones"></span>
                                                                        <h4>Call for</h4>
                                                                        <h3>Private Banking</h3>
                                                                        <h2><a href="tel:2512353256">+8 (222) 123 456 78</a></h2>
                                                                    </div>
                                                                </SwiperSlide>
                                                                {/* Add other slides */}
                                                            </Swiper>
                                                        </div>
                                                        <div className="img-box">
                                                            <div className="img-box-bg" style={{ backgroundImage: 'url(/assets/images/resources/features-style2-banner-1.jpg)' }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-content-box-item ${activeTab === '#tabid33' ? 'tab-content-box-item-active' : ''}`} id="tabid11">
                                        <div className="features-style2-tab-content-box-item">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="features-style2-text-box">
                                                        <ul>
                                                            <li><a href="#">Block Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Generate Debit Card Pin Number <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Unlock Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Reissue Lost Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="features-style2-banner-box">
                                                        <div className="text-box">
                                                            <Swiper
                                                                loop={true}
                                                                pagination={{ clickable: true }}
                                                                className="features-style2-banner-carousel"
                                                            >
                                                                <SwiperSlide>
                                                                    <div className="single-item">
                                                                        <span className="icon-headphones"></span>
                                                                        <h4>Call for</h4>
                                                                        <h3>Private Banking</h3>
                                                                        <h2><a href="tel:2512353256">+8 (222) 123 456 78</a></h2>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="single-item">
                                                                        <span className="icon-headphones"></span>
                                                                        <h4>Call for</h4>
                                                                        <h3>Private Banking</h3>
                                                                        <h2><a href="tel:2512353256">+8 (222) 123 456 78</a></h2>
                                                                    </div>
                                                                </SwiperSlide>
                                                                {/* Add other slides */}
                                                            </Swiper>
                                                        </div>
                                                        <div className="img-box">
                                                            <div className="img-box-bg" style={{ backgroundImage: 'url(/assets/images/resources/features-style2-banner-1.jpg)' }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-content-box-item ${activeTab === '#tabid44' ? 'tab-content-box-item-active' : ''}`} id="tabid11">
                                        <div className="features-style2-tab-content-box-item">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="features-style2-text-box">
                                                        <ul>
                                                            <li><a href="#">Block Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Generate Debit Card Pin Number <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Unlock Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Reissue Lost Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="features-style2-banner-box">
                                                        <div className="text-box">
                                                            <Swiper
                                                                loop={true}
                                                                pagination={{ clickable: true }}
                                                                className="features-style2-banner-carousel"
                                                            >
                                                                <SwiperSlide>
                                                                    <div className="single-item">
                                                                        <span className="icon-headphones"></span>
                                                                        <h4>Call for</h4>
                                                                        <h3>Private Banking</h3>
                                                                        <h2><a href="tel:2512353256">+8 (222) 123 456 78</a></h2>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="single-item">
                                                                        <span className="icon-headphones"></span>
                                                                        <h4>Call for</h4>
                                                                        <h3>Private Banking</h3>
                                                                        <h2><a href="tel:2512353256">+8 (222) 123 456 78</a></h2>
                                                                    </div>
                                                                </SwiperSlide>
                                                                {/* Add other slides */}
                                                            </Swiper>
                                                        </div>
                                                        <div className="img-box">
                                                            <div className="img-box-bg" style={{ backgroundImage: 'url(/assets/images/resources/features-style2-banner-1.jpg)' }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-content-box-item ${activeTab === '#tabid55' ? 'tab-content-box-item-active' : ''}`} id="tabid11">
                                        <div className="features-style2-tab-content-box-item">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="features-style2-text-box">
                                                        <ul>
                                                            <li><a href="#">Block Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Generate Debit Card Pin Number <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Unlock Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Reissue Lost Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="features-style2-banner-box">
                                                        <div className="text-box">
                                                            <Swiper
                                                                loop={true}
                                                                pagination={{ clickable: true }}
                                                                className="features-style2-banner-carousel"
                                                            >
                                                                <SwiperSlide>
                                                                    <div className="single-item">
                                                                        <span className="icon-headphones"></span>
                                                                        <h4>Call for</h4>
                                                                        <h3>Private Banking</h3>
                                                                        <h2><a href="tel:2512353256">+8 (222) 123 456 78</a></h2>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="single-item">
                                                                        <span className="icon-headphones"></span>
                                                                        <h4>Call for</h4>
                                                                        <h3>Private Banking</h3>
                                                                        <h2><a href="tel:2512353256">+8 (222) 123 456 78</a></h2>
                                                                    </div>
                                                                </SwiperSlide>
                                                                {/* Add other slides */}
                                                            </Swiper>
                                                        </div>
                                                        <div className="img-box">
                                                            <div className="img-box-bg" style={{ backgroundImage: 'url(/assets/images/resources/features-style2-banner-1.jpg)' }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-content-box-item ${activeTab === '#tabid66' ? 'tab-content-box-item-active' : ''}`} id="tabid11">
                                        <div className="features-style2-tab-content-box-item">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="features-style2-text-box">
                                                        <ul>
                                                            <li><a href="#">Block Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Generate Debit Card Pin Number <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Unlock Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                            <li><a href="#">Reissue Lost Debit / ATM Card <span className="icon-right-arrow"></span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="features-style2-banner-box">
                                                        <div className="text-box">
                                                            <Swiper
                                                                loop={true}
                                                                pagination={{ clickable: true }}
                                                                className="features-style2-banner-carousel"
                                                            >
                                                                <SwiperSlide>
                                                                    <div className="single-item">
                                                                        <span className="icon-headphones"></span>
                                                                        <h4>Call for</h4>
                                                                        <h3>Private Banking</h3>
                                                                        <h2><a href="tel:2512353256">+8 (222) 123 456 78</a></h2>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="single-item">
                                                                        <span className="icon-headphones"></span>
                                                                        <h4>Call for</h4>
                                                                        <h3>Private Banking</h3>
                                                                        <h2><a href="tel:2512353256">+8 (222) 123 456 78</a></h2>
                                                                    </div>
                                                                </SwiperSlide>
                                                                {/* Add other slides */}
                                                            </Swiper>
                                                        </div>
                                                        <div className="img-box">
                                                            <div className="img-box-bg" style={{ backgroundImage: 'url(/assets/images/resources/features-style2-banner-1.jpg)' }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Add other tab content here */}
                                </div>
                                {/* End Tabs Content Box */}
                            </div>
                            {/* End Features Style2 Tab */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesStyle2;
