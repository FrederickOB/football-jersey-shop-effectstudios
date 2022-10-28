import React from "react";

export default function NumberInput({ label, name }) {
  return (
    <div className="flex items-center justify-start">
      <div className="w-32 text-xs font-semibold">{label}</div>
      <input
        type="number"
        name={name}
        id={name}
        
        className="h-10 px-5 py-3 text-xs border max-w-fit"
      />
    </div>
  );
}
