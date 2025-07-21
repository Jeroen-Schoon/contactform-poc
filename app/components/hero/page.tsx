import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="w-full flex h-[600px]">
        <div className="object-cover">
          <Image
            src="/heroBanner.jpg"
            alt="Image of WeLink Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
