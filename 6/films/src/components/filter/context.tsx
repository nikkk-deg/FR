import { createContext, useContext, useReducer, FC } from "react";
import { filterReducer } from "./reducer";
import { INITIAL_STATE } from "./consts";

const FilterContext = createContext<any | null>(null);

export const useFilter = () => {
  return useContext(FilterContext);
};

const FilterDispatchContext = createContext<any | null>(null);

export const useFilterDispatch = () => {
  return useContext(FilterDispatchContext);
};

interface FilterProviderProps {
  children: React.ReactNode;
}

export const FilterProvider: FC<FilterProviderProps> = ({ children }) => {
  const [filters, dispatch] = useReducer(filterReducer, INITIAL_STATE);
  return (
    <FilterContext.Provider value={filters}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterContext.Provider>
  );
};
