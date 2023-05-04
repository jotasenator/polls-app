export interface Poll {
    _id: string;
    title: string;
    description: string;
    creator: string;
    createdAt: Date;
}

export interface Actions {
    type: string;
    payload: any;
}

export interface State {
    polls: Poll[]
}

export interface RootState {
    crudReducer: State;
}