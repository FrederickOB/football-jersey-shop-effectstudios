import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="">
      <div className="relative w-full h-8">
        <div className="absolute top-0 left-0 flex items-center justify-center w-20 h-full lg:w-40 bg-white/10">
          <Image
            src="/assets/icons/svg/globe.svg"
            alt="globe icon"
            height={12}
            width={12}
          />
          <span className="text-white font-semibold text-[11px] ml-[6px] mr-1">
            EN
          </span>
          <Image
            src="/assets/icons/svg/down.svg"
            alt="down white"
            className="invert"
            height={5}
            width={8}
          />
        </div>
        <div className="flex items-center justify-center w-full h-full pl-24 text-center bg-black">
          <p className="text-white font-semibold text-[11px] leading-4 ml-[6px] mr-1 truncate  ">
            SALES BEGIN • FREE SHIPPING ON ALL ORDERS
          </p>
        </div>
        <div className="absolute top-0 right-0 flex items-center justify-center w-24 h-full bg-green-600 lg:w-52">
          <Image
            src="/assets/icons/svg/whatsapp.svg"
            alt="whatsapp icon"
            height={12}
            width={12}
          />
          <span className="text-white font-bold text-[11px] leading-4  ml-1 hidden lg:block">
            Chat with us
          </span>
          <span className="text-white font-bold text-[11px] leading-4  ml-1 block lg:hidden">
            Chat
          </span>
        </div>
      </div>
      <div className="w-full lg:h-[88px]  flex">
        <div className="hidden w-40 bg-yellow-300 lg:flex"></div>
        <div className="w-full">
          <div className="flex w-full border-b h-14">
            <div className="items-center justify-center hidden w-48 border-r lg:flex">
              <span className=" font-semibold text-xs leading-4 ml-[6px] mr-1 ">
                All Categories
              </span>
              <Image
                className="ml-1"
                src="/assets/icons/svg/down.svg"
                alt="down"
                height={5}
                width={8}
              />
            </div>
            <div className="hidden w-full py-2 pl-6 pr-10 lg:flex">
              <input
                type="text"
                name="search"
                id="search"
                className="w-full text-base font-normal leading-6 "
                placeholder="What are you looking for ?"
              />
              <button className="flex">
                <div className="flex items-center justify-center w-20 h-10 text-xs bg-yellow-300">
                  Search
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-black">
                  <Image
                    src="/assets/icons/svg/search.svg"
                    alt="shopping cart"
                    height={14}
                    width={13.67}
                  />
                </div>
              </button>
            </div>
            <div className="flex justify-between w-full lg:w-52 lg:justify-end">
              <div className="flex w-24 lg:border-l lg:w-52 lg:hidden">
                <div className="flex items-center justify-center w-1/2 lg:border-r">
                  <Image
                    src="/assets/icons/svg/menu.svg"
                    alt="menu"
                    height={20}
                    width={20}
                  />
                </div>
                <div className="flex items-center justify-center w-1/2">
                  <Image
                    src="/assets/icons/svg/search.svg"
                    alt="search"
                    height={20}
                    width={20}
                    className="brightness-0"
                  />
                </div>
              </div>
              <div className="flex w-24 lg:border-l lg:w-52">
                <div className="flex items-center justify-center w-1/2 lg:border-r">
                  <Image
                    src="/assets/icons/svg/shopping-cart.svg"
                    alt="shopping cart"
                    height={20}
                    width={20}
                  />
                </div>
                <div className="flex items-center justify-center w-1/2">
                  <Image
                    src="/assets/icons/svg/user.svg"
                    alt="user icon"
                    height={20}
                    width={20}
                  />
                  <Image
                    className="ml-2"
                    src="/assets/icons/svg/down.svg"
                    alt="down"
                    height={5}
                    width={8}
                  />
                </div>
              </div>
            </div>
          </div>
          <nav className="hidden w-full h-8 lg:block ">
            <ul className="flex items-center h-full text-xs font-bold space-x-14 px-7">
              <li>Home</li>
              <li>T-Shirt</li>
              <li>NBA</li>
              <li>Tracksuits</li>
              <li>Products Delivery • 1 – 2 days</li>
              <li>Contact</li>
              <li>Reviews</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
