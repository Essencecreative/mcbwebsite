"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import ApplyForm from "@/components/Forms/ApplyForm";

export default function LoanAccount() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contentRef = useRef(null);

  const loanTypes = [
    "Mwalimu Personal Loan",
    "Personal Loan",
    "Salary Advance",
    "Wastaafu Loan",
    "Insurance Premium Finance",
    "Global Education Loan",
    "Mchongo fasta",
    "Jenga na mwalimu bank",
    "Plot loan",
    "Mlinde mstaafu",
    "Ada chap chap",
    "Mwalimu jikimu",
  ];

  const typeFromQuery = searchParams.get("type") || "Mwalimu Personal Loan";
  const [activeType, setActiveType] = useState(typeFromQuery);

  // Keep activeType synced with query (but don't trigger scroll here)
  useEffect(() => {
    const type = searchParams.get("type");
    if (type && loanTypes.includes(type)) {
      setActiveType(type);
    }
  }, [searchParams]);

  const scrollToContent = () => {
    if (contentRef.current) {
      const yOffset = -150; // Adjust scroll offset to align where you want (e.g. below header)
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
    router.push(`/Loan-Account?type=${encodeURIComponent(selectedType)}`, {
      scroll: false,
    });

    // Smooth scroll to content
    setTimeout(scrollToContent, 200);
  };


  // Loan content mapping
  const loanContents = {
    "Mwalimu Personal Loan": (
      <>
        <h2>Mwalimu Personal Loan</h2>

        <p>
          It is a salaried Loan targeting Teachers from Government schools. Mostly for development purposes but can also cater for short term needs such as school fees, personal development, and any other legal need.
        </p>

        <h3>Features</h3>

        <ul>
          <li><span className="icon-checkbox-mark"></span> Minimum Period 3 months</li>
          <li><span className="icon-checkbox-mark"></span> Maximum period 86 months based on amounts and ability to pay</li>
          <li><span className="icon-checkbox-mark"></span> Maximum unsecured amounts up to Tshs.30,000,000/=</li>
          <li><span className="icon-checkbox-mark"></span> Maximum secured amount up to Tshs.70,000,000/=</li>
        </ul>

        <h3>Benefits</h3>

        <ul>
          <li><span className="icon-checkbox-mark"></span> Longer repayment period, smaller monthly payments</li>
          <li><span className="icon-checkbox-mark"></span> Credit life insurance cover against death and permanent disability</li>
          <li><span className="icon-checkbox-mark"></span> No hassles to get loan</li>
        </ul>
      </>
    ),
    "Personal Loan": (
      <>
        <h2>Personal Loan</h2>

        <p>
          Salaried loan targeting Government employees. Mostly for development purposes or short-term needs.
        </p>

        <h3>Features</h3>

        <ul>
          <li><span className="icon-checkbox-mark"></span> Minimum Period 3 months</li>
          <li><span className="icon-checkbox-mark"></span> Maximum period 86 months based on amounts and ability to pay</li>
          <li><span className="icon-checkbox-mark"></span> Maximum unsecured amounts up to Tshs.30,000,000/=</li>
          <li><span className="icon-checkbox-mark"></span> Maximum secured amount up to Tshs.70,000,000/=</li>
        </ul>

        <h3>Benefits</h3>
        
        <ul>
          <li><span className="icon-checkbox-mark"></span> Longer repayment period, smaller monthly payments</li>
          <li><span className="icon-checkbox-mark"></span> Credit life insurance cover against death and permanent disability</li>
          <li><span className="icon-checkbox-mark"></span> No hassles to get loan</li>
        </ul>
      </>
    ),
    "Salary Advance": (
      <>
        <h2>Salary Advance</h2>
        <p>
          Salaried loan for Government employees for emergency purposes or short-term needs.
        </p>
        <h3>Features</h3>
        <ul>
          <li><span className="icon-checkbox-mark"></span> Must have salary account with MCB where salary should PASS at least ONCE</li>
          <li><span className="icon-checkbox-mark"></span> Maximum loan amount is 50% of net salary</li>
          <li><span className="icon-checkbox-mark"></span> Maximum repayment period = 1 month</li>
        </ul>
        <h3>Benefits</h3>
        <ul>
          <li><span className="icon-checkbox-mark"></span> 0% Loan Application Fee</li>
          <li><span className="icon-checkbox-mark"></span> 0% Life insurance</li>
          <li><span className="icon-checkbox-mark"></span> No collateral/security required</li>
          <li><span className="icon-checkbox-mark"></span> Only salary passing through Mwalimu bank needed</li>
        </ul>
      </>
    ),
    "Wastaafu Loan": (
      <>
        <h2>Wastaafu Loan</h2>
        <p>
          Special loan for government retirees who channel their pension at Mwalimu bank.
        </p>
        <h3>Features</h3>
        <ul>
          <li><span className="icon-checkbox-mark"></span> Min period = 3 months</li>
          <li><span className="icon-checkbox-mark"></span> Maximum period = 60 months based on amount and ability to pay</li>
          <li><span className="icon-checkbox-mark"></span> Minimum loan TZS 300,000/=</li>
          <li><span className="icon-checkbox-mark"></span> Maximum unsecured up to TZS 30,000,000/= for pensioners routing via Mwalimu bank</li>
          <li><span className="icon-checkbox-mark"></span> Maximum secured up to 80% of amount fixed as cash cover</li>
        </ul>
        <h3>Benefits</h3>
        <ul>
          <li><span className="icon-checkbox-mark"></span> Lower interest rate</li>
          <li><span className="icon-checkbox-mark"></span> Credit life insurance cover up to age 70</li>
          <li><span className="icon-checkbox-mark"></span> Loan access and free consultation from bank professionals</li>
        </ul>
      </>
    ),
    "Insurance Premium Finance": (
      <>
        <h2>Insurance Premium Finance</h2>
        <p>
          Financing to help customers get insurance by contributing 70% of total premium; customer pays remaining 30%.
        </p>
        <h3>Benefits</h3>
        <ul>
          <li><span className="icon-checkbox-mark"></span> Relieves customer from hassles and enables insurance within desired time</li>
        </ul>
      </>
    ),
    "Global Education Loan": (
      <>
        <h2>Global Education Loan</h2>
        <p>
          Facilitates students' access to higher education in overseas universities. The bank provides up to 50% of total fee.
        </p>
      </>
    ),
    "Mchongo fasta": (
      <>
        <h2>Mchongo fasta</h2>
        <p>
          Loan facility designed specifically for affordable access to money for emergencies with easy and manageable repayments.
        </p>
      </>
    ),
    "Jenga na mwalimu bank": (
      <>
        <h2>Jenga na Mwalimu Bank</h2>
        <p>
          Loan facility designed to provide affordable access to building and construction materials with easy repayments.
        </p>
      </>
    ),
    "Plot loan": (
      <>
        <h2>Plot Loan</h2>
        <p>
          Facility designed specifically to provide affordable access to land ownership with easy and manageable repayments.
        </p>
      </>
    ),
    "Mlinde mstaafu": (
      <>
        <h2>Mlinde Mstaafu</h2>
        <p>
          Pensioners loan tailored to help retirees waiting for their pensions.
        </p>
      </>
    ),
    "Ada chap chap": (
      <>
        <h2>Ada Chap Chap</h2>
        <p>
          School fees loan facility designed for affordable access to school fees payment with easy repayments.
        </p>
      </>
    ),
    "Mwalimu jikimu": (
      <>
        <h2>Mwalimu Jikimu</h2>
        <p>
          Loan for newly employed teachers to help them settle at workstations and solve initial hardships.
        </p>
      </>
    ),
  };

  const handleFormSubmit = (data) => {
    console.log('Form Submitted:', data);
    // Send to API, show notification, etc.
  };
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Loan Account"
      breadcrumbSubTitle="Loan Account"
          backgroundImage="/assets/images/backgrounds/Loan-Banner.png"
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
                    <h3>Loan Types</h3>
                  </div>
                  <div className="card-types-box">
                    <ul>
                      {loanTypes.map((type) => (
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

            {/* Content */}
            <div className="col-xl-9" ref={contentRef}>
              <div className="cards-content-box">{loanContents[activeType]}</div>
            </div>

              <ApplyForm
           selectOptions={loanTypes}
            selectPlaceholder="Loan Types"
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
        .cards-content-box {
          padding: 25px;
          border: 1px solid #eee;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
          margin-bottom: 30px;
        }
        .cards-content-box h2 {
          color: #e97927;
          margin-bottom: 10px;
        }
        .cards-content-box h3 {
          margin-top: 20px;
          margin-bottom: 10px;
          color: #1a1a1a;
          font-weight: 600;
        }
        .cards-content-box ul {
          list-style: none;
          padding: 0;
        }
        .cards-content-box ul li {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          font-size: 15px;
        }
        ul li span {
          color: #e97927;
          margin-right: 8px;
          font-size: 16px;
        }
      `}</style>
    </Layout>
  );
}
