import React from "react";

export default function Input() {
  return (
    <>
      <div className="flex items-center justify-center h-full w-full">
        <input type="text" placeholder="Search for City" className="p-6 w-[95%] h-[80%] bg-custom-dark-blue text-white rounded-3xl outline-none"
        ></input>
      </div>
    </>
  );
}
