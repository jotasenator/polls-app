import { combineReducers } from "redux";
import { RootState } from '../../interfaces/crudInterface';
import crudReducer from "./crudReducer";


export const rootReducer = combineReducers<RootState>({
    crudReducer
})

