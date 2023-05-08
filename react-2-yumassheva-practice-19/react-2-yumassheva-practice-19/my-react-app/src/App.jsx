// eslint-disable-next-line import/no-unresolved
import React, { useState, useEffect } from "react";
import { Context } from "./Context.js";
import "./App.css";
import Header from "./Header.jsx";
import List from "./List.jsx";
import storage from "./storage.js";
import {
  calcMilisecToHoursMinuts,
  calckelvinToCelsius,
} from "./helpFunction.js";
import Tabs from "./Tabs.jsx";

function App() {
  const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
  const apiKey = "84cf734f7cfaeb12fcf0d22f41dfb0d6";

  const [cites, setList] = useState(storage.getCityFavoriteList() || []);
  const [chooseLastCity, setLastCity] = useState(false);

  let [temperature, setTemp] = useState("");
  let [city, setCity] = useState("");
  let [icon, setIcon] = useState("");
  let [feels, setFeelsLike] = useState("");
  let [sunrise, setSunrise] = useState("");
  let [sunset, setSunset] = useState("");

  const addCity = (city) => {
    setList([...cites, city]);
    try {
      storage.saveCityFavoriteList([...cites, city]);
    }
    catch (error) {
      console.error(error)
    }
  };
  const deleteCity = (id) => {
    setList(cites.filter((item) => item.id !== id));
    try {
      storage.saveCityFavoriteList(cites.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error)
    }
  };

  async function requestWeather(inputValue) {
    const url = `${serverUrl}?q=${inputValue}&appid=${apiKey}`;
    const response = await fetch(url);
    const commits = await response.json();
    setTemp(calckelvinToCelsius(commits.main.temp));
    setCity(commits.name);
    setIcon(`http://openweathermap.org/img/wn/${commits.weather[0].icon}@2x.png`);
    setFeelsLike( `Feels like:${calckelvinToCelsius(commits.main.feels_like)}`);
    setSunrise(`Sunrise: ${calcMilisecToHoursMinuts(commits.sys.sunrise)}`);
    setSunset(`Sunset:${calcMilisecToHoursMinuts(commits.sys.sunset)}`);
  }
  useEffect(() => {
    if (chooseLastCity === false) {
      requestWeather(storage.getLastChooseCity());
      setLastCity(!chooseLastCity)
    }
  });
  return (
    <Context.Provider value={[icon, setIcon, temperature, setTemp, city, setCity, deleteCity, feels, setFeelsLike, sunrise, setSunrise, sunset, setSunset]}>
      <div>
        <Header
          requestWeather={requestWeather}
        />
        <div className="flex">
          <div className="now">
            <Tabs addCity={addCity}/>
          </div> 
          <List
            requestWeather={requestWeather}
            cites={cites}
          />
        </div>
      </div>
    </Context.Provider>
  );
}
export default App;
