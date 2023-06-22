import React, {Fragment} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";
import bg_Header from "../assets/img/header-13.jpg";
import icon2 from './../assets/img/icon-2.png';
import iconNaviFind from './../assets/img/icon-navifind.jpg';
import iconNaviGlobe from './../assets/img/icon-naviglobe.jpg';

const ShipyardOwners = () => {
    return (
        <Fragment>
            <Menu />
            <ImgBg title={"Our Users "}  src={bg_Header} />

            <section id="about" className="section-small">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"><img src={icon2} className="icons" alt=""/></div>
                        <div className="col-lg-10">

                            <h2 className="font-blue">Shipyard Owners</h2>

                            <div className="row">
                                <div className="col-lg-5 box-rounded">
                                    <img src={iconNaviFind} className="icons icon-mob-mb30" alt=""  style={{marginBottom:"10px"}}/>
                                    <p className="no-pad"><strong>In NaviFIND you could get;</strong><br/>
                                        This is where you (as a shipyard owner), ship owner, and all supporting industries can find everything and anything related to your ship, equipment, parts needs as we are populating all relevant maritime information and equipping it to make decisions, which we hope could be faster, better, and cheaper for your shipyard. Particularly in this phase, we have created a special tool which shipowners will use to find drydocks and connect with them. Additional sophisticated, yet easy-to-use features will be added to make drydocking information integrated on a new global scale. Shipyard owners will benefit from a vast amount of valuable data in the most democratized way.</p>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 box-rounded">
                                    <img src={iconNaviGlobe} className="icons icon-mob-mb30" alt=""  style={{marginBottom:"10px"}}/>
                                    <p className="no-pad"><strong>In NaviGLOBE you could get;</strong><br/>
                                        This will be your globe to make your tasks and jobs, hopefully, easier and more fun to do. At your fingertips, you could see and explore ports and shipyards all over the world and have a sense of what you are trying to achieve with your ship. Shipowners will use this globe to have a better sense of feeling so they could make decisions faster, better, and cheaper. You can make your shipyard stand out from the rest by using some boosting features to grab the attention of ship owners.</p>
                                </div>
                            </div>
                            <h2 className="font-blue mt-7">What do you want us to do to make you better?</h2>
                            <p className="no-pad">All we want to do is to create a technology that would make your role, job, responsibility, and passion as a shipowner and ship operator become simpler, easier, and more fun to do. Please do share with us your imagination on what you want to have to make you the best-managed and most profitable shipping company in the world. We will make an effort to make it happen!
                                <br/>
                                If you own and/or operate a shipping company and have not received our invitation link yet, please click this link and tell us more about your company.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />


        </Fragment>
)
}

export default ShipyardOwners