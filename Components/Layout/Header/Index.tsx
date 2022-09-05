import React from "react";
import HeaderLinks from "./HeaderLinks";
import Logo from "../../Shared/LogoComponent";

const Index = () => {
  return (
    <>
      <div className="inline-flex items-center justify-between w-full h-auto py-4 text-white bg-black border header">
        <div className="relative  left-4 top-2">
          <Logo />
        </div>

        <HeaderLinks />
      </div>
    </>
  );
};

export default Index;
