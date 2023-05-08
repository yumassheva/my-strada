import { storage } from "../LSandConst";
import { emptyValue } from "../LSandConst";
const ACTION_1 = "ACTION_1";
const ACTION_2 = "ACTION_2";
const ACTION_3 = "ACTION_3";
const ACTION_4 = "ACTION_4";
const ACTION_5 = "ACTION_5";

const initialState = {
  cites: storage.getCityFavoriteList() || [],
  temp: emptyValue,
  city: emptyValue,
  icon: emptyValue,
  chooseLastCity: false
};

function setList(cites) {
  return {
    type: ACTION_1,
    value: cites 
  };
}
function setTemp(temp) {
  return {
    type: ACTION_2,
    value: temp
  };
}
function setCity(city) {
  return {
    type: ACTION_3,
    value: city
  };
}
function setIcon(icon) {
  return {
    type: ACTION_4,
    value: icon
  };
}
function setLastCity(chooseLastCity) {
  return {
    type: ACTION_5,
    value: chooseLastCity
  };
}
export { setList, ACTION_1, initialState, setTemp, ACTION_2 , ACTION_3, setCity, ACTION_4, setIcon, ACTION_5, setLastCity};