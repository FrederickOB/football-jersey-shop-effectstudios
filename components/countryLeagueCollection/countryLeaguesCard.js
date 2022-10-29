import Image from "next/image";
import React from "react";

export default function CountryLeaguesCard({ image, text, key, slug }) {
  return (
    <div className="w-full h-full ">
      <div className="relative aspect-square hover:scale-105 hover:shadow-lg">
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
