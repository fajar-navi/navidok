import React from "react";
import { Carousel } from 'better-react-carousel';

export function Slider() {
    return (
        <section id="action-slider">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div id="carousel-light" className="carousel slide">
                            <div role="listbox" className="carousel-inner">
                                <Carousel cols={1} rows={1} gap={10} loop>
                                    <Carousel.Item>
                                        <div
                                            className="item active"
                                            style={{ backgroundImage: 'url("assets/img/bg_product.jpg")', height: '555px' }}>
                                            <div className="col-lg-6"></div>
                                            <div className="col-lg-6">
                                                <h1 className="heading title-dark mt-7 font-blue">NaviFIND</h1>
                                                <p className="para-desc mx-auto">
                                                    It is a highly specialized marine search engine coupled with some specific powerful tools to find answers
                                                    for maritime queries faster, better, and cheaper.
                                                </p>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div
                                            className="item"
                                            style={{ backgroundImage: 'url("assets/img/bg_product.jpg")', height: '555px' }}>
                                            <div className="col-lg-6"></div>
                                            <div className="col-lg-6">
                                                <h1 className="heading title-dark mt-7 font-blue">NaviGLOBE</h1>
                                                <p className="para-desc mx-auto">A maritime Globe that enables users to have a better sense of connectivity and information</p>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div
                                            className="item"
                                            style={{ backgroundImage: 'url("assets/img/bg_product.jpg")', height: '555px' }}>
                                            <div className="col-lg-6"></div>
                                            <div className="col-lg-6">
                                                <h1 className="heading title-dark mt-7 font-blue">Maritime Social Media</h1>
                                                <p className="para-desc mx-auto">An interactive digital forum where all maritime stakeholders will encounter one another</p>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div
                                            className="item"
                                            style={{ backgroundImage: 'url("assets/img/bg_product.jpg")', height: '555px' }}>
                                            <div className="col-lg-6"></div>
                                            <div className="col-lg-6">
                                                <h1 className="heading title-dark mt-7 font-blue">Get Intel!</h1>
                                                <p className="para-desc mx-auto">We Bring Magic to Shipyards owners
                                                    And those who must find ships for their drydock(s)<br />
                                                    Drop us an email at magic@navidok.com and we will send you the spell</p>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}