import UserUpdate from "../components/UserUpdate.jsx";
import {useParams} from "react-router-dom";
import {useUserStore} from "../stores/useUserStore.js";
import {useEffect, useState} from "react";

const INITIAL_STATE = {
    id: '',
    username: '',
    email: '',
    password: ''
}
export default function Update() {
    const {userId} = useParams();
    const {getUser} = useUserStore();
    const [user, setUser] = useState(INITIAL_STATE);
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        setUser({...getUser({userId})})
        setFlag(true)
    }, []);
    return (
        <>
            <h1 className="flex justify-center text-xl font-semibold dark:text-white">User Edit</h1>
            {flag ? <UserUpdate user={user}/> : null}
        </>
    );
}