"use client"
import Layout from "@/components/layout/Layout"
import React, { useState } from 'react';
import Link from 'next/link';
import { submitContactForm } from "@/utils/api";

export default function Home() {
    const [activeBranchTab, setActiveBranchTab] = useState('#branch');
    const [activeCustomerTab, setActiveCustomerTab] = useState('#personal-banking');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleBranchTabClick = (tab) => {
        setActiveBranchTab(tab);
    };

    const handleCustomerTabClick = (tab) => {
        setActiveCustomerTab(tab);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear status message when user starts typing
        if (submitStatus.message) {
            setSubmitStatus({ type: '', message: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setSubmitStatus({
                type: 'error',
                message: 'Please fill in all required fields (Name, Email, and Message).'
            });
            return;
        }

        setSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            await submitContactForm(formData);
            setSubmitStatus({
                type: 'success',
                message: 'Thank you for contacting us! We will get back to you soon.'
            });
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error.message || 'Failed to send message. Please try again later.'
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONTACT US">
                <div>

                    {/*Contact Two Start*/}
                    <section className="main-contact-form-area">
                        <div className="container">
                            <div className="row">

                            {/* Contact Info Section */}
                            <div className="col-xl-6">
                                <div className="contact-info-box-style1">
                                <div className="box1"></div>
                                <div className="title">
                                    <h2>Get Support for<br /> any Queries or Complaints</h2>
                                    <p>Committed to helping you meet all your banking needs.</p>
                                </div>

                                <ul className="contact-info-1">
                                    <li>
                                    <div className="icon">
                                        <span className="icon-map"></span>
                                    </div>
                                    <div className="text">
                                        <p>Corporate Office</p>
                                        <h3>141, First Floor, 12 St RootsTerrace,<br />
                                        Los Angeles USA 90010.
                                        </h3>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="icon">
                                        <span className="icon-clock"></span>
                                    </div>
                                    <div className="text">
                                        <p>Office Hours</p>
                                        <h3>Mon - Fri: 9.00am to 5.00pm</h3>
                                        <span>[2nd Sat Holiday]</span>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="icon">
                                        <span className="icon-phone"></span>
                                    </div>
                                    <div className="text">
                                        <p>Front Desk</p>
                                        <h3><a href="tel:123456789">+61 3 8376 6284</a></h3>
                                        <h3><a href="mailto:yourmail@email.com">supportyou@finbank.com</a></h3>
                                    </div>
                                    </li>
                                </ul>

                                <div className="bottom-box">
                                    <div className="btn-box">
                                    <Link href="#"><i className="fas fa-arrow-down"></i> Customer Care</Link>
                                    </div>
                                    <div className="footer-social-link-style1">
                                    <ul className="clearfix">
                                        <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                    </ul>
                                    </div>
                                </div>

                                </div>
                            </div>

                            {/* Contact Form Section */}
                            <div className="col-xl-6">
                                <div className="contact-form">
                                <form id="contact-form" name="contact_form" className="default-form2" onSubmit={handleSubmit}>

                                    {submitStatus.message && (
                                        <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`} 
                                             style={{
                                                 padding: '12px 20px',
                                                 marginBottom: '20px',
                                                 borderRadius: '4px',
                                                 backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                                                 color: submitStatus.type === 'success' ? '#155724' : '#721c24',
                                                 border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                                             }}>
                                            {submitStatus.message}
                                        </div>
                                    )}

                                    <div className="form-group">
                                    <label>Name</label>
                                    <div className="input-box">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            id="formName" 
                                            placeholder="Your full name" 
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required 
                                            disabled={submitting}
                                        />
                                    </div>
                                    </div>

                                    <div className="form-group">
                                    <label>Email Address</label>
                                    <div className="input-box">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            id="formEmail" 
                                            placeholder="your.email@example.com" 
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required 
                                            disabled={submitting}
                                        />
                                    </div>
                                    </div>

                                    <div className="form-group">
                                    <label>Ph. Num</label>
                                    <div className="input-box">
                                        <input 
                                            type="text" 
                                            name="phone" 
                                            id="formPhone" 
                                            placeholder="+255 123 456 789" 
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            disabled={submitting}
                                        />
                                    </div>
                                    </div>

                                    <div className="form-group">
                                    <label>Subject</label>
                                    <div className="input-box">
                                        <input 
                                            type="text" 
                                            name="subject" 
                                            id="formSubject" 
                                            placeholder="Subject of your message" 
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            disabled={submitting}
                                        />
                                    </div>
                                    </div>

                                    <div className="form-group">
                                    <label>Message</label>
                                    <div className="input-box">
                                        <textarea 
                                            name="message" 
                                            id="formMessage" 
                                            placeholder="Your message here..." 
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows="6"
                                            disabled={submitting}
                                        ></textarea>
                                    </div>
                                    </div>

                                    <div className="button-box">
                                    <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
                                    <button 
                                        className="btn-one" 
                                        type="submit" 
                                        disabled={submitting}
                                        style={{ opacity: submitting ? 0.6 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
                                    >
                                        <span className="txt">{submitting ? 'Sending...' : 'send a message'}</span>
                                    </button>
                                    </div>

                                </form>
                                </div>
                            </div>

                            </div>
                        </div>
                    </section>
                    {/*Contact Two End*/}
                   
                    {/*Google Map Start*/}
                    {/* Google Map Section */}
                    <section className="google-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                        className="google-map__one" 
                        allowFullScreen
                    ></iframe>
                        <div className="google-map-content-box">
                            <div className="branch-atm-tab">
                                {/* Branch Atm Tab Button */}
                                <div className="branch-atm-tab__button">
                                    <ul className="tabs-button-box">
                                        <li 
                                            data-tab="#branch" 
                                            className={`tab-btn-item ${activeBranchTab === '#branch' ? 'active-btn-item' : ''}`} 
                                            onClick={() => handleBranchTabClick('#branch')}
                                        >
                                            <h5>Branch</h5>
                                        </li>
                                        <li 
                                            data-tab="#atm" 
                                            className={`tab-btn-item ${activeBranchTab === '#atm' ? 'active-btn-item' : ''}`} 
                                            onClick={() => handleBranchTabClick('#atm')}
                                        >
                                            <h5>ATM</h5>
                                        </li>
                                    </ul>
                                    <div className="location-search-box">
                                        <div className="location-search-box__inner">
                                            <form className="search-form" action="#">
                                                <div className="input-box">
                                                    <input placeholder="Enter Your Location" type="text" />
                                                    <div className="icon">
                                                        <span className="icon-map"></span>
                                                    </div>
                                                </div>
                                                <button type="submit">Search</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabs Content Box */}
                                <div className="tabs-content-box">
                                    {/* Tab for Branch */}
                                    <div className={`tab-content-box-item ${activeBranchTab === '#branch' ? 'tab-content-box-item-active' : ''}`} id="branch">
                                        <div className="branch-atm-tab-content-box-item">
                                            <div className="inner-title">
                                                <h3>Finbank,<br /> San Francisco</h3>
                                            </div>
                                            <ul>
                                                <li>
                                                    <h3>IFSC</h3>
                                                    <p>finbif1234</p>
                                                </li>
                                                <li>
                                                    <h3>Address</h3>
                                                    <p>24/7, 1st Floor Global Str, 2nd Cross,<br /> SF 94112.</p>
                                                </li>
                                                <li>
                                                    <h3>Phone & Email</h3>
                                                    <p><a href="tel:123456789">+415 67 890 12</a></p>
                                                    <p><a href="mailto:yourmail@email.com">support@finbank1234.com</a></p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Tab for ATM */}
                                    <div className={`tab-content-box-item ${activeBranchTab === '#atm' ? 'tab-content-box-item-active' : ''}`} id="atm">
                                        <div className="branch-atm-tab-content-box-item">
                                            <div className="inner-title">
                                                <h3>Alabama, 23/8<br /> West North Central</h3>
                                            </div>
                                            <ul>
                                                <li>
                                                    <h3>Arizona</h3>
                                                    <p>finbif1234</p>
                                                </li>
                                                <li>
                                                    <h3>Address</h3>
                                                    <p>24/7, 1st Floor Global Str, 2nd Cross,<br /> SF 94112.</p>
                                                </li>
                                                <li>
                                                    <h3>Phone & Email</h3>
                                                    <p><a href="tel:123456789">+415 67 890 12</a></p>
                                                    <p><a href="mailto:yourmail@email.com">support@finbank1234.com</a></p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Google Map End*/}

                    {/*CTA One Start*/}
                    {/* Customer Care Numbers Area */}
                    <section className="customer-care-numbers-area">
                        <div className="container">
                            <div className="title-box">
                                <h2>Customer Care Numbers</h2>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="customer-care-numbers-tab">
                                        <div className="customer-care-numbers-tab__button">
                                            <ul className="tabs-button-box clearfix">
                                                <li 
                                                    data-tab="#personal-banking" 
                                                    className={`tab-btn-item ${activeCustomerTab === '#personal-banking' ? 'active-btn-item' : ''}`} 
                                                    onClick={() => handleCustomerTabClick('#personal-banking')}
                                                >
                                                    <h4>Personal Banking</h4>
                                                </li>
                                                <li 
                                                    data-tab="#corporate-banking" 
                                                    className={`tab-btn-item ${activeCustomerTab === '#corporate-banking' ? 'active-btn-item' : ''}`} 
                                                    onClick={() => handleCustomerTabClick('#corporate-banking')}
                                                >
                                                    <h4>Corporate Banking</h4>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Tabs Content Box */}
                                        <div className="tabs-content-box">
                                            {/* Tab for Personal Banking */}
                                            <div className={`tab-content-box-item ${activeCustomerTab === '#personal-banking' ? 'tab-content-box-item-active' : ''}`} id="personal-banking">
                                                <div className="customer-care-numbers-tab-content-box-item">
                                                    <div className="customer-care-numbers-table-box">
                                                        <div className="table-outer">
                                                            <table className="customer-care-numbers-table">
                                                                <thead className="header">
                                                                    <tr>
                                                                        <th>Service</th>
                                                                        <th>Contact Details</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="inner-title">
                                                                            <h3>General Query/Complaint</h3>
                                                                        </td>
                                                                        <td className="contact-info">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="tel:2512353256">+844 123 4567 89</a>
                                                                                    <span>(Toll Free)</span>
                                                                                </li>
                                                                                <li>
                                                                                    <a className="color2" href="mailto:yourmail@email.com">customercare@finbank.com</a>
                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="inner-title">
                                                                            <h3>Credit Card</h3>
                                                                        </td>
                                                                        <td className="contact-info">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="tel:2512353256">+844 789 0123 45</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a className="color2" href="mailto:yourmail@email.com">creditcard@finbank.com</a>
                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                        <div className="bottom-text text-center">
                                                            <h3>To submit your complaint, <a href="#">Click here</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Tab for Corporate Banking */}
                                            <div className={`tab-content-box-item ${activeCustomerTab === '#corporate-banking' ? 'tab-content-box-item-active' : ''}`} id="corporate-banking">
                                                <div className="customer-care-numbers-tab-content-box-item">
                                                    <div className="customer-care-numbers-table-box">
                                                        <div className="table-outer">
                                                            <table className="customer-care-numbers-table">
                                                                <thead className="header">
                                                                    <tr>
                                                                        <th>Service</th>
                                                                        <th>Contact Details</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="inner-title">
                                                                            <h3>General Query/Complaint</h3>
                                                                        </td>
                                                                        <td className="contact-info">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="tel:2512353256">+844 123 4567 89</a>
                                                                                    <span>(Toll Free)</span>
                                                                                </li>
                                                                                <li>
                                                                                    <a className="color2" href="mailto:yourmail@email.com">customercare@finbank.com</a>
                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="inner-title">
                                                                            <h3>Credit Card</h3>
                                                                        </td>
                                                                        <td className="contact-info">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="tel:2512353256">+844 789 0123 45</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a className="color2" href="mailto:yourmail@email.com">creditcard@finbank.com</a>
                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                        <div className="bottom-text text-center">
                                                            <h3>To submit your complaint, <a href="#">Click here</a></h3>
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
                    {/*CTA One End*/}

                </div>

            </Layout>
        </>
    )
}