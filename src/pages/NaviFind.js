import React, {Fragment, Component} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";

function NaviFind() {
    return (
        <Fragment>
            <Menu />
            <ImgBg title={"Products"} src={"assets/img/header-13.jpg"}/>
            <div className="container">
                <h1>Navi Find</h1>
            </div>


            <Footer/>
        </Fragment>
    )
}

export default NaviFind
