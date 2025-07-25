// import swiper core components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Swiper.css"; //customer

// import swiper modules
import { Autoplay, Pagination } from "swiper/modules";

function BrandSwiper() {
  return (
    <Swiper
      aria-label="Brand showcase carousel"
      loop={true}
      spaceBetween={0} // No gap between slides
      autoplay={{
        delay: 4000,
        disableOnInteraction: false, // Keep autoplay active even after user interactions
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="brand__swiper"
    >
      <SwiperSlide>
        <div
          className="brand__swiper-image brand__swiper-image--1"
          aria-hidden="true"
        />
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="brand__swiper-image brand__swiper-image--2"
          aria-hidden="true"
        />
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="brand__swiper-image brand__swiper-image--3"
          aria-hidden="true"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default BrandSwiper;
