import {create} from 'zustand';

const INITIAL_STATE = [
    {
        id: 1,
        username: 'jack',
        password: '32344',
        email: 'jack@gmail.com'
    }
]
export const useUserStore = create((set, get) => ({
        users: INITIAL_STATE,
        addUser: ({user}) => set((state) => ({users: [...state.users, {...user, id: new Date().getTime()}]})),
        removeUser: ({user}) => set((state) => ({users: state.users.filter((userState) => userState.id !== user.id)})),
        getUser: ({userId}) => (get().users.find(userState => userState.id === parseInt(userId))),
        updateUser: ({user}) => set((state) => {
            const updatedUsers = state.users.map(userState => {
                if (userState.id === user.id) {
                    return {
                        ...userState,
                        ...user,
                    };
                }
                return userState;
            });
            return ( {users: [...updatedUsers]})
        })
    })
);