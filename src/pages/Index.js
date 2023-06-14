import React, {Fragment} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import {VideoBg} from "../components/VideoBg";



function Index() {
return(
  <Fragment>
{/*div id="preloader">
      <div id="status"></div>
    </div> */}
  <Menu />
  <VideoBg/>
    {/*  <header data-background="assets/img/bg-video.jpg" className="intro">*/}
    {/*  <div className="intro-body">*/}
	{/*	  <h1>YOUR ALIGNMENT</h1>*/}
    {/*    <h4>In Maritime Industry</h4>*/}
    {/*    */}
    {/*    <div data-wow-delay="1s" class="scroll-btn wow fadeInDown">*/}
    {/*        /!* <a href="#about" class="page-scroll"></a> *!/*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</header>*/}
        
        <section id="services" className="bg-img4 text-center">
          <div className="container">
            <div className="row" style={{textAlign: 'right'}}>
              <div data-wow-duration="2s" data-wow-delay=".2s" className="col-lg-2 col-lg-offset-1 wow zoomIn">
              </div>
              <div data-wow-duration="2s" data-wow-delay=".2s" className="col-lg-10 col-lg-offset-1 wow slideInLeft animated">
                <h3 className="title">The Company</h3>
                <p className="no-pad" style={{maxWidth: '450px', float: 'right'}}>Navidok is a maritime technology company which aligns maritime stakeholders and energizes connectivity through innovative solutions based on better value propositions.
We currently serve in selected areas</p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="bg-img3">
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

        <section id="services" className="text-center">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <h3 className="title"><span style={{color: '#283891'}}>Our</span> Customers</h3></div>
            </div>
            <div className="row">
              <div data-wow-delay=".2s" className="col-lg-3 col-sm-6 wow fadeIn">
                <img src="assets/img/icon-1.png" className="icons" alt="" /><h4 className="font-lightblue"> Shipowners &amp; Operators</h4>
                {/* <a href="shipping-co.html" className="btn btn-dark">learn more</a> */}
              </div>
              <div data-wow-delay=".4s" className="col-lg-3 col-sm-6 wow fadeIn">
                <img src="assets/img/icon-2.png" className="icons " alt="" /><h4 className="font-lightblue"> Shipyard Owners</h4>
                {/* <a href="shipyard.html" className="btn btn-dark">learn more</a> */}
              </div>
              <div data-wow-delay=".6s" className="col-lg-3 col-sm-6 wow fadeIn">
                <img src="assets/img/icon-3.png" className="icons " alt="" /><h4 className="font-lightblue"> Supporting Industries</h4>
                {/* <a href="support.html" className="btn btn-dark">learn more</a> */}
              </div>
              <div data-wow-delay=".8s" className="col-lg-3 col-sm-6 wow fadeIn">
                <img src="assets/img/icon-4.png" className="icons " alt="" /><h4 className="font-lightblue"> Individuals</h4>
                {/* <a href="individual.html" className="btn btn-dark">learn more</a> */}
              </div>
            </div>
          </div>
        </section>


        <section id="action-slider" style={{paddingTop: '0px'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12" style={{textAlign: 'center'}}>
                <h3 className="title"><span style={{color: '#283891'}}>Our</span> Products</h3></div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div id="carousel-light" className="carousel slide">
                  <ol className="carousel-indicators">
                    <li data-target="#carousel-light" data-slide-to={0} className="active" />
                    <li data-target="#carousel-light" data-slide-to={1} />
                    <li data-target="#carousel-light" data-slide-to={2} />
                    <li data-target="#carousel-light" data-slide-to={3} />
                  </ol>
                  <div role="listbox" className="carousel-inner">
                    <div className="item active" style={{backgroundImage: 'url("assets/img/bg_product.jpg")', height: '555px'}}>
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">						
                        <h1 className="heading title-dark mt-7 font-blue">NaviFIND</h1>
                        <p className="para-desc mx-auto">It is a highly specialized marine search engine coupled with some specific powerful tools to find answers for maritime queries faster, better, and cheaper.</p>
                      </div></div>
                    <div className="item" style={{backgroundImage: 'url("assets/img/bg_product.jpg")', height: '555px'}}>
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">						
                        <h1 className="heading title-dark mt-7 font-blue">NaviGLOBE</h1>
                        <p className="para-desc mx-auto">A maritime Globe that enables users to have a better sense of connectivity and information</p>
                      </div></div>
                    <div className="item" style={{backgroundImage: 'url("assets/img/bg_product.jpg")', height: '555px'}}>
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">						
                        <h1 className="heading title-dark mt-7 font-blue">Maritime Social Media</h1>
                        <p className="para-desc mx-auto">An interactive digital forum where all maritime stakeholders will encounter one another</p>
                      </div></div>
                    <div className="item" style={{backgroundImage: 'url("assets/img/bg_product.jpg")', height: '555px'}}>
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">						
                        <h1 className="heading title-dark mt-7 font-blue">Get Intel!</h1>
                        <p className="para-desc mx-auto">We Bring Magic to Shipyards owners
                          And those who must find ships for their drydock(s)<br />
                          Drop us an email at magic@navidok.com and we will send you the spell</p>
                      </div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#carousel-light" data-slide="prev" className="left carousel-control"><span className="icon-prev" /></a>
          <a href="#carousel-light" data-slide="next" className="right carousel-control"><span className="icon-next" /></a>
        </section>
        
        <section id="contact" style={{background: 'url(assets/img/bg_contact3.jpg) no-repeat center center', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover'}}>
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