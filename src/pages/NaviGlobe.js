import React, {Fragment} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";
// images
import bg_Header from './../assets/img/header-18.jpg';
import iconNaviGlobe from "../assets/img/icon-naviglobe.svg";

function NaviGlobe() {
    return (
        <Fragment>
            <Menu />
            <ImgBg title={"Products"} src={bg_Header} />
            <section id="about" className="section-small">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"><img src={iconNaviGlobe} className="icons icon-mob-mb30" alt=""  style={{marginBottom:"10px"}}/></div>
                        <div className="col-lg-10">

                            <h2 className="font-blue">In NaviGLOBE you could get</h2>

                            <h2 className="mt-5" style={{marginBottom: `0px`}}>Shipowners & Operators</h2>
                            <p className="no-pad">This will be your globe to make your task and job, hopefully, easier and more fun to do. At your fingertips, you could see and explore ports and shipyards all over the world and have sense of what you are trying to achieve with your ship.</p>

                            <h2 className="mt-5" style={{marginBottom: `0px`}}>Shipyard Owners</h2>
                            <p className="no-pad">This will be your globe to make your tasks and jobs, hopefully, easier and more fun to do. At your fingertips, you could see and explore ports and shipyards all over the world and have a sense of what you are trying to achieve with your ship. Shipowners will use this globe to have a better sense of feeling so they could make decisions faster, better, and cheaper. You can make your shipyard stand out from the rest by using some boosting features to grab the attention of ship owners.</p>

                            <h2 className="mt-5" style={{marginBottom: `0px`}}>Supporting Industries</h2>
                            <p className="no-pad">This will be the maritime industry players' globe to make their tasks and jobs, hopefully, easier and more fun to do. At their fingertips, they could see and explore ports and shipyards all over the world and have a sense of what they are trying to achieve with their ships, shipyards, and ports.</p>

                            <h2 className="mt-5" style={{marginBottom: `0px`}}>Individuals</h2>
                            <p className="no-pad">This will be your globe to make your task and job, hopefully, easier and more fun to do. At your fingertips, you could see and explore ports, shipyards, and ships all over the world and have a sense of what you are trying to accomplish as an individual.</p>
                        </div>
                    </div>
                </div>
            </section>


            <Footer/>
        </Fragment>
    )
}

export default NaviGlobe
