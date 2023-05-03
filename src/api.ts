import axios from 'axios';
import { Pull } from './interfaces/crudInterface';

const API_URL = 'http://localhost:3000';

export const getPulls = () => axios.get<Pull[]>(`${API_URL}/pulls`);
export const createPull = (pull: Pull) => axios.post<Pull>(`${API_URL}/pulls`, pull);
export const updatePull = (id: string, pull: Pull) => axios.put<Pull>(`${API_URL}/pulls/${id}`, pull);
export const deletePull = (id: string) => axios.delete(`${API_URL}/pulls/${id}`);

