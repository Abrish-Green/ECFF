import React from "react";
import Logo from "../../Shared/LogoComponent";
const FooterContent = () => {
  return (
    <>
      <div className="border-2 border-red-500 bg-[#590000] text-white footer-content">
        <div className="border social-media">
          <div className="footer-title">
            <Logo />
          </div>
          <div className="footer-text">
            Etiam at augue sit amet erat fringilla aliquet sed quis felis. Nunc
            sodales sapien vitae felis fringilla, quis auctor lectus vestibulum.
          </div>
        </div>
        <div className="border footer-links">
          <div className="footer-link">
            <div className="footer-link-title">Quick Links</div>
            <div className="footer-links-item">
              <ul>
                <li>
                  <a>Home</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContent;
