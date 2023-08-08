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
        addUser: ({user}) => set((state) => ({users: [...state.users, {...user, id: new Date().getTime()}]})),
        removeUser: ({user}) => set((state) => ({users: state.users.filter((userState) => userState.id !== user.id)}))
    })
);