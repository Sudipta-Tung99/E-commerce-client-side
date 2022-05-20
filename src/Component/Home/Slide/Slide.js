
import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Slide.css"

const Slide = () => {
    return (
        <div className='slide'>
            <Carousel >
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/Image/img1.png'}
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/Image/img2.png'}
                        alt="Second slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/Image/img3.png'}
                        alt="Third slide"
                    />
                   
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slide;