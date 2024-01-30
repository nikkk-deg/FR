
import { AppDispatch } from '..';
import axios from "axios";
import loginSlice, { accountFetching, accountFetchingError, accountFetchingSuccess } from './login-slice';
import { filmsFetching, filmsFetchingError, filmsFetchingSuccess} from './filter-slice';
import { getURL } from '../../API';
import { ACCOUNT_ID, FILM_INFO_TXT, GENRES } from '../../consts';



export const fetchAccountID =  (token: string) => async (dispatch: AppDispatch) => {
    try{
        dispatch(accountFetching())
        const response = await axios({
            method: 'get',
            url: getURL(ACCOUNT_ID, null),
            headers: {
                accept: "application/json",
                authorization: `Bearer ${token}`,
              },
        })
        dispatch(accountFetchingSuccess(response.data.id))
    }catch (error){
        dispatch(accountFetchingError(error?.message))
    }
}


export const fetchFilmList =  (option: string, page: string, token: string) => async (dispatch: AppDispatch) => {
    try{
        dispatch(filmsFetching())
        const response = await axios({
            method: 'get',
            url: getURL(option, page),
            headers: {
                accept: "application/json",
                authorization: `Bearer ${token}`,
              },
        })
        console.log(response.data);
        
        dispatch(filmsFetchingSuccess(response.data.results))
    }catch (error){
        dispatch(filmsFetchingError(error?.message))
    }
}