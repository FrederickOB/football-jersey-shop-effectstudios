import React from "react";
import Image from "next/image";

const DetailsCard = ({ icon, topic, body }) => {
  return (
    <div className="relative w-full h-full p-4 lg:p-8 bg-yellow-50">
      <div className=" w-4 lg:w-8 h-5 lg:h-10 bg-yellow-400/40 skew-y-[45deg] absolute top-2 lg:top-4 left-0"></div>
      <div className=" w-5 lg:w-10 h-4  lg:h-8 bg-yellow-400/20 skew-x-[45deg] absolute top-0 left-2 lg:left-4"></div>
      <div className="flex flex-col items-start justify-between w-full h-full">
        <div className="flex items-center justify-center w-5 h-5 bg-yellow-300 lg:w-10 lg:h-10 ">
          <div className="relative w-3 h-2 lg:w-6 lg:h-4">
            <Image
              src={`/assets/icons/svg/${icon}.svg`}
              alt={`${icon} icon`}
              layout="fill"
            />
          </div>
        </div>
        <div className="flex flex-col mt-2 lg:mt-0">
          <h3 className=" text-[10px] lg:text-base font-bold lg:leading-6 leading-3">
            {topic}
          </h3>
          <span className="text-[8px] lg:text-xs lg:leading-4 mt-2 lg:mt-0 ">
            {body}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
