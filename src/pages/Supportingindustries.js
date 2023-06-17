import React, {Fragment} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";


const Supportingindustries = () => {
    return (
        <Fragment>
            <Menu />
            <ImgBg title={"Our Users    "} src={"https://media.gettyimages.com/id/182995548/photo/norfolk-virginia-dry-dock.jpg?s=2048x2048&w=gi&k=20&c=xjKxVUzFO9oL5hg31cEWFMaLossDzf3HDhmppkkK_Io="}/>

            <section id="about" className="section-small">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"><img src="/assets/img/icon-3.png" className="icons" alt=""/>
                        </div>
                        <div className="col-lg-10">
                            <h2 className="font-blue">Supporting Industries</h2>

                            <div className="row">
                                <div className="col-lg-5 box-rounded">
                                    <img src="/assets/img/icon-navifind.jpg" className="icons" alt=""/>
                                    <p className="no-pad"><strong>In NaviFIND you could get;</strong><br/>
                                        This is where every maritime industry players find everything and anything related to ship, shipyard, port, and supporting industry needs as we are populating all relevance maritime information and equip it with technological tools to hope could be faster, better, and cheaper for your establishments. Navidok aligns your products and services through various tools within our platform and helps you scale up in an unprecedented way.</p>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 box-rounded">
                                    <img src="/assets/img/icon-naviglobe.jpg" className="icons" alt=""/>
                                    <p className="no-pad"><strong>In NaviGLOBE you could get;</strong><br/>
                                        This will be the maritime industry players' globe to make their tasks and jobs, hopefully, easier and more fun to do. At their fingertips, they could see and explore ports and shipyards all over the world and have a sense of what they are trying to achieve with their ships, shipyards, and ports.</p>
                                </div>
                            </div>
                            <h2 className="font-blue mt-7">What do you want us to do to make you better?</h2>
                            <p className="no-pad">All we want to do is to create a technology that would make your role, job, responsibility, and passion as shipowner and ship operator become simpler, easier, and more fun to do. Please do share with us your imagination on what you want to have to make you the best-managed and most profitable shipping company in the world. We will make an effort to make it happen!
                                <br/>
                                If you own and/or operate a shipping company and have not received our invitation link yet, please click this link and tell us more about your company.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </Fragment>
)
}

export default Supportingindustries