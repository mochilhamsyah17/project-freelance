import Image from "next/image";
import photo1 from "../../../public/assets/gallery/photo1.webp";
import photo3 from "../../../public/assets/gallery/photo3.webp";
import photo4 from "../../../public/assets/gallery/photo4.webp";
import photo5 from "../../../public/assets/gallery/photo5.webp";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "../common/nextJSimage";

export const GallerySection = () => {
  const [isOpenHaji, setIsOpenHaji] = useState(false);
  const [isOpenTour, setIsOpenTour] = useState(false);
  const [isOpenAsia, setIsOpenAsia] = useState(false);
  const [isOpenDomestic, setIsOpenDomestic] = useState(false);

  const bannerHaji = [banner_haji1, banner_haji2, banner_haji3, banner_haji4];

  const bannerTour = [
    banner_muslimTour1,
    banner_muslimTour2,
    banner_muslimTour3,
  ];

  const bannerAsia = [banner_Asia1, banner_Asia2, banner_Asia3];

  const bannerDomestic = [banner_domestic1, banner_domestic2, banner_domestic3];

  return (
    <>
      {/* pop up haji */}
      <Lightbox
        open={isOpenHaji}
        close={() => setIsOpenHaji(false)}
        slides={bannerHaji}
        render={{ slide: NextJsImage }}
      />
      {/*end pop up haji */}

      {/* pop up tour */}
      <Lightbox
        open={isOpenTour}
        close={() => setIsOpenTour(false)}
        slides={bannerTour}
        render={{ slide: NextJsImage }}
      />
      {/*end pop up tour */}

      {/* pop up Asia */}
      <Lightbox
        open={isOpenAsia}
        close={() => setIsOpenAsia(false)}
        slides={bannerAsia}
        render={{ slide: NextJsImage }}
      />
      {/*end pop up Asia */}

      {/* pop up Domestic */}
      <Lightbox
        open={isOpenDomestic}
        close={() => setIsOpenDomestic(false)}
        slides={bannerDomestic}
        render={{ slide: NextJsImage }}
      />
      {/*end pop up Domestic */}

      <div className="flex flex-col px-4 md:px-12 w-full mb-8">
        <span className="text-purple-700 font-bold text-lg text-center w-full mb-4">
          Gallery
        </span>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap md:gap-8 gap-2">
          {/* Haji dan Umroh card */}
          <div
            className="relative w-full hover:scale-105 cursor-pointer shadow-xl"
            onClick={() => setIsOpenHaji(true)}
          >
            <Image
              src={photo1}
              alt="photo"
              className="rounded-t-xl w-full h-full overflow-hidden shadow-xl"
            />
            <span className=" absolute min-w-full bg-opacity-30 font-semibold bg-black uppercase bottom-0 text-xs text-center text-white py-2">
              haji & umroh
            </span>
          </div>

          {/* Muslim Tour Card */}
          <div
            className="relative w-full hover:scale-105 cursor-pointer shadow-xl"
            onClick={() => setIsOpenTour(true)}
          >
            <Image
              src={photo5}
              alt="photo"
              className="rounded-t-xl w-full h-full overflow-hidden shadow-xl"
            />
            <span className=" absolute min-w-full bg-opacity-30 font-semibold bg-black uppercase bottom-0 text-xs text-center text-white py-2">
              muslim tour
            </span>
          </div>

          {/* asia & internatioanl Card */}
          <div
            className="relative w-full hover:scale-105 cursor-pointer shadow-xl"
            onClick={() => setIsOpenAsia(true)}
          >
            <Image
              src={photo3}
              alt="photo"
              className="rounded-t-xl w-full h-full overflow-hidden shadow-xl"
            />
            <span className=" absolute min-w-full bg-opacity-30 font-semibold bg-black uppercase bottom-0 text-xs text-center text-white py-2">
              asia & international
            </span>
          </div>

          {/* Domestic Card */}
          <div
            className="relative w-full hover:scale-105 cursor-pointer shadow-xl"
            onClick={() => setIsOpenDomestic(true)}
          >
            <Image
              src={photo4}
              alt="photo"
              className="rounded-t-xl w-full h-full overflow-hidden shadow-xl"
            />
            <span className=" absolute min-w-full bg-opacity-30 font-semibold bg-black uppercase bottom-0 text-xs text-center text-white py-2">
              domestic
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
