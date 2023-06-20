import React, {Fragment} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";
import bg_Header from "../assets/img/header-15.jpg";
function MaritimeSocialMedia() {
    return (
        <Fragment>
            <Menu />
            <ImgBg title={"Products"}  src={bg_Header} />
            <div className="container">
                <h1>Maritime Social Media</h1>
            </div>


            <Footer/>
            </Fragment>
    )
}

export default MaritimeSocialMedia
