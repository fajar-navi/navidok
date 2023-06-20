import React, {Fragment, Component} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";
import bg_Header from "../assets/img/header-10.jpg";
import bg_findImage from "../assets/img/bg_find.jpg";

function TermOfUse() {
    return (
        <Fragment>
            <Menu />
            <ImgBg trading={"crypto"} title={"Term Of Use"}  src={bg_Header} />
            <section id="about" className="section-small" style={{backgroundColor: `#eeeef0`}}>
                <div className="container">
                    <div className="row" style={{padding: `20px`}}>
                        <div className="col-lg-12">
                            <h2 className="font-blue w500">NAVIDOK TERMS OF USE (V.01/22)</h2>
                            <p className="no-pad">Welcome to Navidok mobile application, please read the entire Navidok
                                Terms of Use before accessing or using Navidok mobile application. By continuing to
                                access Navidok and/or use our services, we deemed that you have read, understood, and
                                agreed with the Navidok Terms of Use. </p>

                            <h2 className="font-blue w500 mt-7">1. DEFINITIONS</h2>
                            <h4  style={{marginBottom: `0px`}}>"Affiliate"</h4>
                            <p className="no-pad"> means, with respect to a party, any entity that, directly or
                                indirectly through one or more intermediaries, controls, is controlled by, or is under
                                common control with, such party. For purposes of this definition, the “control” of an
                                entity (and the correlative terms, “controlled by” and “under common control with”)
                                means the direct or indirect ownership or control of more than 50% of the voting
                                interests of such entity.</p>

                            <h4 style={{marginBottom: `0px`, marginTop:'30px'}}>"Application"</h4>
                            <p className="no-pad mt-3">means Navidok mobile application. </p>

                            <h4 style={{marginBottom: `0px`, marginTop:'30px'}}>"Login"</h4>
                            <p className="no-pad">means a username and password assigned to an individual for purposes
                                of accessing the Application and/or Services.</p>
                            <h4 style={{marginBottom: `0px`, marginTop:'30px'}}>"Registered User"</h4>
                            <p className="no-pad">means a person who has been registered and complete all information
                                and requirements to access the Application. </p>
                            <h4 style={{marginBottom: `0px`, marginTop:'30px'}}>"Ship Owner"</h4>
                            <p className="no-pad">means an individual or legal entity owning, operating, and/or managing
                                one or multiple ships or sea vessels. </p>
                            <h4 style={{marginBottom: `0px`, marginTop:'30px'}}>"Shipyard Owner"</h4>
                            <p className="no-pad">means an individual or legal entity owning, operating, and/or managing
                                one or multiple shipyards or dry docks.</p>
                            <h4 style={{marginBottom: `0px`, marginTop:'30px'}}>"Supporting Industry"</h4>
                            <p className="no-pad">means an individual or legal entity owning, operating, and/or managing
                                a company that supporting the Ship Owner and/or Shipyards Owner in the form of goods
                                and/or services.</p>
                            <h2 className="font-blue w500 mt-7">2. GENERAL INFORMATION</h2>
                            <h4 className="numbering mob-mt--30">2.1</h4> <p className="no-pad pL40">This Navidok’s
                            Terms of Use (“Terms of Use”) is an agreement between User who access the Services and/or
                            Application(“User”, “You”, “Your”, or “Yourself”) and Navidok Inc. (“Navidok”, “We, “Us”, or
                            “Our”) a company duly established and legally operating under the laws of [Delaware] and
                            domiciled in Delaware.</p>
                            <h4 className="numbering">2.2</h4> <p className="no-pad pL40">This Terms of Use contains
                            terms and conditions that You should comply when You use the Application and/orServices,
                            including any updates thereto, as may be available.</p>


                            <h2 className="font-blue w500 mt-7">3. SCOPE OF SERVICES </h2>
                            <h4 className="numbering mob-mt--30">3.1</h4> <p className="no-pad pL40">The Application is
                            an application to gather and facilitate needs of the users / stakeholders in maritime
                            industry, including but not limited to Ship Owner, Shipyard Owner, and Supporting
                            Industry. </p>
                            <h4 className="numbering">3.2</h4> <p className="no-pad pL40">The Application is provided
                            and supported by Navidok, where you can browse different types of dry-docks, shipyard, and
                            other need in the maritime industry (“Services”). </p>
                            <h4 className="numbering">3.3</h4> <p className="no-pad pL40">Although we will use our
                            expertise with caution in performing the Services, we do not verify, and do not guarantee,
                            that all information provided or available in the Application is accurate, complete, correct
                            or the latest available, and we are not responsible for any errors (including placement and
                            typing errors), obstruction (either because of temporary and/or partial, damage, repair or
                            improvement to the Application), inaccurate, misleading or false information of Ship Owner,
                            Shipyard Owner, and/or Supporting Industry. </p>
                            <h4 className="numbering">3.4</h4> <p className="no-pad pL40">Changes in market conditions
                            or circumstances that occur can lead to changes in a short time causing the information
                            provided to be inaccurate or not applicable. </p>
                            <h4 className="numbering">3.5</h4> <p className="no-pad pL40">In providing the Services We
                            provide an online platform to connect You with other Users. We are not responsible or liable
                            for the acts or omissions of other Users, and You have sole responsibility for any
                            obligations or liabilities to other Users. </p>

                            <h2 className="font-blue w500 mt-7">4. USE OF APPLICATION AND SERVICES</h2>
                            <h4 className="numbering mob-mt--30">4.1</h4> <p className="no-pad pL40">Navidok operates a
                            maritime information platform that connects Ship Owners, Shipyard Owner, and Supporting
                            Industry. We will provide You with access to Application and use of the Services, either as
                            a Ship Owner, Shipyard Owner, or Supporting Industry. </p>
                            <h4 className="numbering">4.2</h4> <p className="no-pad pL40">The access and use of
                            Application are subject to this Terms of Use.Before using the Application, You must agree to
                            this Terms of Use, and register in the Application by filling in and complete all required
                            information as available therein. </p>
                            <h4 className="numbering">4.3</h4> <p className="no-pad pL40">We may, at Our sole
                            discretion, modify, remove, add, or enhance features of the Services and/or Application from
                            time to time. </p>
                            <h4 className="numbering">4.4</h4> <p className="no-pad pL40">Registration. </p>
                            <h4 className="numbering pL55">4.4.1</h4> <p className="no-pad pL110">To become a Registered
                            User, you must complete all the registration process. </p>
                            <h4 className="numbering pL55">4.4.2</h4> <p className="no-pad pL110">Individuals who
                            conduct the registration process should be at least eighteen (18) years old and/or the
                            authorized person of Ship Owner, Shipyard Owner, or Supporting Industry in accordance to
                            their company’s deed of establishment, article of association, or other supporting legal
                            document. </p>
                            <h4 className="numbering pL55">4.4.3</h4> <p className="no-pad pL110">By becoming a
                            Registered User, you represent, acknowledge, and agree to the following conditions:<br/>

                            i. You represent to Navidok that all information that have been provided or will be
                            provided to Navidok are true, accurate, and complete as requested by Navidok. Further,
                            You undertake that you are authorized to share all of such information (e.g. company’s
                            information), including have obtained consent from the relevant individuals as the owner
                            of personal information; and hereby you give consent on behalf of such individuals to
                            the collection, use, disclosure and processing of his/her personal information by
                            Us.<br/>
                            ii. You represent and warrant that You are at least 18 (eighteen) years old and/or the
                            authorized person of Ship Owner, Shipyard Owner, or Supporting Industry in accordance to
                            their company’s deed of establishment, article of association, or other supporting legal
                            document.<br/>
                            iii. You agree to access or use the Application or Services, solely for the purpose as
                            specified in this Terms of Use and will not abuse or use the Application or Services for
                            fraudulent purposes, causing inconvenience to others, requesting fake orders or other
                            actions that may or may be deemed to cause losses in any form toward other people.<br/>
                            iv. You understand and agree that all risks arising from the use of the Application and
                            Services are entirely Your responsibility and You hereby agree to release Us from any
                            claims regarding damages, interferences or other forms of system disruptions caused by
                            unauthorized access by other parties.<br/>
                            v. You understand and agree that Navidok has the right, in its sole discretion, to
                            refuse, suspend or terminate the Services to you at any time without prior notification
                            or consent from you. <br/>
                            vi. You understand that the Application utilizes the data from Google Maps services and
                            content, and that by using the Application, you agree to comply with: <br/>
                            1. the Google Maps/ Google Earth Additional Terms of Services at
                            https://maps.google.com/help/terms_maps.html; <br/>
                            2. the Google Privacy Policy at https://www.google.com/policies/privacy/; and <br/>
                            3. the Google Acceptable Service Policy at
                            https://cloud.google.com/maps-platform/terms/aup/.<br/>
                            vii. You expressly release Us, including but not limited to Our officials, directors,
                            commissioners, employees, and agents, from any and all obligations, consequences,
                            material or immaterial losses, claims, fees (including advocate fees) or legal
                            responsibilities that arise or may arise due to Your violation of this Terms of Use.<br/>
                            viii. Excluded from the foregoing, if there is a direct loss due to Our violation of
                            this Terms of Use, then You agree and expressly limit the amount of Your claim as to the
                            total amount actually paid to Navidok.<br/>
                            ix. YOU ACKNOWLEDGE THAT NAVIDOK IS A TECHNOLOGY COMPANY, NOT A TRANSPORTATION,
                            LOGISTIC, FINANCIAL AND OTHER COMPANY AND WE DO NOT PROVIDE TRANSPORTATION, LOGISTIC,
                            FINANCIAL AND OTHER SERVICES. <br/>
                            x. BY CONTINUING ACCESS OR USE TO THE APPLICATION AND/OR SERVICES, YOU HEREBY AGREE TO
                            SUBJECT TO AND COMPLY WITH ALL OF THIS TERMS OF USE. Please note that we may change,
                            modify, add and delete these Terms of Use at any time when it is necessary to comply
                            with any law or regulation binding on Us or to reflect a change to our operational
                            practices, provided that We will use reasonable endeavors to provide notice of material
                            changes on the Application. By continuing to use any part of the Application after such
                            changes to these Terms of Use, you agree and consent to the changes. IMMEDIATELY STOP TO
                            ACCESS OR USE THE APPLICATION AND/OR SERVICES IF YOU DO NOT AGREE TO ANY PART OF THIS
                            TERMS OF USE AND/OR ITS AMENDMENTS.</p>

                        <h4 className="numbering">4.5</h4> <p className="no-pad pL40">The following are services
                        that can be used by the Users, respectively: </p>
                        <h4 className="numbering pL55">4.5.1</h4> <p className="no-pad pL110">General Users <br/>
                        i. to access the application. <br/>
                        ii. To search any information via the Application search engine (NaviFIND).
                    </p>
                        <h4 className="numbering pL55">4.5.2</h4> <p className="no-pad pL110">Users as Ship
                        Owner<br/>
                        i. to create, edit, and upload the ships’ profile and details, to be accessed and/or
                        reviewed by the other Users. <br/>
                        ii. to access Application’s calculator to calculate the estimated cost for the available
                        products, such as paint and anode provided by the Supporting Industry. <br/>
                        iii. to request quotation of above products that will be providedby the Supporting
                        Industry.
                        iv. To communicate and negotiate with other Users related to Services that may be given
                        by such Users. <br/>
                        v. To search any information via the Application search engine (NaviFIND), including to
                        find dock in particular locations.
                    </p>

                        <h4 className="numbering pL55">4.5.3</h4> <p className="no-pad pL110">Users as Shipyard
                        Owner<br/>
                        i. to create, edit, and upload the dock/ shipyard’s profile and details, to be accessed
                        and/or reviewed by the Users.<br/>
                        ii. to enable Boost My Dock feature, by enabling the Boost My Dock featureit will
                        prioritizeits dock/shipyard to be presented and displayed on top of list of the
                        searchresult. <br/>
                        iii. to access Application’s calculator to calculate the estimated cost for the
                        available products, such as paint and anode provided by the Supporting Industry. <br/>
                        iv. to request quotation of above products that will be providedby the Supporting
                        Industry.<br/>
                        v. To communicate and negotiate with other Users related to Services that may be given
                        by such Users. <br/>
                        vi. To search any information via the Application search engine (NaviFIND).
                    </p>

                        <h4 className="numbering pL55">4.5.4</h4> <p className="no-pad pL110">Users as Supporting
                        Industry<br/>
                        i. to create, edit, and upload the company profile,products, and/or services details, to
                        be accessed and/or reviewed by the Users.<br/>
                        ii. to upload the company’s Logo or other type of advertisement in the Application or as
                        a result of the Application’s search engine (NaviFIND). <br/>
                        iii. to setuptheir advertising to be displayed on the Application’s search engine
                        (NaviFIND). <br/>
                        iv. To communicate and negotiate with other Users related to productsthat may be
                        requested by such Users, provided all process of negotiation and agreement should not be
                        conducted in the Application. <br/>
                        v. To search any information via the Application search engine (NaviFIND).
                    </p>

                        <h2 className="font-blue w500 mt-7">5. NAVIDOK’S ACCOUNTS</h2>
                        <h4 className="numbering mob-mt--30">5.1</h4> <p className="no-pad pL40">To become a
                        Registered User and to access the Application and Services, you must create an Account. You
                        agree to provide true, accurate and complete information as requested by the registration
                        form and all forms that you have accessed on the Application, and agree to update such
                        information to maintain its correctness, accuracy and completeness.<br/>
                        We will collect, saved and process your personal data and information, including but not
                        limited to your name, electronic mail (e-mail) address, and your mobile phone number
                        when you register to set up an Account. We will collect, use, disclose and process your
                        personal information as described further under this Terms of Use.
                    </p>
                        <h4 className="numbering">5.2</h4> <p className="no-pad pL40">
                        <strong>Logins.</strong> Registered user must have a unique Login to access the Application.
                        Registered User shall not allow or authorize any other person than the Registered User to
                        use such Login. Registered User may deactivate its Login and register a new individual only
                        when such Registered User no longer be using the Services.
                            <span style={{fontweight: `bold`, textDecoration:'underline'}}>User shall promptly notify Navidok in the event User becomes aware of any unauthorized use of Login. Notwithstanding the foregoing, Navidok reserve the right to temporarily or permanently block, disconnect, delete, or deactivate your Account or to refuse to facilitateYour instruction or orders if We know or have sufficient reasons to suspect that You have transferred or allowed Your Account to be used by the unauthorized person or any other security reasons. </span>
                    </p>
                        <h4 className="numbering">5.3</h4> <p className="no-pad pL40">You must maintain the security
                        and confidentiality of your Login, in the event of any disclosure of your Login, in any way
                        whatsoever resulting in any unauthorized use of your Login and/or Account, order(s) or
                        instruction(s) received from such unauthorized user shall still be considered as valid
                        orders and We will process such order(s) and/or instruction(s). You hereby declare that
                        Navidok is not responsible for any loss or damage arising from the misuse of your Login
                        and/or Account.
                    </p>
                        <h2 className="font-blue w500 mt-7">6. Data Privacy and Confidentiality</h2>
                        <h4 className="numbering mob-mt--30">6.1</h4> <p className="no-pad pL40">
                        <strong>Definition.</strong> “Confidential Information” means, without limitation, any
                        proprietary information, User information, User’s personal data, product plans, inventions,
                        technical data, trade secrets, know-how, the terms of this Terms of Use, or other business
                        information, in each case disclosed or made available by a party (“Discloser”) to the other
                        party (“Recipient”) through the Application, or the other channel or media.
                    </p>
                        <h4 className="numbering">6.2</h4> <p className="no-pad pL40"><strong>Non-Use and
                        Non-Disclosure.</strong> The Recipient shall, with respect to Confidential Information of
                        the Discloser: (i) not disclose such Confidential Information to any third party at any time
                        and limit disclosure to its employees, contractors, or its legal, financial and accounting
                        advisors having a need to know and who have agreed to be bound by confidentiality
                        obligations that are at least as restrictive as the terms of this Terms of Use; and (ii)
                        protect the confidentiality of the Confidential Information with at least the same degree of
                        care as Recipient uses to protect its own Confidential Information of a like nature, but no
                        less than a reasonable degree of care. Notwithstanding the foregoing, Recipient may disclose
                        Confidential Information solely to the extent necessary to comply with a court order or as
                        otherwise required by law or a government body, provided that Recipient must give Discloser
                        prompt written notice and obtain or allow for a reasonable effort by Discloser to obtain a
                        protective order prior to disclosure.
                    </p>
                        <h4 className="numbering">6.3</h4> <p className="no-pad pL40">The Recipient shall, with
                        respect to Confidential Information of the Discloser: (i) not disclose such Confidential
                        Information to any third party at any time and limit disclosure to its employees,
                        contractors, or its legal, financial and accounting advisors having a need to know and who
                        have agreed to be bound by confidentiality obligations that are at least as restrictive as
                        the terms of this Terms of Use; and (ii) protect the confidentiality of the Confidential
                        Information with at least the same degree of care as Recipient uses to protect its own
                        Confidential Information of a like nature, but no less than a reasonable degree of care.
                        Notwithstanding the foregoing, Recipient may disclose Confidential Information solely to the
                        extent necessary to comply with a court order or as otherwise required by law or a
                        government body, provided that Recipient must give Discloser prompt written notice and
                        obtain or allow for a reasonable effort by Discloser to obtain a protective order prior to
                        disclosure.
                    </p>

                        <h4 className="numbering">6.4</h4> <p className="no-pad pL40">Navidok may disclose your
                        personal information subject to the following conditions:<br/>
                        <strong>i. Consent: </strong>We will only share your personal information when We have
                        Your consent to do so. You agree that Your use of Our services will constitute your
                        consent of the sharing of your personal information. <br/>
                        <strong>ii. For Legal Reasons: </strong>We may also, in our absolute discretion, share
                        your personal information (including government agencies, law enforcement, and lawyers
                        and other advisers) if we consider this is necessary to: i) comply with applicable laws
                        and regulations; ii) investigate any potential fraud or illegal acts; or iii) protect
                        our brand, our reputation and our property.

                    </p>
                        <h4 className="numbering">6.5</h4> <p className="no-pad pL40">
                        <strong>Exclusions.</strong> The obligations with respect to Confidential Information shall
                        not apply with respect to Confidential Information Recipient can demonstrate: (i) is now or
                        becomes publicly available through no fault of Recipient; (ii) is lawfully obtained from a
                        third party without a duty of confidentiality; (iii) is known to Recipient without
                        obligation of confidentiality prior to such disclosure; or (iv) is, at any time,
                        independently developed by Recipient without use of Discloser’s Confidential Information.
                    </p>

                    </div>
                </div>


            </div>
        </section>


    <Footer/>
</Fragment>
)
}

export default TermOfUse
