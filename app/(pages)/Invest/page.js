"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import ApplyForm from "@/components/Forms/ApplyForm";

export default function Invest() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contentRef = useRef(null);

  const depositTypes = [
    "Instant Income/Upfront",
    "Semi Fixed/Flexible",
    "Regular Interest Payment",
    "Call Account",
    "Traditional (US$/E/EUR)",
  ];

  const handleFormSubmit = (data) => {
    console.log('Form Submitted:', data);
    // Send to API, show notification, etc.
  };
  
  const typeFromQuery = searchParams.get("type") || depositTypes[0];
  const [activeType, setActiveType] = useState(typeFromQuery);

  useEffect(() => {
    const type = searchParams.get("type");
    if (type && depositTypes.includes(type)) {
      setActiveType(type);
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
    }
  }, [searchParams]);

  const handleSelect = (selectedType) => {
    setActiveType(selectedType);
    router.push(`/Invest?type=${encodeURIComponent(selectedType)}`);
    setTimeout(() => {
      if (contentRef.current) {
        const yOffset = -200;
        const y =
          contentRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Invest"
      breadcrumbSubTitle="Invest"
         backgroundImage="/assets/images/backgrounds/Invest-Banner.png"
    >
      <section className="cards-area" style={{ marginTop: 100 }}>
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-3">
              <div className="sidebar-box-style1">
                <div className="single-sidebar-box-style1 margintop">
                  <div className="sidebar-title">
                    <div className="dot-box" />
                    <h3>Deposit Types</h3>
                  </div>
                  <div className="card-types-box">
                    <ul>
                      {depositTypes.map((type) => (
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
                {/* Instant Income/Upfront */}
                {activeType === "Instant Income/Upfront" && (
                  <div className="account-content">
                    <h2>Instant Income/Upfront</h2>
                    <p>
                      Customers will get upfront interest during investment of term
                      deposit.
                    </p>
                    <h3>Benefits</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Minimum Deposit Amount – TZS 1,000,000</li>
                      <li><span className="icon-checkbox-mark"></span> Maximum Deposit Amount – Unlimited</li>
                      <li><span className="icon-checkbox-mark"></span> Minimum Tenor – 3 months</li>
                      <li><span className="icon-checkbox-mark"></span> Maximum Tenor – 12 months</li>
                      <li><span className="icon-checkbox-mark"></span>Interest Payment methodology – Upfront on the date of investing</li>
                      <li><span className="icon-checkbox-mark"></span> Currency Allowed – TZS only</li>
                    </ul>
                  </div>
                )}

                {/* Semi Fixed/Flexible */}
                {activeType === "Semi Fixed/Flexible" && (
                  <div className="account-content">
                    <h2>Semi Fixed/Flexible</h2>
                    <p>
                      Customers will get upfront interest during investment of term
                      deposit.
                    </p>
                    <h3>Benefits</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Minimum Deposit Amount – TZS 1,000,000</li>
                      <li><span className="icon-checkbox-mark"></span> Maximum Deposit Amount – Unlimited</li>
                      <li><span className="icon-checkbox-mark"></span> Minimum Tenor – 6 months</li>
                      <li><span className="icon-checkbox-mark"></span> Maximum Tenor – 12 months</li>
                      <li><span className="icon-checkbox-mark"></span> Interest Payment methodology – Twice in 12 months</li>
                      <li><span className="icon-checkbox-mark"></span> Early withdrawal allowed – Yes</li>
                      <li><span className="icon-checkbox-mark"></span> Currency Allowed – TZS only</li>
                    </ul>
                  </div>
                )}

                {/* Regular Interest Payment */}
                {activeType === "Regular Interest Payment" && (
                  <div className="account-content">
                    <h2>Regular Interest Payment</h2>
                    <p>
                      Targeting customers investing funds and receive monthly interest.
                    </p>
                    <h3>Benefits</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Minimum Deposit Amount – TZS 1,000,000</li>
                      <li><span className="icon-checkbox-mark"></span> Maximum Deposit Amount – Unlimited</li>
                      <li><span className="icon-checkbox-mark"></span> Minimum Tenor – 3 months</li>
                      <li><span className="icon-checkbox-mark"></span> Maximum Tenor – 12 months</li>
                      <li><span className="icon-checkbox-mark"></span>Interest Payment methodology – On monthly basis</li>
                      <li><span className="icon-checkbox-mark"></span> Currency Allowed – TZS only</li>
                    </ul>
                  </div>
                )}

                {/* Call Account */}
                {activeType === "Call Account" && (
                  <div className="account-content">
                    <h2>Call Account</h2>
                    <p>
                      It provides customers with instant access to funds and allows
                      unlimited withdraws and deposits.
                    </p>
                    <h3>Benefits</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Minimum Deposit Amount – TZS 1,000,000</li>
                      <li><span className="icon-checkbox-mark"></span> Maximum Deposit Amount – Unlimited</li>
                      <li><span className="icon-checkbox-mark"></span> Minimum Tenor – 1 month</li>
                      <li><span className="icon-checkbox-mark"></span>Interest Payment methodology – Accrued on monthly basis</li>
                      <li><span className="icon-checkbox-mark"></span> Currency Allowed – TZS only</li>
                    </ul>
                  </div>
                )}

                {/* Traditional (US$/E/EUR) */}
                {activeType === "Traditional (US$/E/EUR)" && (
                  <div className="account-content">
                    <h2>Traditional (US$/E/EUR)</h2>
                    <p>
                      It’s a common fixed deposit product for all customers that prefer
                      basic features for fixed deposits.
                    </p>
                  </div>
                )}
              </div>
            </div>

             <ApplyForm
           selectOptions={depositTypes}
            selectPlaceholder="Deposit Types"
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
