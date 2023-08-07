import {useState} from 'react';
import styles from '../assets/css/components/UserForm.module.css'

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
        <form className={styles.userForm}>
            <div className="relative z-0 w-full mb-6 group">
                <input id="filled-username"
                       className="block py-2.5 px-0 w-full text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="username" required
                       type="text"
                       value={username}
                       onChange={onInputChange}/>
                <label form="floating_email" className="peer-focus:font-medium absolute text-green-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input id="filled-emai"  className="block py-2.5 px-0 w-full text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"name="email" required type="email"
                       value={email}
                       onChange={onInputChange}/>
                <label form="filled-emai" className="peer-focus:font-medium absolute text-green-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input id="filled-password" className="block py-2.5 px-0 w-full text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="password"
                       type="password"
                       value={password}
                       onChange={onInputChange}/>
                <label form="filled-password" className="peer-focus:font-medium absolute text-green-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <button type="submit" className="bg-green-700 text-white hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={submit}>Save</button>
        </form>
    )
}