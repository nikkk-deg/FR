import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  loginReducer from "./reducers/login-slice"
import filterReducer from "./reducers/filter-slice"


const rootReducer = combineReducers({
   loginReducer,
   filterReducer,

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

