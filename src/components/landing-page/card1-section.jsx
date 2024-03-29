import { BsBagDashFill } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";

export const Card1Section = () => {
  return (
    <div className="md:px-12 px-4 mb-4">
      <div className="px-10 lg:px-20 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap gap-4 justify-center items-center">
        <div className="w-full relative text-center ">
          <div className="border border-slate-300 my-4 rounded-lg py-10 lg:py-8 flex flex-col px-4 space-y-4 md:space-y-1">
            <div className="w-fit absolute left-[45.5%] md:left-[44.5%] top-7 md:top-0">
              <div className="border-2 border-yellow-600 flex p-2 text-xl w-fit rounded-full text-yellow-700 bg-white">
                <FaDollarSign />
              </div>
            </div>
            <span className="font-semibold text-sm text-amber-950">
              Harga Bersaing
            </span>
            <span className="text-xs">
              Dapatkan harga paket Umroh & Haji maupun komponen lainnya dengan
              penawaran harga terbaik dari kami. Harga kami jujur dan bersaing
            </span>
          </div>
        </div>
        <div className="w-full relative text-center ">
          <div className="border border-slate-300 my-4 rounded-lg py-10 lg:py-8 flex flex-col px-4 space-y-4 md:space-y-1">
            <div className="w-fit absolute left-[45.5%] md:left-[44.5%] top-7 md:top-0">
              <div className="border-2 border-yellow-600 flex p-2 text-xl w-fit rounded-full text-yellow-700 bg-white">
                <BsBagDashFill />
              </div>
            </div>
            <span className="font-semibold text-sm text-amber-950">
              Pemesanan Mudah
            </span>
            <span className="text-xs">
              Dapatkan harga paket Umroh & Haji maupun komponen lainnya dengan
              penawaran harga terbaik dari kami. Harga kami jujur dan bersaing
            </span>
          </div>
        </div>
        <div className="w-full relative text-center ">
          <div className="border border-slate-300 my-4 rounded-lg py-10 lg:py-8 flex flex-col px-4 space-y-4 md:space-y-1">
            <div className="w-fit absolute left-[45.5%] md:left-[44.5%] top-7 md:top-0">
              <div className="border-2 border-yellow-600 flex p-2 text-xl w-fit rounded-full text-yellow-700 bg-white">
                <BiLogoTelegram />
              </div>
            </div>
            <span className="font-semibold text-sm text-amber-950">
              Layanan Luas
            </span>
            <span className="text-xs">
              Dapatkan harga paket Umroh & Haji maupun komponen lainnya dengan
              penawaran harga terbaik dari kami. Harga kami jujur dan bersaing
            </span>
          </div>
        </div>
        <div className="w-full relative text-center ">
          <div className="border border-slate-300 my-4 rounded-lg py-10 lg:py-8 flex flex-col px-4 space-y-4 md:space-y-1">
            <div className="w-fit absolute left-[45.5%] md:left-[44.5%] top-7 md:top-0">
              <div className="border-2 border-yellow-600 flex p-2 text-xl w-fit rounded-full text-yellow-700 bg-white">
                <AiOutlineLike />
              </div>
            </div>
            <span className="font-semibold text-sm text-amber-950">
              Terpercaya
            </span>
            <span className="text-xs">
              Dapatkan harga paket Umroh & Haji maupun komponen lainnya dengan
              penawaran harga terbaik dari kami. Harga kami jujur dan bersaing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
