import React, {Fragment} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";
import bg_Header from "../assets/img/header-14.jpg";
import {Link} from "react-router-dom";

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

                            <h2 className="font-blue w500 mt-7">7. Navidok’s IntellectualProperty Rights.</h2>
                            <h4 className="numbering mob-mt--30">7.1</h4>
                            <p className="no-pad pL40">
                                The Application, Services and all materials therein or transferred thereby, including,
                                without limitation, software, images, text, graphics, illustrations, logos, patents,
                                trademarks, service marks, copyrights, photographs, audio, videos, music, and User
                                Content belonging to other party (the “Navidok Content”), and all Intellectual Property
                                Rights related thereto, are the exclusive property of Navidok.
                            </p>
                            <h4 className="numbering">7.2</h4>
                            <p className="no-pad pL40">
                                Except as explicitly provided herein, nothing in this Terms of Use shall be deemed to
                                create a license in or any such Intellectual Property Rights, and You agree not to sell,
                                license, rent, modify, distribute, copy, reproduce, transmit, publicly display, publicly
                                perform, publish, adapt, edit or create derivative works from any Navidok Content.
                                Unless with our prior written consent, use of the Navidok Content for any purpose is
                                strictly prohibited.
                            </p>

                            <h4 className="numbering">7.3</h4>
                            <p className="no-pad pL40">
                                Subject to this Terms of Use, We grant You a limited, non-exclusive, revocable, nontransferable
                                (without the right to sublicense) license to (i) download, access and use
                                the Application, as is, only on the devices in the form of Your personal mobile phone
                                and/or tablet and solely for the purposes of using the Services, and (ii) access or use
                                content, information and related materials available on the Application solely for
                                personal and not for commercial purposes. All rights and privileges that are not
                                expressly granted herein are reserved by Navidok.
                            </p>

                            <h4 className="numbering">7.4</h4>
                            <p className="no-pad pL40">
                                Any duplication, distribution, creation of derivative works, sale or offer to sell, display
                                either in part or in full, and use of the Application and/or Services, either digitally or
                                otherwise or on devices other than mobile phones or tablets, including but not limited
                                to the use of additional applications such as modifiers, emulators, etc., which diverge
                                from this Terms of Use, as well as the intended purposes determined by Us, is a
                                violation of Our intellectual property right
                            </p>


                            <h2 className="font-blue w500 mt-7">8. User Content.</h2>
                            <h4 className="numbering mob-mt--30">8.1 General</h4>
                            <p className="no-pad pL40 mt-60-1200">
                                Some areas of the Services,Users by them selves will or Navidok on behalf of the User
                                is authorized to upload, submit and publish, content or information of the User as
                                profile information, comments, questions, photographs, illustrations, fonts, designs,
                                and other content or information (any such materials a User submits, posts, displays,
                                prints or otherwise makes available on or via the Service without compensation “User
                                Content”). As between You and Navidok, You retain ownership of your User Content,
                                and you understand that you will be entirely responsible for all such User Content,
                                including any third party Intellectual Property Rights incorporated therein.
                            </p>
                            <h4 className="numbering">8.2</h4>
                            <p className="no-pad pL40">
                                Uploading and Publishing User Content to Navidok.<br/>
                                You agree not to submit or use User Content that: (i) may create a risk of harm, loss,
                                physical or mental injury, emotional distress, death, disability, disfigurement, or
                                physical or mental illness to you, to any other person, or to any animal; (ii) may
                                create a risk of any other loss or damage to any person or property; (iii) seeks to
                                harm or exploit children by exposing them to inappropriate content, asking for
                                personally identifiable details or otherwise; (iv) may constitute or contribute to a
                                crime or tort; (v) contains any information or content that we deem to be unlawful,
                                harmful, abusive, racially or ethnically offensive, defamatory, infringing, invasive of
                                personal privacy or publicity rights, harassing, humiliating to other people (publicly or
                                otherwise), libelous, threatening, hostile, violent, or that which provokes violence or
                                hostility, profane, or otherwise objectionable; (vi) contains any information which
                                discriminates against others based on race, religion, sex, sexual orientation, age,
                                disability, ancestry or national origin; (vii) contains any information or content that is
                                illegal (including, without limitation, the disclosure of insider information under
                                securities law or of another party’s trade secrets); (viii) contains any information or
                                content that you do not have a right to make available under any law or under
                                contractual or fiduciary relationships; or (ix) contains any information or content that
                                you know is not correct and current. You agree that any User Content does not and
                                will not violate third-party rights of any kind, including without limitation any
                                Intellectual Property Rights (as defined below) or rights of privacy or publicity.
                                Navidok reserves the right, but is not obligated, to reject and/or remove any User
                                Content that Navidok believes, in its sole discretion, violates these provisions. You
                                understand that publishing your User Content on or via the Services is not a
                                substitute for registering it with the U.S. Copyright Office, the Writer’s Guild of
                                America, or any other rights organization.
                            </p>

                            <h4 className="numbering">8.3</h4>
                            <p className="no-pad pL40">In connection with your User Content, you affirm, represent and warrant the
                                following:</p>
                            <h4 className="numbering pL55">8.3.1</h4>
                            <p className="no-pad pL110">
                                Your User Content and Navidok’s use thereof as contemplated by this
                                Agreement and the Service will not violate any law or infringe any rights of
                                any third party, including but not limited to any Intellectual Property Rights
                                and privacy and publicity rights.
                            </p>
                            <h4 className="numbering pL55">8.3.2</h4>
                            <p className="no-pad pL110">
                                Navidok may exercise the rights to your User Content granted under this
                                Agreement without liability for payment of any guild fees, residuals,
                                payments, fees, or royalties payable under any collective bargaining
                                agreement or otherwise.
                            </p>
                            <h4 className="numbering pL55">8.3.3</h4>
                            <p className="no-pad pL110">
                                There is no suit action or claim or other legal or administrative proceeding
                                now pending or threatened which might directly or indirectly affect any of
                                your User Content or which might in any way impair the rights granted by
                                you hereunder.
                            </p>
                            <h4 className="numbering pL55">8.3.4</h4>
                            <p className="no-pad pL110">
                                If your User Content contains or incorporates in any manner any components
                                including but not limited to design elements, fonts, clipart, sprites, vectors or
                                brush tools and the like that are included in design programs, by uploading
                                any such User Content to Navidok, you represent and warrant that the end
                                user license agreement, terms of service or the equivalent license agreed to
                                by you allows you to incorporate such elements in the User Content created
                                by you, and to license such User Content to Navidok for the purposes set
                                forth herein
                            </p>
                            <h4 className="numbering pL55">8.3.5</h4>
                            <p className="no-pad pL110">
                                Your User Content is neither obscene, defamatory, or otherwise
                                objectionable.
                            </p>
                            <h4 className="numbering pL55">8.3.6</h4>
                            <p className="no-pad pL110">
                                To the best of your knowledge, all your User Content and other information
                                that you provide to us is truthful and accurate.
                            </p>
                            <h4 className="numbering pL55">8.3.7</h4>
                            <p className="no-pad pL110">
                                You will not transmit unsolicited emails or engage in spamming to publicize
                                or promote your relationship with Navidok.
                            </p>
                            <h4 className="numbering pL55">8.3.8</h4>
                            <p className="no-pad pL110">
                                If you use the Services to post, publish, share or print User Content, you
                                agree that you have verified that the User Content does not contain anything
                                that is illegal, encourages illegal activity, infringes (or is otherwise deceptively
                                similar to) any third-party’s Intellectual Property Rights (e.g. uploading
                                content or picture from other media), or otherwise breaches this Terms of
                                Use.
                            </p>
                            <h4 className="numbering pL55">8.3.9</h4>
                            <p className="no-pad pL110">
                                Upon making or learning of any claim that is inconsistent with any of the
                                representations or warranties made by you, Navidok shall send you written
                                notice of such claim, using the email address provided by you to Navidok,
                                specifying the details of the claim as then known to Navidok. Pending the
                                determination of such claim, Navidok may withhold from royalties and/or
                                other compensation due to you hereunder, such sums as are reasonably
                                related to the probable value of the claim as determined by Navidok.
                            </p>
                            <h4 className="numbering pL55">8.3.10</h4>
                            <p className="no-pad pL110">
                                Navidok takes no responsibility and assumes no liability for any User Content
                                that you or any other User or third party posts, publishes or prints over or
                                using the Service. You shall be solely responsible for your User Content and
                                the consequences of posting, publishing and printing it, and you agree that
                                we are only acting as a passive conduit for your online distribution and
                                publication of your User Content. You understand and agree that you may be
                                exposed to User Content that is inaccurate, objectionable, inappropriate for
                                children, or otherwise unsuited to your purpose, and you agree that Navidok
                                shall not be liable for any damages you allege to incur as a result of User
                                Content, Stock Media or your use of either in printed form. In the event that
                                your User Content is alleged to be offensive, inappropriate for children,
                                unlawful or otherwise in breach of these terms, you agree that Navidok may
                                disclose such User Content to law enforcement or other government
                                authorities.
                            </p>

                            <h2 className="font-blue w500 mt-7">9. Limitation of Liability.</h2>
                            <h4 className="numbering mob-mt--30">9.1</h4>
                            <p className="no-pad pL40">IN NO EVENT SHALL EITHER PARTY’S AGGREGATE CUMULATIVE LIABILITY
                                HEREUNDER (WHETHER IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY IN
                                TORT OR BY STATUTE OR OTHERWISE) EXCEED THE REMAINING AMOUNT THAT
                                MIGHT USED BY CUSTOMER IN THE APPLICATION HEREUNDER.
                            </p>
                            <h4 className="numbering mob-mt--30">9.2</h4>
                            <p className="no-pad pL40">IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR ANY CONSEQUENTIAL,
                                INCIDENTAL, INDIRECT, SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES, LOSSES,
                                OR EXPENSES (INCLUDING BUT NOT LIMITED TO BUSINESS INTERRUPTION, LOST
                                BUSINESS, LOST OPPORTUNITY AND/OR LOST PROFITS) EVEN IF IT HAS BEEN
                                ADVISED OF THEIR POSSIBLE EXISTENCE AND NOTWITHSTANDING THE FAILURE
                                OF ESSENTIAL PURPOSE OF ANY REMEDY.
                            </p>

                            <h2 className="font-blue w500 mt-7">10. Indemnification.</h2>
                            <p className="no-pad pL40">You agree to defend, indemnify and hold harmless Navidok and its subsidiaries, agents,
                                licensors, managers, and other affiliated companies, and their employees, contractors,
                                agents, officers and directors, from and against any and all claims, damages, obligations,
                                losses, liabilities, costs or debt, and expenses (including but not limited to attorney’s
                                fees) arising from: (i) your use of and access to the Application and/or Services, including
                                any data or content transmitted or received by you; (ii) your violation of any Terms of
                                this Terms of Use, including without limitation your breach of any of the representations
                                and warranties above; (iii) your violation of any third-party right, including without
                                limitation any right of privacy, publicity, or Intellectual Property Rights; (iv) your violation
                                of any applicable law, rule, or regulation; (v) any claim or damages that arise as a result
                                of any of your User Content, or any content that is submitted via your account; or (vi) any
                                other party’s access and use of the Service with your unique username, password, or
                                other appropriate security code.
                            </p>

                            <h2 className="font-blue w500 mt-7">11. Force Majeure</h2>
                            <p className="no-pad pL40">Our Application may be interrupted by events outside of Our authority or control
                                (“Force Majeure”), including but not limited to natural disasters, electricity disruptions,
                                telecommunications failures, government policies, and other events. You hereby agree
                                to release Us from any demands and responsibilities, if We are not able to facilitate
                                Service, including to fulfill instructions You requested through the Application, either in
                                part or in whole, due to a Force Majeure.
                            </p>


                            <h2 className="font-blue w500 mt-7">12. Governing Law and Settlement Dispute Resolution</h2>
                            <h4 className="numbering mob-mt--30">12.1</h4>
                            <p className="no-pad pL40">
                                This Terms of Use (and any and all disputes arising out of or in connection with these
                                Terms of Use (including any alleged breach or challenge to the validity or
                                enforceability of these Terms of Use)) shall be governed by and interpreted in
                                accordance solely with the Laws of Delaware.
                            </p>
                            <h4 className="numbering mob-mt--30">12.1</h4>
                            <p className="no-pad pL40">
                                In the event of a dispute arising out of or in connection with this Terms of Use, the
                                parties shall first discuss in good faith to reach an amicable resolution within sixty (60)
                                days from the date of the notice of dispute. However, if such dispute may not be
                                settled by mutual consultation within sixty (60) days, it shall be referred to arbitration
                                by the American Arbitration Association (“AAA”) under the Commercial
                                Arbitration Rules and Supplementary Procedures for Consumer Related Disputes
                                then in effect for the AAA, except as provided herein. The arbitration will be
                                conducted in Santa Clara County, California, unless you and Navidok agree
                                otherwise. Each party will be responsible for paying any AAA filing, administrative
                                and arbitrator fees in accordance with AAA rules. The award rendered by the
                                arbitrator shall include costs of arbitration, reasonable attorneys’ fees and
                                reasonable costs for expert and other witnesses, and any judgment on the award
                                rendered by the arbitrator may be entered in any court of competent jurisdiction.
                                Nothing in this Section shall prevent either party from seeking injunctive or other
                                equitable relief from the courts as necessary to prevent the actual or threatened
                                infringement, misappropriation, or violation of that party’s data security,
                                Intellectual Property Rights, or other proprietary rights. All claims must be
                                brought in the parties’ individual capacity, and not as a plaintiff or class member
                                in any purported class or representative proceeding, and, unless we agree
                                otherwise, the arbitrator may not consolidate more than one person’s claims. You
                                agree that, by entering into this agreement, you and Navidok are each waiving
                                the right to a trial by jury or to participate in a class action.
                            </p>

                            <h2 className="font-blue w500 mt-7">13. Miscellaneous.</h2>
                            <h4 className="numbering mob-mt--30">13.1</h4>
                            <p className="no-pad pL40">
                                In the event that any provision is determined to be unenforceable or invalid, by any
                                relevant laws and regulations, such provision shall nonetheless be enforced to the
                                fullest extent permitted by applicable law and such determination shall not affect the
                                validity and enforceability of any other remaining provisions. The severed provision
                                shall be replaced by a provision approximating as much as possible the original
                                wording and intent.
                            </p>
                            <h4 className="numbering mob-mt--30">13.1</h4>
                            <p className="no-pad pL40">
                                Failure by either Party to enforce any provision of this Terms of Use at any time shall
                                not be construed as a waiver of each Party’s rights to enforce the breach of such
                                provision or any other provision in thisTerms of Use or as a waiver of any continuing,
                                succeeding or subsequent breach of any provision or other provisions of these Terms.
                            </p>

                            <h2 className="font-blue w500 mt-7">14. Contact Us.</h2>
                            <p className="no-pad pL40">
                                You may contact Us by electronic mail to <Link to="mailto:developer@navidok.com">developer@navidok.com</Link>. All your correspondences
                                will be noted, recorded and stored for our records.
                            </p>

                            <h4 style={{marginTop: `80px`}}>I have read and understood all of this Terms of Use and its consequences and hereby accept
                                any rights, obligations, and conditions stipulated therein</h4>
                    </div>
                </div>


            </div>
        </section>


    <Footer/>
</Fragment>
)
}

export default TermOfUse
