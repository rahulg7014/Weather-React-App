import React, { useState } from 'react'

export default function Weather() {

  const [cityName, setCityName] = useState('jaipur')
  const [weather, setWeatcher] = useState({})
  const handleChange=(e)=>{
    setCityName(e.target.value)
  }
  const handleSearch=()=>{
    const apiKey = "717fd57028e3bdb8a205a67f7daf3d74"
    if(cityName){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&unit=metric`)
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{
        setWeatcher(data)
        console.log(data)
      }).catch((error)=>{
        console.log("error occured : ",error)
      })
    }
  }

  return (
    <div className='bg-image bg-cover bg-no-repeat h-screen flex justify-center items-center'>
      <div className='w-3/5 h-4/5 bg-gradient-to-r from-slate-700 to-slate-500 rounded-lg flex'>
      {/* Left Side */}
      {weather && 
        <div className='bg-left w-1/2 h-full bg-cover rounded-l-lg relative'>
          <div className='flex justify-end'>
            <p className='text-2xl text-black font-bold mt-2 me-2'>
            {weather.name && weather.name} {weather.name && weather.sys.country}
            </p>
          </div>
          <div className='flex justify-between items-end m-3'>
            <div className=' absolute bottom-1 ms-2'>
              <p className='text-white font-bold text-2xl'>{weather.coord && weather.coord.lat}</p>
              <p className='text-white font-bold text-2xl'>{weather.coord && weather.coord.lon}</p>
            </div>
            <p className='text-white font-bold text-2xl me-2 absolute bottom-1 right-1'>{weather.main && weather.main.temp}</p>
          </div>
        </div>
      }
        
        {/* Right Side */}
        <div className='w-1/2'>
          <div> 
            <p className='mt-20'>
              <input type='text' placeholder='Enter City' className='w-3/4 bg-transparent text-2xl pl-3'value={cityName} onChange={handleChange}/>
              <button className='w-1/4 font-bold text-2xl' onClick={handleSearch}>Search</button>
            </p>
          </div>
          <div className='text-center mt-4 font-bold text-2xl text-gray-300'>
            <p>
            {weather.name && weather.name} {weather.name && weather.sys.country}
            </p>
            <p>
              {weather.weather && weather.weather[0].main}
            </p>
          </div>
          <div className='mt-10'>
            <div className='flex justify-around mt-10 text-2xl font-semibold border-b border-gray-400 m-4 p-3'>
              <p>Visibility</p>
              <p>{weather.visibility/1000}km</p>
            </div>
            <div className='flex justify-around mt-10 text-2xl font-semibold border-b border-gray-400 m-4 p-3'>
              <p>Wind Speed</p>
              <p>{weather.wind && weather.wind.speed}km/h</p>
            </div>
            <div className='flex justify-around mt-10 text-2xl font-semibold border-b border-gray-400 m-4 p-3'>
              <p>Temp</p>
              <p>{weather.main && weather.main.temp}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}