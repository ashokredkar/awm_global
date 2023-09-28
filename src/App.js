import React, {useState, useEffect, useRef} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Wines from './pages/Wines';
import Whiskys from './pages/Whiskys';
import NonAlcoholic from './pages/NonAlcoholic';
import Story from './pages/Story';
import Contact from './pages/Contact';
import ProductListings from './pages/ProductListings';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProductTerms from './pages/ProductTerms';
import PrivateLabel from './pages/PrivateLabel';
import ProductDetails from './pages/ProductDetails';
// import Cart from './pages/Cart';
// import Login from './pages/Login';
import ScrollTop from "./ScrollTop";
import logo from "./images/logo.png";
import ScrollToTop from "react-scroll-to-top";

function App() {

  // const [productPageInfo, setProductPageInfo] = useState([]);
  // const [viewedDetails, setViewedDetails] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openModal, setOpenModal] = useState(true);
  let dateRef = useRef();
  let monthRef = useRef();
  let yearRef = useRef();

  const handleModal = () => {
    // let validDate = false;
    // let validMonth = false;
    // let validYear = false;

    // validDate = 0 > dateRef.current.value <= 31 ? true : false;
    // validMonth = 0 > monthRef.current.value <= 12 ? true : false;
    // validYear = 0 > yearRef.current.value <= new Date().getFullYear() ? true : false;
    
    const userDate = dateRef.current.value;
    const userMonth = monthRef.current.value;
    const userYear = yearRef.current.value;
    const userBirthDate = new Date(`${userYear}-${userMonth}-${userDate}`);

    if(userBirthDate == "Invalid Date"){
      alert("The date you entered is invalid!");
    }else{
      let currentYear = new Date().getFullYear();
      if(currentYear - yearRef.current.value >= 18){
        setOpenModal(false);
      // }else if(currentYear - yearRef.current.value < 1){
      //   alert("Please enter a valid birth year!");
      }else{
        alert("You must be above 18 to visit this website!");
      }

    }

    // if(validDate && validMonth && validYear){
    // }else{
    //   alert("Please enter a valid date!");
    // }
  }

  return (
    <>
      <Navbar />
      <ScrollTop>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/wines' element={<Wines />} />
          <Route exact path='/whiskys' element={<Whiskys />} />
          <Route exact path='/non-alcoholic' element={<NonAlcoholic />} />
          <Route exact path='/story' element={<Story />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/terms-conditions' element={<TermsConditions />} />
          <Route exact path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route exact path='/product-terms' element={<ProductTerms />} />
          <Route exact path='/private-label' element={<PrivateLabel />} />
          {/* <Route exact path='/cart' element={<Cart />} /> */}
          {/* <Route exact path='/login' element={<Login />} /> */}

          <Route exact path='/wines/:id' element={<ProductListings />} />
          <Route exact path='/wines/:id/:id' element={<ProductDetails />} />
          <Route exact path='/whiskys/:id' element={<ProductListings />} />
          <Route exact path='/whiskys/:id/:id' element={<ProductDetails />} />
          <Route exact path='/non-alcoholic/:id' element={<ProductListings />} />
          <Route exact path='/non-alcoholic/:id/:id' element={<ProductDetails />} />
        </Routes>
      </ScrollTop>
      <ScrollToTop />
      <Footer />

      {openModal && (
      <div className="age_verify_modal">
        <form className="my_modal" method='GET' onSubmit={handleModal}>
          <img src={logo} alt="awm_logo" />
          {/* <h2>Age Restricted Content</h2>
          <p>Please confirm you are above the legal drinking age in your country of residence</p> */}
          <div className="dob_input">
            {/* <input type="text" placeholder='DD' ref={dateRef} required max="31" min="1" pattern="[0-9]*" /> */}
            <input type="text" placeholder='DD' ref={dateRef} required minLength={1} maxLength={2} />
            <input type="text" placeholder='MM' ref={monthRef} required minLength={1} maxLength={2} />
            <input type="text" placeholder='YYYY' ref={yearRef} required minLength={4} maxLength={4} />
          </div>
          <div className="modal_actions">
            <button type='submit' className="custom_btn">Confirm & Continue</button>
          </div>
        </form>
      </div>
    )}
    </>
  );
}

export default App;
