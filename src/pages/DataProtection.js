import React, {Fragment, Component} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";

function DataProtection() {
    return (
        <Fragment>
            <Menu />
            <ImgBg trading={"crypto"} title={"Data Protection"} src={"assets/img/header-08.jpg"}/>
            <div className="container">
                <h1>Data Protection</h1>
            </div>


            <Footer/>
        </Fragment>
    )
}

export default DataProtection
