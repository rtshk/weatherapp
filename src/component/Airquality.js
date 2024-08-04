import React, { useEffect, useState } from 'react';
import airQualityData from './AqiMessage';

const Airquality = (props) => {
  const { cityName, longitude, latitude } = props;
  const [category, setCategory] = useState(null);
  const [AQI, setAQI] = useState(0);
  const [CO, setCO] = useState("");
  const [NO, setNO] = useState("");
  const [NO2, setNO2] = useState("");
  const [O3, setO3] = useState("");
  const [SO2, setSO2] = useState("");
  const [NH3, setNH3] = useState("");

  const fetchAirQuality = async () => {
    if (!longitude || !latitude) return; // Check if longitude and latitude are available
    let url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=b4497a8b1ebf1e766ee5d51e5b9d801e`;
    let data = await fetch(url);
    let parsedData = await data.json();
    let airQuality = parsedData.list[0].components;
    setAQI(parsedData.list[0].main.aqi);
    setCO(airQuality.co.toFixed(2));
    setNO(airQuality.no.toFixed(2));
    setNO2(airQuality.no2.toFixed(2));
    setO3(airQuality.o3.toFixed(2));
    setSO2(airQuality.so2.toFixed(2));
    setNH3(airQuality.nh3.toFixed(2));

    const foundCategory = airQualityData.find(data => data.rank === parsedData.list[0].main.aqi);
    setCategory(foundCategory);
  };

  useEffect(() => {
    fetchAirQuality();
  }, [longitude, latitude]);

  if (!category) {
    return <div className='h-full w-full flex items-center justify-center'>Loading...</div>; // Show loading state while category is not set
  }

  return (
    <>
      <div className='flex flex-col justify-around h-full pb-9'>
        <div className='TOP ml-9'>
          <p className='text-3xl'>{cityName}</p>
          <p className='mt-1'>Air quality index</p>
        </div>
        <div className='MIDDLE ml-9 mr-9'>
          <p className='text-3xl mt-1 mb-3'>{category.label}</p>
          <p className='text-1xl'>{category.message}</p>
        </div>
        <div className='BOTTOM grid grid-cols-2 grid-rows-3 h-[220px] text-center'>
          <div className='text-1xl'><p>CO</p><p>{CO}</p></div>
          <div className='text-1xl'><p>NO</p><p>{NO}</p></div>
          <div className='text-1xl'><p>NO2</p><p>{NO2}</p></div>
          <div className='text-1xl'><p>O3</p><p>{O3}</p></div>
          <div className='text-1xl'><p>SO2</p><p>{SO2}</p></div>
          <div className='text-1xl'><p>NH3</p><p>{NH3}</p></div>
        </div>
      </div>
    </>
  );
};

export default Airquality;
