import React, {Fragment, Component} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";

function TermOfUse() {
    return (
        <Fragment>
            <Menu />
            <ImgBg trading={"crypto"} title={"Term Of Use"} src={"assets/img/header-10.jpg"}/>
            <div className="container">
                <h1>Term Of Use</h1>
            </div>


            <Footer/>
        </Fragment>
    )
}

export default TermOfUse
