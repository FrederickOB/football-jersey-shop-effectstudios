import React from "react";

export default function TextInput({
  label,
  name,
  placeholder,
  required = false,
  onChange,
  value = "",
}) {
  return (
    <div className="flex items-center justify-start">
      <div className="w-20 lg:w-40  text-xs font-semibold">{label}</div>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full h-10 px-5 py-3 text-xs border"
        placeholder={placeholder}
      />
    </div>
  );
}
