export default function SortingBy(){
    return(
        <div id="sorting">
        <label for = "sorting_select">Сортировать по:</label>
        <select name="sort" id="sorting_select">
            <option value="popular" key="popular">по популярности</option>
            <option value="raiting" key="raiting">По рейтингу</option>
        </select>
        </div>
    );
}