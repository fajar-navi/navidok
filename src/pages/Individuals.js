import React, {Fragment} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";
import bg_Header from "../assets/img/header-05.jpg";
import iconNaviGlobe from "../assets/img/icon-naviglobe.jpg";
import iconNaviFind from "../assets/img/icon-navifind.jpg";
import icon4 from "../assets/img/icon-4.png";



function Individuals() {
  let imageStyle = {
    backgroundImage:
    'url("assets/img/header-01.jpg")',
     padding: 180,
    color: "white",
    backgroundPosition: 'center',
     backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
     textAlign: "center",
     width: '100vw',
     height: '40vh'
 };


return(
    <Fragment>
      <Menu />
        <ImgBg title={"Individuals"}  src={bg_Header} />

      {/*<div  className="intro-body introhalf image" style = {imageStyle}>*/}
      {/*        <div  className="introhalf" >*/}
      {/*        <h1 style={{fontWeight: '900'}}>Individuals</h1>*/}
      {/*        </div>*/}
      {/*   </div>*/}

{/* <header data-background="https://media.gettyimages.com/id/1134352403/photo/ship-on-dry-dock.jpg?s=2048x2048&w=gi&k=20&c=GZaOYUo-OgPt4MH7bzuBF19NPCWrKb-x_nrpuL-1GnA=" className="intro introhalf">
      <div className="intro-body">
        <h1>Our Users</h1>
      </div>
    </header> */}

        <section id="about" className="section-small">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2"><img src={icon4} className="icons" alt=""/>
                        </div>
                    <div className="col-lg-10">
                        <h2 className="font-blue">Individuals</h2>

                        <div className="row">
                            <div className="col-lg-5 box-rounded">
                                <img src={iconNaviFind} className="icons" alt="" />
                                <p className="no-pad"><strong>In NaviFIND you could get;</strong><br/>
                                    This is where you can find everything and anything related to your ship needs as we are populating all relevant maritime information and equipping it with technological tools to help you conduct research and broaden your knowledge and insight.</p>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-5 box-rounded">
                                <img src={iconNaviGlobe} className="icons" alt="" />
                                <p className="no-pad"><strong>In NaviGLOBE you could get;</strong><br/>
                                    This will be your globe to make your task and job, hopefully, easier and more fun to do. At your fingertips, you could see and explore ports, shipyards, and ships all over the world and have a sense of what you are trying to accomplish as an individual.</p>
                            </div>
                        </div>
                        <h2 className="font-blue mt-7">What do you want us to do to make you better?</h2>
                        <p className="no-pad">All we want to do is to create a technology that would make your role, job, responsibility, and passion as a shipowner and ship operator become simpler, easier, and fun to do. Please do share with us your imagination on what you want to have to make you the best managed and most profitable shipping company in the world. We will make an effort to make it happen!
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

export default Individuals