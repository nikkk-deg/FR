import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { memo, useEffect, useState } from "react";
import { getInfo } from "../../API";
import { GENRES } from "../../consts";
import { CHOOSE_GENRE, CLASS_GENRES_FILTER } from "./consts";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../store/hooks/redux";

interface Genres {
  id: number;
  name: string;
}

type SelectedGenres = Genres[];

export default memo(function GenresFilter() {
  const [genres, setGenres] = useState([]);
  const token = useAppSelector(state => state.loginReducer.token);

  useEffect(() => {
    try {
      getInfo(GENRES, "", token).then((genres) => setGenres(genres.genres));
    } catch (error) {
      console.warn(error);
    }
  }, []);

  const handleChooseGenre = (genre: SelectedGenres) => {

  };

  if(genres !== undefined){
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

  return <></>
});
