
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Careers">
            <>
            {/*Start Intro Style2 Area*/}
            <section className="intro-style2-area">
                <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                    <div className="intro-style2-img-box">
                        <div className="inner">
                        <img src="assets/images/resources/intro-style2-1.jpg" alt="" />
                        <div className="shape-1">
                            <img
                            src="assets/images/shapes/intro-style2-img-box-shape-1.png"
                            alt=""
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-6">
                    <div className="intro-style2-content-box">
                        <div className="sec-title">
                        <h2>
                            Mountains Move
                            <br /> for a Determined Team
                        </h2>
                        </div>
                        <div className="text">
                        <p>
                            Desire that they cannot foresee the pain &amp; trouble that are
                            bound too ensue equal blame belongs through shrinking.
                        </p>
                        <p>To enjoy a pleasure that has no annoying consequences.</p>
                        </div>
                        <ul>
                        <li>
                            <div className="icon-box">
                            <span className="icon-checkbox-mark" />
                            </div>
                            <p>Great explorer of the master-builder</p>
                        </li>
                        <li>
                            <div className="icon-box">
                            <span className="icon-checkbox-mark" />
                            </div>
                            <p>On the other hand</p>
                        </li>
                        </ul>
                        <div className="send-resume-box">
                        <div className="icon">
                            <span className="icon-cv" />
                        </div>
                        <div className="title">
                            <h4>
                            <a href="#">Send Resume</a>
                            </h4>
                            <h3>
                            <a href="mailto:info@templatepath.com">
                                careerpath@finbank.com
                            </a>
                            </h3>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                    <div className="job-list-table-box">
                        <div className="table-outer">
                        <table className="job-list-table">
                            <thead className="header">
                            <tr>
                                <th>Department</th>
                                <th>Job Role</th>
                                <th>Location</th>
                                <th>Last Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="department">
                                <h3>Marketing</h3>
                                </td>
                                <td className="job-role">
                                <h3>Regional Head</h3>
                                </td>
                                <td className="location">
                                <p>Los Angeles</p>
                                </td>
                                <td className="last-date">
                                <p>18th Jul, 2022</p>
                                </td>
                                <td>
                                <div className="btn-box">
                                    <a className="btn-one" href="#">
                                    <span className="txt">Apply</span>
                                    </a>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="department">
                                <h3>Marketing</h3>
                                </td>
                                <td className="job-role">
                                <h3>Team Leader</h3>
                                </td>
                                <td className="location">
                                <p>Los Angeles</p>
                                </td>
                                <td className="last-date">
                                <p>25th Jul, 2022</p>
                                </td>
                                <td>
                                <div className="btn-box">
                                    <a className="btn-one" href="#">
                                    <span className="txt">Apply</span>
                                    </a>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="department">
                                <h3>Finance</h3>
                                </td>
                                <td className="job-role">
                                <h3>Assistant Manager</h3>
                                </td>
                                <td className="location">
                                <p>California</p>
                                </td>
                                <td className="last-date">
                                <p>10th Aug, 2022</p>
                                </td>
                                <td>
                                <div className="btn-box">
                                    <a className="btn-one" href="#">
                                    <span className="txt">Apply</span>
                                    </a>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="department">
                                <h3>Office</h3>
                                </td>
                                <td className="job-role">
                                <h3>Office Executive</h3>
                                </td>
                                <td className="location">
                                <p>Newyork</p>
                                </td>
                                <td className="last-date">
                                <p>10th Aug, 2022</p>
                                </td>
                                <td>
                                <div className="btn-box">
                                    <a className="btn-one" href="#">
                                    <span className="txt">Apply</span>
                                    </a>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="department">
                                <h3>Customer Care</h3>
                                </td>
                                <td className="job-role">
                                <h3>Help Desk Job</h3>
                                </td>
                                <td className="location">
                                <p>San Fransisco</p>
                                </td>
                                <td className="last-date">
                                <p>23rd Sep, 2022</p>
                                </td>
                                <td>
                                <div className="btn-box">
                                    <a className="btn-one" href="#">
                                    <span className="txt">Apply</span>
                                    </a>
                                </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                    <div className="subscribe-box-style1 subscribe-box-style1--style2">
                        <div className="icon">
                        <img src="assets/images/icon/subscribe-3.png" alt="" />
                        </div>
                        <div className="inner-title">
                        <h3>
                            Subscribe us to
                            <br /> Recieve Career Updates
                        </h3>
                        </div>
                        <form className="subscribe-form-style1" action="#">
                        <div className="input-box">
                            <input type="email" name="email" placeholder="Email address" />
                            <div className="inner-icon">
                            <i className="far fa-envelope-open" />
                            </div>
                        </div>
                        <button className="btn-one" type="submit">
                            <span className="txt">Subscribe</span>
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/*End Intro Style2 Area*/}
            </>


            </Layout>
        </>
    )
}