import { createContext, useContext, useReducer, FC  } from 'react';
import { initialState } from './initialFilters';




export const ContextBearer = createContext('Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2I3M2UwZmJlNzkyYjZmZGFlOGQwYTg1YmExNGNmMiIsInN1YiI6IjY1NmI3OWFlODgwNTUxMDBhZWU4Yzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIILgVPsRFrQZweu3ZQ0-aUnacAzRGBiNTOduh3_92I');

  const FilterContext = createContext<any | null>(null);

  const FilterDispatchContext = createContext<any | null>(null);

  interface FilterProviderProps {
    children: React.ReactNode;
  }

export const FilterProvider : FC<FilterProviderProps> = ({children}) => {
    const [filters, dispatch] = useReducer(
        filterReducer, 
        initialState
    );
    return(
        <FilterContext.Provider value={filters}>
            <FilterDispatchContext.Provider value={dispatch}>
                {children}
            </FilterDispatchContext.Provider>
        </FilterContext.Provider>
    );
}

export const useToken = () => {
    return useContext(ContextBearer);
}

export const useFilter = () => {
    return useContext(FilterContext);
}

export const useFitlerDispatch = () => {
    return useContext(FilterDispatchContext);
}


export function filterReducer(state: any , action: any){
    switch (action.type){
        case 'sort_option':{
            return{
                ...state,
                sortOption: action.option,
            }
        }
        case 'select_year': {
            return{
                ...state,
                year: action.year,
            }
        }
        case 'reset_filters':{
            return{
                ...state,
                sortOption: 'популярности',
                year: 2023,
                genres: [],
            }
        }
        case 'choose_genre':{
            return{
                ...state,
                genres: [...state.genres, action.genre],
            }
        }
        case 'delete_genre':{
            return{
                ...state,
                genres: [...state.genres.filter((item:any) => action.genre !== item)],
            }
        }
        default :{
            throw new Error('Unknow action: ' + action.type);
        }
    }
}