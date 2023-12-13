export const initialState = {
    sortOption: 'популярности',
    year: '2023',
    genres: [],
}

export const filterOptions = [
    {id: 0, value: 'популярности', key: 'popular'},
    {id: 1, value: 'убыванию рейтинга', key: 'high_raiting'},
    {id: 2, value: 'возрастанию рейтинга', key: 'low_raiting'},
]

export const yearsArr = () => {
    let years = [];
    for (let i=Number(new Date().getFullYear()); i>1950; i--){
        years.push(`${i}`);
    }
    return years;
}

export interface SelectProps {
    title: string;
    name: string;
    isYearFilter: boolean
    showOptions: Function;
    handleChangeYear:Function;
    handleChangeOption: Function;
    value: string;
}

export{}