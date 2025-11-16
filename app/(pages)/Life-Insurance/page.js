"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import ApplyForm from "@/components/Forms/ApplyForm";

export default function LifeInsurance() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contentRef = useRef(null);

  const insuranceTypes = [
    "Kikundi Chetu Faraja Yetu",
    "Binafsi",
    "Individual Life Insurance",
  ];

  const handleFormSubmit = (data) => {
    console.log('Form Submitted:', data);
    // Send to API, show notification, etc.
  };

  const typeFromQuery = searchParams.get("type") || "Kikundi Chetu Faraja Yetu";
  const [activeType, setActiveType] = useState(typeFromQuery);

 useEffect(() => {
  const type = searchParams.get("type");
  if (type && insuranceTypes.includes(type)) {
    setActiveType(type);
  }
}, [searchParams]);

  const handleSelect = (selectedType) => {
    setActiveType(selectedType);
   router.push(`/Life-Insurance?type=${encodeURIComponent(selectedType)}`, { scroll: false });
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

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Life Insurance"
      breadcrumbSubTitle="Life Insurance"
        backgroundImage="/assets/images/backgrounds/Life-Insurance-Banner.png"
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
                    <h3>Insurance Types</h3>
                  </div>
                  <div className="card-types-box">
                    <ul>
                      {insuranceTypes.map((type) => (
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

                {/* Kikundi Chetu Faraja Yetu */}
                {activeType === "Kikundi Chetu Faraja Yetu" && (
                  <div className="account-content">
                    <h2>Kikundi Chetu Faraja Yetu</h2>
                    <p>
                      This is a cover for a group in occurrence of member/insured death 
                      as well as family members such as spouse, children, parents, 
                      and parents in law.
                    </p>
                  </div>
                )}

                {/* Binafsi */}
                {activeType === "Binafsi" && (
                  <div className="account-content">
                    <h2>Binafsi</h2>
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
                      <li><span className="icon-checkbox-mark"></span> Access to Mobile banking</li>
                    </ul>
                    <h3>Benefits</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Access to overdraft on-demand</li>
                      <li><span className="icon-checkbox-mark"></span> Make payments by cheques</li>
                    </ul>
                  </div>
                )}

                {/* Individual Life Insurance */}
                {activeType === "Individual Life Insurance" && (
                  <div className="account-content">
                    <h2>Individual Life Insurance</h2>
                    <p>
                      This offers triple benefits — savings, protection and periodic 
                      cash if opted for (i.e., cashback option). The Individual Life Cover 
                      Plan is available to individuals who wish to save for the future. 
                      It also provides financial security for their loved ones.
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
