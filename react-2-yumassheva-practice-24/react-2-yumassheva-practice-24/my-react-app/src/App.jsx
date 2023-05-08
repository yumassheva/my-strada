import "./App.css"
import Header from "./components/Header.jsx"
import List from "./components/List.jsx"
import { storage, serverUrl, apiKey, kelvinToCelsius } from "./LSandConst"
import NowList from "./components/NowList.jsx"
import { useSelector, useDispatch } from "react-redux";
import { setList, setTemp, setCity, setIcon, setLastCity } from "./store/action"
import { useEffect} from "react"

function App() {
  const dispatch = useDispatch();
  const cites = useSelector(state => state.cites);
  const chooseLastCity = useSelector(state => state.chooseLastCity);
  let temp = useSelector(state => state.temp);
  let city = useSelector(state => state.city);
  let icon = useSelector(state => state.icon);

  const addCity = (city) => {
    try {
      dispatch(setList([...cites, city]))
      storage.saveCityFavoriteList([...cites, city])
    } catch (error) {
      console.error(error)
    }
  }
  const deleteCity = (id) => {
    try {
      dispatch(setList(cites.filter((item) => item.id !== id)))
      storage.saveCityFavoriteList(cites.filter((item) => item.id !== id))
    }
    catch (error) {
      console.error(error)
    }
  }
  async function requestWeather(inputValue) {
    const url = `${serverUrl}?q=${inputValue}&appid=${apiKey}`;
    const response = await fetch(url);
    const commits = await response.json();
    dispatch(setTemp(temp = `${Math.round((commits.main.temp) - kelvinToCelsius)}°C `))
    dispatch(setCity(city = commits.name))
    dispatch(setIcon(icon = `http://openweathermap.org/img/wn/${commits.weather[0].icon}@2x.png`))
  }
 
  useEffect(() => {
    if (chooseLastCity === false) {
      requestWeather(storage.getLastChooseCity());
      dispatch(setLastCity(!chooseLastCity))
    }
  });
  return (
    <div>
      <Header
        requestWeather={requestWeather}
      />
      <div className='flex'>
        <NowList
          icon={icon}
          addCity={addCity}
          task={city}
          temperature={temp}
        />
        <List
          requestWeather={requestWeather}
          cites={cites}
          deleteCity={deleteCity}
        />
      </div>
    </div>
  )
}
export default App