import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";
import bg_Header from "../assets/img/header-23.jpg";
import iconNaviIntel from "../assets/img/icon-intel.svg";

function GetIntel() {
    return (
        <Fragment>
            <Menu />
            <ImgBg title={"Products"}  src={bg_Header} />
            <section id="about" className="section-small">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"><img src={iconNaviIntel} className="icons icon-mob-mb30" alt=""  style={{marginBottom:"10px"}}/></div>
                        <div className="col-lg-10">

                            <h2 className="font-blue">In Get Intel! you could get</h2>

                            <h2 className="mt-5" style={{marginBottom: `0px`}}>Shipowners & Operators</h2>
                            <p className="no-pad">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                            <h2 className="mt-5" style={{marginBottom: `0px`}}>Shipyard Owners</h2>
                            <p className="no-pad">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <h2 className="mt-5" style={{marginBottom: `0px`}}>Supporting Industries</h2>
                            <p className="no-pad">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                            <h2 className="mt-5" style={{marginBottom: `0px`}}>Individuals</h2>
                            <p className="no-pad">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}

export default GetIntel;
