import React, {Fragment, useEffect} from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import {VideoBg} from "../components/VideoBg";
import ProdSwp from "./ProdSwp";


// images
import bg_Contact from './../assets/img/bg_contact3.jpg';
import bg_Service from './../assets/img/the-company-bg-image.jpg';
import bg_Impact from './../assets/img/impact-bg-image.jpg';
import icon1 from './../assets/img/icon-1.png';
import icon2 from './../assets/img/icon-2.png';
import icon3 from './../assets/img/icon-3.png';
import icon4 from './../assets/img/icon-4.png';

function Index() {
return(
  <Fragment>
{/*div id="preloader">
      <div id="status"></div>
    </div> */}
  <Menu />
  <VideoBg/>

    <section id="services" style={{ background: `url(${bg_Service}) no-repeat center center`, WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', backgroundSize: 'cover' }} className="text-center">

    <div className="container">
            <div className="row" style={{textAlign: 'right'}}>
              <div data-wow-duration="2s" data-wow-delay=".2s" className="col-lg-2 col-lg-offset-1 wow zoomIn">
              </div>
              <div data-wow-duration="2s" data-wow-delay=".2s" className="col-lg-10 col-lg-offset-1 wow slideInLeft animated">
                <h3 className="title">The Company</h3>
                <p className="no-pad" style={{maxWidth: '450px', float: 'right', color: '#d9d9d9'}}>Navidok is a maritime technology company which aligns maritime stakeholders and energizes connectivity through innovative solutions based on better value propositions.
We currently serve in selected areas</p>
              </div>
            </div>
          </div>
        </section>
    <section id="impact" style={{ background: `url(${bg_Impact}) no-repeat center center`, WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', backgroundSize: 'cover' }}>
          <div className="container">
            <div className="row">
              <div data-wow-duration="2s" data-wow-delay=".2s" className="col-lg-9 wow slideInRight animated">
                <h3 className="title" style={{textAlign: 'left'}}>Impact</h3>
                <p className="no-pad font-dark" style={{maxWidth: '750px', textAlign: 'left'}}>Our ultimate goal in creating this mobile app technology would not end at the benefits of maritime stakeholders only, which we believe would make world economy to become more competitive and affordable, but also to create economic opportunities which may take social impact to another level and to be able to participate more in an attempt to make this world becomes more sustainable in anyway we could</p>
              </div>
              <div data-wow-duration="2s" data-wow-delay=".2s" className="mt-7 col-lg-2 col-lg-offset-1 wow zoomIn animated" style={{visibility: 'visible', animationDuration: '2s', animationDelay: '0.2s', animationName: 'zoomIn'}}><br /><br />
                {/* <a data-wow-duration="4s" data-wow-delay=".2s" href="impact.html" className="btn btn-dark">ETHICS</a><br /><br />
                <a data-wow-duration="6s" data-wow-delay=".2s" href="impact.html" className="btn btn-dark">DATA PROTECTIONS</a><br /><br />
                <a data-wow-duration="8s" data-wow-delay=".2s" href="#" className="btn btn-dark">TERMS OF USE</a> */}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="text-center"  style={{marginBottom: '-100px'}}>
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <h3 className="title"><span style={{color: '#283891'}}>Our</span> Customers</h3></div>
            </div>
            <div className="row">
              <div data-wow-delay=".2s" className="col-lg-3 col-sm-6 wow fadeIn">
                <Link to="/shipowners"><img src={icon1} className="icons" alt="" />
                <h4 className="font-lightblue"> Shipowners &amp; Operators</h4></Link>
              </div>
              <div data-wow-delay=".4s" className="col-lg-3 col-sm-6 wow fadeIn">
                <Link to="/shipyardowners"><img src={icon2} className="icons " alt="" />
                <h4 className="font-lightblue"> Shipyard Owners</h4></Link>
              </div>
              <div data-wow-delay=".6s" className="col-lg-3 col-sm-6 wow fadeIn">
                <Link to="/supportingindustries"><img src={icon3} className="icons " alt="" />
                <h4 className="font-lightblue"> Supporting Industries</h4></Link>
              </div>
              <div data-wow-delay=".8s" className="col-lg-3 col-sm-6 wow fadeIn">
                <Link to="/individuals"><img src={icon4} className="icons " alt="" />
                <h4 className="font-lightblue"> Individuals</h4></Link>
              </div>
            </div>
          </div>
        </section>

    <ProdSwp />

    <section id="contact" style={{ background: `url(${bg_Contact}) no-repeat center center`, WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', backgroundSize: 'cover' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="title"><span style={{color: '#283891'}}>Help</span> Center</h3></div>
            </div>
            <div className="col-md-5">
              <p>For technical quarries or business quarries, please feel free to email us</p>
              <form id="contactForm" name="sentMessage" noValidate>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="name" className="sr-only control-label">Email</label>
                    <input id="name" type="text" placeholder="Email" required data-validation-required-message="Please enter name" className="form-control input-lg" /><span className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="email" className="sr-only control-label">Contact Number</label>
                    <input id="email" type="email" placeholder="Contact Number" required data-validation-required-message="Please enter email" className="form-control input-lg" /><span className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="message" className="sr-only control-label">Message</label>
                    <textarea id="message" rows={2} placeholder="Message" required data-validation-required-message="Please enter a message." aria-invalid="false" className="form-control input-lg" defaultValue={""} /><span className="help-block text-danger" />
                  </div>
                </div>
                <div id="success" />
                <button type="submit" className="btn btn-dark">Send</button>
              </form>
            </div>
          </div>
        </section>
        
<Footer />
</Fragment>
)
}

export default Index;