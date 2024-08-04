import React from 'react'

export default function Weathercity(props) {
  const {cityName, temp } = props
  return (
    <>
    <div>
        <div className='m-10'>
            <p className='text-5xl'>{cityName}</p>
            {/* <p className='mt-2'>feels like 35&deg;</p> */}
        </div>
        <p className='m-10 text-6xl'>{temp}&deg;</p>
    </div>
    </>
  )
}
