import React from 'react';
import {Button, Typography, Menu, MenuItem, Input} from "@mui/material";

function CreateUser({ email, onChange, onCreate }) {
    const checkEmail = (e) => {
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        // 형식에 맞는 경우 true 리턴
        if (regExp.test(e.target.value)==false)
        {
            alert("올바른 이메일을 입력해주세요");
        }
    }
    return (
        <div>
            <Input
                name="email"
                placeholder="example@email.com"
                onChange={onChange}
                value={email}
                onBlur={checkEmail}
            />
            <Button onClick={onCreate}>ADD</Button>
        </div>
    );
}

export default CreateUser;