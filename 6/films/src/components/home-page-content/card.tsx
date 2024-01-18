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
import { Favotite } from "../favorites";
import { addDelFavorites } from "../getInfo";
import { ADD_DELETE_FAVORITES } from "../consts";
import Cookie from "js-cookie";

interface FilmCard {
  film: string;
  img: string;
  id: string | undefined;
}
export default function FilmCard({ film, img, id }: FilmCard) {
  const navigate = useNavigate();
  // const dataDel = {
  //   media_type: "movie",
  //   media_id: id,
  //   favorite: false,
  // };
  // addDelFavorites(ADD_DELETE_FAVORITES, Cookie.get("account-id"), dataDel);
  // delete all favorites

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
        <Favotite id={id} />
      </Card>
    </>
  );
}
