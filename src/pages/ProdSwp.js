// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// images
import bg_findImage from './../assets/img/bg_find.jpg';
import bg_globeImage from './../assets/img/bg_globe.jpg';
import bg_socImage from './../assets/img/bg_soc.jpg';
import bg_productImage from './../assets/img/bg_product.jpg';
// import required modules
import {Navigation} from "swiper";


function ProdSwp() {
    return (
        <>
            <section style={{paddingBottom:'0px'}}>
<div className="w80">
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper mob-h90"
            >

                <SwiperSlide style={{height: "80vh"}}>
                    <div className="w50 item img-prdc" style={{backgroundImage: `url(${bg_findImage})`, backgroundRepeat:'no-repeat', backgroundPosition:'left top'}}>
                        <div className="col-lg-6">
                        </div>
                        <div className="col-lg-6 prdct">
                            <h1 className="heading title-dark mt-7 font-blue">NaviFIND</h1>
                            <p className="para-desc mx-auto">It is a highly specialized marine search engine coupled with some specific powerful tools to find answers for maritime queries faster, better, and cheaper.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{height: "80vh"}}>
                    <div className="w50 item img-prdc" style={{backgroundImage: `url(${bg_globeImage})`, backgroundRepeat:'no-repeat', backgroundPosition:'left top'}}>
                        <div className="col-lg-6">
                        </div>
                        <div className="col-lg-6 prdct">
                            <h1 className="heading title-dark mt-7 font-blue">NaviGLOBE</h1>
                            <p className="para-desc mx-auto">A maritime Globe that enables users to have a better sense of connectivity and information</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{height: "80vh"}}>
                    <div className="w50 item img-prdc" style={{backgroundImage: `url(${bg_socImage})`, backgroundRepeat:'no-repeat', backgroundPosition:'left top'}}>
                        <div className="col-lg-6">
                        </div>
                        <div className="col-lg-6 prdct">
                            <h1 className="heading title-dark mt-7 font-blue">Maritime Social Media</h1>
                            <p className="para-desc mx-auto">An interactive digital forum where all maritime stakeholders will encounter one another</p>
                        </div></div>
                </SwiperSlide>
                <SwiperSlide style={{height: "80vh"}}>
                    <div className="w50 item img-prdc" style={{backgroundImage: `url(${bg_productImage})`, backgroundRepeat:'no-repeat', backgroundPosition:'left top'}}>
                        <div className="col-lg-6">
                        </div>
                        <div className="col-lg-6 prdct">
                            <h1 className="heading title-dark mt-7 font-blue">Get Intel!</h1>
                            <p className="para-desc mx-auto">We Bring Magic to Shipyards owners
                                And those who must find ships for their drydock(s).
                                Drop us an email at magic@navidok.com and we will send you the spell</p>
                        </div></div>
                </SwiperSlide>

            </Swiper>
</div>
        </section>
        </>
    );
}


export default ProdSwp;
