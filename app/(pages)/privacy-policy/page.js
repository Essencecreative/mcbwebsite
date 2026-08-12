'use client'
import Layout from "@/components/layout/Layout"

export default function PrivacyPolicy() {
    const sectionTitle = {
        fontSize: 22,
        marginTop: 35,
        marginBottom: 12,
        color: "#143d78",
    };
    const accentBar = {
        width: 80,
        height: 4,
        backgroundColor: "#E97927",
        marginBottom: 20,
    };
    const para = { textAlign: "justify", marginBottom: 15 };
    const listStyle = { paddingLeft: 20, marginBottom: 15, listStyleType: "disc" };
    const listItem = { marginBottom: 8 };

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Privacy Policy" headTitle="Privacy Policy">
                <section className="intro-style1-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                                <div className="sec-title">
                                    <h2 style={{ fontSize: 28, marginTop: 20 }}>
                                        PRIVACY POLICY &ndash; MWALIMU COMMERCIAL BANK PLC MOBILE BANKING APPLICATION
                                    </h2>
                                </div>
                                <div style={accentBar}></div>

                                <div className="text">
                                    <p style={para}>
                                        Mwalimu Commercial Bank Plc (The bank) is committed to protecting the privacy and
                                        security of personal information belonging to its customers and users of the Mwalimu
                                        Mobile Banking Application (&ldquo;the App&rdquo;).
                                    </p>
                                    <p style={para}>
                                        This Privacy Policy explains how the bank collects, use, protect and disclose personal
                                        data when you use the App. The Policy is guided by the Personal Data Protection Act, 2022
                                        and applicable regulations and requirements of the United Republic of Tanzania.
                                    </p>

                                    <h2 style={sectionTitle}>1. Information collected</h2>
                                    <p style={para}>
                                        Depending on the services you use, the App may collect and process:
                                    </p>
                                    <ul style={listStyle}>
                                        <li style={listItem}>Customer identification and contact information, such as name, mobile number and customer/account details;</li>
                                        <li style={listItem}>Banking and transaction information, including account balances, payments and transaction history;</li>
                                        <li style={listItem}>Authentication information such as login credentials, PINs, OTPs and security tokens;</li>
                                        <li style={listItem}>Device and technical information, such as device type, operating system, IP address, App version and security logs;</li>
                                        <li style={listItem}>Location information where required for specific services, such as locating nearby branches or ATMs;</li>
                                        <li style={listItem}>Camera or other device permissions where required for specific App functions, such as QR-code scanning or customer verification.</li>
                                    </ul>
                                    <p style={para}>
                                        The bank collects only information that is necessary for providing, securing and improving
                                        its services or for complying with applicable legal and regulatory requirements.
                                    </p>

                                    <h2 style={sectionTitle}>2. Use of Personal Data</h2>
                                    <p style={para}>Personal data may be used to:</p>
                                    <ul style={listStyle}>
                                        <li style={listItem}>Provide mobile banking and other financial services;</li>
                                        <li style={listItem}>Process and authenticate transactions;</li>
                                        <li style={listItem}>Verify customer identity;</li>
                                        <li style={listItem}>Prevent and detect fraud and other financial crimes;</li>
                                        <li style={listItem}>Protect customer accounts, devices and the Bank&apos;s systems;</li>
                                        <li style={listItem}>Provide customer support and service notifications;</li>
                                        <li style={listItem}>Maintain, monitor and improve the App;</li>
                                        <li style={listItem}>Meet legal, regulatory, audit and reporting obligations; and</li>
                                        <li style={listItem}>Respond to lawful requests from competent authorities.</li>
                                    </ul>
                                    <p style={para}>The bank does not sell customers&apos; personal data.</p>

                                    <h2 style={sectionTitle}>3. Sharing of Personal Data</h2>
                                    <p style={para}>
                                        Where necessary and permitted by law, personal data may be shared with authorised service
                                        providers, payment processors, technology providers, telecommunications providers,
                                        auditors, professional advisers, regulators, law enforcement agencies and other competent
                                        authorities.
                                    </p>
                                    <p style={para}>
                                        Third-party service providers processing personal data on behalf of the Bank are required
                                        to maintain appropriate confidentiality and security safeguards.
                                    </p>

                                    <h2 style={sectionTitle}>4. Protection of Personal Data</h2>
                                    <p style={para}>
                                        The bank implements appropriate technical and organisational security measures to protect
                                        personal data against unauthorised access, disclosure, alteration, loss or destruction.
                                    </p>
                                    <p style={para}>
                                        These measures may include encryption, access controls, secure authentication, transaction
                                        monitoring, security logging, vulnerability management and other cybersecurity controls.
                                    </p>
                                    <p style={para}>
                                        Customers are responsible for protecting their PINs, passwords, OTPs and other
                                        authentication credentials and should immediately report suspected unauthorised access or
                                        transactions to the Bank.
                                    </p>

                                    <h2 style={sectionTitle}>5. Data Retention</h2>
                                    <p style={para}>
                                        Personal data is retained only for as long as necessary to provide the relevant services
                                        or as required by applicable laws, regulations, banking requirements, audit obligations and
                                        legitimate business purposes.
                                    </p>
                                    <p style={para}>
                                        When information is no longer required, it will be securely deleted, destroyed or
                                        anonymised in accordance with the Bank&apos;s records-retention requirements.
                                    </p>

                                    <h2 style={sectionTitle}>6. Customer Data Protection Rights</h2>
                                    <p style={para}>Subject to applicable law, customers may have the right to:</p>
                                    <ul style={listStyle}>
                                        <li style={listItem}>Access their personal data;</li>
                                        <li style={listItem}>Request correction of inaccurate information;</li>
                                        <li style={listItem}>Request deletion or restriction of processing where legally applicable;</li>
                                        <li style={listItem}>Object to certain processing activities;</li>
                                        <li style={listItem}>Withdraw consent where processing is based on consent; and</li>
                                        <li style={listItem}>Lodge a complaint concerning the processing of their personal data.</li>
                                    </ul>
                                    <p style={para}>
                                        Requests relating to personal data may be submitted using the contact details below.
                                    </p>

                                    <h2 style={sectionTitle}>7. Changes to this Privacy Policy</h2>
                                    <p style={para}>
                                        The bank may update this Privacy Policy from time to time to reflect changes in services,
                                        technology, legislation or regulatory requirements. The latest version will be made
                                        available through the bank&apos;s official website.
                                    </p>

                                    <h2 style={sectionTitle}>8. Contact Us</h2>
                                    <p style={para}>
                                        For questions, concerns or requests regarding the processing of your personal data, please
                                        contact:
                                    </p>
                                    <p style={{ ...para, marginBottom: 6 }}>
                                        <strong>Mwalimu Commercial Bank Plc</strong>
                                        <br />
                                        Address:{" "}
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=MLIMANI+Tower+Sam+Nujoma+Road+Dar+es+Salaam"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: "#E97927" }}
                                        >
                                            MLIMANI Tower-Mezzanine Floor, Sam Nujoma Road, P. O. Box 61002, Dar es Salaam, Tanzania
                                        </a>
                                        <br />
                                        Email:{" "}
                                        <a href="mailto:info@mwalimubank.co.tz" style={{ color: "#E97927" }}>
                                            info@mwalimubank.co.tz
                                        </a>
                                        <br />
                                        Telephone:{" "}
                                        <a href="tel:+255222772957" style={{ color: "#E97927" }}>
                                            +255 222 772 957
                                        </a>
                                        <br />
                                        Website:{" "}
                                        <a
                                            href="https://www.mwalimubank.co.tz"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: "#E97927" }}
                                        >
                                            www.mwalimubank.co.tz
                                        </a>
                                    </p>

                                    <p style={{ ...para, marginTop: 25, fontStyle: "italic" }}>
                                        By using the Mwalimu Bank Application, you acknowledge that you have read and understood
                                        this Privacy Policy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
