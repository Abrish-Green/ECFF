import React from 'react'
import HeaderLinks from './HeaderLinks';
import Logo from './LogoComponent';

const Index = () => {
   
  return (
    <>
          <div className="header border w-full h-auto py-4 inline-flex justify-between items-center bg-black text-white">
              <Logo />
              <HeaderLinks />
          </div>
    </>
  )
}

export default Index
