import { createContext, useContext, useReducer, FC } from "react";
import { filmFavReducer } from "./reducer";
import { FAV_FILMS } from "./consts";


const FilmFavContext = createContext<any | null>(null);

export const useFilmFav = () => {
  return useContext(FilmFavContext);
};

const FilmFavDispatchContext = createContext<any | null>(null);

export const useFilmFavDispatch = () => {
  return useContext(FilmFavDispatchContext);
};

interface FilmInfoProviderProps {
  children: React.ReactNode;
}

export const FilmFavProvider: FC<FilmInfoProviderProps> = ({ children }) => {
  const [filmInfo, dispatch] = useReducer(filmFavReducer, FAV_FILMS);
  return (
    <FilmFavContext.Provider value={filmInfo}>
      <FilmFavDispatchContext.Provider value={dispatch}>
        {children}
      </FilmFavDispatchContext.Provider>
    </FilmFavContext.Provider>
  );
};


