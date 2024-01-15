import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useFilterDispatch } from "./context";
import { getInfo } from "../getInfo";
import { GENRES } from "../consts";
import { CHOOSE_GENRE, CLASS_GENRES_FILTER } from "./consts";
import Autocomplete from "@mui/material/Autocomplete";

interface Genres {
  id: number;
  name: string;
}

export default function GenresFilter() {
  const [genres, setGenres] = useState([]);
  const dispatch = useFilterDispatch();

  useEffect(() => {
    try {
      getInfo(GENRES, "").then((genres) => setGenres(genres.genres));
    } catch (error) {
      console.warn(error);
    }
  }, []);

  const handleChooseGenre = (genre: any) => {
    dispatch({
      type: CHOOSE_GENRE,
      genre: genre,
    });
  };

  return (
    <Autocomplete
      size="small"
      multiple
      className={CLASS_GENRES_FILTER}
      options={genres}
      disableCloseOnSelect
      getOptionLabel={(option: Genres) => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox style={{ marginRight: 8 }} checked={selected} />
          {option.name}
        </li>
      )}
      onChange={(event, value) => handleChooseGenre(value)}
      renderInput={(params) => {
        return (
          <TextField {...params} label={GENRES} placeholder=""></TextField>
        );
      }}
    />
  );
}
