import React from 'react'

export default function WeatherForm(props) {
    return (
        <div>
        <form onSubmit={props.updateWeather}>
            <input type="text" placeholder="Enter a city" onChange={props.changeCity}/>
            <button type="submit">Get Weather</button>
        </form>
        </div>
    )
}
