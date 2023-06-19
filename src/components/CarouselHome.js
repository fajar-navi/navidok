import React from "react";
import Carousel from 'better-react-carousel'
import '../assets/css/arrow.css'

export function CarouselHome(){
    return (
            <div>
                <Carousel cols={1} rows={1} gap={10} loop>
                    <Carousel.Item>
                        <h1 className="text-item">YOUR <span className="orange">ALIGNMENT</span>
                            <br/><span>In Maritime Industry</span>
                        </h1>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h1 className="text-item">ENERGIZING <span className="orange">CONNECTIVITY</span>
                            <br/><span>In Maritime Industry</span>
                        </h1>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h1 className="text-item">TOTAL <span className="orange">SHIPCARE</span>
                            <br/><span>SOLUTIONS</span>
                        </h1>
                    </Carousel.Item>
                </Carousel>

            </div>
        )
}