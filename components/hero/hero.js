import React, { useState, useEffect } from "react";
import Image from "next/image";
import parse from "html-react-parser";

const Hero = ({ banners }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        if (activeSlide < banners?.data.length - 1) {
          setActiveSlide((state) => state + 1);
        } else {
          setActiveSlide(0);
        }
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const selectors = () => {
    let buttons = [];

    for (let index = 0; index < banners?.data.length; index++) {
      buttons.push(
        <div
          key={index}
          onClick={() => setActiveSlide(index)}
          className={`w-20 h-1 ${
            activeSlide === index ? "bg-yellow-300" : "bg-white/40"
          } `}
        ></div>
      );
    }
    return buttons;
  };

  return (
    <section className="w-full  h-[25rem] overflow-hidden">
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className={`w-full transition-transform duration-75 whitespace-nowrap`}
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {banners && banners.data
          ? banners.data.map((banner, index) => {
              return (
                <div
                  className="relative w-full h-[25rem] aspect-video inline-flex items-center justify-center"
                  key={banner.id}
                >
                  <Image src={banner.image} layout="fill" alt="hero image" />
                  <div className="absolute flex w-full h-full">
                    <div className="flex flex-col justify-between w-2/3 h-full p-6 lg:pt-20 lg:pb-10 lg:px-20 bg-gradient-to-r from-black/80">
                      <div className=" text-2xl lg:text-[2.5rem] font-bold lg:leading-10 text-white overflow-visible">
                        {banner.content ? parse(`${banner.content}`) : null}
                      </div>
                      <div className="flex flex-row w-full space-x-2">
                        {selectors()}
                      </div>
                    </div>
                    <div className="flex items-end justify-end w-1/3 h-full p-10">
                      <a
                        className="flex border border-white"
                        href={banner.link}
                      >
                        <div className="flex items-center justify-center w-20 h-10 text-xs text-white bg-black/40">
                          {banner.btn_text}
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 bg-white">
                          <Image
                            src="/assets/icons/svg/bag.svg"
                            alt="bar icon"
                            height={14}
                            width={13.67}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </section>
  );
};

export default Hero;

const Carousel = () => {
  return (
    <div>
      <div>{}</div>
    </div>
  );
};
