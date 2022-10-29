import Image from "next/image";
import React from "react";

export default function CountryLeaguesCard({ image, text,key }) {
  return (
    <div className="w-full h-full ">
      <div className="relative aspect-square">
        <Image
          layout="fill"
          object-fit="cover"
          src={`${image}`}
          alt={`${text} `}
        />
      </div>
      <h3 className="mt-4 text-xs font-bold text-black lg:text-base">{text}</h3>
    </div>
  );
}
