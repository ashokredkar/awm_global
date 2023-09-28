import React, { useState } from 'react';
import logo from "../images/logo_2.png";
import { Link, NavLink } from 'react-router-dom';
import { BiSearch, BiMenuAltRight } from 'react-icons/bi';
// import { MdShoppingCart } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

  const [openSearch, setOpenSearch] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div id='navbar'>
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
        <div className="menu_list">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/wines" >Wines</NavLink>
          <NavLink to="/whiskys" >Whiskys</NavLink>
          <NavLink to="/non-alcoholic" >Non-Alcoholic</NavLink>
          <NavLink to="/story" >Our Story</NavLink>
          <NavLink to="/contact" >Contact Us</NavLink>
        </div>
        <div className="menu_right">
          <div className='nav_search_div'>
            <BiSearch className='nav_icon search' onClick={()=>setOpenSearch(!openSearch)} />
            <div className={`nav_search ${openSearch && "visible"}`}>
              <input type="search" placeholder='Search' />
            </div>
          </div>
          {/* <Link to="/cart"><MdShoppingCart className='nav_icon cart' /></Link> */}
          {/* <Link to="/login" className="custom_btn">Login</Link> */}
        </div>
        <div className="menu_right menu_right_mobile">
          {/* <Link to="/cart"><MdShoppingCart className='nav_icon cart' /></Link> */}
          <BiMenuAltRight className='nav_icon menu' onClick={()=>setOpenSidebar(true)} />
          <div className={`menu_sidebar ${openSidebar && "visible"}`}>
            <div className="sidebar_header">
              {/* <Link to="/login" className="custom_btn" onClick={()=>setOpenSidebar(false)}>Login</Link> */}
              <AiOutlineClose className='nav_icon close' onClick={()=>setOpenSidebar(false)} />
            </div>
            <div className="nav_mobile_search">
              <BiSearch className='nav_icon search' />
              <input type="search" />
            </div>
            <div className="menu_list_mobile">
              <NavLink to="/" onClick={()=>setOpenSidebar(false)}>Home</NavLink>
              <NavLink to="/wines" onClick={()=>setOpenSidebar(false)}>Wines</NavLink>
              <NavLink to="/whiskys" onClick={()=>setOpenSidebar(false)}>Whiskys</NavLink>
              <NavLink to="/non-alcoholic" onClick={()=>setOpenSidebar(false)}>Non-Alcoholic</NavLink>
              <NavLink to="/story" onClick={()=>setOpenSidebar(false)}>Our Story</NavLink>
              <NavLink to="/contact" onClick={()=>setOpenSidebar(false)}>Contact Us</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar