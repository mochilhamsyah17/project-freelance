export const Footer = () => {
  return (
    <>
      <div className="min-w-full bg-purple-700 absolute bottom-0 text-white text-sm">
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
    </>
  );
};
