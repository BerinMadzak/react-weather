import React from 'react'
import { AppContext } from '../App'
import { useContext } from 'react'

export default function CitiesDisplay() {
    const {cityList, selectCity} = useContext(AppContext);

    return (
        <div class="cities-display">
            {cityList.data.map((city)=>{
                return <button class="city-button" onClick={() => selectCity(city.city)}>{city.city}, {city.countryCode}</button>
            })}
        </div>
    )
}
