import {
  ACTION_7,
  ACTION_8,
  ACTION_9,
  ACTION_10,
  ACTION_12,
  ACTION_13,
} from "/src/js/constant.js";
import { initialStateFilter } from "../actions/actionFilter";

function reducerFilter(state = initialStateFilter, action) {
  switch (action.type) {
    case ACTION_7:
      return Object.assign({}, state, {
        option: action.value,
      });
    case ACTION_8:
      return Object.assign({}, state, {
        option2: action.value,
      });
    case ACTION_9:
      return { ...state, showMass: action.value };
    case ACTION_10:
      return { ...state, id: action.value };
    case ACTION_12:
      return { ...state, favourite: action.value };
    case ACTION_13:
      return { ...state, later: action.value };
    default:
      return state;
  }
}

export default reducerFilter;