import User from './User.jsx';
import styles from '../assets/css/components/UserList.module.css';
export default function UserList({data}) {
    const users = data;
    return (
        <>
            <h1 className={styles.title}>User List</h1>
            <ul>
                {
                    users.map((user) => (
                            <li key={user.id} className={styles.usersList}>
                                <User user={user}/>
                            </li>
                        )
                    )
                }
            </ul>
        </>
    );
}