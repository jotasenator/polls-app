import { Actions, Pull } from '../../interfaces/crudInterface';


const reducer = (pulls = [], action: Actions) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...pulls, action.payload];
        case 'UPDATE':
            return pulls.map((pull: Pull) =>
                pull._id === action.payload._id ? action.payload : pull
            );
        case 'DELETE':
            return pulls.filter((pull: Pull) => pull._id !== action.payload);
        default:
            return pulls;
    }
};

export default reducer;