import React from "react";
import Carousel from 'better-react-carousel'

export function CarouselHome(){
    return (
            <div>
                <Carousel cols={1} rows={1} gap={10} loop>
                    <Carousel.Item>
                        <div className="text-item">YOUR <span className="orange">ALIGNMENT</span>
                            <br/><span>In Maritime Industry</span>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="text-item">YOUR <span className="orange">ALIGNMENT</span>
                            <br/><span>In Maritime Industry</span>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="text-item">YOUR <span className="orange">ALIGNMENT</span>
                            <br/><span>In Maritime Industry</span>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="text-item">YOUR <span className="orange">ALIGNMENT</span>
                            <br/><span>In Maritime Industry</span>
                        </div>
                    </Carousel.Item>
                </Carousel>

            </div>
        )
}