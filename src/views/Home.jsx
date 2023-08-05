import UserList from "../components/UserList.jsx";
import {Container} from "@mui/material";
import {useState} from "react";

const initialUsers = [
    {
        id: 1,
        username: 'jack',
        password: '32344',
        email: 'jack@gmail.com'
    },
    {
        id: 2,
        username: 'jack',
        password: '32344',
        email: 'jack@gmail.com'
    }

]
export default function Home() {
    const [data, setData] = useState(initialUsers);
    return (
        <Container>
            <UserList data={data}/>
        </Container>
    )
}