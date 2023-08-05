import UserList from "../components/UserList.jsx";
import {Container} from "@mui/material";
import {useReducer} from "react";
import {usersReducer} from "../reducers/usersReducer.js";

const INITIAL_STATE = [
    {
        id: 1,
        username: 'jack',
        password: '32344',
        email: 'jack@gmail.com'
    }

]
export default function Home() {
    const [data, dispatch] = useReducer(usersReducer, INITIAL_STATE);
    console.log(data)
    return (
        <Container>
            <UserList data={data}/>
        </Container>
    )
}