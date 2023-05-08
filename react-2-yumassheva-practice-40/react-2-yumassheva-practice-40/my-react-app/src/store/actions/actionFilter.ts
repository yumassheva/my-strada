import film from "/src/js/films.js";
import {
  ACTION_7,
  ACTION_8,
  ACTION_9,
  ACTION_10,
  ACTION_12,
  ACTION_13,
  popularityMore,
} from "/src/js/constant.js";
import { storage } from "/src/js/storage.js";

const initialStateFilter = {
  option: popularityMore,
  option2: "2020",
  showMass: film,
  genre: [],
  later: storage.getLaterList() || [],
  favourite: storage.getFavourite() || [],
};
function setOptionValue(option) {
  return {
    type: ACTION_7,
    value: option,
  };
} 
function setOption2Value(option2) {
  return {
    type: ACTION_8,
    value: option2,
  };
}
function changeShowMass(showMass) {
  return {
    type: ACTION_9,
    value: showMass,
  };
}
function changeGenreId(genre) {
  return {
    type: ACTION_10,
    value: initialStateFilter.genre.push(genre),
  };
}
function changeFavouriteList(favourite) {
  return {
    type: ACTION_12,
    value: favourite,
  };
}
function changeLaterList(later) {
  return {
    type: ACTION_13,
    value: later,
  };
}
export {
  setOptionValue,
  setOption2Value,
  changeShowMass,
  changeGenreId,
  changeFavouriteList,
    changeLaterList,
  initialStateFilter
};
