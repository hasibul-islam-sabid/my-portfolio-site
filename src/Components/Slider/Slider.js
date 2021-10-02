import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../Images/cover_slider_1.png';
import image2 from '../../Images/cover_slider_2.2.png';
import image3 from '../../Images/cover_slider_3.1.png';
import { FaHireAHelper } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import Typewriter from 'typewriter-effect';


const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>
                        <FaHireAHelper />
                        <Typewriter
                            options={{
                                strings: ['I am available for hire'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <Button variant="primary">Hire</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>
                        <FaReact />
                        <Typewriter
                            options={{
                                strings: ['React is very easy'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <Button variant="primary">Larne React</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>
                        <FaNodeJs />
                        <Typewriter
                            options={{
                                strings: ['Node.js is an open source development platform.'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <Button variant="primary">Larne Node</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;