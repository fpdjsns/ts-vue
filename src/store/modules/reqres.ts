import { User, UserResponse } from '@/types/user';
import { fetchUser } from '../../api/reqres';
import { AxiosResponse } from 'axios';

export const namespaced = true;

interface State {
    user: User | null;
}

export const state: State = {
    user: null
}

export const mutations = {
    SET_USER(state: State, user: User): void {
        state.user = user;
    }
}

export const actions = {
    async fetchUser({ commit }: any, id: number) {
        console.log('call fetchUser');
        await fetchUser(id)
            .then((response: AxiosResponse<UserResponse>) => {
                const user: User = response.data.data;
                console.log(user);
                commit('SET_USER', user);
            })
            .catch((e: Error) => { throw e; })
    }
};

