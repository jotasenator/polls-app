import { types } from "../types/types";

export const initialState = {
    value: 0
}


export const increaseReducer = (state = initialState, action: { type: string; }) => {
    switch (action.type) {
        case types.increase:
            return {
                ...state,
                value: state.value + 1
            }

        default:
            return state
    }
}