import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "/src/store/actions/action";
import { storage } from "/src/js/storage.js";
import {
  changeFavouriteList,
  changeLaterList,
} from "/src/store/actions/actionFilter";
import { Link } from "react-router-dom";

function FilmCatalog() {
 const start = useSelector((state) => state.reducerNav.start) 
 const finish = useSelector((state) => state.reducerNav.finish);
  const showMass = useSelector((state => state.reducerFilter.showMass))
  const page = showMass.slice(start, finish) 

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
      original_language: original_language,
      original_title: original_title,
      release_date: release_date,
    });
  }
  return (
    <div className="flex catalog">
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
          <Card sx={{ width: 300 }}>
            <CardMedia
              component="img"
              alt={'Poster of film'}
              height="200"
              image={`https://picsum.photos/200/300`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Рейтинг:{vote_average}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={addLaterList}>
                Fav
              </Button>
              <Button size="small" onClick={addFavouriteList}>
                Later
              </Button>
              <Link to={"/film"}>
                <Button size="small" onClick={choosedFilm}>
                  More
                </Button>
              </Link>
            </CardActions>
          </Card>
        )
      )}
    </div>
  );
}

export default FilmCatalog;
