import React from "react";
import Image from "next/image";

const DetailsCard = ({ icon, topic, body }) => {
  return (
    <div className="h-full w-full bg-yellow-50 relative p-8">
      <div className=" w-8 h-[2.5rem] bg-yellow-400/40 skew-y-[45deg] absolute top-4 left-0"></div>
      <div className=" w-10 h-[2rem] bg-yellow-400/20 skew-x-[45deg] absolute top-0 left-4"></div>
      <div className="w-full h-full flex flex-col justify-between items-start">
        <div className=" w-10 h-10 bg-yellow-300 justify-center items-center flex">
          <Image
            src={`/assets/icons/svg/${icon}.svg`}
            alt={`${icon} icon`}
            height={16}
            width={22}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-base leading-6">{topic}</h3>
          <span className=" text-xs leading-4">{body}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
