import {Avatar, ListItemAvatar, ListItemText} from "@mui/material";

export default function User({user}) {
    const {username, email} = user;
    return (
        <>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
            </ListItemAvatar>
            <ListItemText primary={username} secondary={email}/>
        </>
    )
}