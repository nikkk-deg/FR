import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link } from "react-router-dom";

interface IFilmCard {
  film: string;
  img: string;
}
export default function FilmCard({ film, img }: IFilmCard) {
  return (
    <Card className="film-card">
      <CardActionArea>
        <Link to={"../../pages/film-page.tsx"}>
          <CardMedia component="img" height="140" image={img} alt={film} />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {film}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <StarBorderIcon sx={{ float: "right" }}>Share</StarBorderIcon>
      </CardActions>
    </Card>
  );
}
