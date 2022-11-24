import React, {useState} from 'react';
import EmailList from "../components/SendSurvey/child/EmailList";
import {Link} from 'react-router-dom';
import  HorizontalLinearStepper  from "../components/surveyoptionsetting/public/Stepper"
import { useSelector } from 'react-redux'
import {Button, Typography, Input} from "@mui/material";
var ID=1;


function SendSurvey(){
    const step=useSelector((state)=>state.surveyOption.step);
    const [email, setEmail] = useState([{id:ID,value:"example"}]);

    const appendEmail = () => {
        ID = ID +1;
        setEmail([...email,{id:ID,value:"example"}]);

    }

    const deleteEmail = (id)=> {
        const index = email.findIndex(r => r.id === id)
        setEmail([...email.slice(0,index),...email.slice(index+1,email.length)]);
    }


    const sendSuccess = () => {
        alert("설문전송을 완료했습니다.");
    }
    return(
        <div className="wrapper">
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
            <div  
                style={{display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent: 'center',
                paddingTop:'130px'}}>
                <div className="title" style={{paddingBottom:'30px'}}>
                    <Typography variant="h4" fontFamily="HallymGothic-Regular"
                        style={{paddingBottom:'5px'}}>설문 발송</Typography>
                </div>
                <div className="search" style={{paddingBottom:'15px'}}>

                    <Button onClick={appendEmail} className="Button2" >피설문자 추가</Button>
                    <Input  placeholder={"이메일 검색"} maxLength={50} className="input"></Input>
                    <Button className="Button">검색</Button>
                </div>
                <div className="emailList">
                    <EmailList list={email} onDelete={deleteEmail}></EmailList>
                </div>
                <div className="sendButton">
                    <Button className="Button" component={Link} to="/linkfloating">설문링크</Button>
                    <Button className="Button" >생략</Button>
                    <Button className="Button"  onClick={sendSuccess}>전송</Button>
                </div>
            </div>
        </div>
    );
}
export default SendSurvey;