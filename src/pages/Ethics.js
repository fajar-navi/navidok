import React, {Fragment, Component} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";
function Ethics() {
    return (
        <Fragment>
            <Menu />
            <ImgBg trading={"crypto"} title={"Ethics"} src={"assets/img/header-09.jpg"}/>
            <div className="container">
                <h1>Ethics</h1>
            </div>


            <Footer/>
        </Fragment>
    )
}

export default Ethics
