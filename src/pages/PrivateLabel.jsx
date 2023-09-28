import React from 'react';
import PageHeader from '../components/PageHeader';
import labels_page_header from "../images/headers/labels_page_header.png";
import { BiEnvelope } from "react-icons/bi";

const PrivateLabel = () => {
  return (
    <div className='common_layout2'>
      <PageHeader header_img={labels_page_header} />
      <div className="section_padding">
        <div className="container">
            <h2>Developing Private Labels that offer brand exclusivity and better margins</h2>
            <p>Over the years AWM has expanded a huge amount, both for distribution and sourcing. For us what matters
              the most is our values and morals to provide the best products and services. Our relationships around the
              globe, flexibility and reliability is what makes us stand out.<br /><br />
              Having your own brand is like having your own baby, you create it and watch it bloom. Along with our own
              established brands, AWM provides a private label service. We are there by our customer’s side from start to
              finish in this journey.<br /><br />
              From creating your design, sourcing the best valued wine, bottling it and delivering it to your destination.
              The current countries we source our wines from are Australia, Argentina, Chile, Uruguay, North Macedonia
              and France. Along with wines, we are an official independent bottler in Scotland. So if Scotch Whisky is more
              your calling, we got you!!</p>
            <a href="mailto:admin@awmaus.com.au" style={{display: "inline-flex", alignItems: "center"}}><BiEnvelope /> Find out more</a>
        </div>
      </div>
    </div>
  )
}

export default PrivateLabel