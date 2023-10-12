import Image from "next/image";
import photo1 from "../../../public/assets/gallery/photo1.webp";
import photo3 from "../../../public/assets/gallery/photo3.webp";
import photo4 from "../../../public/assets/gallery/photo4.webp";
import photo5 from "../../../public/assets/gallery/photo5.webp";
import { Modal } from "../common/modal";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import banner_haji1 from "../../../public/assets/photo100.webp";
import banner_haji2 from "../../../public/assets/gallery/haji/photo8.webp";
import banner_haji3 from "../../../public/assets/gallery/haji/photo9.webp";
import banner_haji4 from "../../../public/assets/gallery/haji/photo10.webp";

import banner_muslimTour1 from "../../../public/assets/gallery/muslimTour/photo1.webp";
import banner_muslimTour2 from "../../../public/assets/gallery/muslimTour/photo2.webp";
import banner_muslimTour3 from "../../../public/assets/gallery/muslimTour/photo3.webp";

import banner_Asia1 from "../../../public/assets/gallery/asia/photo1.webp";
import banner_Asia2 from "../../../public/assets/gallery/asia/photo2.webp";
import banner_Asia3 from "../../../public/assets/gallery/asia/photo3.webp";

import banner_domestic1 from "../../../public/assets/gallery/domestic/photo1.webp";
import banner_domestic2 from "../../../public/assets/gallery/domestic/photo2.webp";
import banner_domestic3 from "../../../public/assets/gallery/domestic/photo3.webp";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export const GallerySection = () => {
  const [isOpenHaji, setIsOpenHaji] = useState(false);
  const [isOpenTour, setIsOpenTour] = useState(false);
  const [isOpenAsia, setIsOpenAsia] = useState(false);
  const [isOpenDomestic, setIsOpenDomestic] = useState(false);

  const bannerHaji = [
    {
      img: banner_haji1,
    },
    {
      img: banner_haji2,
    },
    {
      img: banner_haji3,
    },
    {
      img: banner_haji4,
    },
  ];

  const bannerTour = [
    {
      img: banner_muslimTour1,
    },
    {
      img: banner_muslimTour2,
    },
    {
      img: banner_muslimTour3,
    },
  ];

  const bannerAsia = [
    {
      img: banner_Asia1,
    },
    {
      img: banner_Asia2,
    },
    {
      img: banner_Asia3,
    },
  ];

  const bannerDomestic = [
    {
      img: banner_domestic1,
    },
    {
      img: banner_domestic2,
    },
    {
      img: banner_domestic3,
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

  return (
    <>
      {/* popup haji */}
      <Modal isOpen={isOpenHaji} onClick={() => setIsOpenHaji(false)}>
        <div className="h-full w-full">
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
                  <span className="w-full flex justify-center font-bold text-white text-9xl">
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
                  <span className="w-full flex justify-center font-bold text-white text-9xl">
                    <MdNavigateNext />
                  </span>
                </button>
              )
            }
            showStatus={false}
          >
            {bannerHaji.map((items, index) => {
              return (
                <Image
                  src={items.img}
                  key={index}
                  alt="banner"
                  className="h-full max-h-[500px] w-fit"
                />
              );
            })}
          </Carousel>
        </div>
      </Modal>

      {/* popup muslim tour */}
      <Modal isOpen={isOpenTour} onClick={() => setIsOpenTour(false)}>
        <div className="w-[100%]">
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
                  <span className="w-full flex justify-center font-bold text-white text-9xl">
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
                  <span className="w-full flex justify-center font-bold text-white text-9xl">
                    <MdNavigateNext />
                  </span>
                </button>
              )
            }
            showStatus={false}
          >
            {bannerTour.map((items, index) => {
              return (
                <Image
                  src={items.img}
                  key={index}
                  alt="banner"
                  className="lg:h-[500px] h-full w-fit"
                />
              );
            })}
          </Carousel>
        </div>
      </Modal>

      {/* popup asia */}
      <Modal isOpen={isOpenAsia} onClick={() => setIsOpenAsia(false)}>
        <div className="w-[100%]">
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
                  <span className="w-full flex justify-center font-bold text-white text-9xl">
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
                  <span className="w-full flex justify-center font-bold text-white text-9xl">
                    <MdNavigateNext />
                  </span>
                </button>
              )
            }
            showStatus={false}
          >
            {bannerAsia.map((items, index) => {
              return (
                <Image
                  src={items.img}
                  key={index}
                  alt="banner"
                  className="lg:h-[500px] h-full w-fit"
                />
              );
            })}
          </Carousel>
        </div>
      </Modal>

      {/* popup domestic */}
      <Modal isOpen={isOpenDomestic} onClick={() => setIsOpenDomestic(false)}>
        <div className="w-[100%]">
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
                  <span className="w-full flex justify-center font-bold text-white text-9xl">
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
                  <span className="w-full flex justify-center font-bold text-white text-9xl">
                    <MdNavigateNext />
                  </span>
                </button>
              )
            }
            showStatus={false}
          >
            {bannerDomestic.map((items, index) => {
              return (
                <Image
                  src={items.img}
                  key={index}
                  alt="banner"
                  className="lg:h-[500px] h-full w-fit"
                />
              );
            })}
          </Carousel>
        </div>
      </Modal>

      <div className="flex flex-col px-4 md:px-12 w-full mb-8">
        <span className="text-purple-700 font-bold text-lg text-center w-full mb-4">
          Gallery
        </span>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap md:gap-8 gap-2">
          {/* Haji dan Umroh card */}
          <div
            className="relative w-full hover:scale-105 cursor-pointer"
            onClick={() => setIsOpenHaji(true)}
          >
            <Image
              src={photo1}
              alt="photo"
              className="rounded-t-xl w-full h-full overflow-hidden"
            />
            <span className=" absolute min-w-full bg-opacity-60 font-semibold bg-black uppercase bottom-0 text-xs text-center text-white py-2">
              haji & umroh
            </span>
          </div>

          {/* Muslim Tour Card */}
          <div
            className="relative w-full hover:scale-105 cursor-pointer"
            onClick={() => setIsOpenTour(true)}
          >
            <Image
              src={photo5}
              alt="photo"
              className="rounded-t-xl w-full h-full overflow-hidden"
            />
            <span className=" absolute min-w-full bg-opacity-60 font-semibold bg-black uppercase bottom-0 text-xs text-center text-white py-2">
              muslim tour
            </span>
          </div>

          {/* asia & internatioanl Card */}
          <div
            className="relative w-full hover:scale-105 cursor-pointer"
            onClick={() => setIsOpenAsia(true)}
          >
            <Image
              src={photo3}
              alt="photo"
              className="rounded-t-xl w-full h-full overflow-hidden"
            />
            <span className=" absolute min-w-full bg-opacity-60 font-semibold bg-black uppercase bottom-0 text-xs text-center text-white py-2">
              asia & international
            </span>
          </div>

          {/* Domestic Card */}
          <div
            className="relative w-full hover:scale-105 cursor-pointer"
            onClick={() => setIsOpenDomestic(true)}
          >
            <Image
              src={photo4}
              alt="photo"
              className="rounded-t-xl w-full h-full overflow-hidden"
            />
            <span className=" absolute min-w-full bg-opacity-60 font-semibold bg-black uppercase bottom-0 text-xs text-center text-white py-2">
              domestic
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
