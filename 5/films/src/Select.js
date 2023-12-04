export function Select({isReleaseYear}){
    
    if (isReleaseYear){
        return(
            <>
            <label htmlFor = "sorting_select_year">Выбор года релиза:</label>
            <select name="sort" id = "sorting_select_year">
            <option value="2023" key="year2023">2023</option>
            <option value="2022" key="year2022">2022</option>
            </select>
            </>
        );
    }else{
        return(
            <>
            <label htmlFor = "sorting_select_raiting">Сортировать по:</label>
            <select name="sort" id = "sorting_select_raiting">
            <option value="popular" key="popular">по популярности</option>
            <option value="raiting" key="raiting">По рейтингу</option>
            </select>
            </>
        );
    }

}