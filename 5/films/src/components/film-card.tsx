import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface IFilmCard {
  film: string;
}
export default function FilmCard({ film }: IFilmCard) {
  return (
    <Card className="film-card">
      <CardActionArea>
        <CardMedia component="img" height="140" image={film} alt={film} />
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
