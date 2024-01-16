import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  CARD_HEIGHT,
  CLASS_FAVORITE_BUTTON,
  CLASS_FILM_CARD,
  FILM_LINK,
} from "./consts";

interface FilmCard {
  film: string;
  img: string;
  id: number;
}
export default function FilmCard({ film, img, id }: FilmCard) {
  const navigate = useNavigate();

  return (
    <>
      <Card
        onClick={() => {
          navigate(`${FILM_LINK}${id}`);
        }}
        className={CLASS_FILM_CARD}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height={CARD_HEIGHT}
            image={img}
            alt={film}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {film}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <StarBorderIcon className={CLASS_FAVORITE_BUTTON}></StarBorderIcon>
        </CardActions>
      </Card>
    </>
  );
}
