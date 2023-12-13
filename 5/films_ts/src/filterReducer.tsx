export function filterReducer(state: any , action: any){
    switch (action.type){
        case 'sort_option':{
            return{
                ...state,
                sortOption: action.option,
            }
        }
        case 'select_year': {
            return{
                ...state,
                year: action.year,
            }
        }
        case 'reset_filters':{
            return{
                ...state,
                sortOption: 'популярности',
                year: 2023,
            }
        }
        case 'choose_genre':{
            return{
                ...state,
                genres: action.genre,
            }
        }
        default :{
            throw new Error('Unknow action: ' + action.type);
        }
    }
}