import React from 'react';

const PageHeader = ({ header_img, header_video}) => {
  return (
    <>
      {header_img && <div className='page_header_div' style={{background: `url(${header_img})`}}></div> }
      {header_video && <div className='page_header_div'>
      <video loop autoPlay={true}  width="100%" height="100%" style={{backgroundColor: "#fff"}} >
      <source src={header_video} type="video/mp4"/>
     </video>
      </div> }
    </>
  )
}

export default PageHeader