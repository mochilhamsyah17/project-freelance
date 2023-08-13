export const Footer = () => {
  return (
    <div className="relative md:absolute bottom-0">
      <div className="flex flex-col">
        <div className="min-w-full bg-purple-700 text-white text-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 px-4 md:px-12 py-4 gap gap-4 ">
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
            </div>
            <div className="font-semibold uppercase">Branch Office</div>
            <div className="font-semibold uppercase">information</div>
            <div className="font-semibold uppercase">Social Media</div>
          </div>
        </div>
        <div className="min-w-full bg-slate-600 text-center text-[10px] text-white py-2">
          <span>Copyright PT. RIHLAH DUTA AMANAH © 2023</span>
        </div>
      </div>
    </div>
  );
};
