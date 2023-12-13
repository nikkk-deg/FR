import { useReducer } from "react";
import { initialState, yearsArr } from "./initialData";
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

    const handleChangeYear = (year: String) => {
        console.log(year);
        dispatch({
            type: 'select_year',
            year: year,
        });
    }

    function Select({name, title, showOptions} : SelectProps){
        return(
        <>
            <label htmlFor={name}>{title}</label>
            <select  onChange = {(e)=>handleChangeYear(e.target.value)} name={name}>{showOptions()}</select>
        </>
        );
    }

    return(
        <div id="filters">
            <Select 
            name = {"year_filter"} 
            title = {'Выбор года релиза'} 
            showOptions={()=>showFilters(yearsArr())}
            ></Select>
            <h1>{filters.year}</h1>
        </div>
    );
}

interface SelectProps {
    title: string;
    name: string;
    showOptions: Function;
}

