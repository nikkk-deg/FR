import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  CARD_HEIGHT,
  CLASS_FILM_CARD,
  FILM_LINK,
} from "./consts";
import { Favorite } from "../favorites";


interface FilmCard {
  film: string;
  img: string;
  id: string | undefined;
}
export default function FilmCard({ film, img, id }: FilmCard) {
  const navigate = useNavigate();

  return (
    <>
      <Card className={CLASS_FILM_CARD}>
        <CardActionArea
          onClick={() => {
            navigate(`${FILM_LINK}${id}`);
          }}
        >
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
        <Favorite id={id} />
      </Card>
    </>
  );
}
