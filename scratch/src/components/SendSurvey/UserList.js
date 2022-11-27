import React from 'react';
import {Button, Typography, Menu, MenuItem, Input} from "@mui/material";

function User({ user, onRemove }) {
    return (
        <div>
            <b>{user.username}</b>
            <Button onClick={() => onRemove(user.id)}>X</Button>
        </div>
    );
}

function UserList({ users, onRemove }) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default UserList;