import {Button, Stack, TextField} from "@mui/material";
import {useState} from "react";

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
        <Stack
            component="form"
            sx={{
                width: 'auto',
            }}
            spacing={2}
            noValidate
            autoComplete="off"
        >
            <TextField id="filled-username" label="Username" name="username" required error={false} variant="filled"
                       type="text"
                       value={username}
                       onChange={onInputChange}/>
            <TextField id="filled-emai" label="Email" name="email" required error={false} variant="filled" type="email"
                       value={email}
                       onChange={onInputChange}/>
            <TextField id="filled-password" label="Password" name="password" required error={false} variant="filled"
                       type="password"
                       value={password}
                       onChange={onInputChange}/>
            <Button variant="outlined" type="submit" onClick={submit}>Save</Button>
        </Stack>
    )
}