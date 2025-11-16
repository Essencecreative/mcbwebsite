"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import ApplyForm from "@/components/Forms/ApplyForm";

export default function SavingsAccount() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contentRef = useRef(null);

  const accountTypes = [
    "Tukutane January",
    "Akiba Yangu",
    "Child Saving",
    "Foreign Current Savings",
    "Student Account",
    "Tunu Account",
  ];

  const typeFromQuery = searchParams.get("type") || "Tukutane January";
  const [activeType, setActiveType] = useState(typeFromQuery);

  // Keep activeType in sync with URL param (but don’t scroll here)
  useEffect(() => {
    const type = searchParams.get("type");
    if (type && accountTypes.includes(type)) {
      setActiveType(type);
    }
  }, [searchParams]);

  const handleSelect = (selectedType) => {
    setActiveType(selectedType);

    // Prevent Next.js from auto-scrolling to top
    router.push(`/Saving-Account?type=${encodeURIComponent(selectedType)}`, {
      scroll: false,
    });

    // Smooth scroll to contentRef with offset
    setTimeout(() => {
      if (contentRef.current) {
        const yOffset = -150; // Adjust to match where you want scroll to stop (e.g. title)
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
      breadcrumbTitle="Savings Account"
      breadcrumbSubTitle="Savings Account"
         backgroundImage="/assets/images/backgrounds/Savings-Banner.png"
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

                {/* Tukutane January */}
                {activeType === "Tukutane January" && (
                  <div className="account-content">
                    <h2>Tukutane January</h2>
                    <p>
                      Designed & aimed at enabling customers to save their monies that 
                      will help them solve January mitigations such as paying rent, 
                      school fees etc.
                    </p>

                    <h3>Features</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Specifically designed for all customers</li>
                      <li><span className="icon-checkbox-mark"></span> Interest rate – 4% per annum to any balance above zero</li>
                      <li><span className="icon-checkbox-mark"></span> Monthly Fee – Free</li>
                      <li><span className="icon-checkbox-mark"></span> Min opening balance – TZS 5,000</li>
                      <li><span className="icon-checkbox-mark"></span> NO Cheque Book</li>
                      <li><span className="icon-checkbox-mark"></span> NO ATM card</li>
                      <li><span className="icon-checkbox-mark"></span> Mobile Banking Allowed – Yes</li>
                    </ul>
                  </div>
                )}

                {/* Akiba Yangu */}
                {activeType === "Akiba Yangu" && (
                  <div className="account-content">
                    <h2>Akiba Yangu</h2>
                    <p>
                      A uniquely designed account to give customer freedom of saving and withdrawal 
                      any amount at any time through various channels.
                    </p>

                    <h3>Features</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Targeting all customers who need a Saving Account</li>
                      <li><span className="icon-checkbox-mark"></span> Min Opening balance – TZS 5,000</li>
                      <li><span className="icon-checkbox-mark"></span> Min Operating balance – TZS 10,000</li>
                      <li><span className="icon-checkbox-mark"></span> ATM Card Fee – TZS 10,000</li>
                      <li><span className="icon-checkbox-mark"></span> Mobile banking – Allowed</li>
                      <li><span className="icon-checkbox-mark"></span> Monthly Fee – TZS 1,000</li>
                      <li><span className="icon-checkbox-mark"></span> Counter cash withdrawal fees – TZS 2,500 for amounts below TZS 5mln, else 0.1% max 100k</li>
                    </ul>
                  </div>
                )}

                {/* Child Saving */}
                {activeType === "Child Saving" && (
                  <div className="account-content">
                    <h2>Child Saving</h2>
                    <p>
                      Designed to allow holders to save regularly and allows for instant cash 
                      withdrawal over the counter, Agency and Mobile banking with charges. 
                      Suitable for Parents/guardians who seek to save for their children’s education
                    </p>

                    <h3>Features</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> For children under 18yrs. Guardians/Parents have full authority until child reaches 18yrs</li>
                      <li><span className="icon-checkbox-mark"></span> Monthly Fee – Free</li>
                      <li><span className="icon-checkbox-mark"></span> Min Opening balance – TZS 5,000</li>
                      <li><span className="icon-checkbox-mark"></span> Min Operating balance – TZS 2,000</li>
                      <li><span className="icon-checkbox-mark"></span> No ATM card</li>
                      <li><span className="icon-checkbox-mark"></span> Credit Interest</li>
                      <li><span className="icon-checkbox-mark"></span> No Cheque book</li>
                      <li><span className="icon-checkbox-mark"></span> Counter cash withdrawal fees – TZS 2,500 for amounts below TZS 5mln, else 0.1% max 100k</li>
                    </ul>
                  </div>
                )}

                {/* Foreign Current Savings */}
                {activeType === "Foreign Current Savings" && (
                  <div className="account-content">
                    <h2>Foreign Current Savings</h2>
                    <p>
                      For customers in need of saving in Foreign currency.
                    </p>

                    <h3>Features</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> No ATM card issued for this account</li>
                      <li><span className="icon-checkbox-mark"></span> Currencies used are US$/£/EURO</li>
                    </ul>

                    <h3>Benefits</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Credit Interest issued for this account</li>
                    </ul>
                  </div>
                )}

                {/* Student Account */}
                {activeType === "Student Account" && (
                  <div className="account-content">
                    <h2>Student Account</h2>
                    <p>
                      Account specifically designed for students in universities and colleges.
                      When students graduate and get employed, they will be introduced to other products with different features
                    </p>

                    <h3>Features</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Students between age 18 – 25yrs</li>
                      <li><span className="icon-checkbox-mark"></span> NO MONTHLY FEES</li>
                      <li><span className="icon-checkbox-mark"></span> Min Opening balance – TZ10,000</li>
                      <li><span className="icon-checkbox-mark"></span> Min Operating balance – TZS 10,000</li>
                      <li><span className="icon-checkbox-mark"></span> ATM Card Fee – TZS 10,000</li>
                      <li><span className="icon-checkbox-mark"></span> Mobile banking – Allowed</li>
                    </ul>
                  </div>
                )}

                {/* Tunu Account */}
                {activeType === "Tunu Account" && (
                  <div className="account-content">
                    <h2>Tunu Account</h2>
                    <p>
                      This is a saving plan structured for women with clear objectives to address 
                      entrepreneurial challenges. Women can meet personal and business financial 
                      obligations by saving continuously, earn interest, and access loans.
                    </p>

                    <h3>Features</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Specifically designed for all women</li>
                      <li><span className="icon-checkbox-mark"></span> Can be opened and operated in TZS or USD</li>
                      <li><span className="icon-checkbox-mark"></span> Opening balance is Zero</li>
                      <li><span className="icon-checkbox-mark"></span> Minimum operating balance – TZS 10,000 or equivalent in USD</li>
                      <li><span className="icon-checkbox-mark"></span> Interest calculated daily and paid quarterly</li>
                      <li><span className="icon-checkbox-mark"></span> No monthly charges/ledger fees</li>
                      <li><span className="icon-checkbox-mark"></span> Get emergency loans up to 95% of deposits</li>
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
