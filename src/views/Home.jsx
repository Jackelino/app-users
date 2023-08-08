import UserList from "../components/UserList.jsx";
import {useUserStore} from '../stores/useUserStore.js';

export default function Home() {
    const {users} = useUserStore();
    console.log(users)
    return (
        <div className="container p-1">
            <UserList data={users}/>
        </div>

    )
}