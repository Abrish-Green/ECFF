import React from "react";

const FooterBottom = () => {
  return (
    <>
      <div className="inline-flex justify-between w-full py-4 px-6 md:px-10 font-[Montserrat] text-[#D7D7D7] bg-[#450000] footer-bottom">
        <div className="text-sm">@ &nbsp;ECFF 2022</div>
        <div className="text-sm">
          Powered by <u className="cursor-pointer">M.A.D technologies</u>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
