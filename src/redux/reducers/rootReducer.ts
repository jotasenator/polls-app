import { combineReducers } from "redux";
import { RootState } from '../../interfaces/crudInterface';
import crudReducer from "./crudReducer";
import { increaseReducer, initialState } from './increaseReducer';

interface CombinedRootState extends RootState {
    increaseReducer: typeof initialState
}


export const rootReducer = combineReducers<CombinedRootState>({
    crudReducer,
    increaseReducer
})

