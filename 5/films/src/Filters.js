import { useState } from "react";
import Genres from "./Genres";
import Navigation from "./Navigation";
import { Select } from "./Select";





export default function Filters(){
    const [resetFilters, setResetFilters] = useState(5);
    return(
        <>
        <p id="filtersTxt">Фильтры</p>
        <button id="resetFilters" onClick={()=>setResetFilters(resetFilters +5)}>X</button>
        <Select key={resetFilters} isReleaseYear={true}></Select>
        <Select key={resetFilters+1} isReleaseYear={false}></Select>
        <Genres key={resetFilters+2}></Genres>
        <Navigation></Navigation>
        
        </>
    );
}