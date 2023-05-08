import './css/App.css'
import Header from "./components/Header";
import Filter from "./components/filters/Filter";
import FilmCatalog from "./components/filmList/FilmCatalog";
import { ModalM } from './components/modal';
import { useSelector } from "react-redux";

function App() {
  const show = useSelector((state) => state.show);
  return (
    <div className="all">
      <Header />
      <div className="flex">
        <Filter />
        <FilmCatalog  />
      </div>
    </div>
  );
}

export default App
