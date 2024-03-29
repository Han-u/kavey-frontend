import React, { useRef, useState } from 'react';
import {useSelector} from 'react-redux'
import UserList from '../components/SendSurvey/UserList';
import CreateUser from '../components/SendSurvey/CreateUser';
import {Typography,Button,styled} from "@mui/material";
import Swal from "sweetalert2";
import HorizontalLinearStepper from "../components/surveyoptionsetting/public/Stepper";
import axios from "axios";
import CopyUrl from "../components/SendSurvey/CopyUrl";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useParams } from 'react-router-dom';

function SendSurvey() {
    const { surveyId } = useParams();

    const step=useSelector((state)=>state.surveyOption.step);
    const surveyAPI = false;

    const style = {
        header : {
            display: 'flex',
            alignItems: 'center',
            paddingTop: 100,
            justifyContent: 'space-between'
        },
        body : {
            padding: 80,
            height: '100vh',
            display: 'flex',
            backgroundColor: '#F5F5F5',
            flexDirection : 'column',
            alignItems: 'center'
        },
        sendList : {
            display: 'flex',
            backgroundColor: 'white',
            flexDirection : 'row',
            maxWidth: 1200,
            minHeight: 500,
            borderRadius: 20
        },
        Container1: {
            paddingBottom: 15,
            backgroundColor: '#F5F5F5',
        },
        Container2: {
            padding: 30,
            backgroundColor: 'white',
            borderRadius:20
        },
        Container3: {
            margin:30,
            padding: 40,
            backgroundColor: '#F5F5F5',
            width:600,
            borderRadius: 20
        },
        Container4: {
            paddingTop: 100,
            textAlign:'end',
            backgroundColor: '#F5F5F5'
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
        console.log("여기용",user.email);
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        if (regExp.test(user.email)==false)
        {
            Swal.fire({
                icon: 'error',
                title: '이메일 양식 오류',
                text: '정확한 피설문자의 이메일을 입력해주세요.'
            })
        }
        else if ((user.email) == '')
        {
            Swal.fire({
                icon: 'error',
                title: '비어있는 공간',
                text: '피설문자의 이메일을 입력해주세요.'
            })
        }
        else{
            setUsers(users.concat(user));

            setInputs({
                username: '',
                email: ''
            });
            nextId.current += 1;
        }
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
                const url = '/api/survey/'+surveyId+'/email-send';
                const config = {"Content-Type": 'application/json'};
                const data = {
                    "sendEmailList" : user
                }
                console.log(data.sendEmailList);
                if(data.sendEmailList.length>0){
                    axios.post(url, data, config)
                    .then(response =>  Swal.fire({
                        icon: 'success',
                        title: '설문지 발송에 성공했습니다.'
                    }))
                    .catch(error =>{
                        const code = error.response.data.code;
                        const message = error.response.data.message;
                        console.log(code,message);
                        return(
                            Swal.fire({
                                icon: 'error',
                                title: message
                            })
                        )

                    })
                }
                else{
                    Swal.fire({
                    icon: 'error',
                    title: '응답자가 아무도     없어요!!'
                    })
                }
            }
        })
    }

    const BootstrapButton1 = styled(Button)({
        backgroundColor: '#FFD701',
        color: 'black',
        boxShadow: 'none',
            fontFamily: [
        'NanumSquare',
    ]
    });


    const textInput = useRef();
    const onCopy = () => {
        const el = textInput.current
        el.select()
        document.execCommand("copy")
    };


    const [show, setShow] = useState(false);



    const [visible,setVisible] =useState(false);

    const BootstrapButton2 = styled(Button)({
        backgroundColor: '#FFD701',
        color: 'black',
        boxShadow: 'none',
        fontFamily: [
            'NanumSquareR',
        ]
    });





    const copy = () => {
        const el = textInput.current
        el.select()
        document.execCommand("copy")
    }


    return (
        <div>
            <div align='center' style={{backgroundColor:'#FFD701',
                                        height:'100px',
                                        position:'fixed',
                                        width:'100%',
                                        zIndex:'1',                                    
                                        borderBottom:'1px solid lightgray',}}>
                    <HorizontalLinearStepper step={step}></HorizontalLinearStepper>
            </div>    
            <div style={style.header}>
                <Typography variant="h4" fontFamily="HallymGothic-Regular">

                </Typography>
            </div>

            <div style={style.body}>
                <div>
                    <div style={style.Container1}>
                        <BootstrapButton2 disabled={false} variant="contained" size="large" sx={ { borderRadius: 28 } } onClick={() => {setVisible(!visible);}}>{visible ? "설문 조사 링크 복사 닫기" : <>설문 조사 링크 복사 열기<ContentCopyIcon style={{transform: 'scale(0.7)'}}/></>}</BootstrapButton2>
                        {visible && <CopyUrl surveyId={surveyId}/>}
                    </div>
                    <div style={style.sendList}>
                        <div style={style.Container2}>
                            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} onSend={onSend}/>
                        </div>
                        <div style={style.Container3}>
                            <UserList users={users} onRemove={onRemove} />
                        </div>
                    </div>
                    <div style={style.Container4}>
                        <BootstrapButton1 disabled={false} variant="contained" size="large" sx={ { borderRadius: 28 } } onClick={onSend}>전송✔</BootstrapButton1>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SendSurvey;