import Image from "next/image";
import React from "react";

export default function BackgroundImageSection() {
  return (
    <div className="w-full h-[25rem] space-x-10 flex">
      <BackgroundImageCard
        heading="PERSONALIZATION"
        text="Put a custom print on the football shirt of your choice with our
            Personalization service."
        body={
          <p>
            Tell us what name, what number and we put it. <b>FREE!!!</b>
          </p>
        }
      />
      <BackgroundImageCard
        heading="Social networks"
        text=" Share your shirts with us with the #CamisetasFutbolSpainnn"
        body={
          <div className="flex mt-6 space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-white">
              <Image
                src="/assets/icons/svg/facebook-f.svg"
                alt="facebook icon"
                className="brightness-0"
                height={17.5}
                width={8.2}
              />
            </div>
            <div className="flex items-center justify-center w-8 h-8 bg-white">
              <Image
                src="/assets/icons/svg/twitter.svg"
                alt="twitter icon"
                className="brightness-0"
                height={12.5}
                width={15.5}
              />
            </div>
            <div className="flex items-center justify-center w-8 h-8 bg-white">
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

export function BackgroundImageCard({ heading, text, body }) {
  return (
    <div className="relative w-full h-full bg-black">
      <Image
        layout="fill"
        src="/assets/images/personalization.jpg"
        alt="personalization"
        className="opacity-40 "
      />
      <div className="absolute bottom-0 flex flex-col justify-end w-full h-full p-10 space-y-4 text-white">
        <h2 className="text-2xl font-bold leading-6 uppercase ">{heading}</h2>
        <p className="">{text}</p>
        {body}
      </div>
    </div>
  );
}
