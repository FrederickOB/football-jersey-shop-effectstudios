import Image from "next/image";
import React from "react";

export default function BackgroundImageSection() {
  return (
    <div className="w-full h-[25rem] grid grid-col-1 lg:grid-cols-2 lg:gap-10 gap-5">
      <BackgroundImageCard
        heading="PERSONALIZATION"
        text="Put a custom print on the football shirt of your choice with our
            Personalization service."
        body={
          <p className="text-[9px] lg:text-base">
            Tell us what name, what number and we put it. <b>FREE!!!</b>
          </p>
        }
        image="personalization"
      />
      <BackgroundImageCard
        heading="Social networks"
        text=" Share your shirts with us with the #CamisetasFutbolSpainnn"
        image="social-networks"
        body={
          <div className="flex mt-6 space-x-2">
            <div className="flex items-center justify-center w-5 h-5 bg-white lg:h-8 lg:w-8">
              <Image
                src="/assets/icons/svg/facebook-f.svg"
                alt="facebook icon"
                className="brightness-0"
                height={17.5}
                width={8.2}
              />
            </div>
            <div className="flex items-center justify-center w-5 h-5 bg-white lg:h-8 lg:w-8">
              <Image
                src="/assets/icons/svg/twitter.svg"
                alt="twitter icon"
                className="brightness-0"
                height={12.5}
                width={15.5}
              />
            </div>
            <div className="flex items-center justify-center w-5 h-5 bg-white lg:h-8 lg:w-8">
              <Image
                src="/assets/icons/svg/instagram.svg"
                alt="instagram icon"
                className="brightness-0"
                height={17}
                width={17}
              />
            </div>
          </div>
        }
      />
    </div>
  );
}

export function BackgroundImageCard({ heading, text, body, image }) {
  return (
    <div className="relative w-full h-full bg-black">
      <Image
        layout="fill"
        src={`/assets/images/${image}.jpg`}
        alt={`${image}`}
        className="opacity-40 "
      />
      <div className="absolute bottom-0 flex flex-col justify-end w-full h-full p-5 space-y-2 text-white lg:p-10 lg:space-y-4">
        <h2 className="text-sm font-bold leading-6 uppercase lg:text-2xl ">
          {heading}
        </h2>
        <p className="text-[9px] lg:text-base">{text}</p>
        {body}
      </div>
    </div>
  );
}
