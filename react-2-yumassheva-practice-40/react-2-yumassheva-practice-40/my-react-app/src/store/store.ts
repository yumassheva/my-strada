import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer);

export default store;

store.subscribe(() => console.info(store.getState())) // Для отладки
