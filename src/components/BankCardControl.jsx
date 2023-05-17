import React from "react";
import BankCards from "./BankCards";
import Doubts from "./Doubts";

const BankCardControl = () => {
  return (
    <>
      <div >
        <Doubts title="CONHECIMENTOS" />
      </div>

      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <BankCards />
      </div>
    </>
  );
};

export default BankCardControl;
