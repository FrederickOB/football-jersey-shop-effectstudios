import React from "react";

export default function TextInput({
  label,
  name,
  placeholder,
  required = false,
}) {
  return (
    <div className="flex items-center justify-start">
      <div className="w-40 text-xs font-semibold">{label}</div>
      <input
        type="text"
        name={name}
        id={name}
        required={required}
        className="w-full h-10 px-5 py-3 text-xs border"
        placeholder={placeholder}
      />
    </div>
  );
}