import {create} from 'zustand';

const INITIAL_STATE = [
    {
        id: 1,
        username: 'jack',
        password: '32344',
        email: 'jack@gmail.com'
    }
]
export const useUserStore = create((set) => ({
        users: INITIAL_STATE,
        addUser: () => set(),
        removeUser: () => set()
    })
);