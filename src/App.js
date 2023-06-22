import { useState } from 'react';
import './App.css';
import WeatherForm from './modules/WeatherForm';
import Axios from "axios";
import WeatherDisplay from './modules/WeatherDisplay';

function App() {
  const API_KEY = "aaf74755564092f3b32a667ec14a4493";

  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const changeCity = (e) => {
    setCity(e.target.value);
  }

  const updateWeather = (e) => {
    e.preventDefault();

    if(city === "") return;

    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then((res)=>{
          setData(res.data);
        }).catch((error)=>{
          console.error(error);
        });
  }

  return (
    <div className="App">
     <h1>Weather Forecast</h1>
     <WeatherForm changeCity={changeCity} updateWeather={updateWeather}/>
     {data && <WeatherDisplay data={data}/>}
    </div>
  );
}

export default App;
