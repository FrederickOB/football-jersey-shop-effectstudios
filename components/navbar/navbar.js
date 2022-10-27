import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div className="flex w-screen h-8 ">
        <div className="flex items-center justify-center w-40 h-full bg-black/80">
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
        <div className="flex items-center justify-center w-full h-full text-center bg-black">
          <span className="text-white font-semibold text-[11px] leading-4 ml-[6px] mr-1 ">
            SALES BEGIN • FREE SHIPPING ON ALL ORDERS
          </span>
        </div>
        <div className="flex items-center justify-center h-full bg-green-600 w-52">
          <Image
            src="/assets/icons/svg/whatsapp.svg"
            alt="whatsapp icon"
            height={12}
            width={12}
          />
          <span className="text-white font-bold text-[11px] leading-4 ml-[6px] mr-1 ">
            Chat with us
          </span>
        </div>
      </div>
      <div className="w-full h-[88px]  flex">
        <div className="flex w-40 bg-yellow-300"></div>
        <div className="w-full">
          <div className="flex w-full border-b h-14">
            <div className="flex items-center justify-center w-48 border-r ">
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
            <div className="flex w-full py-2 pl-6 pr-10">
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
            <div className="flex border-l w-52">
              <div className="flex items-center justify-center w-1/2 border-r">
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
          <nav className="w-full h-8 ">
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
