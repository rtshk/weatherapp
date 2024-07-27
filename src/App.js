import React from "react";
import Input from "./component/Input";
import Item3 from "./component/Item3";

export default function App() {
  return (
    <>
      <div className=" h-screen text-white gap-2 grid grid-cols-[7%_70%_1fr] grid-rows-[10%_1fr_1fr_1fr] bg-home-background font-sans">
        <div className="   row-span-4 mt-2 mb-2 ml-2 bg-custom-dark-blue rounded-3xl"></div>
        <div className="   mt-2 ">
          <Input />
        </div>
        <div className="rounded-3xl"><Item3/></div>
        <div className="bg-custom-dark-blue rounded-3xl"> 4</div>
        <div className="mb-2  bg-custom-dark-blue rounded-3xl"> 5</div>
        <div className="row-start-1 row-end-5 col-start-3 col-end-4 mt-2 mb-2 mr-2  bg-custom-dark-blue rounded-3xl">
          {" "}
          6
        </div>
      </div>
    </>
  );
}
