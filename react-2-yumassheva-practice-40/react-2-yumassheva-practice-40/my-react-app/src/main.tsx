import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutFilm } from "./components/filmList/AboutFilm";
import { Search } from "./components/Search";
import Header from "./components/Header";
const router = createBrowserRouter([
  {
    path: "/film",
    element: [
    <Header />,
    <AboutFilm />
  ]
  },
  {
    path: "/search",
    element: [
    <Header />,
    <Search />
    ]
  },
  {
    path: "/",
    element: <App />,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
