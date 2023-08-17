import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner4 from "../../../public/assets/banner/banner4.jpeg";
import banner5 from "../../../public/assets/banner/banner5.webp";
import banner6 from "../../../public/assets/banner/banner6.webp";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import Image from "next/image";

const banner = [
  {
    img: banner4,
  },
  {
    img: banner5,
  },
  {
    img: banner6,
  },
];

export default class SimpleSlider extends Component {
  render() {
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

    return (
      <div className=" block justify-center items-center max-w-screen">
        <div className="w-full">
          <Carousel
            autoPlay
            infiniteLoop
            showArrows={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles, left: 0 }}
                >
                  <span className="w-full flex justify-center font-extrabold text-white text-9xl">
                    <MdNavigateBefore />
                  </span>
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles, right: 0 }}
                >
                  <span className="w-full flex justify-center font-extrabold text-white text-9xl">
                    <MdNavigateNext />
                  </span>
                </button>
              )
            }
            showStatus={false}
          >
            {banner.map((items, index) => {
              return (
                <Image
                  src={items.img}
                  key={index}
                  alt="banner"
                  className="lg:h-[600px] h-auto"
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}
