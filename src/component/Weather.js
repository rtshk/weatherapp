import React, { useState } from "react";
import { useEffect } from "react";
import Input from "./Input";
import Weathercity from "./Weathercity";
import Hourlyweather from "./Hourlyweather";
import Weatherdetails from "./Weatherdetails";
import Airquality from "./Airquality";

export default function Weather(props) {

    const [feelsLike, setFeelsLike] = useState("")
    const [temp, setTemp] = useState("")
    const [tempMax, setTempMax] = useState("")
    const [tempMin, setTempMin] = useState("")
    const [humidity, setHumidity] = useState("")
    const [pressure, setPressure] = useState("")
    const [visibility, setVisibility] = useState("")
    
    const {cityName, longitude, latitude} = props
    const celcius = (kelvin) =>{
      return (kelvin - 273.15).toFixed(0)
    }
    
    const fetchCurrentWeather = async () => {
      if (!longitude || !latitude) return; // Check if longitude and latitude are available
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b4497a8b1ebf1e766ee5d51e5b9d801e`
        let data = await fetch(url)
        let parsedData = await data.json()
        let main = parsedData.main      
        setTemp(main.temp)  
        setFeelsLike(main.feels_like)
        setTempMax(main.temp_max)
        setTempMin(main.temp_min)
        setHumidity(main.humidity)
        setPressure(main.pressure)
        setVisibility(parsedData.visibility)
        }
       useEffect(() => {
        fetchCurrentWeather()
         }
       , [longitude, latitude])
       
  return (
    <>
      <div className=" h-screen text-white gap-5 grid grid-cols-[7%_70%_1fr] grid-rows-[10%_1fr_1fr_1fr] bg-home-background font-sans">
        <div className="row-span-4 mt-4 mb-4 ml-4 bg-custom-dark-blue rounded-3xl"></div>
        <div className="mt-4">
          <Input  />
        </div>
        <div className="rounded-3xl">
          <Weathercity cityName = {cityName} temp = {celcius(temp)} />
        </div>
        <div className="">
          <Hourlyweather longitude = {longitude} latitude = {latitude} />
        </div>
        <div className="mb-4  bg-custom-dark-blue rounded-3xl">
          <Weatherdetails feelsLike = {celcius(feelsLike)} tempMax = {celcius(tempMax)} tempMin = {celcius(tempMin)} humidity = {humidity} pressure = {pressure} visibility = {visibility} />
        </div>
        <div className="row-start-1 row-end-5 col-start-3 col-end-4 mt-4 mb-4 mr-4  bg-custom-dark-blue rounded-3xl">
          <Airquality cityName = {cityName} longitude = {longitude} latitude = {latitude} />
        </div>
      </div>
    </>
  );
    }
  