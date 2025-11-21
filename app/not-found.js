

import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error404() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="404 Error">
          
            <div>
                {/*Error Page Start*/}
                <section className="error-page-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="error-content text-center">
                                    <div className="big-title wow fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <h2>Oh...ho...</h2>
                                    </div>
                                    <div className="title wow fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <h2>Sorry, Something Went Wrong.</h2>
                                    </div>
                                    <div className="text">
                                        <p>
                                            The page you are looking for was moved, removed, renamed<br />
                                            or never existed.
                                        </p>
                                    </div>

                                    <div className="error-page-search-box">
                                        <form className="search-form" action="#">
                                            <input placeholder="Search ..." type="text" />
                                            <button type="submit">
                                                <i className="fa fa-search" aria-hidden="true"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="btns-box wow slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <Link href="/" legacyBehavior>
                                            <a className="btn-one">
                                                <span className="txt">
                                                    Back to Home<i className="icon-refresh arrow"></i>
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Error Page End*/}
                
            </div>
            
            </Layout>
        </>
    )
}
