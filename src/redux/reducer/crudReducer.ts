import { Actions, Pull } from '../../interfaces/crudInterface';
import { types } from '../types/types';

const { create, fetchAll, toDelete, update } = types

const crudReducer = (pulls = [], action: Actions) => {
    switch (action.type) {
        case fetchAll:
            return action.payload;
        case create:
            return [...pulls, action.payload];
        case update:
            return pulls.map((pull: Pull) =>
                pull._id === action.payload._id ? action.payload : pull
            );
        case toDelete:
            return pulls.filter((pull: Pull) => pull._id !== action.payload);
        default:
            return pulls;
    }
};

export default crudReducer;