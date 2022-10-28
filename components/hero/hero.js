import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full relative h-[25rem]">
      <Image src="/assets/images/hero.jpg" layout="fill" alt="hero image" />
      <div className="absolute flex w-full h-full">
        <div className="flex flex-col justify-between w-2/3 h-full p-6 lg:pt-20 lg:pb-10 lg:px-20 bg-gradient-to-r from-black/80">
          <div>
            <h1 className=" text-2xl lg:text-[2.5rem] font-bold lg:leading-10 text-white overflow-visible">
              Your favorite customized
            </h1>
            <h1 className=" text-2xl lg:text-[2.5rem] font-bold lg:leading-10 text-yellow-300">
              Club Jerseys.
            </h1>
          </div>
          <div className="flex flex-row w-full space-x-2">
            <div className="w-20 h-1 bg-yellow-300 "></div>
            <div className="w-20 h-1 bg-white/20"></div>
            <div className="w-20 h-1 bg-white/20"></div>
            <div className="w-20 h-1 bg-white/20"></div>
            <div className="w-20 h-1 bg-white/20"></div>
          </div>
        </div>
        <div className="flex items-end justify-end w-1/3 h-full p-10">
          <button className="flex border border-white">
            <div className="flex items-center justify-center w-20 h-10 text-xs text-white bg-black/40">
              Shop Now
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-white">
              <Image
                src="/assets/icons/svg/bag.svg"
                alt="bar icon"
                height={14}
                width={13.67}
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
