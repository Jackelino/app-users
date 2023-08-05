import {Divider, List, ListItem} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Grid from '@mui/material/Grid';
import User from "./User.jsx";
import {useState} from "react";

export default function UserList({data}) {
    const [users, setUsers] = useState([...data]);
    return (
        <>
            <h1>User List</h1>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {
                    users.map((user) => (
                            <>
                                <ListItem key={user.id} alignItems="flex-start" secondaryAction={
                                    <Grid item xs={8}>
                                        <DeleteIcon/>
                                        <DeleteForeverIcon/>
                                    </Grid>}>
                                    <User user={user}/>
                                </ListItem>
                                <Divider variant="inset" component="li"></Divider>
                            </>
                        )
                    )
                }
            </List>
        </>
    );
}