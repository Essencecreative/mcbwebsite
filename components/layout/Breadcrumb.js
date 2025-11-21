import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle, backgroundImage }) {
  // default background
  const bgImage = backgroundImage || "assets/images/backgrounds/way-to-bank.png";

  return (
    <>
      {/* Page Header Start */}
      <section className="breadcrumb-area">
        <div
          className="breadcrumb-area-bg"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="inner-content">
                <div className="title">
                  <h2>{breadcrumbTitle}</h2>
                </div>
                <div className="breadcrumb-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li className="active">{breadcrumbTitle}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}
    </>
  );
}
