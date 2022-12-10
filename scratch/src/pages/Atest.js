import React, { useRef, useState } from 'react';
import UserList from '../components/SendSurvey/UserList';
import CreateUser from '../components/SendSurvey/CreateUser';
import {Typography,Button} from "@mui/material";
import Swal from "sweetalert2";
import HorizontalLinearStepper from "../components/surveyoptionsetting/public/Stepper";
import {useSelector} from "react-redux";


function Atest() {
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
    console.log({email});

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
            username: '',
            email: ''
        });
        nextId.current += 1;
    };

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    };

    const textInput = useRef();
    const copy = () => {
        const el = textInput.current
        el.select()
        document.execCommand("copy")
    }

    const sendURLCopy = () => {
        Swal.fire({
            title: '<strong>설문지 링크</strong>',
            icon: 'info',
            html:
                '<input type="text" value="설문조사발송용 URL" ref={textInput} readOnly></input><button onClick={copy}>copy</button>',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> 설문링크복사',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("hi");
            }
        })
    }

    const sendSuccess = () => {
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
                console.log("발송완료");
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

    const onSend = () => {
        for (let i =0; i<users.length; i++){
            user.push(users[i].email);
        }
        console.log(user);
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
                        onSend={onSend}
                    />
                    <Button>reset</Button>
                </div>
                <div style={style.Container}>
                    <UserList users={users} onRemove={onRemove}/>
                </div>
            </div>
        </div>
    );
}

export default Atest;