import React from "react";

export default function NumberInput({ label, name, onChange, value = "" }) {
  return (
    <div className="flex items-center justify-start">
      <div className="w-20 lg:w-40  text-xs font-semibold">{label}</div>
      <input
        onChange={onChange}
        value={value}
        type="number"
        name={name}
        id={name}
        className="h-10 px-5 py-3 text-xs border max-w-[6rem] min-w-[5rem]"
      />
    </div>
  );
}
