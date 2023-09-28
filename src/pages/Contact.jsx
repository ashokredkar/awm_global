import React, {useRef} from 'react';
import PageHeader from '../components/PageHeader';
import contact_us_header from "../images/headers/contact_us_header.png";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l1lhqxs', 'template_cgjjv5j', form.current, 'tEbgnHQ1B7JAEFpTE')
      .then((result) => {
          alert("Thank you for connecting, we've received your details.")
      }, () => {
        alert("Something went wrong at the moment, please try again later!");
      });
      e.target.reset();
  };


  return (
    <div id='contact'>
      <PageHeader header_img={contact_us_header} />
      <div className="contact_us section_padding">
        <div className="container">
          <h2>CONTACT US</h2>
          <div className="contact_section">
            <div className="contact_info">
              <div className="c_info">
                <h4>Get in Touch</h4>
                <p>Please contact us anytime if you would like to make an order or have any questions. We will get back to you ASAP.</p>
              </div>
              <div className="c_info">
                <h4>Email</h4>
                <p><a href="mailto:admin@awmaus.com.au" className='mailID'>admin@awmaus.com.au</a></p>
              </div>
              <div className="c_info">
                <h4>Socials</h4>
                <p><a href="https://www.instagram.com/australiawinesmore/" target={"_blank"} rel="noreferrer">Instagram</a></p>
                <p><a href="https://www.facebook.com/australiawinesmore" target={"_blank"} rel="noreferrer">Facebook</a></p>
              </div>
            </div>
            {/* <form className="contact_form" action="https://formspree.io/f/xpzeyzdl" method="POST"> */}
            <form ref={form} className="contact_form" onSubmit={sendEmail}>
              <div className="input_section">
                <label htmlFor="firstname">First Name <span className="imp">*</span></label>
                <input type="text" name='firstname' id='firstname' required autoComplete='off' />
              </div>
              <div className="input_section">
                <label htmlFor="familyname">Family Name <span className="imp">*</span></label>
                <input type="text" name='familyname' id='familyname' required autoComplete='off' />
              </div>
              <div className="input_section">
                <label htmlFor="emailId">Email <span className="imp">*</span></label>
                <input type="email" name='emailId' id='emailId' required autoComplete='off' />
              </div>
              <div className="input_section">
                <label htmlFor="phone">Phone</label>
                <input type="text" name='phone' id='phone' required autoComplete='off' maxLength={16} />
              </div>
              <div className="input_section">
                <label htmlFor="message">Message</label>
                <textarea type="text" name='message' id='message' required autoComplete='off' />
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact