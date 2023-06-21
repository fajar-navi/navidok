import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";
// images
import bg_Header from './../assets/img/header-05.jpg';

function Ethics() {
    return (
        <Fragment>
            <Menu />
            <ImgBg trading="crypto" title="Ethics" src={bg_Header} />
            <div className="container">
                <h1>Ethics</h1>
            </div>
            <Footer />
        </Fragment>
    );
}

export default Ethics;
