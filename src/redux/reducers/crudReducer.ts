import { Actions, Poll, State } from '../../interfaces/crudInterface';
import { types } from '../types/types';

const { create, fetchAll, fetchOne, toDelete, update } = types

const initialState: State = {
    polls: [],
    poll: null,
}

const crudReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case fetchAll:
            return { ...state, polls: action.payload };
        case fetchOne:
            return {
                ...state,
                poll: action.payload
            };
        case create:
            return { ...state, polls: [...state.polls, action.payload] };
        case update:
            return {
                ...state,
                polls: state.polls.map((poll: Poll) =>
                    poll.id === action.payload.id ? action.payload : poll
                )
            };
        case toDelete:
            return {
                ...state,
                polls: state.polls.filter((poll: Poll) => poll.id !== action.payload)
            };
        default:
            return state;
    }
};

export default crudReducer;