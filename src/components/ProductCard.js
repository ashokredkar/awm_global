import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
      <div className='single_product_card'>
          <img src={product.productImg} alt={product.productName} />
          <label className='product_name'>{product.productName}</label>
          {/* <label className='product_price'>${product.productPrice}</label> */}
          <div className="link_card">
            <h5>{product.category}</h5>
            <p>{product.linkName}</p>
            <span>{product.qty}</span>
            <Link to={product.productLink} className="custom_btn">View Details</Link> 
          </div>
      </div>
    )
}

export default ProductCard