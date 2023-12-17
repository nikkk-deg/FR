import { createContext, useContext, useReducer, ReactNode, Dispatch  } from 'react';
import { initialState } from './initialData';




export const ContextBearer = createContext('Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2I3M2UwZmJlNzkyYjZmZGFlOGQwYTg1YmExNGNmMiIsInN1YiI6IjY1NmI3OWFlODgwNTUxMDBhZWU4Yzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIILgVPsRFrQZweu3ZQ0-aUnacAzRGBiNTOduh3_92I');

interface FilterState {
    // define your filter state properties here
  }
  
  type FilterAction = {
    // define your filter action types here
  }
  
  type FilterDispatch = Dispatch<FilterAction>;
  
  const FilterContext = createContext<FilterState | null>(null);

  const FilterDispatchContext = createContext<FilterDispatch | undefined>(undefined);

// const FilterContext = createContext(null)

// const FilterDispatchContext = createContext()

export function FilterProvider(children : React.ReactNode){
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