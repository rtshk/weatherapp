import React from 'react'

const Weatherdetails = (props) => {
  const {feelsLike, tempMax, tempMin, pressure, humidity, visibility} = props
  return (
    <>
      <div className='grid grid-cols-3 grid-rows-[15%_1fr_1fr] h-full text-center '>
        <div className='col-span-3 text-left ml-4 pt-1 text-1xl'>Air Conditions
        </div>
         <div className='text-1xl decoration-text'><p>Feels Like</p><p className='text-3xl'>{feelsLike}&deg;</p></div>
         <div className='text-1xl decoration-text'><p>Temp Max</p><p className='text-3xl'>{tempMax}&deg;</p></div>
         <div className='text-1xl decoration-text'><p>Temp Min</p><p className='text-3xl'>{tempMin}&deg;</p></div>
         <div className='text-1xl decoration-text'><p>Pressure</p><p className='text-3xl'>{pressure}hPa</p></div>
         <div className='text-1xl decoration-text'><p>Humidity</p><p className='text-3xl'>{humidity}%</p></div>
         <div className='text-1xl decoration-text'><p>Visibility</p><p className='text-3xl'>{visibility/1000}km</p></div>
      </div>
    </>
  )
}

export default Weatherdetails