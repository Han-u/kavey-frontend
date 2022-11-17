import React, {useState} from 'react';
import EmailList from "../components/SendSurvey/child/EmailList";
import {Link} from 'react-router-dom';
import {Button, Container, Grid, IconButton, Menu, MenuItem, Paper, TextField, Typography, Input} from "@mui/material";
var ID=1;


function SendSurvey(){

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
            <div className="title">
                <h1>설문 발송 페이지</h1>
            </div>
            <div className="search" >

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
    );
}
export default SendSurvey;