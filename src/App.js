import { useState, createContext} from 'react';
import './App.css';
import Axios from "axios";
import { options } from './API/cities';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';

export const AppContext = createContext();

function App() {
  const API_KEY = "aaf74755564092f3b32a667ec14a4493";

  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [cityList, setCityList] = useState(null);

  const loadCities = () => {
    Axios.get(`${options.url}?minPopulation=50000&namePrefix=${city}&types=CITY`, options).then((res)=>{
      setCityList(res.data);
    }).catch((error)=>{
      console.error(error);
    });
  }

  const selectCity = (city) => {
    setCity(city);
    setCityList(null);
    updateWeatherManual(city);
  }

  const changeCity = (e) => {
    setCity(e.target.value);
    loadCities();
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

  const updateWeatherManual = (cityNew) => {
    if(cityNew === "") return;

    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityNew}&appid=${API_KEY}&units=metric`)
        .then((res)=>{
          setData(res.data);
        }).catch((error)=>{
          console.error(error);
        });
  }

  return (
    <div className="App">
      <AppContext.Provider value={{cityList, selectCity}}>
      <h1 className='text-color'>Weather Forecast</h1>
      <WeatherForm changeCity={changeCity} updateWeather={updateWeather} city={city}/>
      {data && <WeatherDisplay data={data}/>}
      </AppContext.Provider>
    </div>
  );
}

export default App;
