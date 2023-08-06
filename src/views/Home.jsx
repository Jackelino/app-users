import UserList from "../components/UserList.jsx";
import {useReducer} from "react";
import {usersReducer} from "../reducers/usersReducer.js";

const INITIAL_STATE = [
    {
        id: 1,
        username: 'jack',
        password: '32344',
        email: 'jack@gmail.com'
    },
    {
        id: 2,
        username: 'Juan',
        password: '32344',
        email: 'jack@gmail.com'
    },
    {
        id: 3,
        username: 'Raul',
        password: '32344',
        email: 'jack@gmail.com'
    }
]
export default function Home() {
    const [data, dispatch] = useReducer(usersReducer, INITIAL_STATE);
    console.log(data)
    return (
        <div className="container p-1">
            <UserList data={data}/>
        </div>

    )
}