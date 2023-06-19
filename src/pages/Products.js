import React, {Fragment} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";
import {Slider} from "./Slider";


const Products = () => {
  return (
    <Fragment>
    <Menu />
    <ImgBg title={"Products"} src={"assets/img/header-07.jpg"}/>

        {/*<Slider />*/}

<section id="action-slider">
      <div className="container">
	  <div className="row">
          <div className="col-lg-12">
            <div id="carousel-light" className="carousel slide">
              <ol className="carousel-indicators">
                <li data-target="#carousel-light" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-light" data-slide-to="1"></li>
                <li data-target="#carousel-light" data-slide-to="2"></li>
              </ol>
              <div role="listbox" className="carousel-inner">
                  <div className="item active" style={{backgroundImage: 'url("assets/img/bg_product.jpg")', height: '555px'}}>
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">
                          <h1 className="heading title-dark mt-7 font-blue">NaviFIND</h1>
                          <p className="para-desc mx-auto">It is a highly specialized marine search engine coupled with some specific powerful tools to find answers for maritime queries faster, better, and cheaper.</p>
                      </div>
                  </div>
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

	  {/* Controls */}

	  <a href="#carousel-light" data-slide="prev" className="left carousel-control"><span className="icon-prev"></span></a>
	  <a href="#carousel-light" data-slide="next" className="right carousel-control"><span className="icon-next"></span></a>
    </section>

    <Footer />
    </Fragment>
  )
}

export default Products

