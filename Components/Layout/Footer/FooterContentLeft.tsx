import React from 'react'
import Logo from '../../Shared/LogoComponent'

const FooterContentLeft = () => {
  return (
    <>
      <div className="border md:col-span-2 social-media">
          <div className="footer-title">
            <Logo />
          </div>
          <div className="footer-text">
            Etiam at augue sit amet erat fringilla aliquet sed quis felis. Nunc
            sodales sapien vitae felis fringilla, quis auctor lectus vestibulum.
          </div>
        </div>
    </>
  )
}

export default FooterContentLeft
