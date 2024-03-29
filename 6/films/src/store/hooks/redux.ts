import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "..";
import { useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//comment from E570
//commrnt from home