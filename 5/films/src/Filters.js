import GenreSort from "./GenreSort";
import Navigation from "./Navigation";
import SortingBy from "./SortingBy";




export default function Filters(){
    return(
        <>
        <p id="filtersTxt">Фильтры</p>
        <button id="filterCloseButton" onClick={()=>alert('close filters')}>X</button>

        
        <SortingBy></SortingBy>
        <GenreSort></GenreSort>
        <Navigation></Navigation>
        
        </>
    );
}