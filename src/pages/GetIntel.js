import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";
import bg_Header from "../assets/img/header-12.jpg";

function GetIntel() {
    return (
        <Fragment>
            <Menu />
            <ImgBg title={"Products"}  src={bg_Header} />
            <div className="container">
                <h1>Get Intel!</h1>
            </div>
            <Footer />
        </Fragment>
    );
}

export default GetIntel;
