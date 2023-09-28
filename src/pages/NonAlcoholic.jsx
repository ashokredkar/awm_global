import React from 'react';
import PageHeader from '../components/PageHeader';
import non_alcoholic_header from "../images/headers/non_alcoholic_header.png";
// import non_alc1 from "../images/non_alc1.png";
// import non_alc2 from "../images/non_alc2.png";
// import non_alc3 from "../images/non_alc3.png";
import LinkedImageCards from '../components/LinkedImageCards';
import data from '../data';

// const NonAlcoholic = ({setProductPageInfo}) => {
const NonAlcoholic = () => {
  // const non_alc = [{img: non_alc1, link: "#"}, {img: non_alc2, link: "#"}, {img: non_alc3, link: "#"}];
  const non_alc_data = data.filter(dataItem => dataItem.target === "non-alcoholic");

  return (
    <div id='non_alcoholic' className='common_layout1'>
      <PageHeader header_img={non_alcoholic_header} />
      <div className="layout_section section_padding">
        <div className="container">
          <h2>Non-alcoholic</h2>
          <p>At AWM, our customers come first and we pride ourselves on making sure you find exactly what you have in mind. If you need assistance, ideas, or special service, just ask and we’ll be happy to help.</p>
          {/* <LinkedImageCards dataArray={non_alc_data} setProductPageInfo={setProductPageInfo} /> */}
          <LinkedImageCards dataArray={non_alc_data} />
        </div>
      </div>
    </div>
  )
}

export default NonAlcoholic