import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { IAppDispatch, IRootState } from "./store.ts";

export const useAppDispatch = () => useDispatch<IAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;