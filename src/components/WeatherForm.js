import React from 'react'
import CitiesDisplay from './CitiesDisplay';
import { useContext } from 'react';
import { AppContext } from '../App';

export default function WeatherForm(props) {
    const {cityList} = useContext(AppContext);

    return (
        <div>
        <form onSubmit={props.updateWeather}>
            <div className="search-form">
                <input class="city-input" type="text" placeholder="Enter a city" onChange={props.changeCity} value={props.city}/>
                {cityList && <CitiesDisplay />}
            </div>
            <button class="weather-button" type="submit">Get Weather</button>
        </form>
        </div>
    )
}
