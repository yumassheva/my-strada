const cityStorageName = "CityList"
const cityLastStorageName = "LastCity";

const storage = {
  saveCityFavoriteList(cityMas) {
    localStorage.setItem(cityStorageName, JSON.stringify(Array.from(cityMas)));
  },
  getCityFavoriteList() {
    return JSON.parse(localStorage.getItem(cityStorageName));
  },
  saveLastChooseCity(cityMas) {
    localStorage.setItem(cityLastStorageName, JSON.stringify(Array.from(cityMas)));
  },
  getLastChooseCity() {
    return JSON.parse(localStorage.getItem(cityLastStorageName));
  },
};
const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "84cf734f7cfaeb12fcf0d22f41dfb0d6";
const kelvinToCelsius = 273.13;
const emptyValue = "";
export { storage, serverUrl, apiKey, kelvinToCelsius, emptyValue }