import FilmCardSearch from "./FilmCardSearch";
import { useSelector } from "react-redux/es/exports";

function FilmSearch() {
  const startSearch = useSelector((state) => state.reducerNav.startSearch);
  const finishSearch = useSelector((state) => state.reducerNav.finishSearch);
  const showMass = useSelector((state) => state.reducerFilter.showMass);
    const page = showMass.slice(startSearch, finishSearch);
      if (showMass.length === startSearch) {
        return <p>Такого фильма больше нет</p>;
      }
  return (
    <div className="catalog">
      {page.map(
        ({
          id,
          title,
          backdrop_path,
          vote_average,
          poster_path,
          overview,
          original_language,
          original_title,
          release_date,
        }) => (
          <FilmCardSearch
            key={id}
            id={id}
            filmName={title}
            imagePath={backdrop_path || poster_path}
            filmQuality={vote_average}
            overview={overview}
            original_language={original_language}
            original_title={original_title}
            release_date={release_date}
          />
        )
      )}
    </div>
  );
}

export { FilmSearch }
