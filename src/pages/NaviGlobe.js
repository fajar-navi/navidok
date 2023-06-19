import React, {Fragment, Component} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";

function NaviGlobe() {
    return (
        <Fragment>
            <Menu />
            <ImgBg title={"Products"} src={"assets/img/header-07.jpg"}/>
            <div className="container">
                <h1>Navi Globe</h1>
            </div>


            <Footer/>
        </Fragment>
    )
}

export default NaviGlobe
