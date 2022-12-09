import React, { useRef, useState } from 'react';
import {useSelector} from 'react-redux'
import UserList from '../components/SendSurvey/UserList';
import CreateUser from '../components/SendSurvey/CreateUser';
import {Typography,Button} from "@mui/material";
import Swal from "sweetalert2";
import HorizontalLinearStepper from "../components/surveyoptionsetting/public/Stepper";
import axios from "axios";

function SendSurvey() {
    const step=useSelector((state)=>state.surveyOption.step);

    const style = {
        header : {
            display: 'flex',
            alignItems: 'center',
            paddingTop: 130,
            paddingLeft:30,
            paddingBottom:30,
            paddingRight:30,
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
        email: ''
    });
    const { username, email } = inputs;
    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const [users, setUsers] = useState([]);

    const nextId = useRef(0);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email
        };
        setUsers(users.concat(user));

        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    };

    const onRemove = id => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = user.id 가 id 인 것을 제거함
        setUsers(users.filter(user => user.id !== id));
    };


    const user=[];
    for (let i =0; i<users.length; i++){
        user.push(users[i].email);
    }
    const onSend = () => {
        Swal.fire({
            title: '설문지를 발송하시겠습니까?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '네',
            cancelButtonText:'아니요'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = '/api/survey/1/email-send';
                const config = {"Content-Type": 'application/json'};
                const data = {
                    "sendEmailList" : user
                }
                axios.post(url, data, config)
                    .then(response =>  Swal.fire({
                        icon: 'success',
                        title: '설문지 발송에 성공했습니다.'
                    }))
                    .catch(error =>  Swal.fire({
                        icon: 'errir',
                        title: '설문지 발송에 실패했습니다.'
                    }))
            
            }
        })
    }


    return (
        <div>
            <div align='center' style={{backgroundColor:'white',
                height:'120px',
                position:'fixed',
                width:'100%',
                zIndex:'1',
                paddingTop:'30px',
                marginBottom:'10px',
                borderBottom:'1px solid lightgray',}}>
                <div style={{width:"50%",backgroundColor: 'white'}}>
                    <HorizontalLinearStepper step={step}></HorizontalLinearStepper>
                </div>
            </div>
            <div style={style.header}>
                <Typography variant="h4" fontFamily="HallymGothic-Regular">
                    설문 발송 페이지입니다.
                </Typography>
            </div>
            <div style={style.body}>
                <div style={style.Container}>
                    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} onSend={onSend}/>
                </div>
                <div style={style.Container}>
                    <UserList users={users} onRemove={onRemove} />
                </div>
            </div>
        </div>
    );
}

export default SendSurvey;