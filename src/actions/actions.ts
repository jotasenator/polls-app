import { Dispatch } from 'redux';
import * as api from "../api";
import { Poll } from '../interfaces/crudInterface';
import { types } from '../redux/types/types';

const { create, toDelete, fetchAll, update, increase } = types;

export const increaseAction = () => {
    return ({ type: increase })
}

export const fetchPolls = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getPolls();

        dispatch({ type: fetchAll, payload: data });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        };
    }
};

export const createPoll = (poll: Poll) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.createPoll(poll);

        dispatch({ type: create, payload: data });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};

export const updatePoll = (id: string, poll: Poll) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.updatePoll(id, poll);

        dispatch({ type: update, payload: data });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    };
}

export const deletePoll = (id: number) => async (dispatch: Dispatch) => {
    try {
        await api.deletePoll(id);

        dispatch({ type: toDelete, payload: id });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};


