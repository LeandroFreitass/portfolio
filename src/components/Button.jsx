import React from "react";

const Button = ({text}) => {
    return (
        <button className="inline-block bg-white hover:bg-gray-700 text-black font-bold py-2 px-2 border border-white mx-[5px] rounded-full w-[150px] text-sm">
        {text}
    </button>
    )
}

export default Button