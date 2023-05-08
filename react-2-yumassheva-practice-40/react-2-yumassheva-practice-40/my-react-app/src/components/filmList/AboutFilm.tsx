import { storage } from "/src/js/storage.js"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function AboutFilm() {
  const info = storage.getfilmInfoList();
  return (
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://picsum.photos/300/500"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <p>{info.title}</p>
            <p>Рейтинг: {info.filmQuality}</p>
            <div>{info.overview}</div>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>Оригинальное название: {info.original_title}</p>
            <p>Дата выпуска: {info.release_date}</p>
            <p>Оригинальный язык: {info.original_language}</p>
          </Typography>
        </CardContent>
      </Card>
  );
}

export { AboutFilm };
