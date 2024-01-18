import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useFilterDispatch } from "./context";
import { getInfo } from "../getInfo";
import { GENRES } from "../consts";
import { CHOOSE_GENRE, CLASS_GENRES_FILTER } from "./consts";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";

interface Genres {
  id: number;
  name: string;
}

type SelectedGenres = Genres[];

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

  const handleChooseGenre = (genre: SelectedGenres) => {
    dispatch({
      type: CHOOSE_GENRE,
      genre: genre,
    });
  };

  return (
    <Box className={CLASS_GENRES_FILTER}>
    <Autocomplete
      size="small"
      multiple
      
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
    </Box>
  );
}
