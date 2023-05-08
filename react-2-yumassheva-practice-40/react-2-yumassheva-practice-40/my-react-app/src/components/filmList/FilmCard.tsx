import Button from "/src/components/Button";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "/src/store/actions/action";
import { storage } from "/src/js/storage.js";
import { changeFavouriteList, changeLaterList } from "/src/store/actions/actionFilter";
import { Link } from "react-router-dom";

function FilmCard({ id, imagePath, filmName, filmQuality, overview , original_language, original_title, release_date}) {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.reducerNav.show);
  const favourite = useSelector((state) => state.reducerFilter.favourite);
  const later = useSelector((state) => state.reducerFilter.later);

  const addFavFilm = (film) => {
    try {
      let mas = favourite.filter((item) => {
        return item.title !== film.title;
      });
      dispatch(changeFavouriteList([...mas, film]));
      storage.saveFavourite([...mas, film]);
    } catch (error) {
      console.error(error);
    }
  };
  const addLaterFilm = (film) => {
    try {
      let mas = later.filter((item) => {
        return item.title !== film.title;
      });
      dispatch(changeLaterList([...mas, film]));
      storage.saveLaterList([...mas, film]);
    } catch (error) {
      console.error(error);
    }
  };
  function addFavouriteList() {
    if (!storage.getMail()) {
      dispatch(showModal(!show));
    }
    addFavFilm({ id: id, title: filmName });
  }
  function addLaterList() {
    if (!storage.getMail()) {
      dispatch(showModal(!show));
    }
    addLaterFilm({ id: id, title: filmName });
  }
  function choosedFilm() {
    storage.savefilmInfoList({
      id: id,
      title: filmName,
      imagePath: imagePath,
      filmQuality: filmQuality,
      overview: overview,
      original_language :  original_language,
      original_title : original_title,
      release_date: release_date
    });
  }
  return (
    <div className="filmcard">
      <img
        className="poster"
        src={`https://picsum.photos/200/300`}
        alt="opps"
      ></img>
      <div className="card_info">
        <div className="card_cuality">
          <p>Рейтинг: {filmQuality}</p>
          <Button
            onClick={addLaterList}
            buttonValue={"later"}
            buttonClassName={""}
          />
          <Button
            onClick={addFavouriteList}
            buttonValue={"fav"}
            buttonClassName={""}
          />
        </div>
        <p>{filmName}</p>
        <Link to={"/film"}>
          <Button onClick={choosedFilm} buttonValue={"More"} buttonClassName={"more"} />
        </Link>
      </div>
    </div>
  );
}

export default FilmCard;
