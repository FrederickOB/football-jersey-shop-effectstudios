import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full relative h-[25rem]">
      <Image src="/assets/images/hero.jpg" layout="fill" alt="hero image" />
      <div className="h-full w-full absolute flex">
        <div className="w-2/3 h-full bg-gradient-to-r from-black/80 px-20 pt-20 pb-10 flex flex-col justify-between">
          <div>
            <h1 className=" text-[2.5rem] font-bold leading-10 text-white">
              Your favorite customized
            </h1>
            <h1 className=" text-[2.5rem] font-bold leading-10 text-yellow-300">
              Club Jerseys.
            </h1>
          </div>
          <div className="flex flex-row w-full space-x-2">
            <div className=" h-1 w-20 bg-yellow-300"></div>
            <div className=" h-1 w-20 bg-white/20"></div>
            <div className=" h-1 w-20 bg-white/20"></div>
            <div className=" h-1 w-20 bg-white/20"></div>
            <div className=" h-1 w-20 bg-white/20"></div>
          </div>
        </div>
        <div className="w-1/3 h-full p-10 flex justify-end items-end">
          <button className="flex border border-white">
            <div className="w-20 h-10 flex justify-center items-center text-white bg-black/40 text-xs">
              Shop Now
            </div>
            <div className="bg-white w-10 h-10 flex justify-center items-center">
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
