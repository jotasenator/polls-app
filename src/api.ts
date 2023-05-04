import axios from 'axios';
import { Poll } from './interfaces/crudInterface';

const API_URL = 'http://localhost:3000';

export const getPolls = () => axios.get<Poll[]>(`${API_URL}/polls`);
export const createPoll = (poll: Poll) => axios.post<Poll>(`${API_URL}/polls`, poll);
export const updatePoll = (id: string, poll: Poll) => axios.put<Poll>(`${API_URL}/polls/${id}`, poll);
export const deletePoll = (id: string) => axios.delete(`${API_URL}/polls/${id}`);

