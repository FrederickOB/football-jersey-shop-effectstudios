import Image from "next/image";
import React from "react";

export default function SelectInput({
  label,
  name,
  data,
  option_label,
  option_value,
  value,
  placeholder,
  hasButton = false,
  buttonText,
  onChange,
}) {
  return (
    <div className="flex items-center justify-start w-full">
      <div className="w-20 lg:w-40  text-[12px] font-semibold">{label}</div>
      <div className="flex w-full space-x-2">
        <div className="relative flex h-10 w-full items-center px-5 py-3 text-xs border">
          <select
            name={name}
            id={name}
            className="h-full w-full appearance-none"
            value={value}
            onChange={onChange}
            required
          >
            <option value="" disabled selected hidden>
              {placeholder}
            </option>
            {data.map((option) => (
              <option key={option.id} value={option[option_value]}>
                {option[option_label]}
              </option>
            ))}
          </select>
          <div className="absolute z-10 right-5">
            <Image
              src="/assets/icons/svg/down.svg"
              alt="down"
              height={5}
              width={8}
            />
          </div>
        </div>
        {hasButton ? (
          <button className="bg-neutral-100 font-semibold text-xs w-40 border">
            {buttonText}
          </button>
        ) : null}
      </div>
    </div>
  );
}
