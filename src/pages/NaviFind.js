import React, {Fragment} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";
// images
import bg_Header from './../assets/img/header-22.jpg';
import icon1 from "../assets/img/icon-1.png";
import iconNaviFind from "../assets/img/icon-navifind.svg";
import iconNaviGlobe from "../assets/img/icon-naviglobe.svg";
function NaviFind() {
    return (
        <Fragment>
            <Menu />
            <ImgBg title="Products" src={bg_Header} />
            <section id="about" className="section-small">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"><img src={iconNaviFind} className="icons icon-mob-mb30" alt=""  style={{marginBottom:"10px"}}/></div>
                        <div className="col-lg-10">

                            <h2 className="font-blue">In NaviFIND you could get</h2>

                            <h2 className="mt-5" style={{marginBottom: `0px`}}>Shipowners & Operators</h2>
                            <p className="no-pad">This is where you can find
                                everything and anything related to
                                your ship needs as we are
                                populating all relevant maritime
                                information and equip it with
                                technological tools to help you
                                make decisions, which we hope
                                could be faster, better, and cheaper
                                for your ship.</p>

                            <h2 className="mt-5" style={{marginBottom: `0px`}}>Shipyard Owners</h2>
                            <p className="no-pad">This is where you (as a shipyard owner), ship owner, and all supporting industries can find everything and anything related to your ship, equipment, parts needs as we are populating all relevant maritime information and equipping it to make decisions, which we hope could be faster, better, and cheaper for your shipyard. Particularly in this phase, we have created a special tool which shipowners will use to find drydocks and connect with them. Additional sophisticated, yet easy-to-use features will be added to make drydocking information integrated on a new global scale. Shipyard owners will benefit from a vast amount of valuable data in the most democratized way.</p>

                            <h2 className="mt-5" style={{marginBottom: `0px`}}>Supporting Industries</h2>
                            <p className="no-pad">This is where every maritime industry players find everything and anything related to ship, shipyard, port, and supporting industry needs as we are populating all relevance maritime information and equip it with technological tools to hope could be faster, better, and cheaper for your establishments. Navidok aligns your products and services through various tools within our platform and helps you scale up in an unprecedented way.</p>

                            <h2 className="mt-5" style={{marginBottom: `0px`}}>Individuals</h2>
                            <p className="no-pad">This is where you can find everything and anything related to your ship needs as we are populating all relevant maritime information and equipping it with technological tools to help you conduct research and broaden your knowledge and insight.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </Fragment>
    )
}

export default NaviFind
