import Link from "next/link";
import React from "react";


const Card = () => {
  return (
    <div  class="max-w-[300px] rounded overflow-hidden group hover:scale-105 hover:shadow-gray-600 hover:shadow-md  duration-300">
      <div>
        <img
          class="w-[80px] mx-[100px]"
          src={image}
          alt="Sunset in the mountains"
        />
      </div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl text-center mb-2">{title}</div>
        <h3 className="text-center">{titleSub}</h3>
      </div>
      <div class="px-6 pt-4 pb-2 ">
        <Link href="/credtCart">
          <button class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 mx-[60px] rounded">
            Saiba mais
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Card;
