import { combineReducers } from "redux";
import crudReducer from "./crudReducer";
import { RootState } from '../../interfaces/crudInterface';


export const rootReducer = combineReducers<RootState>({
    crudReducer
})

