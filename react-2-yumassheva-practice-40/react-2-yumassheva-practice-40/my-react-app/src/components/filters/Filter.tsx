import PaginationM from "./Pagination";
import checkboxText from "/src/js/checkboxText.js"
import film from "/src/js/films.js";
import {
  setOptionValue,
  setOption2Value,
  changeShowMass,
  changeGenreId,
} from "/src/store/actions/actionFilter";
import { useDispatch , useSelector} from "react-redux";
import {
  options,
  options2,
  options3,
  popularityLess,
  popularityMore,
  voteAverageLess,
  voteAverageMore,
} from "/src/js/constant.js";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, InputLabel, MenuItem, Select, Button } from "@mui/material";
import { storage } from "/src/js/storage.js";
import { SelectAutorize } from "./selectAutorize";

function Filter() {
  const dispatch = useDispatch();
  let showMass = useSelector((state) => state.reducerFilter.showMass);
  
  function changeOption(option) {
    dispatch(setOptionValue(option));
    if (option === popularityMore) {
      dispatch(changeShowMass(showMass.sort((a, b) =>  a.popularity - b.popularity))
      )
    }
    if (option === popularityLess) {
      dispatch(
        changeShowMass(showMass.sort((a, b) =>  b.popularity - a.popularity))
      )
    }
    if (option === voteAverageMore) {
      dispatch(
        changeShowMass(showMass.sort((a, b) => a.vote_average - b.vote_average))
      );
    }
      if (option === voteAverageLess) {
        dispatch(
          changeShowMass(
            showMass.sort((a, b) => b.vote_average - a.vote_average)
          )
        );
    }
    dispatch(changeShowMass([...showMass]));
    }

   function changeOption2(option2) {
     dispatch(setOption2Value(option2));
      let mas = showMass.filter((item) => {
         return (
           item.release_date.includes(option2) === true
         );
       });
     dispatch(changeShowMass(mas));
  }

     function changeOption3(option3) {
       if (option3 === "Избранное") {
         let mas = storage.getFavourite();
          dispatch(changeShowMass(mas));
       }
        if (option3 === "Смотреть позже") {
          let mas = storage.getLaterList()
           dispatch(changeShowMass(mas));
            }
  }
     function changeGenre(genre) {
       dispatch(changeGenreId(genre));
        let mas = showMass.filter((item) => {
           return (
             item.genre_ids.includes(genre) === true
           );
         });
        dispatch(changeShowMass(mas));
  }
  function deleteAllFilter() {
  dispatch(changeShowMass(showMass=film))
  }
  return (
    <div className="flex filter">
      Filters:
      <Button onClick={() => deleteAllFilter()} variant="contained">
        Delete all filters
      </Button>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Сортировать по:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          defaultValue=""
          onChange={(event) => {
            changeOption(event.target.value);
          }}
        >
          {options.map(({ id, option }) => (
            <MenuItem value={option} key={id} id={id}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Год релиза:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          defaultValue=""
          onChange={(event) => {
            changeOption2(event.target.value);
          }}
        >
          {options2.map(({ id, option }) => (
            <MenuItem value={option} key={id} id={id}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <SelectAutorize
        onChange={(event) => {
          changeOption3(event.target.value);
        }}
      />
      <FormGroup>
        {checkboxText.map(({ id, name }) => (
          <FormControlLabel
            control={<Checkbox />}
            label={name}
            onChange={() => changeGenre(id)}
            key={id}
          />
        ))}
      </FormGroup>
      <PaginationM />
    </div>
  );
}

export default Filter;
