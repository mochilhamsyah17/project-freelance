import Image from "next/image";
import banner1 from "../../../public/assets/maps/maps1.webp";
import banner2 from "../../../public/assets/maps/maps2.webp";
import bg1 from "../../../public/assets/banner/turkey.webp";

import photo1 from "../../../public/assets/gallery/photo1.webp";

export const BranchSection = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      <div className="relative h-full lg:h-[350px] w-full bg-cover bg-center">
        <Image
          src={bg1}
          alt="backgroudn-image"
          className=" w-full h-full object-cover overflow-y-hidden"
        />
        <div className="w-full absolute top-0 z-20 bg-black bg-opacity-70 h-full">
          <div className="flex flex-col lg:flex-row h-full gap gap-0 lg:gap-8 ">
            <div className="flex flex-row text-white justify-between px-8 lg:px-12  py-6 w-full h-full gap gap-4">
              <div className="flex flex-col h-full justify-center text-center space-y-2">
                <span className="font-bold">Head Office Map</span>
                <Image
                  src={banner1}
                  alt="head office maps"
                  className="w-fit h-1/2 lg:h-full"
                />
              </div>
              <div className="flex flex-col h-full justify-center text-center space-y-2">
                <span className="font-bold">Branch Office Map</span>
                <Image
                  src={banner2}
                  alt="branch office maps"
                  className="w-fit h-1/2 lg:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* article */}
      <div className="flex flex-col w-full h-full px-4 py-6 z-20 bg-white gap gap-2">
        <span className="font-bold w-full  text-purple-700 text-lg">
          Article
        </span>
        <div className="flex flex-col md:flex-row w-full gap-4">
          <Image src={photo1} alt="photo" className="w-fit h-44" />
          <div className="flex flex-col">
            <span className="text-purple-700 text-base font-semibold">
              5 Hal Yang Harus Disiapkan Agar Cepat Berangkat Umrah
            </span>
            <span className="text-black text-xs">Kategori: Umrah, </span>
            <span className="text-black text-xs">
              Ditulis pada: 12 April 2023, 11:00:58
            </span>
          </div>
        </div>
        <span className="text-xs pr-10">
          Apabila Anda ingin segera menjalankan ibadah umrah, pasanglah niat
          kuat-kuat supaya Anda bisa segera berangkat ke tanah suci. Banyak
          orang secara keuangan cukup...
        </span>
        <button className="w-1/3 py-2 bg-purple-700 text-xs rounded-lg">
          <span className="font-semibold text-white">Baca Selengkapnya</span>
        </button>
      </div>
    </div>
  );
};
