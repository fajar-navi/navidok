import React, {Fragment} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";
// images
import bg_Header from './../assets/img/header-18.jpg';

function NaviGlobe() {
    return (
        <Fragment>
            <Menu />
            <ImgBg title={"Products"} src={bg_Header} />
            <div className="container">
                <h1>Navi Globe</h1>
            </div>


            <Footer/>
        </Fragment>
    )
}

export default NaviGlobe
