import film from "/src/js/films.js";
import {
  ACTION_1,
  ACTION_2,
  ACTION_3,
  ACTION_4,
  ACTION_5,
  ACTION_6,
  ACTION_11,
  ACTION_14,
  ACTION_15,
  popularityMore,
  cardsPerPage,
  firstNumberOfPages,
  slidePerClick,
  defaultStart,
  defaultStartSearch,
  cardsPerPageSearch
} from "/src/js/constant.js";

const initialState = {
  start: defaultStart,
  finish: cardsPerPage,
  page: firstNumberOfPages,
  show: false,
  startSearch: defaultStartSearch,
  finishSearch: cardsPerPageSearch,
};
function next(start) {
  return {
    type: ACTION_1,
    value: start + cardsPerPage,
  };
}
function next2(finish) {
  return {
    type: ACTION_2,
    value: finish + cardsPerPage,
  };
} 
function nextSearch(startSearch) {
  return {
    type: ACTION_14,
    value: startSearch + cardsPerPageSearch,
  };
}
function next2Search(finishSearch) {
  return {
    type: ACTION_15,
    value: finishSearch + cardsPerPageSearch,
  };
} 
function before(start) {
  return {
    type: ACTION_3,
    value: start - cardsPerPage,
  };
}
function before2(finish) {
  return {
    type: ACTION_4,
    value: finish - cardsPerPage,
  };
} 
function nextNumberPage(page) {
  return {
    type: ACTION_5,
    value: page + slidePerClick,
  };
} 
function beforeNumberPage(page) {
  return {
    type: ACTION_6,
    value: page - slidePerClick,
  };
} 
function showModal(show) {
  return {
    type: ACTION_11,
    value: show,
  };
} 
export {
  next,
  next2,
  before,
  before2,
  nextNumberPage,
  beforeNumberPage,
  showModal,
  nextSearch,
  next2Search,
  initialState,
};
