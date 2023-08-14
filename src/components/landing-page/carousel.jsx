import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious } from "react-icons/gr";
import banner1 from "../../../public/assets/banner/banner1.webp";
import banner2 from "../../../public/assets/banner/banner2.webp";
import banner3 from "../../../public/assets/banner/banner3.webp";
import Image from "next/image";

export default class SimpleSlider extends Component {
  render() {
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
    const arrowStyles = {
      position: "absolute",
      zIndex: 2,
      top: 0,
      width: 30,
      height: "100%",
      cursor: "pointer",
      color: "#ffffff",
      backdropFilter: "saturate(180%) blur(100px) opacity(0.3)",
      WebkitBackdropFilter: "blur(10px)",
    };
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: (
        <button type="button" style={{ ...arrowStyles, left: 0 }}>
          <span className="w-full flex justify-center font-bold text-white">
            <GrPrevious />
          </span>
        </button>
      ),
    };
    return (
      <div className="max-w-screen">
        <Slider {...settings}>
          <div>
            <Image src={banner1} alt="banner" className="w-1/2" />
          </div>
          <div>
            <Image src={banner2} alt="banner" className="w-1/2" />
          </div>
        </Slider>
      </div>
    );
  }
}
