import React, { useRef, useState } from 'react';
import UserList from '../components/SendSurvey/UserList';
import CreateUser from '../components/SendSurvey/CreateUser';
import {Typography,Button} from "@mui/material";
import {Link} from "react-router-dom";
import LinkFloating from "../components/Modal/LinkFloating";


function SendSurvey() {
    const style = {
        header : {
            display: 'flex',
            alignItems: 'center',
            padding: 30,
            justifyContent: 'space-between'
        },
        body : {
            padding: 30,
            backgroundColor: 'lightgray'
        },
        btn : {
            padding: 10,
            paddingLeft: 0,

        },
        Container: {
            padding: 20,
            backgroundColor: 'white'
        }
    };
    const [inputs, setInputs] = useState({
        username: '',
    });

    const { username,} = inputs;

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const [users, setUsers] = useState([]);

    const nextId = useRef(0);

    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
        };

        setUsers(users.concat(user));

        setInputs({
            username: '',
        });

        nextId.current += 1;
    };

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    };

    const sendSuccess = () => {
        alert("설문전송을 완료했습니다.");
    }

    const send = () => {
        console.log("설문조사 보낼 이메일");
        console.log({users});
    }






    return (
        <div>
            <div style={style.header}>
                <Typography variant="h4" fontFamily="HallymGothic-Regular">
                    설문 발송 페이지
                </Typography>
            </div>
            <div style={style.body}>
                <div style={style.Container}>
                    <CreateUser
                        username={username}
                        onChange={onChange}
                        onCreate={onCreate}
                    />
                </div>
                <div style={style.Container}>
                    <UserList users={users} onRemove={onRemove}/>
                </div>
                <div style={style.Container}>
                    <Button className="Button" component={Link} to="/linkfloating">설문링크</Button>

                    <Button>생략</Button>
                    <Button className="Button"  onClick={sendSuccess}>전송</Button>
                    <Button onClick={send}>확인(없앨버튼)</Button>






                </div>

            </div>
        </div>
    );
}

export default SendSurvey;