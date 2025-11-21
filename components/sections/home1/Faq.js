'use client'
import Link from "next/link"
import { useState } from 'react'
export default function Faq() {
     // Set the first FAQ (index 0) as the default active FAQ
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the minimum balance?",
      answer:
        "Rationally encounter consequences that are extremely painful again there anyone who loves or pursues desire.",
    },
    {
      question: "What is the rate of interest?",
      answer:
        "Rationally encounter consequences that are extremely painful again there anyone who loves or pursues desire.",
    },
    {
      question: "When will I receive my account statement?",
      answer:
        "Rationally encounter consequences that are extremely painful again there anyone who loves or pursues desire.",
    },
    {
      question: "Can I use any branch across India?",
      answer:
        "Rationally encounter consequences that are extremely painful again there anyone who loves or pursues desire.",
    },
    {
      question: "How safe/secure is our net banking a/c?",
      answer:
        "Rationally encounter consequences that are extremely painful again there anyone who loves or pursues desire.",
    },
  ];
    return (
        <>
            {/*FAQ One Start*/}
            <section className="faq-style1-area">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-12">
                        <div className="faq-style1-title">
                        <div className="sec-title">
                            <h2>Questions & Answers</h2>
                            <div className="sub-title">
                            <p>Find answers to all your queries about our service.</p>
                            </div>
                        </div>
                        <div className="faq-search-box">
                            <h3>Help You to Find</h3>
                            <div className="faq-search-box__inner">
                            <form className="search-form" action="#">
                                <input placeholder="Related Keyword..." type="text" />
                                <button type="submit">
                                <i className="icon-search"></i>
                                </button>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-xl-6">
                        <div className="faq-style1__image">
                        <div className="inner">
                            <img src="/assets/images/resources/faq-style1__image.jpg" alt="FAQ Image" />
                        </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="faq-style1__content">
                        <ul className="accordion-box">
                            {faqs.map((faq, index) => (
                            <li
                                key={index}
                                className={`accordion block ${
                                activeIndex === index ? "active-block" : ""
                                }`}
                            >
                                <div
                                className={`acc-btn ${activeIndex === index ? "active" : ""}`}
                                onClick={() => toggleFAQ(index)}
                                >
                                <div className="icon-outer">
                                    <i className="icon-right-arrow"></i>
                                </div>
                                <h3>{faq.question}</h3>
                                </div>
                                <div className={`acc-content ${activeIndex === index ? "current" : ""}`}>
                                <p>{faq.answer}</p>
                                </div>
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-xl-12">
                        <div className="faq-style1-bottom-box text-center">
                        <p>
                            Didn’t get, Click below button to more answers or{" "}
                            <Link href="/contact">
                            contact us.
                            </Link>
                        </p>
                        <div className="btns-box">
                            <Link href="/faq">
                            <div className="btn-one">
                                <span className="txt">Grab Your Deals</span>
                            </div>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            {/*FAQ One End*/}
        </>


    )
}
