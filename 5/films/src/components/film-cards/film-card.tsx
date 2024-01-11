import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link, Outlet, useNavigate } from "react-router-dom";
import FilmPage from "../../pages/film";




interface IFilmCard {
  film: string;
  img: string;
}
export default function FilmCard({ film, img }: IFilmCard) {
  const navigate = useNavigate();
  return (
    <>
    <Card onClick = {() =>{navigate('/film')}} className="film-card">
      <CardActionArea>

          <CardMedia component="img" height="140" image={img} alt={film} />
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
     
   </>
  );
}
