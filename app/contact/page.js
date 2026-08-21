"use client"
import Layout from "@/components/layout/Layout"
import React, { useState } from 'react';
import Link from 'next/link';
import { submitContactForm } from "@/utils/api";

// MCB head office, bank branches and regional offices shown as tabs below.
const CONTACT_LOCATIONS = [
    {
        id: 'mcb-hq',
        tab: 'MCB HQ',
        title: 'Mlimani Tower – Mezzanine Floor, Sam Nujoma Road, P.O. Box 61002, Dar es Salaam, Tanzania',
        maps: 'https://maps.app.goo.gl/RfmM2gzMjYkkkxvL7?g_st=ipc',
    },
    {
        id: 'samora',
        tab: 'Samora',
        title: 'Samora Branch – Consolidated Holding Building, Ground Floor, P.O. Box 61002, Dar es Salaam',
        mapsQuery: 'Consolidated Holding Corporation Building Samora Avenue Dar es Salaam',
    },
    {
        id: 'mlimani',
        tab: 'Mlimani',
        title: 'Mlimani Branch – Mlimani Tower, Mezzanine Floor, Sam Nujoma Road, P.O. Box 61002, Dar es Salaam',
        mapsQuery: 'Mlimani Tower Sam Nujoma Road Dar es Salaam',
    },
    {
        id: 'mbeya',
        tab: 'Mbeya',
        title: 'Mbeya Regional Office – Mbalizi Road, Ukaguzi Street, Mbeya',
        served: 'Serves: Njombe, Mbeya, Songwe',
        mapsQuery: 'Mbalizi Road Ukaguzi Street Mbeya',
    },
    {
        id: 'mwanza',
        tab: 'Mwanza',
        title: 'Mwanza Regional Office – Kenyatta Road, PSSSF Building, Mwanza',
        served: 'Serves: Mwanza, Simiyu, Mara',
        mapsQuery: 'Kenyatta Road PSSSF Building Mwanza',
    },
    {
        id: 'morogoro',
        tab: 'Morogoro',
        title: 'Morogoro Regional Office – Morogoro Municipal, NSSF Building, Morogoro',
        served: 'Serves: Morogoro, Iringa',
        mapsQuery: 'NSSF Building Morogoro Municipal',
    },
    {
        id: 'dodoma',
        tab: 'Dodoma',
        title: 'Dodoma Regional Office – Nyerere Square, Dodoma',
        served: 'Serves: Dodoma, Singida',
        mapsQuery: 'Nyerere Square Dodoma',
    },
    {
        id: 'arusha',
        tab: 'Arusha',
        title: 'Arusha Regional Office – Sekei, CWT Building, Arusha',
        served: 'Serves: Arusha, Manyara, Kilimanjaro',
        mapsQuery: 'CWT Building Sekei Arusha',
    },
    {
        id: 'mtwara',
        tab: 'Mtwara',
        title: 'Mtwara Regional Office – CWT Building, Mtwara',
        served: 'Serves: Mtwara, Lindi, Ruvuma',
        mapsQuery: 'CWT Building Mtwara',
    },
    {
        id: 'rukwa',
        tab: 'Rukwa',
        title: 'Rukwa Regional Office – Jangwani, CWT Building, Rukwa',
        served: 'Serves: Rukwa, Katavi',
        mapsQuery: 'CWT Building Jangwani Sumbawanga Rukwa',
    },
    {
        id: 'kigoma',
        tab: 'Kigoma',
        title: 'Kigoma Regional Office – Lumumba Road, Pangani Street, Kigoma',
        served: 'Serves: Kigoma, Tabora',
        mapsQuery: 'Lumumba Road Pangani Street Kigoma',
    },
    {
        id: 'geita',
        tab: 'Geita',
        title: 'Geita Regional Office – Nyerere Road, Bever Street, Geita',
        served: 'Serves: Geita, Kagera, Shinyanga',
        mapsQuery: 'Nyerere Road Geita',
    },
    {
        id: 'kagera',
        tab: 'Kagera',
        title: 'Kagera Regional Office – Jamhuri Road, NSSF House, Kagera',
        served: 'Serves: Kagera',
        mapsQuery: 'NSSF House Jamhuri Road Bukoba Kagera',
    },
    {
        id: 'ruvuma',
        tab: 'Ruvuma',
        title: 'Ruvuma Regional Office – Lininu Street, Soko Kuu, Ruvuma',
        served: 'Serves: Ruvuma',
        mapsQuery: 'Lininu Street Soko Kuu Songea Ruvuma',
    },
];

export default function Home() {
    const [activeCustomerTab, setActiveCustomerTab] = useState('#mcb-hq');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

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
                    {/* <section className="main-contact-form-area">
                        <div className="container">
                            <div className="row">

                            {/* Contact Info Section */}
                            {/* <div className="col-xl-6">
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
                            </div> */}

                            {/* Contact Form Section */}
                            {/* <div className="col-xl-6">
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
                            </div> */}

                            {/* </div>
                        </div>
                    </section> */}
                    {/*Contact Two End*/}
                   
                    {/*Google Map Start*/}
                    {/* Entire Google Map Section Commented Out */}
                    {/* 
                    <section className="google-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                            className="google-map__one" 
                            allowFullScreen
                        ></iframe>
                        <div className="google-map-content-box">
                            <div className="branch-atm-tab">
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

                                <div className="tabs-content-box">
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
                    */}
                    {/*Google Map End*/}

                    {/*CTA One Start*/}
                    {/* Customer Care Numbers Area */}
                    <section className="customer-care-numbers-area">
                        <div className="container">
                            <div className="title-box">
                                <h2>Get Support for any Queries<br />or Complaints</h2>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="customer-care-numbers-tab">
                                        <div className="customer-care-numbers-tab__button">
                                            <ul className="tabs-button-box clearfix">
                                                {CONTACT_LOCATIONS.map((loc) => (
                                                    <li
                                                        key={loc.id}
                                                        data-tab={`#${loc.id}`}
                                                        className={`tab-btn-item ${activeCustomerTab === `#${loc.id}` ? 'active-btn-item' : ''}`}
                                                        onClick={() => handleCustomerTabClick(`#${loc.id}`)}
                                                    >
                                                        <h4>{loc.tab}</h4>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tabs Content Box */}
                                        <div className="tabs-content-box">
                                            {CONTACT_LOCATIONS.map((loc) => {
                                                const mapsUrl = loc.maps
                                                    ? loc.maps
                                                    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapsQuery + ', Tanzania')}`;
                                                return (
                                                    <div
                                                        key={loc.id}
                                                        className={`tab-content-box-item ${activeCustomerTab === `#${loc.id}` ? 'tab-content-box-item-active' : ''}`}
                                                        id={loc.id}
                                                    >
                                                        <div className="customer-care-numbers-tab-content-box-item">
                                                            <div className="customer-care-numbers-table-box">
                                                                <div className="table-outer">
                                                                    <table className="customer-care-numbers-table">
                                                                        <thead className="header">
                                                                            <tr>
                                                                                <th>Location</th>
                                                                                <th>Contact Details</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="inner-title">
                                                                                    <h3>{loc.title}</h3>
                                                                                    {loc.served && (
                                                                                        <p style={{ marginTop: '8px', color: '#0A3B73', fontWeight: 500 }}>{loc.served}</p>
                                                                                    )}
                                                                                </td>
                                                                                <td className="contact-info">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <strong>Phone Number:</strong> <a href="tel:0800750033">0800 750 033</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <strong>Email:</strong> <a className="color2" href="mailto:Info@mwalimubank.co.tz">Info@mwalimubank.co.tz</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                                <div className="bottom-text text-center">
                                                                    <a
                                                                        href={mapsUrl}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="get-location-btn"
                                                                        style={{
                                                                            display: 'inline-block',
                                                                            padding: '15px 40px',
                                                                            backgroundImage: 'linear-gradient(0deg, #0A3B73 0%, #0E519A 100%)',
                                                                            color: '#ffffff',
                                                                            textDecoration: 'none',
                                                                            borderRadius: '4px',
                                                                            fontSize: '18px',
                                                                            fontWeight: '500',
                                                                            fontFamily: 'var(--thm-font-2)',
                                                                            transition: 'all 0.3s ease',
                                                                            boxShadow: '0px 2px 10px rgba(10, 59, 115, 0.3)'
                                                                        }}
                                                                        onMouseEnter={(e) => {
                                                                            e.target.style.opacity = '0.9';
                                                                            e.target.style.transform = 'translateY(-2px)';
                                                                            e.target.style.boxShadow = '0px 4px 15px rgba(10, 59, 115, 0.4)';
                                                                        }}
                                                                        onMouseLeave={(e) => {
                                                                            e.target.style.opacity = '1';
                                                                            e.target.style.transform = 'translateY(0)';
                                                                            e.target.style.boxShadow = '0px 2px 10px rgba(10, 59, 115, 0.3)';
                                                                        }}
                                                                    >
                                                                        Get Location
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*CTA One End*/}

                    {/* Remove border between table rows, make location bold, and style MCB HQ tab */}
                    <style jsx>{`
                        .customer-care-numbers-table tbody tr {
                            border-bottom: none !important;
                        }
                        .customer-care-numbers-table tbody tr:last-child {
                            border-bottom: none !important;
                        }
                        .customer-care-numbers-table tbody tr td.inner-title h3 {
                            font-weight: 700 !important;
                            font-style: normal !important;
                        }
                        .customer-care-numbers-area .customer-care-numbers-tab__button .tabs-button-box .tab-btn-item.active-btn-item {
                            background-image: linear-gradient(0deg, #0A3B73 0%, #0E519A 100%) !important;
                            color: #ffffff !important;
                        }
                        .customer-care-numbers-area .customer-care-numbers-tab__button .tabs-button-box .tab-btn-item.active-btn-item::before {
                            display: none !important;
                        }
                        .customer-care-numbers-area .customer-care-numbers-tab__button .tabs-button-box .tab-btn-item.active-btn-item h4 {
                            color: #ffffff !important;
                        }
                    `}</style>

                </div>

            </Layout>
        </>
    )
}