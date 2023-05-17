import Link from "next/link";
import React from "react";

const ButtonLink = ({ title,href }) => {
  return (
  
      <div class="px-6 pt-4 pb-2 ">
        
          <button class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 mx-[60px] rounded">
           {title}
          </button>
       
      </div>

  );
};
export default ButtonLink;
