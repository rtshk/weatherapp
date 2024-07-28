import React from 'react'

const Hourlyweather = () => {
  return (
    <>
    <div className='grid grid-cols-6 grid-rows-[15%_1fr] h-full pb-3'>
      <div className='col-span-6 ml-3 mt-2'>Today's Forcast</div>
      <div className='flex flex-col justify-around content-center p-3 text-center '>
        <p className=''>12:00</p>
        <img src="" alt="" />
        <p className = "text-2xl">32&deg;</p>
        </div>
        <div className='flex flex-col justify-around content-center p-3 text-center border-l-2 border-white'>
        <p className=''>12:00</p>
        <img src="" alt="" />
        <p className = "text-2xl">32&deg;</p>
        </div>
        <div className='flex flex-col justify-around content-center p-3 text-center border-l-2 border-white'>
        <p className=''>12:00</p>
        <img src="" alt="" />
        <p className = "text-2xl">32&deg;</p>
        </div>
        <div className='flex flex-col justify-around content-center p-3 text-center border-l-2 border-white'>
        <p className=''>12:00</p>
        <img src="" alt="" />
        <p className = "text-2xl">32&deg;</p>
        </div>
        <div className='flex flex-col justify-around content-center p-3 text-center border-l-2 border-white'>
        <p className=''>12:00</p>
        <img src="" alt="" />
        <p className = "text-2xl">32&deg;</p>
        </div>
        <div className='flex flex-col justify-around content-center p-3 text-center border-l-2 border-white'>
        <p className=''>12:00</p>
        <img src="" alt="" />
        <p className = "text-2xl">32&deg;</p>
        </div>
        
      
    </div>
    </>
  )
}

export default Hourlyweather