import { SET_TOKEN } from "./actions";
import { initialState } from "./initialState";

export const tokenReducer = (state = initialState, action: any) => {
    switch(action.type){
      case SET_TOKEN: {
        return{
          ...state,
          token: action.payload,
        }
      }
      default:
        return state;
    }
  }