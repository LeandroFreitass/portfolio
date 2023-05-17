import React, { useState } from 'react';
import InputMask from 'react-input-mask';

const PhoneInput = ({ className, ...props }) => {
  const [mask, setMask] = useState("(99) 99999-9999");

  return (
    <InputMask
    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
      {...props}
      mask={mask}
      onBlur={e => {
        if (e.target.value.replace("_", "").length === 14) {
          setMask("(99) 9999-9999");
        }
      }}
      onFocus={e => {
        if (e.target.value.replace("_", "").length === 14) {
          setMask("(99) 99999-9999");
        }
      }}
    >
      {inputProps => <input {...inputProps} type="tel" />}
    </InputMask>
  );
};

export default PhoneInput;