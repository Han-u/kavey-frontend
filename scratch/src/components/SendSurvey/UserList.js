import React from 'react';
import {Button, styled} from "@mui/material";

function User({ user, onRemove }) {
    const BootstrapButton2 = styled(Button)({

        color: 'black',
        boxShadow: 'none',
        fontFamily: [
            'NanumSquare',
        ]
    });

    return (
        <div>
            <b>{user.email}</b>
            <BootstrapButton2 onClick={() => onRemove(user.id)}>X</BootstrapButton2>
        </div>
    );
}

function UserList({ users, onRemove }) {
    const style = {
        header: {
        }
    };
    return (
        <div style={style.header}>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default UserList;