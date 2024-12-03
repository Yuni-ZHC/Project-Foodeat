import React from "react";
import HeroImg from "../../assets/1.png";

const Hero = () => {
  return (
    <div>
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">
      {/* Text section */}
      <div className="flex flex-col justify-center gap-8 text-center md:text-left pt-10 md:pt-0 pb-20">
        <h1 className="text-4xl lg:text font-semibold">
          Delicious Food Is Waiting For You
        </h1>
        <p className="text-lg">
        Discover a world of flavors that will delight your taste buds. Experience the perfect blend of taste and tradition, all in one bite.
        </p>
        <div className="flex gap-4 items-center justify-center md:justify-start">
          <button className="primary-btn hover:scale-105 duration-200">Food Menu</button>
          <button className="secondary-btn text-black hover:scale-105 duration-200">Book Table</button>
        </div>
      </div>

      {/* Image section with buttons */}
      <div className="flex flex-col justify-center">
        <img src={HeroImg} alt="" className=" animate-spin-slow img-shadow w-[400px] mx-auto "
          />
      </div>
    </div>
    
    </div>
  );
};

export default Hero;
