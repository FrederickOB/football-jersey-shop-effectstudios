import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-100">
      <div className="grid w-full grid-cols-1 gap-8 px-4 py-10 lg:p-20 lg:grid-cols-4">
        <div>
          <h3 className="text-base font-bold leading-8 ">Main Menu</h3>
          <nav className="mt-6 ">
            <ul className="space-y-4">
              <li className="text-sm">Home</li>
              <li className="text-sm">T-shirts</li>
              <li className="text-sm">NBA</li>
              <li className="text-sm">Tracksuits</li>
              <li className="text-sm">Products Delivery • 1 – 2 days</li>
              <li className="text-sm">Contact</li>
              <li className="text-sm">Reviews</li>
            </ul>
          </nav>
        </div>
        <div>
          <h3 className="text-base font-bold leading-8 ">Secondary Menu</h3>
          <nav className="mt-6 ">
            <ul className="space-y-4">
              <li className="text-sm">Search</li>
              <li className="text-sm">Privacy Policy</li>
              <li className="text-sm">Shipping Policy</li>
              <li className="text-sm">Returns Policy</li>
              <li className="text-sm">Terms of Service</li>
            </ul>
          </nav>
        </div>
        <div>
          <h3 className="text-base font-bold leading-8 ">Subscribe</h3>
          <div className="mt-6 space-y-6">
            <p className="text-sm w-60">
              Subscribe to our mailing list to receive the latest news.
            </p>

            <div className="flex h-10 ">
              <input
                type="email"
                name="email"
                id="email"
                className="px-5 text-xs w-60"
                placeholder="Email Address"
              />
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-300">
                <Image
                  src="/assets/icons/svg/paper-plane.svg"
                  alt="paper plane icon"
                  height={12}
                  width={12}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-base font-bold leading-8 ">Follow Us</h3>
          <div className="flex mt-6 space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-black">
              <Image
                src="/assets/icons/svg/facebook-f.svg"
                alt="facebook icon"
                height={17.5}
                width={8.2}
              />
            </div>
            <div className="flex items-center justify-center w-8 h-8 bg-black">
              <Image
                src="/assets/icons/svg/twitter.svg"
                alt="twitter icon"
                height={12.5}
                width={15.5}
              />
            </div>
            <div className="flex items-center justify-center w-8 h-8 bg-black">
              <Image
                src="/assets/icons/svg/instagram.svg"
                alt="instagram icon"
                height={17}
                width={17}
              />
            </div>
          </div>
        </div>
        <div className="relative w-full h-10 lg:hidden">
          <Image
            layout="fill"
            src="/assets/images/payment-partners.png"
            alt="payment-partners"
          />
        </div>
      </div>

      <div className="flex justify-start px-4 py-5 border-t lg:px-20 lg:items-center lg:justify-between">
        <div className="text-xs text-left">{`© ${new Date().getFullYear()} Jambulani • All rights reserved`}</div>
        <div className="hidden lg:flex relative w-[22rem] h-10">
          <Image
            layout="fill"
            src="/assets/images/payment-partners.png"
            alt="payment-partners"
          />
        </div>
      </div>
    </footer>
  );
}
