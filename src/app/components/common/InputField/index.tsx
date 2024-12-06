import React from "react";

interface InputFieldProps {
  labelClass:string;
  className: string;
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  //   required: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  labelClass,
  className,
  label,
  type,
  name,
  value,
  onChange,
  //   required = false,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={name} className={`text-[16px] font-poppins text-black ${labelClass}`}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        // required={required}
        className={`bg-[#F2F8FB] rounded-[30px] relative block w-full px-3 py-2 border border-[#7ABCDB] placeholder-gray-500 sm:text-sm outline-none padding-[15px] min-h-[56px] ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
