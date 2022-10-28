import Image from "next/image";
import React from "react";

export default function Heading({ text, withScrollButtons = false }) {
  return (
    <div className="flex items-center justify-between w-full mb-6 lg:mb-20">
      <h1 className=" font-extrabold lg:text-[2rem] text-2xl  leading-10 uppercase">
        {text}
      </h1>
      {withScrollButtons ? (
        <div className="flex h-full space-x-1">
          <div className="flex items-center justify-center w-8 h-8 border">
            <div className="relative w-3 h-2 ">
              <Image
                src="/assets/icons/svg/left.svg"
                alt="left icon"
                className="brightness-0"
                layout="fill"
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-8 h-8 border">
            <div className="relative w-3 h-2 ">
              <Image
                src="/assets/icons/svg/right.svg"
                alt="right icon"
                className="brightness-0"
                layout="fill"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
