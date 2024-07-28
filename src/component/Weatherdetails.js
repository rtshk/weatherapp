import React from 'react'

const Weatherdetails = () => {
  return (
    <>
      <div className='grid grid-cols-3 grid-rows-[15%_1fr_1fr] h-full text-center '>
        <div className='col-span-3 text-left ml-4 pt-1 text-1xl'>Air Conditions
        </div>
         <div className='text-2xl decoration-text'><p>Real Feel</p><p></p></div>
         <div className='text-2xl decoration-text'><p>Temp Max</p><p></p></div>
         <div className='text-2xl decoration-text'><p>Temp Min</p><p></p>
        </div>
         <div className='text-2xl decoration-text'><p>Pressure</p><p></p></div>
         <div className='text-2xl decoration-text'><p>Humidity</p><p></p></div>
         <div className='text-2xl decoration-text'><p>Visibility</p><p></p></div>
      </div>
    </>
  )
}

export default Weatherdetails