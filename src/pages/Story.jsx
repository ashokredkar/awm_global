import React from 'react';
import PageHeader from '../components/PageHeader';
import story_header from "../images/headers/our_story_header.png";
// import location_img from "../images/locations_img.png";
import map_destinations from "../images/map_destinations.png";

const Story = () => {

  return (
    <div id='story'>
      <PageHeader header_img={story_header} />
      <div className="our_story section_padding">
        <div className="container">
          <h2>OUR STORY</h2>
          <p>Australia Wines & More is a creative wine company that partners with top winemakers and growers, as well as wine importers, retailers and distributors from all around the world. We drive value for our customers by providing the ultimate flexibility in sourcing great value wine and providing fast supply chain and logistics solutions.<br /><br />
          After 25 years of global business experience, Vikas, our founder, discovered his true passion for wine 10 years ago and moved to the epicentre of Australia’s wine industry, South Australia.<br /><br />
          Vikas continues to travel the world visiting expos and wine regions during their vintages and attending formal tastings to learn more and turbo-boost his passion for bringing joy and value to wine lovers around the world.</p>
          {/* <img src={location_img} alt="our_locations" className='map_img' /> */}
          <img src={map_destinations} alt="map_destinations" />
        </div>
      </div>
    </div>
  )
}

export default Story