import Image from "next/image";
import banner1 from "../../../public/assets/banner/ka'bah.webp";

export const TestimonySection = () => {
  return (
    <>
      <div className="relative h-60 w-full mt-2 bg-cover bg-center">
        <Image
          src={banner1}
          alt="backgroudn-image"
          className=" w-full h-full object-cover overflow-y-hidden"
        />
        <div className="w-full text-white absolute top-0 text-center px-8 lg:px-20 z-40 bg-black bg-opacity-70 h-full">
          <div className="flex flex-col items-center h-full py-8">
            <span className="text-lg font-bold">Testimonial</span>
            <div className="flex flex-col h-full justify-center space-y-4">
              <span className="text-xs lg:text-sm">
                Alhamdulillah servicenya sangat memuaskan, hotelnya dekat dengan
                masjidil haram dan masjid nabawi, TL dan muthawifnya juga
                helpful sekali. Semoga bisa ikut trip RiDA Tour yang lainnya.
                Sukses terus RiDA Tour. Terima kasih untuk pelayanannya yang
                luar biasa
              </span>
              <span className="uppercase text-sm lg:text-base font-semibold">
                Putri sartika M - 07/02/2020
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
