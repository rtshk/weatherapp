import React from "react";
import Weather from "./component/Weather";
import { useState } from "react";
import { useEffect } from "react";
// let cityName = "chandigarh"

export default function App() {

  const [longitude, setLongitude] = useState("")
  const [latitude, setLatitude] = useState("")
  const [cityName, setCityName] = useState("")
  
    
    const fetchWeatherCoordinates = async () => {
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=ambala&limit=1&appid=b4497a8b1ebf1e766ee5d51e5b9d801e`
        let data = await fetch(url)
        let parsedData = await data.json()
        setLongitude(parsedData[0].lon)
        setLatitude(parsedData[0].lat)
        setCityName(parsedData[0].name)
       
    }
      

      useEffect(() => {
         fetchWeatherCoordinates()
           }
        , [])
  

  return (
    <>
      <Weather cityName = {cityName} latitude = {latitude} longitude = {longitude}/>
    </>
  );
}
