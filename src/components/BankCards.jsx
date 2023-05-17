import React from "react";
import Button from "./Button";

const BankCards = () => {
  return (
    <div id="conhecimentos" className="mx-4 text-center  p-4">
      <div className="flex justify-center">
        <div className="mr-8">
          <img className="h-36 w-80 object-cover" src="/javascript.jpg" />
        </div>
        <div className="mr-8">
          <img className="h-36 w-80 object-cover" src="/reactJS.png" />
        </div>
        <div className="mr-8">
          <img className="h-36 w-80 object-cover" src="/next.png" />
        </div>
        <div className="mr-8">
          <img className="h-36 w-80 object-cover" src="/typescript.png" />
        </div>
        <div>
          <img className="h-36 w-80 object-cover" src="/node.jpg" />
        </div>
      </div>
    </div>
  );
};

export default BankCards;
