import React, {Fragment} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";
import bg_Header from "../assets/img/header-07.jpg";
// import bg_Impact from "../assets/img/impact-bg-image.jpg";
import imgGenco from "../assets/img/genco.jpg";

function DataProtection() {
    return (
        <Fragment>
            <Menu />
            <ImgBg trading={"crypto"} title={"Data Protection"}  src={bg_Header} />
            <section className="quote section-small ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 style={{marginBottom: `0px`}}>Introduction</h4>
                            <p className="no-pad">
                                NAVIDOK is committed to protecting the privacy and personal data of its users. This Data Protection Policy outlines how we collect, use, store, and protect personal information obtained through the use of our mobile app. By using our app, you consent to the practices described in this policy.</p>
                            <h4></h4>

                        </div>
                        <div className="col-lg-12">
                            <h4 style={{marginBottom: `0px`}}>Information We Collect</h4>
                            <p className="no-pad">
                                a. Personal Information: We may collect personal information such as names, email addresses, contact information, and demographic data when users voluntarily provide it to us.<br/>
                                b. Usage Information: We may collect non-personal information about how users interact with our app, such as device information, log data, and analytics. This information helps us improve our services and enhance user experience.</p>
                        </div>

                        <div className="col-lg-12 mt-5">
                            <h4 style={{marginBottom: `0px`}}>Purpose of Data Collection</h4>
                            <p className="no-pad">We collect personal information for the following purposes:
                                <ul>
                                    <li>To provide and improve our app's functionality and features</li>
                                    <li>To personalize user experience</li>
                                    <li>To communicate with users and respond to their inquiries</li>
                                    <li>To analyze app usage and improve our services</li>
                                    <li>To comply with legal obligations</li>
                                </ul>
                            </p>
                        </div>

                        <div className="col-lg-12 mt-5">
                            <h4 style={{marginBottom: `0px`}}>Data Storage and Security</h4>
                            <p className="no-pad">
                                a. Data Storage: We store personal information on secure servers or with trusted third-party service providers who adhere to appropriate data protection standards.<br/>
                                b. Data Security: We implement reasonable security measures to protect personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or electronic storage method can be 100% secure.</p>
                        </div>

                        <div className="col-lg-12 mt-5">
                            <h4 style={{marginBottom: `0px`}}>Sharing of Personal Information</h4>
                            <p className="no-pad">
                                a. Third-Party Service Providers: We may share personal information with trusted third-party service providers who assist us in delivering our app's functionality and services. These providers are contractually obligated to handle personal information in a manner consistent with this policy.<br/>
                                b. Legal Requirements: We may disclose personal information if required by law, regulation, or legal process.</p>
                        </div>

                        <div className="col-lg-12 mt-5">
                            <h4 style={{marginBottom: `0px`}}>User Rights and Choices</h4>
                            <p className="no-pad">
                                a. Access and Correction: Users have the right to access, modify, or delete their personal information. Users can make such requests by contacting us at [provide contact details].<br/>
                                b. Marketing Communications: Users can choose to opt-out of receiving marketing communications from us by following the instructions provided in our communications or by contacting us.<br/>
                                c. Device Permissions: Users may have the ability to control certain app permissions through their device settings.</p>
                        </div>

                        <div className="col-lg-12 mt-5">
                            <h4 style={{marginBottom: `0px`}}>Children's Privacy</h4>
                            <p className="no-pad">Our app is not intended for use by individuals under the age of [specify age]. We do not knowingly collect personal information from children. If we become aware that personal information has been collected from a child without parental consent, we will take steps to delete the information.</p>
                        </div>

                        <div className="col-lg-12 mt-5">
                            <h4 style={{marginBottom: `0px`}}>Changes to the Policy</h4>
                            <p className="no-pad">We reserve the right to update or modify this Data Protection Policy at any time. We will notify users of any material changes through app notifications or other means. Users are encouraged to review this policy periodically for updates.</p>
                        </div>

                        <div className="col-lg-12 mt-5">
                            <h4 style={{marginBottom: `0px`}}>Contact Us</h4>
                            <p className="no-pad">If you have any questions, concerns, or requests regarding this Data Protection Policy or the handling of your personal information, please contact us at [provide contact details].</p>
                        </div>

                    </div>

                </div>
            </section>


            <Footer/>
        </Fragment>
    )
}

export default DataProtection
