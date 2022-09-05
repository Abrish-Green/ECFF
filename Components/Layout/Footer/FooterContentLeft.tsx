import React from "react";
import Logo from "../../Shared/LogoComponent";
import SocialMediaIcons from "./SocialMediaIcons";

const FooterContentLeft = () => {
  return (
    <>
      <div className="border md:col-span-2 social-media p-12 px-12">
        <div className="footer-title">
          <Logo />
        </div>
        <div className="footer-text font-[Montserrat] text-md text-[#D7D7D7]">
          Etiam at augue sit amet erat fringilla aliquet sed quis felis. Nunc
          sodales sapien vitae felis fringilla, quis auctor lectus vestibulum.
        </div>
        <SocialMediaIcons />
      </div>
    </>
  );
};

export default FooterContentLeft;
