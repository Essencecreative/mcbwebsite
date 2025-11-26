"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import ApplyForm from "@/components/Forms/ApplyForm";
import { getMenuItemsByRoute, getImageUrl } from "@/utils/api";

export default function NonLifeInsurance() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contentRef = useRef(null);

  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeType, setActiveType] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        const result = await getMenuItemsByRoute("/Non-Life-Insurance");
        const items = result?.items || [];
        setMenuItems(items);

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
  };

  if (loading) {
    return (
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Non-Life Insurance">
        <div className="container text-center py-5">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  if (menuItems.length === 0) {
    return (
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Non-Life Insurance">
        <div className="container text-center py-5">
          <p>No insurance types available at this time.</p>
        </div>
      </Layout>
    );
  }

  const activeItem = menuItems.find(item => item.name === activeType) || menuItems[0];
  const pageContent = activeItem?.pageContent || {};
  const itemNames = menuItems.map(item => item.name);

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={pageContent.breadcrumbTitle || "Non-Life Insurance"}
      breadcrumbSubTitle={pageContent.breadcrumbSubTitle || ""}
      backgroundImage={pageContent.bannerImage ? getImageUrl(pageContent.bannerImage) : "/assets/images/backgrounds/Non-Life-Insurance-Banner.png"}
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
                      {itemNames.map((name) => (
                        <li key={name}>
                          <button
                            onClick={() => handleSelect(name)}
                            className={`type-btn ${activeType === name ? "active" : ""}`}
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

              <ApplyForm
           selectOptions={itemNames}
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
          padding-left: 0;
        }

        .account-content ul li {
          margin-bottom: 6px;
          font-size: 15px;
          display: flex;
          align-items: center;
        }

         .account-content ul li span {
          color: #e97927;
          margin-right: 8px;
          font-size: 16px;
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
