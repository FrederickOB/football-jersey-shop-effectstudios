import Image from "next/image";
import React from "react";

export default function CountryLeaguesCard({ image, text }) {
  return (
    <div className="w-64 h-64 ">
      <div className="relative w-64 h-64">
        <Image
          layout="fill"
          src={`/assets/images/country-leagues/${image}.jpg`}
          alt={`${image} large`}
        />
      </div>
      <h3 className="mt-4 text-base font-bold text-black">{text}</h3>
    </div>
  );
}
