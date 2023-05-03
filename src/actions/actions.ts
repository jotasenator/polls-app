import { Dispatch } from 'redux';
import * as api from "../api";
import { Pull } from '../interfaces/crudInterface';



export const fetchPulls = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getPulls();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        };
    }
};

export const createPull = (pull: Pull) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.createPull(pull);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};

export const updatePull = (id: string, pull: Pull) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.updatePull(id, pull);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    };
}

export const deletePull = (id: string) => async (dispatch: Dispatch) => {
    try {
        await api.deletePull(id);

        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};


