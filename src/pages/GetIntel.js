import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

function GetIntel() {
    return (
        <Fragment>
            <Menu />
            <div className="container">
                <h1>Get Intel!</h1>
            </div>
            <Footer />
        </Fragment>
    );
}

export default GetIntel;
