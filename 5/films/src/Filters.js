import Genres from "./Genres";
import Navigation from "./Navigation";
import { Select } from "./Select";





export default function Filters(){
    return(
        <>
        <p id="filtersTxt">Фильтры</p>
        <button id="filterCloseButton" onClick={()=>alert('close filters')}>X</button>

        
        <Select isReleaseYear={true}></Select>
        <Select isReleaseYear={false}></Select>
        <Genres></Genres>
        <Navigation></Navigation>
        
        </>
    );
}