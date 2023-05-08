const cityStorageName = "CityList";
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
export default storage;
