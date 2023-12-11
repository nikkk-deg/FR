// import Genres from "./Genres";
import Navigation from "./Navigation";
import { Select } from "./Select";





export default function Filters(){
    return(
    <>
        <p id="filtersTxt">Фильтры</p>
        <Select isYearFilter={true}></Select>
        <Select isYearFilter={false}></Select>
        {/* <Genres></Genres> */}
        <Navigation></Navigation>
    </>
    );
}