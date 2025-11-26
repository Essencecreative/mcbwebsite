"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import ApplyForm from "@/components/Forms/ApplyForm";
import { getMenuItemsByRoute, getImageUrl, getWakalas } from "@/utils/api";

export default function WaysToBank() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contentRef = useRef(null);

  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeType, setActiveType] = useState(null);
  const [subcategoryBanner, setSubcategoryBanner] = useState(null);

  // Filter states for Wakala
  const [filterRegion, setFilterRegion] = useState("");
  const [filterDistrict, setFilterDistrict] = useState("");
  const [wakalaList, setWakalaList] = useState([]);
  const [loadingWakalas, setLoadingWakalas] = useState(true);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        const result = await getMenuItemsByRoute("/Ways-To-Bank");
        const items = result?.items || [];
        setMenuItems(items);
        setSubcategoryBanner(result?.subcategoryBanner || null);

        if (items.length > 0) {
          const typeFromQuery = searchParams.get("type");
          const activeItem = typeFromQuery
            ? items.find(item => item.name === decodeURIComponent(typeFromQuery))
            : items[0];
          setActiveType(activeItem?.name || items[0]?.name);
        }
      } catch (error) {
        console.error("Error fetching menu items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Sync activeType with query param
  useEffect(() => {
    const type = searchParams.get("type");
    if (type && menuItems.length > 0) {
      const decodedType = decodeURIComponent(type);
      const item = menuItems.find(item => item.name === decodedType);
      if (item) {
        setActiveType(item.name);
      }
    } else if (menuItems.length > 0 && !activeType) {
      setActiveType(menuItems[0].name);
    }
  }, [searchParams, menuItems]);

  // Fetch wakala locations when "Mwalimu Wakala" is selected
  useEffect(() => {
    const fetchWakalas = async () => {
      if (activeType === "Mwalimu Wakala") {
        try {
          setLoadingWakalas(true);
          const wakalas = await getWakalas(filterRegion || undefined, filterDistrict || undefined);
          setWakalaList(wakalas);
        } catch (error) {
          console.error("Error fetching wakala locations:", error);
        } finally {
          setLoadingWakalas(false);
        }
      }
    };

    fetchWakalas();
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

  if (loading) {
    return (
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Ways To Bank">
        <div className="container text-center py-5">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  if (menuItems.length === 0) {
    return (
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Ways To Bank">
        <div className="container text-center py-5">
          <p>No banking options available at this time.</p>
        </div>
      </Layout>
    );
  }

  const activeItem = menuItems.find(item => item.name === activeType) || menuItems[0];
  const pageContent = activeItem?.pageContent || {};
  const itemNames = menuItems.map(item => item.name);

  // Unique values from fetched wakala list
  const uniqueRegions = [...new Set(wakalaList.map(w => w.region))].sort();
  const uniqueDistricts = [...new Set(wakalaList.map(w => w.district))].sort();

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={pageContent.breadcrumbTitle || "Ways To Bank"}
      breadcrumbSubTitle={pageContent.breadcrumbSubTitle || ""}
      backgroundImage={subcategoryBanner 
        ? getImageUrl(subcategoryBanner) 
        : (pageContent.bannerImage ? getImageUrl(pageContent.bannerImage) : "/assets/images/backgrounds/Ways-To-Bank-Banner.png")}
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
                      {itemNames.map((name) => (
                        <li key={name}>
                          <button
                            onClick={() => handleSelect(name)}
                            className={`type-btn ${
                              activeType === name ? "active" : ""
                            }`}
                          >
                            {name}
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
                <div className="account-content">
                  {pageContent.title && <h2>{pageContent.title}</h2>}
                  
                  {pageContent.description && (
                    <p>{pageContent.description}</p>
                  )}

                  {pageContent.features && pageContent.features.length > 0 && (
                    <>
                      <h3>Features</h3>
                      <ul>
                        {pageContent.features.map((feature, index) => (
                          <li key={index}>
                            <span className="icon-checkbox-mark"></span> {feature.text}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {pageContent.benefits && pageContent.benefits.length > 0 && (
                    <>
                      <h3>Benefits</h3>
                      <ul>
                        {pageContent.benefits.map((benefit, index) => (
                          <li key={index}>
                            <span className="icon-checkbox-mark"></span> {benefit.text}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Render accordion items as regular content */}
                  {pageContent.accordionItems && Array.isArray(pageContent.accordionItems) && pageContent.accordionItems.length > 0 && (
                    <div className="blog-content" style={{ marginTop: '30px' }}>
                      {pageContent.accordionItems
                        .sort((a, b) => (a.position || 0) - (b.position || 0))
                        .map((accordionItem, index) => (
                          <div key={index} style={{ marginBottom: '40px' }}>
                            <h2 style={{ color: '#e97927', marginBottom: '20px', fontSize: '24px', fontWeight: '600' }}>
                              {accordionItem.title}
                            </h2>
                            <div
                              dangerouslySetInnerHTML={{ __html: accordionItem.content || '' }}
                            />
                          </div>
                        ))}
                    </div>
                  )}

                  {/* Wakala Directory Table - Only show for "Mwalimu Wakala" */}
                  {activeType === "Mwalimu Wakala" && (
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
                  )}

                  {pageContent.additionalContent && (
                    <div
                      className="blog-content"
                      style={{ marginTop: '30px' }}
                      dangerouslySetInnerHTML={{ __html: pageContent.additionalContent }}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Apply Form */}
            <div className="col-xl-12 mt-5">
              <ApplyForm
                selectOptions={itemNames}
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

        .blog-content {
          line-height: 1.8;
        }

        .blog-content h3 {
          margin-top: 25px;
          margin-bottom: 15px;
          color: #1a1a1a;
          font-weight: 600;
          font-size: 20px;
        }

        .blog-content p {
          margin-bottom: 15px;
          color: #555;
          font-size: 15px;
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
