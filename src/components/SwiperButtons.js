import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <>
        <button onClick={() => swiper.slidePrev()} className="product_slider_left_arrow"><HiArrowSmLeft /></button>
        <button onClick={() => swiper.slideNext()} className="product_slider_right_arrow"><HiArrowSmRight /></button>
    </>
  );
}