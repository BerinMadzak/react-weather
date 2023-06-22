import { useState } from 'react';
import './App.css';
import WeatherForm from './modules/WeatherForm';

function App() {
  const [city, setCity] = useState("");

  const changeCity = (e) => {
    setCity(e.target.value);
  }

  const updateWeather = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
     <h1>Weather Forecast</h1>
     <WeatherForm changeCity={changeCity} updateWeather={updateWeather}/>
     <h1>{city}</h1>
    </div>
  );
}

export default App;
