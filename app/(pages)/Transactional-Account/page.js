"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import ApplyForm from "@/components/Forms/ApplyForm";

export default function TransactionalAccount() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contentRef = useRef(null);

  const accountTypes = [
    "Personal Current",
    "Foreign Currency Current",
    "Mwalimu Transactional",
    "Career Account",
  ];

  const handleFormSubmit = (data) => {
    console.log('Form Submitted:', data);
    // Send to API, show notification, etc.
  };

  // Get query parameter from URL
  const typeFromQuery = searchParams.get("type") || "Personal Current";
  const [activeType, setActiveType] = useState(typeFromQuery);

 // Sync activeType with query param, but prevent double scroll
  useEffect(() => {
    const type = searchParams.get("type");
    if (type && accountTypes.includes(type)) {
      setActiveType(type);
    }
  }, [searchParams]);

  const handleSelect = (selectedType) => {
    setActiveType(selectedType);
    router.push(`/Transactional-Account?type=${encodeURIComponent(selectedType)}`, {
      scroll: false, // 👈 prevents Next.js from auto-scrolling to top
    });

    // Smooth scroll to target
    setTimeout(() => {
      if (contentRef.current) {
        const yOffset = -150; // adjust scroll offset (e.g. to align with title)
        const y =
          contentRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Transactional Account"
      breadcrumbSubTitle="Transactional Account"
      backgroundImage="/assets/images/backgrounds/Transactional-Account-Banner.png"
    >
      <section className="cards-area" style={{marginTop: 100}}>
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-3">
              <div className="sidebar-box-style1">
                <div className="single-sidebar-box-style1 margintop">
                  <div className="sidebar-title">
                    <div className="dot-box" />
                    <h3>Account Types</h3>
                  </div>
                  <div className="card-types-box">
                    <ul>
                      {accountTypes.map((type) => (
                        <li key={type}>
                          <button
                            onClick={() => handleSelect(type)}
                            className={`type-btn ${
                              activeType === type ? "active" : ""
                            }`}
                          >
                            {type}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="col-xl-9" ref={contentRef}>
              <div className="cards-content-box">

                {/* PERSONAL CURRENT */}
                {activeType === "Personal Current" && (
                  <div className="account-content">
                    <h2>Personal Current Account</h2>
                    <p>
                      For individuals salaried and self-employed in need of cheque books 
                      for convenient bill payments.
                    </p>

                    <h3>Features</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> 24HRS ATM Accessibility</li>
                      <li><span className="icon-checkbox-mark"></span> Access to Cheque Book</li>
                      <li><span className="icon-checkbox-mark"></span> Allows Salary Credit</li>
                      <li><span className="icon-checkbox-mark"></span> No Credit</li>
                      <li><span className="icon-checkbox-mark"></span> Access to Mobile Banking</li>
                    </ul>

                    <h3>Benefits</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Access to overdraft on demand</li>
                      <li><span className="icon-checkbox-mark"></span> Make payments by cheques</li>
                    </ul>
                  </div>
                )}

                {/* FOREIGN CURRENCY CURRENT */}
                {activeType === "Foreign Currency Current" && (
                  <div className="account-content">
                    <h2>Foreign Currency Current Account</h2>
                    <p>
                      For individuals looking for affordable transactional foreign currency 
                      account. Cheque book is issued to US$ accounts only.
                    </p>

                    <h3>Features</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> No ATM cards</li>
                      <li><span className="icon-checkbox-mark"></span> Cheque Book – US$ 0.3 per leaf</li>
                      <li><span className="icon-checkbox-mark"></span> Allows Salary Credit</li>
                    </ul>

                    <h3>Benefits</h3>
                    <ul>
                      <li>
                        <span className="icon-checkbox-mark"></span> Gets an advantage of receiving 
                        foreign currency and save directly without losing on exchange rates.
                      </li>
                    </ul>
                  </div>
                )}

                {/* MWALIMU TRANSACTIONAL */}
                {activeType === "Mwalimu Transactional" && (
                  <div className="account-content">
                    <h2>Mwalimu Transactional Account</h2>
                    <p>
                      Account specifically designed with low cost in order to attract salaries 
                      and deposits from different sectors.
                    </p>

                    <h3>Features</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Monthly Fee – FEE</li>
                      <li><span className="icon-checkbox-mark"></span> 24HRS ATM Access</li>
                    </ul>

                    <h3>Benefits</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Mobile Banking – Allowed</li>
                      <li><span className="icon-checkbox-mark"></span> Receives Salary Credit</li>
                    </ul>
                  </div>
                )}

                {/* CAREER ACCOUNT */}
                {activeType === "Career Account" && (
                  <div className="account-content">
                    <h2>Career Account</h2>
                    <p>
                      For individuals looking for affordable transactional foreign currency
                      account. Cheque book is issued to US$ accounts only.
                    </p>

                    <h3>Features</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> No ATM cards</li>
                      <li><span className="icon-checkbox-mark"></span> Cheque Book – US$ 0.3 per leaf</li>
                      <li><span className="icon-checkbox-mark"></span> Allows Salary Credit</li>
                    </ul>

                    <h3>Benefits</h3>
                    <ul>
                      <li>
                        <span className="icon-checkbox-mark"></span> Gets an advantage of receiving 
                        foreign currency and save directly without losing on exchange rates.
                      </li>
                    </ul>
                  </div>
                )}

              </div>
            </div>
           <ApplyForm
           selectOptions={accountTypes}
            selectPlaceholder="Account Type"
            onSubmit={handleFormSubmit}
           />
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .card-types-box ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .type-btn {
          width: 100%;
          text-align: left;
          padding: 12px 15px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
          color: #333;
          transition: all 0.3s ease;
        }

        .type-btn:hover {
          color: #e97927;
        }

        .type-btn.active {
          background: #e97927;
          color: #fff;
          border-radius: 6px;
        }

        .account-content {
          padding: 25px;
          border: 1px solid #eee;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
          margin-bottom: 30px;
          animation: fadeIn 0.4s ease;
        }

        .account-content h2 {
          color: #e97927;
          margin-bottom: 10px;
        }

        .account-content h3 {
          margin-top: 20px;
          margin-bottom: 10px;
          color: #1a1a1a;
          font-weight: 600;
        }

        .account-content ul {
          list-style: none;
          padding: 0;
        }

        .account-content ul li {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          font-size: 15px;
        }

        .account-content ul li span {
          color: #e97927;
          margin-right: 8px;
          font-size: 16px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Layout>
  );
}
