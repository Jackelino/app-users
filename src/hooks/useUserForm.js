import {useState} from "react";
import {useUserStore} from "../stores/useUserStore.js";
import {useNavigate} from "react-router-dom";

export function useUserForm({state}){
    const [form, setForm] = useState({...state});
    const {username, email, id, password} = form;
    const {updateUser, addUser} = useUserStore();
    const navigate = useNavigate();

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setForm(
            {...form, [name]: value}
        );
    }

    const save = (event) => {
        event.preventDefault();
        addUser({user: form});
        setForm(state);
    }
    const update = (event) => {
        event.preventDefault();
        updateUser({user: form});
        navigate('/');
    }

    return {
        form,
        id,
        username,
        email,
        password,
        onInputChange,
        save,
        update
    }
}