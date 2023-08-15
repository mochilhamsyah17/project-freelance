import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../../public/assets/banner/banner1.webp";
import banner2 from "../../../public/assets/banner/banner2.webp";
import banner3 from "../../../public/assets/banner/banner3.webp";
import banner4 from "../../../public/assets/banner/banner4.jpeg";
import { GrNext, GrPrevious } from "react-icons/gr";

import Image from "next/image";

const banner = [
  {
    img: banner4,
  },
];

export default class SimpleSlider2 extends Component {
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
      <div className="hidden md:block lg:hidden justify-center items-center max-w-screen">
        <div className="w-full">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            // centerMode
            showArrows={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles, left: 0 }}
                >
                  <span className="w-full flex justify-center font-bold text-white">
                    <GrPrevious />
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
                  <span className="w-full flex justify-center font-bold text-white">
                    <GrNext />
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
                  className="lg:h-[600px] h-auto w-full"
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}
