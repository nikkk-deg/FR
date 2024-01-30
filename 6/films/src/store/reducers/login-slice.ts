import { createSlice } from "@reduxjs/toolkit";

interface LoginState{
  token: string;
  accountID: string;
  isLoading: boolean;
  error: string;
}

const initialState: LoginState = {
  token: '',
  accountID: '',
  isLoading: false,
  error: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
      setToken(state, action: any){
          state.token = action.payload;
      },
      accountFetching(state){
        state.isLoading = true;
      },
      accountFetchingSuccess(state, action: any){
        state.isLoading = false;
        state.accountID = action.payload;
        state.error = "";
      },
      accountFetchingError(state, action: any){
        state.token = "";
        state.isLoading = false;
        state.error = action.payload;
      }

  },
})
export const actionSetToken = loginSlice.actions.setToken;
export const accountFetching = loginSlice.actions.accountFetching;
export const accountFetchingError = loginSlice.actions.accountFetchingError;
export const accountFetchingSuccess = loginSlice.actions.accountFetchingSuccess;
export default loginSlice.reducer;