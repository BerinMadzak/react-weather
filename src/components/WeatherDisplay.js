import React from 'react'

export default function WeatherDisplay(props) {
    return (
        <div className='weather-display'>
            <img className='weather-icon' src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png`} />
            <h2 className='city-name text-color'>{props.data.name}</h2>
            <h2 className='city-weather text-color'>{props.data.weather[0].main}</h2>
            <h3 className='city-temperature text-color'>Temperature:<br></br> {props.data.main.temp} °C</h3>
            <h3 className='city-feels-like text-color'>Feels Like:<br></br> {props.data.main.feels_like} °C</h3>
            <h3 className='city-humidity text-color'>Humidity:<br></br> {props.data.main.humidity} %</h3>
            <h3 className='city-wind text-color'>Wind:<br></br> {props.data.wind.speed} m/s</h3>
        </div>
    )
}
