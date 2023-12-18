import { useFitlerDispatch } from "./Filters/Context";
import { SelectProps, filterOptions, yearsArr } from "./Filters/initialFilters";


export function Select({name, title, isYearFilter, value} : SelectProps){
    
    const dispatch = useFitlerDispatch();

    function showYears(arr: Array<string>){
        return arr.map((item : string) => {
            return(
                <option value={`${item}`} key={`year${item}`}>{item}</option>
            )
        })
    }  

    function showOptions(arr: Array<object>){
        return arr.map((item : any) => {
            return(
                <option value={item.value} key={item.key}>{item.value}</option>
            )
        })
    } 

    const showFilters = (isYearFilter: boolean) => {
        if(isYearFilter){
            return showYears(yearsArr());
        }
        return showOptions(filterOptions)
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

    const handleChangeData = (isYearFilter: boolean, data: string) => {
        isYearFilter ? (handleChangeYear(data)) : (handleChangeOption(data));
    }


    return(
    <>
        <label htmlFor={name}>{title}</label>
        <select value={value} onChange = {e => handleChangeData(isYearFilter, e.target.value)} name={name}>{showFilters(isYearFilter)}</select>
    </>
    );
}
