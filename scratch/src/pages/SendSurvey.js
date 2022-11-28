import React, { useRef, useState } from 'react';
import UserList from '../components/SendSurvey/UserList';
import CreateUser from '../components/SendSurvey/CreateUser';
import {Typography,Button} from "@mui/material";
import {Link} from "react-router-dom";
import LinkFloating from "../components/Modal/LinkFloating";
import Swal from "sweetalert2";
import produce from "immer";
import axios from "axios";
import HorizontalLinearStepper from "../components/surveyoptionsetting/public/Stepper";
import {useSelector} from "react-redux";


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
        email: '',
    });

    const { email,} = inputs;

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
            email,
        };

        setUsers(users.concat(user));

        setInputs({
            email: '',
        });

        nextId.current += 1;
    };

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    };

    const sendSuccess = () => {
        Swal.fire({
            title: '<strong><p>hi</p>HTML <u>example</u></strong>',
            icon: 'info',
            html:'<p>hi</p>'+
                'You can use <b>bold text</b>, ' +
                '<a href="//sweetalert2.github.io">links</a> ' +
                'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                '<i class="fa fa-thumbs-down"></i>'
        }).then((result) => {
            if (result.isConfirmed) {
                    console.log("hi");
            }
        })
    }

    const user=[];
    const send = () => {
        for (let i =0; i<users.length; i++){
            user.push(users[i].email);
        }
        console.log(user);


    }
    const send2 = () => {

        for (let i =0; i<users.length; i++){
            user.push(users[i].email);
        }




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
                    설문 발송 페이지
                </Typography>
            </div>
            <div style={style.body}>
                <div style={style.Container}>
                    <CreateUser
                        username={email}
                        onChange={onChange}
                        onCreate={onCreate}
                    />
                </div>
                <div style={style.Container}>
                    <UserList users={users} onRemove={onRemove}/>
                </div>
                <div style={style.Container}>
                    <Button className="Button" component={Link} to="/linkfloating">설문링크</Button>
                    <Button className="Button"  onClick={send2}>전송</Button>
                    <Button onClick={send}>확인(없앨버튼)</Button>
                </div>

            </div>
        </div>
    );
}

export default SendSurvey;