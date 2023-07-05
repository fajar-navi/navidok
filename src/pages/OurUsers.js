import React, {Fragment} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";
// images
import bg_Header from './../assets/img/header-19.jpg';
import {Link} from "react-router-dom";
import icon1 from "../assets/img/icon-1.png";
import icon2 from "../assets/img/icon-2.png";
import icon3 from "../assets/img/icon-3.png";
import icon4 from "../assets/img/icon-4.png";

function OurUsers() {
    return (
        <Fragment>
            <Menu />
            <ImgBg title={"Our Users"} src={bg_Header} />

            <section id="services" className="text-center" >
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2" style={{marginBottom: '50px'}}>
                            <h3 className="title"><span style={{color: '#283891'}}>Our</span> Users</h3></div>
                    </div>
                    <div className="row">
                        <div data-wow-delay=".2s" className="col-lg-3 col-sm-6 wow fadeIn">
                            {/*<Link to="/shipowners"><img src={icon1} className="icons" alt="" />*/}
                            {/*    <h4 className="font-lightblue"> Shipowners &amp; Operators</h4></Link>*/}
                            <img src={icon1} className="icons" alt="" />
                                <h4 className="font-lightblue"> Shipowners &amp; Operators</h4>
                        </div>
                        <div data-wow-delay=".4s" className="col-lg-3 col-sm-6 wow fadeIn">
                            {/*<Link to="/shipyardowners"><img src={icon2} className="icons " alt="" />*/}
                            {/*    <h4 className="font-lightblue"> Shipyard Owners</h4></Link>*/}
                            <img src={icon2} className="icons " alt="" />
                                <h4 className="font-lightblue"> Shipyard Owners</h4>
                        </div>
                        <div data-wow-delay=".6s" className="col-lg-3 col-sm-6 wow fadeIn">
                            {/*<Link to="/supportingindustries"><img src={icon3} className="icons " alt="" />*/}
                            {/*    <h4 className="font-lightblue"> Supporting Industries</h4></Link>*/}
                            <img src={icon3} className="icons " alt="" />
                                <h4 className="font-lightblue"> Supporting Industries</h4>
                        </div>
                        <div data-wow-delay=".8s" className="col-lg-3 col-sm-6 wow fadeIn">
                            {/*<Link to="/individuals"><img src={icon4} className="icons " alt="" />*/}
                            {/*    <h4 className="font-lightblue"> Individuals</h4></Link>*/}
                            <img src={icon4} className="icons " alt="" />
                                <h4 className="font-lightblue"> Individuals</h4>
                        </div>
                    </div>
                </div>
            </section>


            <Footer/>
        </Fragment>
    )
}

export default OurUsers
