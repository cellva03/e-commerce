import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import './slider.css';

function Slider() {
  return (
    <>
        <Carousel controls='true' indicator={true} className="sliders">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider1}
                alt="First slide"
                width="80" height="500"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider2}
                width="80" height="500"
                alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider3}
                width="80" height="500"
                alt="Third slide"
                />
            </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Slider;