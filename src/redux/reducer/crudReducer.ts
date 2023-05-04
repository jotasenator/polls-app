import { Actions, Pull, State } from '../../interfaces/crudInterface';
import { types } from '../types/types';

const { create, fetchAll, toDelete, update } = types

const initialState: State = {
    pulls: []
}

const crudReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case fetchAll:
            return { ...state, pulls: action.payload };
        case create:
            return { ...state, pulls: [...state.pulls, action.payload] };
        case update:
            return {
                ...state,
                pulls: state.pulls.map((pull: Pull) =>
                    pull._id === action.payload._id ? action.payload : pull
                )
            };
        case toDelete:
            return {
                ...state,
                pulls: state.pulls.filter((pull: Pull) => pull._id !== action.payload)
            };
        default:
            return state;
    }
};

export default crudReducer;