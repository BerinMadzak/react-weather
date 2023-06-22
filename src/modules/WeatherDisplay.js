import React from 'react'

export default function WeatherDisplay(props) {
    return (
        <div>
            <h2>Weather: {props.data.weather[0].main}</h2>
            <h3>Temperature: {props.data.main.temp} °C</h3>
            <h3>Feels Like: {props.data.main.feels_like} °C</h3>
            <h3>Humidity: {props.data.main.humidity}</h3>
            <h3>Wind: {props.data.wind.speed} m/s</h3>
        </div>
    )
}
