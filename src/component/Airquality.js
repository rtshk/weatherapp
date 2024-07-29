import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Airquality = (props) => {


  const [CO, setCO] = useState("")
  const [NO, setNO] = useState("")
  const [NO2, setNO2] = useState("")
  const [O3, setO3] = useState("")
  const [SO2, setSO2] = useState("")
  const [NH3, setNH3] = useState("")
  useEffect(() => {


    let parsedData =                    
    {
        "coord":[
          50,
          50
        ],
        "list":[
          {
            "dt":1605182400,
            "main":{
              "aqi":1
            },
            "components":{
              "co":201.94053649902344,
              "no":0.01877197064459324,
              "no2":0.7711350917816162,
              "o3":68.66455078125,
              "so2":0.6407499313354492,
              "pm2_5":0.5,
              "pm10":0.540438711643219,
              "nh3":0.12369127571582794
            }
          }
        ]
      }
      let data = parsedData.list[0].components
       setCO(data.co)                 
       setNO(data.no)                 
       setNO2(data.no2)                 
       setO3(data.o3)                 
       setSO2(data.so2)                 
       setNH3(data.nh3)                 
                      
    
  
 
    }
  , [])

  return (
    <>
    <div className='flex flex-col justify-around	h-full pb-9'>
      <div className='TOP ml-9'>
          <p className='text-3xl'>{props.cityName}</p>
          <p className='mt-1'>Air quality index</p>

      </div>
      <div className='MIDDLE ml-9'>
        <p className='text-3xl mt-1 mb-3'>Unhealthy</p>
        <p className='text-1xl'>Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.</p>
      </div>
      <div className='BOTTOM grid grid-cols-2 grid-rows-3 h-[220px] text-center'>
        <div className='text-1xl'><p>CO</p><p>{parseFloat(CO).toFixed(2)}</p></div>
        <div className='text-1xl'><p>NO</p><p>{parseFloat(NO).toFixed(2)}</p></div>
        <div className='text-1xl'><p>NO2</p><p>{parseFloat(NO2).toFixed(2)}</p></div>
        <div className='text-1xl'><p>O3</p><p>{parseFloat(O3).toFixed(2)}</p></div>
        <div className='text-1xl'><p>SO2</p><p>{parseFloat(SO2).toFixed(2)}</p></div>
        <div className='text-1xl'><p>NH3</p><p>{parseFloat(NH3).toFixed(2)}</p></div>
      </div>  
    </div>
    </>
  )
}

export default Airquality