import {useState} from 'react';

const INITIAL_STATE = {
    username: '',
    email: '',
    password: ''
}
export default function UserForm() {
    // DATA
    const [form, setForm] = useState(INITIAL_STATE);
    const {username, email, password} = form;

    // METHODS
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setForm(
            {...form, [name]: value}
        );
    }

    const submit = (event) => {
        event.preventDefault();
        console.log(form)
        setForm(INITIAL_STATE);
    }
    return (
        <form>
            <input id="filled-username" name="username" required
                   type="text"
                   value={username}
                   onChange={onInputChange}/>
            <input id="filled-emai" name="email" required type="email"
                   value={email}
                   onChange={onInputChange}/>
            <input id="filled-password" name="password"
                   type="password"
                   value={password}
                   onChange={onInputChange}/>
            <button type="submit" onClick={submit}>Save</button>
        </form>
    )
}