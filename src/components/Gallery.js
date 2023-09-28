import React from 'react';
import { Link } from 'react-router-dom';
import wwd1 from "../images/wwd_img1.png";
import wwd2 from "../images/wwd_img2.jpg";
import wwd3 from "../images/wwd_img3.jpg";
import wwd4 from "../images/wwd_img4.png";

const Gallery = () => {
  return (
    <div className="gallery_section section_padding">
        <div className="container">
            <h2 className='shadow_heading'>What we do</h2>
            <div className="galleryImages">
                <Link to="/wines" className="gal_img">
                    <img src={wwd1} alt="what_we_do_img" />
                    <h2>Wines</h2>
                </Link>
                <Link to="/whiskys" className="gal_img">
                    <img src={wwd2} alt="what_we_do_img" />
                    <h2>Whiskys</h2>
                </Link>
                <Link to="/non-alcoholic" className="gal_img">
                    <img src={wwd3} alt="what_we_do_img" />
                    <h2>Non-alcoholic</h2>
                </Link>
                <Link to="/private-label" className="gal_img">
                    <img src={wwd4} alt="what_we_do_img" />
                    <h2>Private brand</h2>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Gallery