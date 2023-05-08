import { React } from "react";
import { Provider } from "react-redux";
import { AsyncApp } from "./AsyncApp";
import { store } from "./RTK/main";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
   <AsyncApp/>
  </Provider>
);