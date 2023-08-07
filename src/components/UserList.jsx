import User from './User.jsx';
import styles from '../assets/css/components/UserList.module.css';
export default function UserList({data}) {
    const users = data;
    return (
        <>
            <h1 className="flex justify-center text-xl font-semibold dark:text-white">User List</h1>
            <ul>
                {
                    users.map((user) => (
                            <li key={user.id} className=" my-3 rounded-md border-b-2 border-b-green-500 drop-shadow-xl dark:backdrop-blur-sm dark:bg-white/30 backdrop-blur-sm bg-white/50">
                                <User user={user}/>
                            </li>
                        )
                    )
                }
            </ul>
        </>
    );
}