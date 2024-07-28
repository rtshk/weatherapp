import React from 'react'

const Airquality = () => {
  return (
    <>
    <div className='flex flex-col justify-around	h-full pb-9'>
      <div className='TOP ml-9'>
          <p className='text-3xl'>Chandigarh</p>
          <p className='mt-1'>Air quality index</p>

      </div>
      <div className='MIDDLE text-center'>
          <p className='text-7xl'>540</p>
          <p className='mt-2'>Unhealthy</p>
      </div>
      <div className='BOTTOM ml-9'>
          <p className='text-1xl'>Air quality</p>
          <p className='text-3xl mt-1 mb-3'>Unhealthy</p>
          <p className='text-1xl'>Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.</p>

      </div>
    </div>
    </>
  )
}

export default Airquality