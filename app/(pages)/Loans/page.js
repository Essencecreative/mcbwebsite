"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import ApplyForm from "@/components/Forms/ApplyForm";

export default function Loans() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contentRef = useRef(null);

  const loanTypes = [
    "MSME Business Loan",
    "Business Overdraft",
    "Bank Guarantees",
  ];

  const typeFromQuery = searchParams.get("type") || "MSME Business Loan";
  const [activeType, setActiveType] = useState(typeFromQuery);

  useEffect(() => {
  const type = searchParams.get("type");
  if (type && loanTypes.includes(type)) {
    setActiveType(type);
  }
}, [searchParams]);

  const handleSelect = (selectedType) => {
    setActiveType(selectedType);
    router.push(`/Loans?type=${encodeURIComponent(selectedType)}`, { scroll: false });
    setTimeout(() => {
      if (contentRef.current) {
        const yOffset = -200;
        const y =
          contentRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 200);
  };

  const handleFormSubmit = (data) => {
    console.log('Form Submitted:', data);
    // Send to API, show notification, etc.
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Loans"
      breadcrumbSubTitle="Loans"
      backgroundImage="/assets/images/backgrounds/business-loan.png"
    >
      <section className="cards-area">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-3">
              <div className="sidebar-box-style1">
                <div className="single-sidebar-box-style1 margintop">
                  <div className="sidebar-title">
                    <div className="dot-box" />
                    <h3>Loans</h3>
                  </div>
                  <div className="card-types-box">
                    <ul>
                      {loanTypes.map((type) => (
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

                {/* MSME Business Loan */}
                {activeType === "MSME Business Loan" && (
                  <div className="account-content">
                    <h2>MSME Business Loan</h2>
                    <p>
                      This credit facility is tailored for Micro, Small and Medium Enterprises dealing in transport, trade and commerce, construction, manufacturing, education, health, and other service sectors.
                    </p>

                    <h3>Requirements</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Have a registered business or business experience</li>
                      <li><span className="icon-checkbox-mark"></span> Have a permanent business location</li>
                      <li><span className="icon-checkbox-mark"></span> Have acceptable securities</li>
                    </ul>

                    <h3>Benefits</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Minimum loan amount is TZS 300,000 and maximum is TZS 500,000,000</li>
                      <li><span className="icon-checkbox-mark"></span> Maximum repayment period up to 48 months</li>
                      <li><span className="icon-checkbox-mark"></span> Flexible repayment depending on cash flow</li>
                      <li><span className="icon-checkbox-mark"></span> Flexible security requirements accepted</li>
                      <li><span className="icon-checkbox-mark"></span> Credit Life Insurance included</li>
                    </ul>
                  </div>
                )}

                {/* Business Overdraft */}
                {activeType === "Business Overdraft" && (
                  <div className="account-content">
                    <h2>Business Overdraft</h2>
                    <p>
                      The loan is available to customers by overdrawing their current accounts.
                    </p>

                    <h3>Justification</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Helps companies/businesspeople manage daily expenses while awaiting payments</li>
                      <li><span className="icon-checkbox-mark"></span> Covers cheque deposits or pending invoices for smooth operations</li>
                    </ul>

                    <h3>Features</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Maximum of 50% of 6 months average account turnover up to TZS 200,000,000</li>
                      <li><span className="icon-checkbox-mark"></span> Interest rate = 20%</li>
                      <li><span className="icon-checkbox-mark"></span> Loan application fees = 3%</li>
                    </ul>
                  </div>
                )}

                {/* Bank Guarantees */}
                {activeType === "Bank Guarantees" && (
                  <div className="account-content">
                    <h2>Bank Guarantees</h2>
                    <p>
                      Bank Guarantees (BGs), are undertakings issued by banks on behalf of their customers to cover losses that may occur.
                    </p>

                    <h3>Types</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Bid bond (tender) guarantee</li>
                      <li><span className="icon-checkbox-mark"></span> Performance guarantee</li>
                      <li><span className="icon-checkbox-mark"></span> Advance payment guarantee</li>
                    </ul>

                    <h3>Features</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Maximum term = 1 year, renewable at bank’s discretion</li>
                      <li><span className="icon-checkbox-mark"></span> Open-ended guarantees issued against 100% cash cover held by the bank</li>
                      <li><span className="icon-checkbox-mark"></span> Commission = 1.5% quarterly</li>
                      <li><span className="icon-checkbox-mark"></span> All guarantees have a fixed expiry date and limited amount</li>
                    </ul>
                  </div>
                )}

              </div>
            </div>

             
             <ApplyForm
           selectOptions={loanTypes}
            selectPlaceholder="Loans"
            onSubmit={handleFormSubmit}
           />
          </div>
        </div>
      </section>

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
          position: relative;
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
