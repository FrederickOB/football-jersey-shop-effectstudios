import Image from "next/image";
import React from "react";

export default function OtherCollections({ text, image }) {
  return (
    <div className="w-full h-60">
      <div className="relative w-full h-64">
        <Image
          layout="fill"
          src={`/assets/images/other-collections/${image}.jpg`}
          alt={`${image} large`}
        />
        <div className="absolute bottom-0 left-0 z-10 flex justify-between w-full h-12 ">
          <div className="w-full px-6 py-4 text-sm font-semibold leading-4 text-white bg-black/40 backdrop-blur">
            <p>{text}</p>
          </div>
          <div className="flex items-center justify-center w-12 h-full bg-yellow-300">
            <Image
              src="/assets/icons/svg/rightBlack.svg"
              alt="right icon"
              height={7}
              width={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
