import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function ProductCard({
  product_name,
  price,
  discount_price,
  image,
  key,
  slug,
}) {
  const getDiscountPercentage = () => {
    const discountPercentage = (price / discount_price) * 100;
    return Math.round(discountPercentage * 10) / 10;
  };
  return (
    <Link href={`/products/${slug}`} className="cursor-pointer">
      <div key={key} className="w-60 h-[22rem] border cursor-pointer">
        <div className="relative w-60 h-60">
          <Image layout="fill" src={`${image}`} alt={`${product_name} large`} />
          {discount_price > 0 && (
            <div className="px-2 absolute bottom-4 left-4 flex py-1 font-semibold text-white text-[10px] bg-green-500">
              {`  Save ${getDiscountPercentage()} %`}
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between w-full p-4 h-[6.25rem]">
          <div>
            <p className="text-sm font-normal leading-[18px] text-neutral-700">
              {product_name}
            </p>
          </div>
          <div className="flex items-center w-full space-x-2">
            <p className="text-xl font-bold ">€{price}</p>
            {discount_price > 0 && (
              <s className="text-xs font-normal text-red-500">
                {discount_price}
              </s>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
