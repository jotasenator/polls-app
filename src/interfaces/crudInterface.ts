export interface Poll {
    id: number;
    question: string;
    options: Option[];
}

export interface Option {
    id: number;
    text: string;
    isCorrect: boolean;
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