import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import { useFilterDispatch } from "./context";
import { getInfo } from "../getInfo";
import { GENRES } from "../consts";

interface IGenres {
  id: number;
  name: string;
}

export default function GenresFilter() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getInfo(GENRES, "").then((genres) => setGenres(genres));
  }, []);

  const dispatch = useFilterDispatch();

  const handleChooseGenre = (genre: any) => {
    dispatch({
      type: "choose_genre",
      genre: genre,
    });
  };

  return (
    <Autocomplete
      size="small"
      multiple
      className="genres-filter"
      options={genres}
      disableCloseOnSelect
      getOptionLabel={(option: IGenres) => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox style={{ marginRight: 8 }} checked={selected} />
          {option.name}
        </li>
      )}
      onChange={(event, value) => handleChooseGenre(value)}
      renderInput={(params) => {
        return <TextField {...params} label="Жанры" placeholder=""></TextField>;
      }}
    />
  );
}
