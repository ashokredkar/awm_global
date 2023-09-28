import React from 'react';
import PageHeader from '../components/PageHeader';
import whiskys_header from "../images/headers/whiskys_header.png";
import LinkedImageCards from '../components/LinkedImageCards';
import data from '../data';

// const Whiskys = ({ setProductPageInfo }) => {
const Whiskys = () => {

  // const featured_whiskys = [{img: whisky1, link: "/products/static"}, {img: whisky2, link: "/products/static"}];
  const whiskys_data = data.filter(dataItem => dataItem.target === "whiskys");

  return (
    <div id='whiskys' className='common_layout1'>
      <PageHeader header_img={whiskys_header} />
      <div className="layout_section section_padding">
        <div className="container">
          <h2>OUR WHISKYS</h2>
          {/* <p>At AWM, our customers come first and we pride ourselves on making sure you find exactly what you have in mind. If you need assistance, ideas, or special service, just ask and we’ll be happy to help.</p> */}
          {/* <LinkedImageCards imagesArray={featured_whiskys} /> */}
          {/* <LinkedImageCards dataArray={whiskys_data} setProductPageInfo={setProductPageInfo} /> */}
          <LinkedImageCards dataArray={whiskys_data} />
        </div>
      </div>
    </div>
  )
}

export default Whiskys