import { useDispatch } from "react-redux";

export const SET_TOKEN = 'SET_TOKEN';

export const SET_TOKEN_ACTION = (payload: any) => {
    return {type: SET_TOKEN, payload}
}

