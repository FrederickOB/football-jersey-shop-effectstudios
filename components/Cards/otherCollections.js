import Image from "next/image";
import React from "react";

export default function OtherCollections({ text, image }) {
  return (
    <div className="w-full ">
      <div className="relative aspect-square lg:aspect-video lg:h-64 lg:w-full">
        <Image
          layout="fill"
          src={`/assets/images/other-collections/${image}.jpg`}
          alt={`${image} large`}
        />
        <div className="absolute bottom-0 left-0 z-10 flex justify-between w-full h-8 lg:h-12">
          <div className="w-full px-4 py-3 lg:px-6 lg:py-4 text-[9px] leading-3 font-semibold lg:leading-4 text-white lg:text-sm bg-black/40 backdrop-blur">
            <p>{text}</p>
          </div>
          <div className="flex items-center justify-center w-12 h-full bg-yellow-300">
            <Image
              src="/assets/icons/svg/right.svg"
              alt="right icon"
              className="brightness-0"
              height={7}
              width={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
