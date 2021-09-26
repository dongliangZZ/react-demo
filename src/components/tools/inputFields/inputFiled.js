import React from "react";

export default function InputField({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  inputStyle
}) {
  <div className={inputStyle}>
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="inputField"
    />
  </div>
}