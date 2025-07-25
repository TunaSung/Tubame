// import swiper core components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Swiper.css'; //customer

// import swiper modules
import { Autoplay, Pagination } from 'swiper/modules';

function BrandSwiper() {
    return(
        <Swiper
        loop={true}
        spaceBetween={0}
        autoplay={{
        delay: 4000,
        disableOnInteraction: false, //don't continue autoplay after user interaction
        }}
        pagination={{
        clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className='brand__swiper'
        >
            <SwiperSlide>
                <div className='brand__swiper-image brand__swiper-image--1' />
            </SwiperSlide>
            <SwiperSlide>
                <div className='brand__swiper-image brand__swiper-image--2' />
            </SwiperSlide>
            <SwiperSlide>
                <div className='brand__swiper-image brand__swiper-image--3' />
            </SwiperSlide>
        </Swiper>
    )
}

export default BrandSwiper