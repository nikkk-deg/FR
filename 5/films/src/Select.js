import { useEffect, useReducer } from "react";
import { filterReducer } from "./filterReducer";
import { filterOptions, initialState, yearsArr } from "./data";
import { getGenres } from "./fetchGenres";



export function Select({isYearFilter}){
    const [filters, dispatch] = useReducer(filterReducer, initialState);
    let genresList =[];
    useEffect(()=>{
        getGenres()
        .then(genres => {genresList = genres});
        console.log(genresList)
    })

    function showFilters(arr){
        return arr.map(item => {
            return(
                <option value={item.value} key={item.key}>{item.value}</option>
            )
        })
    }  
    
    function handleChangeOption(option){
        dispatch({
            type: 'sort_option',
            option: option,
        });
    }
    function handleChangeYear(year){
        dispatch({
            type: 'select_year',
            year: year,
        })
    }
    const handleResetFilters = () => {
        dispatch({
            type: 'reset_filters',
        })
    }

    const handlChooseGenre = (e) => {
        dispatch({
            type: 'choose_genre',
            genre: e.target.value,
        })
    }

    if (isYearFilter){
        return(
        <>
            <label htmlFor = "sorting_select_year">Выбор года релиза:</label>
            <select onChange = {e => handleChangeYear(e.target.value)} name="sort">{showFilters(yearsArr())}</select>
            <h1>{filters.year}</h1>
            <button onClick={() => handleResetFilters()}>XXXX</button>
            {/* <Genres genresList = {genresList} onChange = {e => handlChooseGenre(e.target.value)} ></Genres> */}
        </>
        );
    }else{      
        return(
        <>
            <label htmlFor = "sorting_select_raiting">Сортировать по:</label>
            <select  onChange = {e => handleChangeOption(e.target.value)}>{showFilters(filterOptions)}</select>
            <h1>{filters.sortOption}</h1>
            
        </>
        );
    }
}





function Genres(genresList, onChange){

    const listItems = genresList.map(item => {
    return(
        <li key={item.name}>
        <input 
        type="checkbox" 
        name={item}
        onChange={onChange}></input>
        <label htmlFor={item}>{item.name}</label>
        </li>
        );
    })
    return <ul>{listItems}</ul>
}

