
const sortBy = [
    {value: 'популярности', key: 'popular'},
    {value: 'убыванию рейтинга', key: 'high_raiting'},
    {value: 'возрастанию рейтинга', key: 'low_raiting'},
]

const releaseYears = [];
for (let i=1900; i<=Number(new Date().getFullYear()); i++){
    let year = {
        key: `year${i}`,
        value: i,
    }
    releaseYears.push(year);
}
console.log(releaseYears);



export function Select({isReleaseYear}){

    const showYears = releaseYears.reverse().map(item => {
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
            <select name="sort" id = "sorting_select_year">{showYears}</select>
            </>
        );
    }else{
        return(
            <>
            <label htmlFor = "sorting_select_raiting">Сортировать по:</label>
            <select name="sort" id = "sorting_select_raiting">{showSortBy}</select>
            </>
        );
    }

}