import React, { Component, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../public/assets/banner/banner1.webp";
import banner2 from "../../../public/assets/banner/banner2.webp";
import banner3 from "../../../public/assets/banner/banner3.webp";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { register } from "swiper/element/bundle";

register();
const banner = [
  {
    img: banner1,
  },
  {
    img: banner2,
  },
  {
    img: banner3,
  },
];

export const SimpleSlider3 = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    if (swiperElRef.current) {
      swiperElRef.current.addEventListener("progress", (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
      });

      swiperElRef.current.addEventListener("slidechange", (e) => {
        console.log("slide changed");
      });
    }
  }, []);
  return (
    <div className="mb-8 hidden justify-center items-center max-w-screen lg:flex">
      <div className="w-[100%]">
        <Swiper
          ref={swiperElRef}
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
          navigation
        >
          {banner.map((items, index) => {
            return (
              <SwiperSlide key={index}>
                <Image src={items.img} alt="banner" className=" h-[512px]" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
