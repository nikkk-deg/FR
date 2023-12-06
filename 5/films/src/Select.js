import { useState } from "react";


const sortBy = [
    {value: 'популярности', key: 'popular'},
    {value: 'убыванию рейтинга', key: 'high_raiting'},
    {value: 'возрастанию рейтинга', key: 'low_raiting'},
]

let releaseYears = [];
for (let i=Number(new Date().getFullYear()); i>1950; i--){
    let year = {
        key: `year${i}`,
        value: i,
    }
    releaseYears.push(year);
}



export function Select({isReleaseYear}){

    const [selectedYear, setSelectedYear] = useState(releaseYears[0].value);
    const [selectedSorting, setSelectedSorting] = useState(sortBy[0].value);

    const showYears = releaseYears.map(item => {
        return(
            <option value={item.value} key={item.key}>{item.value}</option>
        );
    })

    const showSortBy = sortBy.map(item => {
        return(
            <option value={item.value} key={item.key}>{item.value}</option>
        )
    })
    
    if (isReleaseYear){
        return(
            <>
            <label htmlFor = "sorting_select_year">Выбор года релиза:</label>
            <select value = {selectedYear} onChange = {e => setSelectedYear(e.target.value)} name="sort" id = "sorting_select_year">{showYears}</select>
            <h1>{selectedYear}</h1>
            </>
        );
    }else{
        return(
            <>
            <label htmlFor = "sorting_select_raiting">Сортировать по:</label>
            <select value = {selectedSorting} onChange = {e => setSelectedSorting(e.target.value)} name="sort" id = "sorting_select_raiting">{showSortBy}</select>
            <h1>{selectedSorting}</h1>
            </>
        );
    }

}