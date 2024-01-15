import { createContext, useContext, useReducer, FC } from "react";
import { filmInfoReducer } from "./reducer";
import { FILM_INFO_STATE } from "./consts";

const FilmInfoContext = createContext<any | null>(null);

export const useFilmInfo = () => {
  return useContext(FilmInfoContext);
};

const FilmInfoDispatchContext = createContext<any | null>(null);

export const useFilmInfoDispatch = () => {
  return useContext(FilmInfoDispatchContext);
};

interface FilmInfoProviderProps {
  children: React.ReactNode;
}

export const FilmInfoProvider: FC<FilmInfoProviderProps> = ({ children }) => {
  const [filmInfo, dispatch] = useReducer(filmInfoReducer, FILM_INFO_STATE);
  return (
    <FilmInfoContext.Provider value={filmInfo}>
      <FilmInfoDispatchContext.Provider value={dispatch}>
        {children}
      </FilmInfoDispatchContext.Provider>
    </FilmInfoContext.Provider>
  );
};
