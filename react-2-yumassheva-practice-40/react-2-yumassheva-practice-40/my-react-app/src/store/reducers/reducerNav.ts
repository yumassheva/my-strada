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
} from "/src/js/constant.js";
import { initialState } from "../actions/action";

function reducerNav (state = initialState, action) {
  switch (action.type) {
    case ACTION_1:
      return Object.assign({}, state, {
        start: action.value,
      });
    case ACTION_2:
      return Object.assign({}, state, {
        finish: action.value,
      });
    case ACTION_3:
      return Object.assign({}, state, {
        start: action.value,
      });
    case ACTION_4:
      return Object.assign({}, state, {
        finish: action.value,
      });
    case ACTION_5:
      return Object.assign({}, state, {
        page: action.value,
      });
    case ACTION_6:
      return Object.assign({}, state, {
        page: action.value,
      });
    case ACTION_11:
      return Object.assign({}, state, {
        show: action.value,
      });
    case ACTION_14:
      return Object.assign({}, state, {
        startSearch: action.value,
      });
    case ACTION_15:
      return Object.assign({}, state, {
        finishSearch: action.value,
      });
    default:
      return state;
  }
}
export { reducerNav }
