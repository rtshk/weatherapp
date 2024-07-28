import React from "react";
import Input from "./component/Input";
import Weathercity from "./component/Weathercity";
import Hourlyweather from "./component/Hourlyweather";
import Weatherdetails from "./component/Weatherdetails";
import Airquality from "./component/Airquality";

export default function App() {
  return (
    <>
      <div className=" h-screen text-white gap-2 grid grid-cols-[7%_70%_1fr] grid-rows-[10%_1fr_1fr_1fr] bg-home-background font-sans">
        <div className="row-span-4 mt-2 mb-2 ml-2 bg-custom-dark-blue rounded-3xl"></div>
        <div className="mt-2 ">
          <Input />
        </div>
        <div className="rounded-3xl">
          <Weathercity />
        </div>
        <div className="bg-custom-dark-blue rounded-3xl">
          <Hourlyweather />
        </div>
        <div className="mb-2  bg-custom-dark-blue rounded-3xl">
          <Weatherdetails />
        </div>
        <div className="row-start-1 row-end-5 col-start-3 col-end-4 mt-2 mb-2 mr-2  bg-custom-dark-blue rounded-3xl">
          <Airquality />
        </div>
      </div>
    </>
  );
}
