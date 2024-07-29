import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const Hourlyweather = (props) => {

  const {latitude, longitude} = props
  const [hourly, setHourly] = useState([])
  const celcius = (kelvin) =>{
    return (kelvin - 273.15).toFixed(0)
  }

  const fetchHourlyWeather = async () => {
    if (!longitude || !latitude) return; // Check if longitude and latitude are available
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=b4497a8b1ebf1e766ee5d51e5b9d801e`
    let data = await fetch(url)
    let parsedData = await data.json()
    let finalData = parsedData.list.slice(0,6)
    console.log(finalData)
    setHourly(finalData)
  }

  useEffect(() => {
    fetchHourlyWeather()
    
  }, [latitude,longitude])
  
  
  return (
    <>
    <div className='grid grid-cols-6 grid-rows-[15%_1fr] h-full gap-3 pb-3'>
      
        <div className='col-span-6 pl-5 pt-1 bg-custom-dark-blue rounded-2xl'>Today's Forcast</div>
        {hourly.map((element) => {
          let time = element.dt_txt
          let hours = new Date(time).getHours()
          return (<div key = {element.dt} className='flex flex-col justify-around content-center p-3 text-center   bg-custom-dark-blue rounded-2xl'>
          <p className='' >{hours}:00</p>
          <img src="" alt="" />
          <p className = "text-2xl">{celcius(element.main.temp)}&deg;</p>
          </div>)

        })}
    </div>
    </>
  )
}

export default Hourlyweather