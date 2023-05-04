export interface Pull {
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
    pulls: Pull[]
}

export interface RootState {
    crudReducer: State;
}