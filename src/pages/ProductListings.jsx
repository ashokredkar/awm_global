import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// const ProductListings = ({productPageInfo, setViewedDetails}) => {
const ProductListings = () => {

    // const dispatch = useDispatch();
    const allData = useSelector((state) => state.products.productsData)
    const [currentData, setCurrentData] = useState({});
    useEffect(() => {
        const currentPageHref = window.location.href;
        if(currentPageHref.includes("wines")){
            if(currentPageHref.includes("betheone")){
                setCurrentData(allData.filter(dataItem => dataItem.target === "wines").at(0));
            }else if(currentPageHref.includes("dudies")){
                setCurrentData(allData.filter(dataItem => dataItem.target === "wines").at(1));
            }else if(currentPageHref.includes("mayan3")){
                setCurrentData(allData.filter(dataItem => dataItem.target === "wines").at(2));
            }else if(currentPageHref.includes("magic")){
                setCurrentData(allData.filter(dataItem => dataItem.target === "wines").at(3));
            }else if(currentPageHref.includes("fsol")){
                setCurrentData(allData.filter(dataItem => dataItem.target === "wines").at(4));
            // }else if(currentPageHref.includes("luigi_bosca")){
            //     setCurrentData(allData.filter(dataItem => dataItem.target === "wines").at(5));
            }else if(currentPageHref.includes("mayan6")){
                setCurrentData(allData.filter(dataItem => dataItem.target === "wines").at(5));
            }else{
                setCurrentData(allData.filter(dataItem => dataItem.target === "wines").at(6));
            }
        } else if(currentPageHref.includes("whiskys")){
            if(currentPageHref.includes("betheone_whisky")){
                setCurrentData(allData.filter(dataItem => dataItem.target === "whiskys").at(1));
            }else{
                setCurrentData(allData.filter(dataItem => dataItem.target === "whiskys").at(0));
            }
        } else{
            if(currentPageHref.includes("summerof88")){
                setCurrentData(allData.filter(dataItem => dataItem.target === "non-alcoholic").at(0));
            }else if(currentPageHref.includes("springof88")){
                setCurrentData(allData.filter(dataItem => dataItem.target === "non-alcoholic").at(1));
            }else{
                setCurrentData(allData.filter(dataItem => dataItem.target === "non-alcoholic").at(2));
            }
        }
        // console.log(currentData?.productPageInfo?.title);
    }, [currentData, allData]);

    return (
        
        <div className='common_layout3'>
            <PageHeader header_img={currentData?.productPageInfo?.pageHeader} header_video={currentData?.productPageInfo?.pageVideoHeader} />
            <div className="layout_section section_padding">
                <div className="breadcrumb_div">
                    <nav aria-label="breadcrumb" className='container'>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={`/${currentData?.productPageInfo?.mainLinkhref}`}>{currentData?.productPageInfo?.mainLink}</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{currentData?.productPageInfo?.title}</li>
                        </ol>
                    </nav>
                </div>
                <div className="container">
                    <h2>{currentData?.productPageInfo?.title}</h2>
                    <p>{currentData?.productPageInfo?.desc}</p>
                    <div className="products_container">
                        {currentData?.productPageInfo?.products.map((product, i) => (
                            // <ProductCard key={i} product={product} setViewedDetails={setViewedDetails} />
                            <ProductCard key={i} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListings