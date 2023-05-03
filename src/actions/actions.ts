import { Dispatch } from 'redux';
import * as api from "../api";
import { Pull } from '../interfaces/crudInterface';
import { types } from '../redux/types/types';

const { create, toDelete, fetchAll, update } = types;

export const fetchPulls = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getPulls();

        dispatch({ type: fetchAll, payload: data });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        };
    }
};

export const createPull = (pull: Pull) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.createPull(pull);

        dispatch({ type: create, payload: data });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};

export const updatePull = (id: string, pull: Pull) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.updatePull(id, pull);

        dispatch({ type: update, payload: data });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    };
}

export const deletePull = (id: string) => async (dispatch: Dispatch) => {
    try {
        await api.deletePull(id);

        dispatch({ type: toDelete, payload: id });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};


