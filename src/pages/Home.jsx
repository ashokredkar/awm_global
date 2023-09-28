import React, { useRef, useState } from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';
import pop_img1 from "../images/pop_collection1.jpg";
import pop_img2 from "../images/pop_collection2.jpg";
// import location_img from "../images/locations_img.png";
import map_destinations from "../images/map_destinations.png";
import subscribe_img from "../images/sign_up_card.jpg";
// import logo from "../images/logo.png";
import emailjs from '@emailjs/browser';

const Home = () => {

  const form = useRef();
  const [subscribeMail, setSubscribeMail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if(subscribeMail){
      emailjs.sendForm('service_l1lhqxs', 'template_pdkhwqt', form.current, 'tEbgnHQ1B7JAEFpTE')
        .then((result) => {
            alert("Thank you for your subscription, we'll keep you updated from now on.")
        }, () => {
          alert("Something went wrong at the moment, please try again later!");
        });
      e.target.reset();
    }else{
      alert("Please enter your email address.")
    }
  };

  return (
    <div id='home'>
      <Slider  />
      <Gallery />
      <div className="pop_collection section_padding">
        <div className="container">
          <h2 className='shadow_heading'>Our Popular Collection</h2>
          <div className="pop_card card_whiskey">
            <img src={pop_img1} alt="popular" />
            <Link to="/whiskys/ogilhinn_nessia" className='custom_btn'>View Details</Link>
          </div>
          <div className="pop_card card_season">
            <img src={pop_img2} alt="popular" />
            <Link to="/wines/betheone" className='custom_btn'>View Details</Link>
          </div>
        </div>
      </div>
      <div className="our_story section_padding">
        <div className="container">
          <h2 className='shadow_heading'>Our Story</h2>
          <p>AWM Global works in affiliation and partnership with best wine makers & whisky distillers across the globe to deliver our customers a complete solution, from sourcing the best wine & spirits, to packaging, distribution, and trade. The creative and operational team at AWM Global is led by Vikas Gupta, a seasoned professional with 25 years business experience and proven track record in successfully integrating a diverse range of products across Asia, Europe and Australia. Traveling the globe with a relentless pursuit of excellence in the wine & spirit sector, Vikas found his passion and for the last decade has turned this passion into the highly regarded business that AWM Global is. </p>
          {/* <img src={location_img} alt="our_locations" /> */}
          <img src={map_destinations} alt="map_destinations" />
        </div>
      </div>
      <div className="subscribe_form section_padding">
        <div className="container">
          <div className="sub_form_card">
            <img src={subscribe_img} alt="subscribe_form" />
            <h3>Subscribe to get 5% for <br />your first order...</h3>
            <h4>Subscribe Form</h4>
            <form className="input_container" ref={form} onSubmit={sendEmail}>
              <input type="email" placeholder='Please Enter Your Email Address' name="subEmail" onChange={(ev) => setSubscribeMail(ev.target.value)} />
              <button type='submit' className="custom_btn">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home