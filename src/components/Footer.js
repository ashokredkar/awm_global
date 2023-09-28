import React, { useRef, useState } from 'react';
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import insta_icon from "../images/icons/icon_instagram.svg";
import fb_icon from "../images/icons/icon_facebook.svg";
import emailjs from '@emailjs/browser';

const Footer = () => {

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
    <div className='footer'>
      <div className="container">
        <div className="footer_columns">
          <div><img src={logo} alt="awm_logo" style={{width: "120px"}} /></div>
          <div>
            <label>Information</label>
            <p><Link to="/wines">Wines</Link></p>          
            <p><Link to="/whiskys">Whiskys</Link></p>
            <p><Link to="/non-alcoholic">Non-alcohol</Link></p>
            <p><Link to="/story">Our Story</Link></p>
            <p><Link to="/contact">Contact Us</Link></p>
            <p><Link to="/terms-conditions">Terms and Conditions</Link></p>
            <p><Link to="/privacypolicy">Privacy Policy</Link></p>
            <p><Link to="/product-terms">Product Terms</Link></p>
          </div>
          <div>
            <label>Our Services</label>
            {/* <p>Australia Wine Makers</p>
            <p>Partner Brands</p> */}
            <p><Link to="/private-label">Private Label Supply</Link></p>
            <p>Bulk Wines</p>
            <br />
            <label>Contact Us</label>
            <p><a href="mailto:admin@awmaus.com.au" style={{display: "inline"}}>admin@awmaus.com.au</a></p>
            <p>call us: <a href="tel:+61 452 560 710" style={{display: "inline"}}>+61 452 560 710</a></p>
          </div>
          <div>
            <label>Stay in touch</label>
            <p>12 Cedar Avenue, Warradale,</p>
            <p>SA, 5046, Australia.</p>
            <p>Here we are on Google Maps.</p>
            <br />
            <label style={{marginTop: "27px"}}>Follow Us</label>
            <div className="footer_socials">
              <a href="https://www.facebook.com/australiawinesmore" target={"_blank"} rel="noreferrer" className="facebook"><img src={fb_icon} alt="instagram" /></a>
              <a href="https://www.instagram.com/australiawinesmore/" target={"_blank"} rel="noreferrer" className="instagram"><img src={insta_icon} alt="instagram" /></a>
            </div>
          </div>
        </div>
        <div className="mailing">
          <label>Join our mailing list</label>
          <form className="input_container" ref={form} onSubmit={sendEmail}>
            <input type="email" placeholder='Enter your mail id' name="subEmail" onChange={(ev) => setSubscribeMail(ev.target.value)} />
            <button type='submit' className="custom_btn">Subscribe</button>
          </form>
        </div>
        <div className="copyrights">
          <label>© 2022.AWM.All Rights Reserved</label>
        </div>
        <div className="licence">
          <p>Liquor licence number 57617785 | It is against the law to sell or supply alcohol to, or to obtain alcohol on behalf of, a person under the age of 18 years.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer