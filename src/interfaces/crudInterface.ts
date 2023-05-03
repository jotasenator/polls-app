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