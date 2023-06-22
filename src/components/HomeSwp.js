// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay, Navigation, Pagination} from "swiper";
import React from "react";


function HomeSwp() {
    return (
        <>
            <div className="w80">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={50}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >


                    <SwiperSlide className="text-center">
                        <h1 className="text-item">YOUR <span className="orange">ALIGNMENT</span>
                            <br/><span>In Maritime Industry</span>
                        </h1>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <h1 className="text-item">ENERGIZING <span className="orange">CONNECTIVITY</span>
                            <br/><span>In Maritime Industry</span>
                        </h1>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <h1 className="text-item">TOTAL <span className="orange">SHIPCARE</span>
                            <br/><span>SOLUTIONS</span>
                        </h1>
                    </SwiperSlide>

                </Swiper>
            </div>

        </>
    );
}


export default HomeSwp;
