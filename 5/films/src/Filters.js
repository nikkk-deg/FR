import GenreSort from "./GenreSort";
import Navigation from "./Navigation";
import { Select } from "./Select";





export default function Filters(){
    return(
        <>
        <p id="filtersTxt">Фильтры</p>
        <button id="filterCloseButton" onClick={()=>alert('close filters')}>X</button>

        
        <Select isReleaseYear={true}></Select>
        <Select isReleaseYear={false}></Select>
        <GenreSort></GenreSort>
        <Navigation></Navigation>
        
        </>
    );
}