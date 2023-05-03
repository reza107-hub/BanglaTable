import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

export default function Slider() {
  return (
    <div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper max-w-xs"
      >
        <SwiperSlide>Backed</SwiperSlide>
        <SwiperSlide>Boiled</SwiperSlide>
        <SwiperSlide>Steamed</SwiperSlide>
        <SwiperSlide>Fried</SwiperSlide>
      </Swiper>
    </div>
  );
}
