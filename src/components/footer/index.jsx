import { AiOutlineMail } from "react-icons/ai";
import {
  BsClock,
  BsFacebook,
  BsInstagram,
  BsPhone,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="min-w-full bg-purple-800 text-white text-sm z-30">
        <div className="grid grid-cols-2 lg:grid-cols-4 px-4 md:px-12 py-4 gap gap-4 lg:gap-12 ">
          {/* head office */}
          <div className="flex flex-col space-y-4">
            <div className="font-semibold uppercase">Head Office</div>
            <div className="text-xs flex flex-col">
              <span className="uppercase font-semibold">
                PT. RIHLAH DUTA AMANAH
              </span>
              <span>
                Ruko Mutiara No. 1, Pasir Gn. Sel, Kec. Cimanggis, Kota Depok,
                Jawa Barat, 16451
              </span>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 text-[10px] font-semibold">
              <div className="flex flex-row items-center gap gap-2">
                <BsPhone />
                <span>0813 1177 7979</span>
              </div>
              <div className="flex flex-row items-center gap gap-2">
                <AiOutlineMail />
                <span>info@ridatour.co.id</span>
              </div>
              <div className="flex flex-row items-center gap gap-2">
                <BsClock />
                <span>09:00 - 17:00</span>
              </div>
            </div>
          </div>
          {/* branch office */}
          <div className="flex flex-col space-y-4">
            <div className="font-semibold uppercase">Branch Office</div>
            <div className="text-xs flex flex-col">
              <span className="uppercase font-semibold">
                rida tour cibinong city mall 1 ug floor c 2b
              </span>
              <span>
                Jl. Tegar Beriman, Pakansari, Kec. Cibinong, Kabupaten Bogor,
                Jawa Barat 16915
              </span>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 text-[10px] font-semibold">
              <div className="flex flex-row items-center gap gap-2">
                <BsPhone />
                <span>0812 9196 3383</span>
              </div>
              <div className="flex flex-row items-center gap gap-2">
                <AiOutlineMail />
                <span>info.ccm@ridatour.co.id</span>
              </div>
              <div className="flex flex-row items-center gap gap-2">
                <BsClock />
                <span>10:00 - 22:00</span>
              </div>
            </div>
          </div>
          {/* information */}
          <div className="flex flex-col space-y-4">
            <div className="font-semibold uppercase">information</div>

            <div className="grid grid-cols-1 xl:grid-cols-2 text-xs">
              <span>Payment Method</span>
              <span>Term & Condition</span>
              <span>Privacy Pospancy</span>
              <span>Testimonial</span>
              <span>FAQ</span>
            </div>
          </div>
          {/* social media */}
          <div className="flex flex-col space-y-4">
            <div className="font-semibold uppercase">SOCIAL MEDIA</div>
            <div className="text-[10px] grid grid-cols-1 xl:grid-cols-2">
              <div className="flex flex-row items-center gap gap-2">
                <BsFacebook />
                <span>Facebook</span>
              </div>
              <div className="flex flex-row items-center gap gap-2">
                <BsInstagram />
                <span>Instagram</span>
              </div>
              <div className="flex flex-row items-center gap gap-2">
                <BsTiktok />
                <span>TikTok</span>
              </div>
              <div className="flex flex-row items-center gap gap-2">
                <BsYoutube />
                <span>Youtube</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-full bg-slate-600 text-center text-[10px] text-white py-2">
        <span>Copyright PT. RIHLAH DUTA AMANAH © 2023</span>
      </div>
    </div>
  );
};
