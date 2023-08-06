import User from "./User.jsx";

export default function UserList({data}) {
    const users = data;
    return (
        <>
            <h1>User List</h1>
            <ul>
                {
                    users.map((user) => (
                            <li key={user.id}>
                                <User user={user}/>
                            </li>
                        )
                    )
                }
            </ul>
        </>
    );
}