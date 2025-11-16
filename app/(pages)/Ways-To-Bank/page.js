"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import ApplyForm from "@/components/Forms/ApplyForm";
import { getWakalas } from "@/utils/api";

export default function WaysToBank() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contentRef = useRef(null);

  const bankTypes = [
    "Mwalimu Mobile",
    "Mwalimu Wakala",
    "MwalimuCard Visa",
    "Privacy Policy",
  ];

  const typeFromQuery = searchParams.get("type") || "Mwalimu Mobile";
  const [activeType, setActiveType] = useState(typeFromQuery);

  // Filter states
  const [filterRegion, setFilterRegion] = useState("");
  const [filterDistrict, setFilterDistrict] = useState("");
  const [wakalaList, setWakalaList] = useState([]);
  const [loadingWakalas, setLoadingWakalas] = useState(true);

  useEffect(() => {
    const type = searchParams.get("type");
    if (type && bankTypes.includes(type)) {
      setActiveType(type);
    }
  }, [searchParams]);

  // Fetch wakala locations
  useEffect(() => {
    const fetchWakalas = async () => {
      try {
        setLoadingWakalas(true);
        const wakalas = await getWakalas(filterRegion || undefined, filterDistrict || undefined);
        setWakalaList(wakalas);
      } catch (error) {
        console.error("Error fetching wakala locations:", error);
      } finally {
        setLoadingWakalas(false);
      }
    };

    if (activeType === "Mwalimu Wakala") {
      fetchWakalas();
    }
  }, [activeType, filterRegion, filterDistrict]);

  const handleSelect = (selectedType) => {
    setActiveType(selectedType);
    router.push(`/Ways-To-Bank?type=${encodeURIComponent(selectedType)}`, { scroll: false });

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
  };

  // Unique values from fetched wakala list
  const uniqueRegions = [...new Set(wakalaList.map(w => w.region))].sort();
  const uniqueDistricts = [...new Set(wakalaList.map(w => w.district))].sort();

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Ways To Bank"
      breadcrumbSubTitle="Ways To Bank"
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
                    <h3>Ways To Bank</h3>
                  </div>
                  <div className="card-types-box">
                    <ul>
                      {bankTypes.map((type) => (
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

                {/* Mwalimu Mobile */}
                {activeType === "Mwalimu Mobile" && (
                  <div className="account-content">
                    <h2>Mwalimu Mobile</h2>
                    <p>
                      Mwalimu Commercial Bank offers a personalized mobile banking channel that provides affordable, easily accessible, and convenient banking services. The registered customer can access our mobile banking by dialing <strong>*150*31#</strong>.
                    </p>
                    <h3>Benefits</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Access your account anywhere, anytime</li>
                      <li><span className="icon-checkbox-mark"></span> Convenient, simple and easy to use</li>
                      <li><span className="icon-checkbox-mark"></span> Safe and reliable to transact with</li>
                    </ul>
                  </div>
                )}

                {/* Mwalimu Wakala */}
                {activeType === "Mwalimu Wakala" && (
                  <div className="account-content">
                    <h2>Mwalimu Wakala</h2>
                    <p>
                      Mwalimu Bank Wakala ensures customers get all key services without visiting our branches.
                    </p>
                    <h3>Benefits</h3>
                    <ul>
                      <li><span className="icon-checkbox-mark"></span> Access your account anywhere, anytime</li>
                      <li><span className="icon-checkbox-mark"></span> Convenient, simple and easy to use</li>
                      <li><span className="icon-checkbox-mark"></span> Safe and reliable to transact with</li>
                      <li><span className="icon-checkbox-mark"></span> Activate your ATM card</li>
                    </ul>

                    {/* Wakala Directory Table */}
                    <div className="mt-5">
                      <h3 className="mb-4">Find Your Nearest Wakala</h3>

                      {/* Filters */}
                      <div className="row g-3 mb-4">
                        <div className="col-md-6">
                          <select
                            className="form-select"
                            value={filterRegion}
                            onChange={(e) => setFilterRegion(e.target.value)}
                          >
                            <option value="">All Regions</option>
                            {uniqueRegions.map(region => (
                              <option key={region} value={region}>{region}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6">
                          <select
                            className="form-select"
                            value={filterDistrict}
                            onChange={(e) => setFilterDistrict(e.target.value)}
                          >
                            <option value="">All Districts</option>
                            {uniqueDistricts.map(district => (
                              <option key={district} value={district}>{district}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Scrollable Table with Borders & Narrow Address */}
                      <div
                        className="table-responsive border rounded shadow-sm"
                        style={{ maxHeight: '480px', overflowY: 'auto' }}
                      >
                        <table className="table table-hover table-bordered align-middle mb-0">
                          <thead className="table-light sticky-top" style={{ zIndex: 1 }}>
                            <tr>
                              <th scope="col" className="ps-3">Wakala Name</th>
                              <th scope="col">Region</th>
                              <th scope="col">District</th>
                              <th scope="col">Address</th>
                              <th scope="col" className="pe-3">Phone</th>
                            </tr>
                          </thead>
                          <tbody>
                            {loadingWakalas ? (
                              <tr>
                                <td colSpan="5" className="text-center py-4 text-muted">
                                  Loading wakala locations...
                                </td>
                              </tr>
                            ) : wakalaList.length > 0 ? (
                              wakalaList.map(wakala => (
                                <tr key={wakala._id}>
                                  <td className="ps-3 fw-medium text-primary">
                                    {wakala.name}
                                  </td>
                                  <td>{wakala.region}</td>
                                  <td>{wakala.district}</td>
                                  <td className="small text-muted">
                                    <span title={wakala.address}>{wakala.address}</span>
                                  </td>
                                  <td className="pe-3">
                                    <a
                                      href={`tel:${wakala.phone}`}
                                      className="small text-muted"
                                    >
                                      {wakala.phone}
                                    </a>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="5" className="text-center py-4 text-muted">
                                  No Wakala found. Try adjusting your filters.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* MwalimuCard Visa */}
                {activeType === "MwalimuCard Visa" && (
                  <div className="account-content">
                    <h2>MwalimuCard Visa</h2>
                    <p>
                      The Mwalimu Bank Visa Prepaid card helps customers transact on ATMs with the VISA sign.
                    </p>
                    <p>
                      Uzinduzi wa MwalimuCard Visa: Waziri wa Nchi Ofisi ya Raisi Tawala za Mikoa na Serikali za Mitaa Mh. Selemani S. Jafo (Mb) officially launched MwalimuCard Visa on 11/03/2021 in Dodoma.
                    </p>
                  </div>
                )}

                {/* Privacy Policy */}
                {activeType === "Privacy Policy" && (
                  <div className="account-content">
                    <h2>Privacy Policy</h2>
                    <p>Mwalimu Mobile Banking</p>
                    <h3>Data Protection and Management</h3>
                    <p>
                      In order to ensure the protection of information in custody and sensitive data, the following should apply to Mwalimu Commercial Bank Plc staff and contractors:
                    </p>
                    <ul>
                      <li>Any Mwalimu Commercial Bank Plc data that is kept on removable media such as external hard drives and flash disks should be protected by password or encryption.</li>
                      <li>All Confidential Information and data should always be encrypted when stored or during use by Mwalimu Commercial Bank Plc, unless it’s in line with his/her job role and responsibility.</li>
                      <li>Information collected, owned and/or controlled by Mwalimu Commercial Bank Plc during the course of business should not be disclosed to outside people, parties, or organizations unless there is authorization from bank management.</li>
                      <li>No unauthorized copies or duplication is allowed unless it is for Mwalimu Commercial Bank Plc business activities.</li>
                      <li>The country laws related to data protection should be observed all the time unless directed otherwise by relevant country authority.</li>
                      <li>Users with laptops should store minimum quantity of Mwalimu Commercial Bank Plc information on local storage and ensure a backup is kept in shared drives.</li>
                      <li>Users other than laptop users are prohibited from storing company information on local drives to preserve storage space and prevent loss of files and confidential information in case of hardware failure or theft.</li>
                    </ul>

                    <h3>Information Security and Protection</h3>
                    <p>
                      Information security and protection is critical to Mwalimu Commercial Bank Plc in order to preserve:
                    </p>
                    <ul>
                      <li><strong>Confidentiality:</strong> Access to programs and data shall be confined to those with appropriate authority.</li>
                      <li><strong>Integrity:</strong> Information shall be complete and accurate. All systems, assets, and networks shall operate correctly, according to specification.</li>
                      <li><strong>Availability:</strong> Information shall be available and delivered to the right person, at the time when it is needed.</li>
                    </ul>

                    <p>
                      Mwalimu Commercial Bank Plc will take all appropriate measures to protect the systems, information, and data of the company through various measures, including but not limited to: physical access to computer/laptop machines, the assignment of unique user IDs and passwords, relevant access privileges based on job roles and responsibilities, logging and monitoring of user activities, and installation of security protection systems including firewalls & anti-virus software.
                    </p>

                    <p>
                      All users (employees, contractors, partners, support teams, etc.) granted access to Mwalimu Commercial Bank PLC network, systems, and data are responsible for information security as specified herein.
                    </p>

                    <ul>
                      <li>All Mwalimu Commercial Bank Plc system users are responsible for their use or misuse of confidential information. Users should not disclose, copy, release, sell, loan, review, alter, or destroy any information except when properly authorized within their professional responsibilities.</li>
                      <li>Staff and contractors (users) must protect/safeguard any physical key, alarm code, ID card, or computer network account that allows access to confidential information.</li>
                      <li>Where there are suspicious activities that might lead to compromise of confidential data, the incident should be reported to a supervisor, line manager, or head of department.</li>
                    </ul>

                    <p>Mwalimu Commercial Bank Plc – Mobile Banking App</p>
                  </div>
                )}

              </div>
            </div>

            {/* Apply Form */}
            <div className="col-xl-12 mt-5">
              <ApplyForm
                selectOptions={bankTypes}
                selectPlaceholder="Ways To Bank"
                onSubmit={handleFormSubmit}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full CSS */}
      <style jsx>{`
        .card-types-box ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .type-btn {
          width: 100%;
          text-align: left;
          padding: 14px 18px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
          color: #333;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .type-btn:hover {
          color: #e97927;
          background: #fff5f0;
        }

        .type-btn.active {
          background: #e97927;
          color: #fff;
          font-weight: 600;
        }

        .account-content {
          padding: 28px;
          border: 1px solid #eee;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
          margin-bottom: 30px;
          animation: fadeIn 0.4s ease;
        }

        .account-content h2 {
          color: #e97927;
          margin-bottom: 12px;
          font-size: 28px;
        }

        .account-content h3 {
          margin: 24px 0 12px;
          color: #1a1a1a;
          font-weight: 600;
          font-size: 20px;
        }

        .account-content ul {
          list-style: none;
          padding: 0;
        }

        .account-content ul li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 10px;
          font-size: 15.5px;
          line-height: 1.6;
        }

        .account-content ul li span {
          color: #e97927;
          margin-right: 10px;
          font-size: 17px;
          margin-top: 2px;
        }

        .form-select {
          height: 48px;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 0 14px;
          font-size: 15px;
        }

        /* Full Bordered Table */
        .table-bordered {
          border: 1px solid #dee2e6;
          font-size: 14.5px;
          margin: 0;
        }

        .table-bordered th,
        .table-bordered td {
          border: 1px solid #dee2e6 !important;
          padding: 12px 10px;
          vertical-align: middle;
        }

        .table-bordered th {
          background-color: #f8f9fa;
          font-weight: 600;
          color: #444;
          font-size: 14px;
        }

        /* Narrow Address Column */
        .table-bordered th:nth-child(4),
        .table-bordered td:nth-child(4) {
          max-width: 180px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .table-bordered td:nth-child(4) span {
          display: block;
          cursor: help;
        }

        .table-hover tbody tr:hover {
          background-color: #f8f9fa !important;
        }

        .table td a {
          font-weight: 500;
        }

        .table td a:hover {
          text-decoration: underline !important;
        }

        .sticky-top {
          top: 0;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .table-bordered {
            font-size: 13px;
          }
          .table-bordered th,
          .table-bordered td {
            padding: 8px 6px;
          }
          .table-bordered th:nth-child(4),
          .table-bordered td:nth-child(4) {
            max-width: 120px;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Layout>
  );
}