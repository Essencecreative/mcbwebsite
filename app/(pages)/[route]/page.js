"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import ApplyForm from "@/components/Forms/ApplyForm";
import { getMenuItemsByRoute, getImageUrl } from "@/utils/api";

export default function DynamicMenuPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const contentRef = useRef(null);
  const route = params?.route || '';

  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeType, setActiveType] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        const typeFromQuery = searchParams.get("type");
        const items = await getMenuItemsByRoute(`/${route}`, typeFromQuery);
        setMenuItems(items);

        if (items.length > 0) {
          // Set active type from query or default to first item
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

    if (route) {
      fetchMenuItems();
    }
  }, [route, searchParams]);

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
    router.push(`/${route}?type=${encodeURIComponent(selectedType)}`, {
      scroll: false,
    });

    setTimeout(() => {
      if (contentRef.current) {
        const yOffset = -150;
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
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Loading...">
        <div className="container text-center py-5">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  if (menuItems.length === 0) {
    return (
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Page Not Found">
        <div className="container text-center py-5">
          <p>No content found for this page.</p>
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
      breadcrumbTitle={pageContent.breadcrumbTitle || activeItem?.name || 'Page'}
      breadcrumbSubTitle={pageContent.breadcrumbSubTitle || ''}
      backgroundImage={pageContent.bannerImage ? getImageUrl(pageContent.bannerImage) : "/assets/images/backgrounds/Transactional-Account-Banner.png"}
    >
      <section className="cards-area" style={{ marginTop: 100 }}>
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            {menuItems.length > 1 && (
              <div className="col-xl-3">
                <div className="sidebar-box-style1">
                  <div className="single-sidebar-box-style1 margintop">
                    <div className="sidebar-title">
                      <div className="dot-box" />
                      <h3>Types</h3>
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
            )}

            {/* Content Section */}
            <div className={menuItems.length > 1 ? "col-xl-9" : "col-xl-12"} ref={contentRef}>
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

                  {pageContent.accordionItems && pageContent.accordionItems.length > 0 && (
                    <div className="accordion-section" style={{ marginTop: '30px' }}>
                      {pageContent.accordionItems
                        .sort((a, b) => a.position - b.position)
                        .map((accordionItem, index) => (
                          <div key={index} className="accordion-item" style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#e97927', marginBottom: '10px' }}>
                              {accordionItem.title}
                            </h4>
                            <div
                              dangerouslySetInnerHTML={{ __html: accordionItem.content }}
                              style={{ marginBottom: '20px' }}
                            />
                          </div>
                        ))}
                    </div>
                  )}

                  {pageContent.additionalContent && (
                    <div
                      className="additional-content"
                      style={{ marginTop: '30px' }}
                      dangerouslySetInnerHTML={{ __html: pageContent.additionalContent }}
                    />
                  )}
                </div>
              </div>
            </div>

            <ApplyForm
              selectOptions={itemNames}
              selectPlaceholder="Type"
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
          transition: all 0.3s ease;
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

        .account-content h4 {
          margin-top: 15px;
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

