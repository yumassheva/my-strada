import reducerFilter from "./reducerFilter";
import { combineReducers } from "redux";
import { reducerNav } from "./reducerNav";
const reducer = combineReducers({
  reducerNav,
  reducerFilter,
});

export default reducer