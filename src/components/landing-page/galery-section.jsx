import Image from "next/image";
import photo1 from "../../../public/assets/gallery/photo1.webp";
import photo2 from "../../../public/assets/gallery/photo2.webp";
import photo3 from "../../../public/assets/gallery/photo3.webp";
import photo4 from "../../../public/assets/gallery/photo4.webp";
import photo5 from "../../../public/assets/gallery/photo5.webp";

const photo = [
  {
    img: photo1,
    desc: "haji & umroh",
  },
  {
    img: photo5,
    desc: "muslim tour",
  },
  {
    img: photo3,
    desc: "asia & international",
  },
  {
    img: photo4,
    desc: "domestic",
  },
];

export const GallerySection = () => {
  return (
    <>
      <div className="flex flex-col px-4 md:px-12 w-full mb-8">
        <span className="text-purple-700 font-bold text-lg text-center w-full mb-4">
          Gallery
        </span>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap md:gap-8 gap-2">
          {photo.map((items, index) => {
            return (
              <>
                <div
                  className="relative w-full hover:scale-105 cursor-pointer"
                  key={index}
                >
                  <Image
                    src={items.img}
                    alt="photo"
                    className="rounded-t-xl w-full h-full overflow-hidden"
                    key={index}
                  />
                  <span className=" absolute min-w-full bg-opacity-60 font-semibold bg-black uppercase bottom-0 text-xs text-center text-white py-2">
                    {items.desc}
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
