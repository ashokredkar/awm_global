import React from 'react';
import PageHeader from '../components/PageHeader';
import wines_header from "../images/headers/wines_header.png";
import LinkedImageCards from '../components/LinkedImageCards';
import data from '../data';

// const Wines = ({ setProductPageInfo }) => {
const Wines = () => {

  // const featured_wines = [{img: wine1, link: "/products/static"}, {img: wine2, link: "/products/static"}, {img: wine3, link: "/products/static"}, {img: wine4, link: "/products/static"}, {img: wine5, link: "/products/static"}, {img: wine6, link: "/products/static"}, {img: wine7, link: "/products/static"}, {img: wine8, link: "/products/static"}];
  const wines_data = data.filter(dataItem => dataItem.target === "wines");

  return (
    <div id='wines' className='common_layout1'>
      <PageHeader header_img={wines_header} />
      <div className="layout_section section_padding">
        <div className="container">
          <h2>OUR WINES</h2>
          {/* <p>At AWM, our customers come first and we pride ourselves on making sure you find exactly what you have in mind. If you need assistance, ideas, or special service, just ask and we’ll be happy to help.</p> */}
          {/* <LinkedImageCards imagesArray = {featured_wines} /> */}
          {/* <LinkedImageCards dataArray={wines_data} setProductPageInfo={setProductPageInfo} /> */}
          <LinkedImageCards dataArray={wines_data} />
        </div>
      </div>
    </div>
  )
}

export default Wines