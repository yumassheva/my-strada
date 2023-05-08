import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { next2Search, nextSearch } from "../store/actions/action";
import { storage } from "/src/js/storage.js";
import { Link } from "react-router-dom";

function FilmCardSearch({
  id,
  imagePath,
  filmName,
  filmQuality,
  overview,
  original_language,
  original_title,
  release_date,
}) {
    const dispatch = useDispatch();
     const startSearch = useSelector((state) => state.reducerNav.startSearch);
    const finishSearch = useSelector((state) => state.reducerNav.finishSearch);

 function nextSearchFilm() {
   dispatch(nextSearch(startSearch));
   dispatch(next2Search(finishSearch));
 }
 function chooseSeachFilm() {
   storage.savefilmInfoList({
     id: id,
     title: filmName,
     imagePath: imagePath,
     filmQuality: filmQuality,
     overview: overview,
     original_language: original_language,
     original_title: original_title,
     release_date: release_date,
   });
    }
    return (
      <>
        <div className="filmcard_search">
          <img
            className="poster"
            src={`https://picsum.photos/200/${imagePath}`}
            alt="opps"
          ></img>
          <div className="card_info">
            <p>{filmName}</p>
            <p>Рейтинг: {filmQuality}</p>
            <p> {overview}</p>
          </div>
        </div>
        <Button
          onClick={() => nextSearchFilm()}
          buttonValue={"Не подходит"}
          buttonClassName={"more"}
        />
        <Link to={"/film"}>
          <Button
            onClick={chooseSeachFilm()}
            buttonValue={"Подходит"}
            buttonClassName={"more"}
          />
        </Link>
      </>
    );
}

export default FilmCardSearch;
