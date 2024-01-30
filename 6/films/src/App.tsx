import { Outlet } from "react-router-dom";
import HomePage from "./pages";
import { useAppDispatch, useAppSelector } from "./store/hooks/redux";
import { useEffect } from "react";
import { fetchAccountID } from "./store/reducers/ActionCreators";


function App() {
  const dispatch = useAppDispatch();
  const accountID = useAppSelector(state => state.loginReducer.accountID)
  const error = useAppSelector(state => state.loginReducer.error)
  const token = useAppSelector(state => state.loginReducer.token)
  const isLoading = useAppSelector(state => state.loginReducer.isLoading)
  const genres = useAppSelector(state => state.filterReducer)
  console.log(genres);
  console.log(accountID);
  console.log(error);
  
  
  
  return (
    <>
    
      <HomePage></HomePage>
      <Outlet />
    </>
  );
}

export default App;
