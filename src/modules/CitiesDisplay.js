import React from 'react'

export default function CitiesDisplay(props) {
    return (
        <div>
            {props.data.map((city)=>{
                return <button onClick={() => props.selectCity(city.city)}>{city.city}, {city.countryCode}</button>
            })}
        </div>
    )
}

//cityList.data.map((city) => {
//    return <h1>{city.city}</h1>
// })