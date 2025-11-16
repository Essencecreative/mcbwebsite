"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import ApplyForm from "@/components/Forms/ApplyForm";

export default function NonLifeInsurance() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contentRef = useRef(null);

  const insuranceTypes = [
    "Fire & Allied Perils Insurance",
    "Liability Insurance",
    "Motor Insurance",
    "Marine Insurance",
    "Engineering Insurance",
    "Agriculture Insurance",
    "Insurance Premium Finance",
  ];

  const typeFromQuery = searchParams.get("type") || "Fire & Allied Perils Insurance";
  const [activeType, setActiveType] = useState(typeFromQuery);

  // ✅ Only sync query with state — no scroll here
  useEffect(() => {
    const type = searchParams.get("type");
    if (type && insuranceTypes.includes(type)) {
      setActiveType(type);
    }
  }, [searchParams]);

  // ✅ Handle click with manual smooth scroll (no auto-jump)
  const handleSelect = (selectedType) => {
    setActiveType(selectedType);
    router.push(`/Non-Life-Insurance?type=${encodeURIComponent(selectedType)}`, {
      scroll: false,
    });

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
      breadcrumbTitle="Non-Life Insurance"
      breadcrumbSubTitle="Non-Life Insurance"
      backgroundImage="/assets/images/backgrounds/Non-Life-Insurance-Banner.png"
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
                    <h3>Insurance Types</h3>
                  </div>
                  <div className="card-types-box">
                    <ul>
                      {insuranceTypes.map((type) => (
                        <li key={type}>
                          <button
                            onClick={() => handleSelect(type)}
                            className={`type-btn ${activeType === type ? "active" : ""}`}
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

                {/* Fire & Allied Perils Insurance */}
                {activeType === "Fire & Allied Perils Insurance" && (
                  <div className="account-content">
                    <h2>Fire & Allied Perils Insurance</h2>
                    <p>Keep your dream home and valuables safe.</p>
                    <ul>
                      <li> <span className="icon-checkbox-mark"></span> Domestic Package</li>
                      <li> <span className="icon-checkbox-mark"></span> Building Combined</li>
                      <li><span className="icon-checkbox-mark"></span> Office Combined</li>
                      <li><span className="icon-checkbox-mark"></span> Assets/Industrial All Risk</li>
                      <li><span className="icon-checkbox-mark"></span> Business Interruption</li>
                      <li><span className="icon-checkbox-mark"></span> Ahadi</li>
                    </ul>
                  </div>
                )}

                {/* Liability Insurance */}
                {activeType === "Liability Insurance" && (
                  <div className="account-content">
                    <h2>Liability Insurance</h2>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Public Liability</li>
                      <li><span className="icon-checkbox-mark"></span> Product Liability</li>
                      <li><span className="icon-checkbox-mark"></span> Tours Operators Liability</li>
                      <li><span className="icon-checkbox-mark"></span> Directors & Officers Liability</li>
                      <li><span className="icon-checkbox-mark"></span> Carriers Liability</li>
                      <li><span className="icon-checkbox-mark"></span> Professional Indemnity</li>
                    </ul>
                  </div>
                )}

                {/* Motor Insurance */}
                {activeType === "Motor Insurance" && (
                  <div className="account-content">
                    <h2>Motor Insurance</h2>
                    <p>Assurance protection on the road.</p>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Motor Assurance</li>
                      <li><span className="icon-checkbox-mark"></span> Comprehensive</li>
                      <li><span className="icon-checkbox-mark"></span> Third Party</li>
                      <li><span className="icon-checkbox-mark"></span> Third Party Fire & Theft</li>
                    </ul>
                  </div>
                )}

                {/* Marine Insurance */}
                {activeType === "Marine Insurance" && (
                  <div className="account-content">
                    <h2>Marine Insurance</h2>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Marine Hull</li>
                      <li><span className="icon-checkbox-mark"></span> Marine Cargo</li>
                    </ul>
                  </div>
                )}

                {/* Engineering Insurance */}
                {activeType === "Engineering Insurance" && (
                  <div className="account-content">
                    <h2>Engineering Insurance</h2>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Contractors All Risk Cover</li>
                      <li><span className="icon-checkbox-mark"></span> Machinery Breakdown</li>
                      <li><span className="icon-checkbox-mark"></span> Electronic Equipment</li>
                      <li><span className="icon-checkbox-mark"></span> Errection All Risk</li>
                    </ul>
                  </div>
                )}

                {/* Agriculture Insurance */}
                {activeType === "Agriculture Insurance" && (
                  <div className="account-content">
                    <h2>Agriculture Insurance</h2>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Perils Insurance</li>
                      <li><span className="icon-checkbox-mark"></span> Multi-Perils Insurance</li>
                      <li><span className="icon-checkbox-mark"></span> Weather Index</li>
                    </ul>
                  </div>
                )}

                {/* Insurance Premium Finance */}
                {activeType === "Insurance Premium Finance" && (
                  <div className="account-content">
                    <h2>Insurance Premium Finance</h2>
                    <p>
                      At Mwalimu Commercial Bank Insurance agency we can finance your insurance premium by paying premium in 10 months installment maximum.
                    </p>
                  </div>
                )}

              </div>
            </div>

              <ApplyForm
           selectOptions={insuranceTypes}
            selectPlaceholder="Insurance Types"
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

        .account-content ul {
          list-style: none;
          padding-left: 0;
        }

        .account-content ul li {
          margin-bottom: 6px;
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
