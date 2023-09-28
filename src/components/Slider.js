import React from 'react';
import slider1 from "../images/home_slider1.png";
import slider2 from "../images/home_slider2.png";
import slider3 from "../images/home_slider3.png";
import slider4 from "../images/home_slider4.png";
import slider5 from "../images/home_slider5.png";

const Slider = () => {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="30000">
                <img src={slider1} className="d-block w-100" alt="slider_img" />
            </div>
            <div className="carousel-item" data-bs-interval="30000">
                <img src={slider2} className="d-block w-100" alt="slider_img" />
            </div>
            <div className="carousel-item" data-bs-interval="30000">
                <img src={slider3} className="d-block w-100" alt="slider_img" />
            </div>
            <div className="carousel-item" data-bs-interval="30000">
                <img src={slider4} className="d-block w-100" alt="slider_img" />
            </div>
            <div className="carousel-item" data-bs-interval="30000">
                <img src={slider5} className="d-block w-100" alt="slider_img" />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</>
  )
}

export default Slider