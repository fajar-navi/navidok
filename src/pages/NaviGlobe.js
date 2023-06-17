import React, {Fragment, Component} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

function NaviGlobe() {
    return (
        <Fragment>
            <Menu />
            <div className="container">
                <h1>Navi Globe</h1>
            </div>


            <Footer/>
        </Fragment>
    )
}

export default NaviGlobe
