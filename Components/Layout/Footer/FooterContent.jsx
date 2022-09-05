import React from "react";
import Logo from "../../Shared/LogoComponent";
import FooterContentLeft from "./FooterContentLeft";
import FooterLinks from "./FooterLinks";
const FooterContent = () => {
  return (
    <>
      <div className="border flex-col md:flex-row md:grid md:grid-cols-6 w-full bg-[#590000] text-white footer-content">
        <FooterContentLeft />
        <FooterLinks />
      </div>
    </>
  );
};

export default FooterContent;
