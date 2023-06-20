import React, {Fragment, Component} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";
import bg_Header from "../assets/img/header-08.jpg";

function DataProtection() {
    return (
        <Fragment>
            <Menu />
            <ImgBg trading={"crypto"} title={"Data Protection"}  src={bg_Header} />
            <div className="container">
                <h1>Data Protection</h1>
            </div>


            <Footer/>
        </Fragment>
    )
}

export default DataProtection
