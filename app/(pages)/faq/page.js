'use client'
import ApplyForm from "@/components/Forms/ApplyForm";
import Layout from "@/components/layout/Layout"
import { useState, useEffect } from 'react'
import { getFAQs } from "@/utils/api"

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setLoading(true);
        const fetchedFAQs = await getFAQs();
        setFaqs(fetchedFAQs);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Filter FAQs based on search query
  const filteredFAQs = faqs.filter(faq => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return faq.question.toLowerCase().includes(query) || 
           faq.answer.toLowerCase().includes(query);
  });

  // Split FAQs into two columns
  const firstColumnFAQs = filteredFAQs.slice(0, Math.ceil(filteredFAQs.length / 2));
  const secondColumnFAQs = filteredFAQs.slice(Math.ceil(filteredFAQs.length / 2));

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is handled by filteredFAQs
  };

  const handleFormSubmit = (data) => {
    console.log('Form Submitted:', data);
    // Send to API, show notification, etc.
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="FAQ">
        <div>
          {/* FAQ Page One Start */}
          <section className="faq-page-one">
            <div className="container">
              <div className="sec-title text-center">
                <h2>Maswali Yanayoulizwa Mara kwa Mara</h2>
                <div className="sub-title">
                  <p>Pata majibu ya maswali kuhusu huduma na hisa za Benki ya Mwalimu.</p>
                </div>
              </div>

              <div className="faq-search-box">
                <div className="faq-search-box__inner">
                  <form className="search-form" onSubmit={handleSearch}>
                    <input 
                      placeholder="Tafuta neno husika..." 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">
                      <i className="icon-search"></i>
                    </button>
                  </form>
                </div>
              </div>

              {loading ? (
                <div className="row">
                  <div className="col-xl-12 text-center" style={{ padding: '50px 0' }}>
                    <p>Loading FAQs...</p>
                  </div>
                </div>
              ) : filteredFAQs.length === 0 ? (
                <div className="row">
                  <div className="col-xl-12 text-center" style={{ padding: '50px 0' }}>
                    <p>{searchQuery ? 'No FAQs found matching your search.' : 'No FAQs available at the moment.'}</p>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-xl-6">
                    <div className="faq-style1__content">
                      <ul className="accordion-box">
                        {firstColumnFAQs.map((faq, index) => (
                          <li
                            key={faq._id || index}
                            className={`accordion block ${activeIndex === index ? "active-block" : ""}`}
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

                  <div className="col-xl-6">
                    <div className="faq-style1__content">
                      <ul className="accordion-box">
                        {secondColumnFAQs.map((faq, index) => {
                          const actualIndex = index + Math.ceil(filteredFAQs.length / 2);
                          return (
                            <li
                              key={faq._id || actualIndex}
                              className={`accordion block ${activeIndex === actualIndex ? "active-block" : ""}`}
                            >
                              <div
                                className={`acc-btn ${activeIndex === actualIndex ? "active" : ""}`}
                                onClick={() => toggleFAQ(actualIndex)}
                              >
                                <div className="icon-outer">
                                  <i className="icon-right-arrow"></i>
                                </div>
                                <h3>{faq.question}</h3>
                              </div>
                              <div className={`acc-content ${activeIndex === actualIndex ? "current" : ""}`}>
                                <p>{faq.answer}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              <div className="row">
                <ApplyForm
                  selectOptions={[]}
                  showDynamicSelect={false}
                  title="Send your question"
                  subtitle="we will get back to you."
                  showDetailsTextarea={true}
                  selectPlaceholder="Notes"
                  onSubmit={handleFormSubmit}
                  buttonText="Submit"
                />
              </div>
            </div>
          </section>
          {/* FAQ Page One End */}
        </div>
      </Layout>
    </>
  )
}
