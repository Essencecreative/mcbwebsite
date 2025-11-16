
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Career Details">
            <>
                {/*Start Career Details Area*/}
                <section className="career-details-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                        <div className="career-details-content">
                            <div className="job-title-box">
                            <div className="left">
                                <h4>Marketing</h4>
                                <h3>Regional Head Officer</h3>
                                <p>
                                <span className="icon-pin" /> Bellflower, Los Angeles
                                </p>
                            </div>
                            <div className="right">
                                <button>Save This Job</button>
                                <button className="style2">Apply Now</button>
                            </div>
                            </div>
                            <div className="job-description-content">
                            <h2>Job Description</h2>
                            <p>
                                To take a trivial example, which of us ever undertake laborious
                                physical exercise except to obtain some to advantage from it?
                                But who has any right to find off fault with a man who chooses
                                to enjoy a pleasure that has no annoying consequences.
                            </p>
                            <p>
                                Exercise except to obtain some advantage from it? But who has
                                any right to find fault with a man who all chooses to enjoy a
                                pleasure that has no annoying consequences.
                            </p>
                            </div>
                            <div className="responsibilities-content">
                            <h2>Responsibilities</h2>
                            <ul>
                                <li>Don’t just make a deposit, make an investment today</li>
                                <li>Known for trust, honesty, and customer care</li>
                                <li>
                                We’re more than just someone’s ATM. We’re here for life’s big
                                moments.
                                </li>
                                <li>A bank for people who want to live life better</li>
                            </ul>
                            </div>
                            <div className="requirements-content-box">
                            <h2>Requirements</h2>
                            <ul>
                                <li>
                                <span>Age</span> <b>:</b>28+
                                </li>
                                <li>
                                <span>Pronoun</span> <b>:</b>Male / Female
                                </li>
                                <li>
                                <span>Education</span> <b>:</b>Bachelor’s Degree in Related
                                Field
                                </li>
                                <li>
                                <span>Experience</span> <b>:</b>1-3 Yrs
                                </li>
                                <li>
                                <span>Skills</span> <b>:</b>Something Related this Job
                                </li>
                            </ul>
                            </div>
                            <div className="job-social-share-box">
                            <h2>Share</h2>
                            <ul>
                                <li>
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
                                    Facebook
                                </a>
                                </li>
                                <li>
                                <a className="tw" href="#">
                                    <i className="fab fa-twitter" />
                                    Twitter
                                </a>
                                </li>
                                <li>
                                <a className="googlep" href="#">
                                    <i className="fab fa-google-plus-g" />
                                    Google+
                                </a>
                                </li>
                                <li>
                                <a className="linked" href="#">
                                    <i className="fab fa-linkedin-in" />
                                    Linkedin
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-4">
                        <div className="resume-box">
                            <div className="inner-title">
                            <h3>Upload Your Resume</h3>
                            </div>
                            <div className="resume-box__one">
                            <ul>
                                <li>
                                <h5>Salary</h5>
                                <p>$85,000 - $90,000 Per Year</p>
                                </li>
                                <li>
                                <h5>Vacancy</h5>
                                <p>2 Vacancy Available</p>
                                </li>
                                <li>
                                <h5>Allowances</h5>
                                <p>Medical Expenses &amp; Travel</p>
                                </li>
                                <li>
                                <h5>Paid Leave</h5>
                                <p>26 Days of Annual Leave</p>
                                </li>
                            </ul>
                            </div>
                            <div className="resume-box__two">
                            <div
                                className="resume-box__two-shape-bg"
                                style={{
                                backgroundImage:
                                    "url(assets/images/shapes/resume-box__two-shape.png)"
                                }}
                            ></div>
                            <div className="img-box">
                                <img src="assets/images/resources/resume-1.jpg" alt="" />
                            </div>
                            <div className="text-box">
                                <h3>Hal Baldwin</h3>
                                <p>Recruiter</p>
                                <ul>
                                <li>
                                    Call: <a href="tel:2512353256">(800) 456-1234</a>
                                </li>
                                <li>
                                    Mail:{" "}
                                    <a href="mailto:info@templatepath.com">
                                    halbaldwin@finbank.com
                                    </a>
                                </li>
                                </ul>
                                <div className="resume-social-link-box">
                                <ul className="clearfix">
                                    <li>
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*End Career Details Area*/}
            </>


            </Layout>
        </>
    )
}