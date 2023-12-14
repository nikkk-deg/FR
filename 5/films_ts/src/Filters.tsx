import { useReducer, useEffect, useState } from "react";
import { filterOptions, initialState, yearsArr, SelectProps } from "./initialData";
import { filterReducer } from "./filterReducer";








export default function Filters(){

    const [filters, dispatch] = useReducer(filterReducer, initialState);

    function showFilters(arr: Array<string>){

        return arr.map((item : string) => {
            return(
                <option value={`${item}`} key={`year${item}`}>{item}</option>
            )
        })
    }  

    function showFilters2(arr: Array<object>){

        return arr.map((item : any) => {
            return(
                <option value={item.value} key={item.key}>{item.value}</option>
            )
        })
    } 

    const handleChangeYear = (year: String) => {
        dispatch({
            type: 'select_year',
            year: year,
        });
    }

    const handleChangeOption = (option: String) => {
        dispatch({
            type: 'sort_option',
            option: option,
        });
    }

    const handleResetFilters = () => {
        dispatch({
            type: 'reset_filters',
        })
    }

    const handleChooseGenre = (genre:String) =>{
        filters.genres.includes(genre) ? (
            dispatch({
                type: 'delete_genre',
                genre: genre,
            })
        ) : (
            dispatch({
                type: 'choose_genre',
                genre: genre,
            })
        )

    }

    function Genres(){
        const [genres, setGenres] = useState([]);
        const getGenres = async () => {
            const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=ru',{
                method: 'GET',
                headers: {
                    accept : 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2I3M2UwZmJlNzkyYjZmZGFlOGQwYTg1YmExNGNmMiIsInN1YiI6IjY1NmI3OWFlODgwNTUxMDBhZWU4Yzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIILgVPsRFrQZweu3ZQ0-aUnacAzRGBiNTOduh3_92I',
                },
            });
            const valueRequest = await response.json();
            return valueRequest.genres
        }
        useEffect(()=>{
            getGenres()
            .then(genres => setGenres(genres));
        })
        const listItems = genres.map((item:any) => {
              
            if (filters.genres.includes(item.name)){
                return(
                    <li key={item.name}><input onChange={() => handleChooseGenre(item.name)}  defaultChecked={true} type = "checkbox"/>{item.name}</li>
                );
            }else{
                return(
                    <li key={item.name}><input onChange={() => handleChooseGenre(item.name)}  defaultChecked={false} type = "checkbox"/>{item.name}</li>
                );
            }
    })
     return <ul>{listItems}</ul>
    
}

   

    return(
        <div id="filters">
            <button 
            id="resetFilterButton"
            onClick={handleResetFilters}
            style={{width: "50px", height: "50px"}}
            >RESET</button>

            <Select 
            name = {"year_filter"} 
            title = {'Выбор года релиза'} 
            isYearFilter = {true}
            showOptions={()=>showFilters(yearsArr())}
            handleChangeYear = {handleChangeYear}
            handleChangeOption = {handleChangeOption}
            value = {filters.year}
            ></Select>
            <h1>{filters.year}</h1>

            <Select 
            name = {"option_filter"} 
            title = {'Сортировать по:'} 
            isYearFilter = {false}
            showOptions={()=>showFilters2(filterOptions)}
            handleChangeYear = {handleChangeYear}
            handleChangeOption = {handleChangeOption}
            value = {filters.sortOption}
            ></Select>
            <h1>{filters.sortOption}</h1>

            <Genres></Genres>
        </div>
    );
}



function Select({name, title, isYearFilter, showOptions, handleChangeYear, handleChangeOption, value} : SelectProps){
    const handleChangeData = (isYearFilter: boolean, data: string) => {
        isYearFilter ? (handleChangeYear(data)) : (handleChangeOption(data));
    }
    
    return(
    <>
        <label htmlFor={name}>{title}</label>
        <select value={value} onChange = {e => handleChangeData(isYearFilter, e.target.value)} name={name}>{showOptions()}</select>
    </>
    );
}



