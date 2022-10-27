import Image from "next/image";
import React from "react";

export default function Heading({ text, withScrollButtons = false }) {
  return (
    <div className="flex items-center justify-between w-full mb-20">
      <h1 className=" font-extrabold text-[2rem] leading-10 uppercase">
        {text}
      </h1>
      {withScrollButtons ? (
        <div className="flex h-full space-x-1">
          <div className="flex items-center justify-center w-8 h-8 border">
            <Image
              src="/assets/icons/svg/leftBlack.svg"
              alt="left icon"
              height={7}
              width={12}
            />
          </div>
          <div className="flex items-center justify-center w-8 h-8 border">
            <Image
              src="/assets/icons/svg/rightBlack.svg"
              alt="right icon"
              height={7}
              width={12}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
