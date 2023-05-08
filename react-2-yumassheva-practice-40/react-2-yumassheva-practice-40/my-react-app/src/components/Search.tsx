import Checkbox from "./Checkbox";
import checkboxText from "/src/js/checkboxText.js";
import {
  changeShowMass,
  changeGenreId,
  setOptionValue,
} from "/src/store/actions/actionFilter";
import { useDispatch, useSelector } from "react-redux";
import Select from "./filters/Select";
import {
  options4,
  options5,
} from "/src/js/constant.js";
import { FilmSearch } from "./filmSearch";

function Search() {
  const dispatch = useDispatch();
  const showMass = useSelector((state) => state.reducerFilter.showMass);
  
     function changeGenre(genre) {
       dispatch(changeGenreId(genre));
       let mas = showMass.filter((item) => {
         return item.genre_ids.includes(genre) === true;
       });
       dispatch(changeShowMass(mas));
  }
   function changeOption(option) {
     dispatch(setOptionValue(option));
     let mas = showMass.filter((item) => {
        if (option === "Низкая") {
          return item.vote_average <= 5;
       }
        option === "Высокая"
          return item.vote_average > 5;
     });
     dispatch(changeShowMass(mas));
   }

   function changeOption2(option2) {
      dispatch(setOptionValue(option2));
      let mas = showMass.filter((item) => {
        if (option2 === "Неизвестное") {
          return item.popularity <= 100 && item.vote_count <= 200;
        }
         (option2 === "Известное")
           return item.popularity > 100 && item.vote_count > 200;
      });
      dispatch(changeShowMass(mas));
  }
    return (
      <div className="flex">
        <div className="filter_search">
          {checkboxText.map(({ id, name }) => (
            <Checkbox onChange={() => changeGenre(id)} title={name} key={id} />
          ))}
          <Select
            onChange={(event) => {
              changeOption(event.target.value);
            }}
            title={"Оценка фильма:"}
            listOfOptions={options4}
          />
          <Select
            onChange={(event) => {
              changeOption2(event.target.value);
            }}
            title={"Популярность фильма:"}
            listOfOptions={options5}
          />
        </div>
        <FilmSearch />
      </div>
    );
}

export { Search };
