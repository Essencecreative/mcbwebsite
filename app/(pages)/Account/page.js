"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import ApplyForm from "@/components/Forms/ApplyForm";

export default function Account() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contentRef = useRef(null);

  const accountTypes = [
    "Corporate Current Account",
    "Call Deposit Account",
    "Club/NGO Current Account",
    "Mtaji Business Account",
  ];

  const typeFromQuery = searchParams.get("type") || "Corporate Current Account";
  const [activeType, setActiveType] = useState(typeFromQuery);

   // Keep state synced with URL param (no scroll here)
  useEffect(() => {
    const type = searchParams.get("type");
    if (type && accountTypes.includes(type)) {
      setActiveType(type);
    }
  }, [searchParams]);

  const scrollToContent = () => {
    if (contentRef.current) {
      const yOffset = -150; // adjust for navbar height
      const y =
        contentRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleSelect = (selectedType) => {
    setActiveType(selectedType);

    // Prevent Next.js from jumping to top
    router.push(`/Account?type=${encodeURIComponent(selectedType)}`, {
      scroll: false,
    });

    // Smooth scroll after small delay
    setTimeout(scrollToContent, 200);
  };

  const handleFormSubmit = (data) => {
    console.log('Form Submitted:', data);
    // Send to API, show notification, etc.
  };


  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Account"
      breadcrumbSubTitle="Account"
         backgroundImage="/assets/images/backgrounds/business-account.png"
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

                {activeType === "Corporate Current Account" && (
                  <div className="account-content">
                    <h2>Corporate Current Account</h2>
                    <p>For SME and corporate companies.</p>
                  </div>
                )}

                {activeType === "Call Deposit Account" && (
                  <div className="account-content">
                    <h2>Call Deposit Account</h2>
                    <p>
                      This account has no fixed deposit period, it provides instant access to
                      funds, and allows unlimited withdrawals and deposits.
                    </p>
                  </div>
                )}

                {activeType === "Club/NGO Current Account" && (
                  <div className="account-content">
                    <h2>Club/NGO Current Account</h2>
                    <p>Account for schools, Non-profit organisations, Social groups, etc.</p>
                  </div>
                )}

                {activeType === "Mtaji Business Account" && (
                  <div className="account-content">
                    <h2>Mtaji Business Account</h2>
                    <p>
                      This is a business account tailor-made for customers under the MSMEs segment
                      running formal or informal businesses.
                    </p>
                    <h3>Features</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> The business account can be opened by formal and informal businesses.</li>
                      <li><span className="icon-checkbox-mark"></span> The account can be operated by individuals, Partnerships, or any formal form of business.</li>
                      <li><span className="icon-checkbox-mark"></span> Available in local currency (TZS) only.</li>
                      <li><span className="icon-checkbox-mark"></span> Opening balance is Zero.</li>
                      <li><span className="icon-checkbox-mark"></span> Minimum operating balance is TZS 5,000/=.</li>
                    </ul>
                  </div>
                )}

              </div>
            </div>

            
             <ApplyForm
           selectOptions={accountTypes}
            selectPlaceholder="Account Types"
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
