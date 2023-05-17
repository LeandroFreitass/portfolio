import React from "react";

const Headline = ({title}) => {
    return (
        <div className="flex gap-5 items-center justify-center">
            <div className="bg-black w-[100px] h-[2px]"></div>
            <h1 className="text-black uppercase text-2xl">{title}</h1>
            <div className="bg-black w-[100px] h-[2px]"></div>

        </div>
    )
}
export default Headline