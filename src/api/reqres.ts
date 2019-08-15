import axios, { AxiosPromise } from 'axios';
import { UserResponse } from '@/types/user';

const reqresApi = axios.create({
    baseURL: 'https://reqres.in',
    timeout: 5000
});

export function fetchUser(id: number): AxiosPromise<UserResponse> {
    return reqresApi.get(`/api/users/${id}`);
}
