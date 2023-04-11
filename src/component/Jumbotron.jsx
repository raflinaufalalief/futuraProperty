import React from "react";
import Hero from "../assets/hero1.png";
// import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Jumbotron = () => {
  return (
    <section className="mt-28">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src={Hero} alt="" className="w-screen" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hero} alt="" className="w-screen" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hero} alt="" className="w-screen" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hero} alt="" className="w-screen" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Jumbotron;
