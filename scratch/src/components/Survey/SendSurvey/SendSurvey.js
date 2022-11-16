import React, {useState} from 'react';
import EmailList from "./child/EmailList";
import "./SendSurvey.css"
var ID=1;


function SendSurvey(){

    const [email, setEmail] = useState([{id:ID,value:"example"}]);

    const appendEmail = () => {
        ID = ID +1;
        setEmail([...email,{id:ID,value:"example"}]);
        console.log("jojo",{email});
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

                <button onClick={appendEmail} className="Button2" >피설문자 추가</button>
                <input  placeholder={"이메일 검색"} maxLength={50} className="input"></input>
                <button className="Button">검색</button>
            </div>
            <div className="emailList">
                <EmailList list={email} onDelete={deleteEmail}></EmailList>
            </div>
            <div className="sendButton">
                <button className="Button" >설문링크</button>
                <button className="Button" >생략</button>
                <button className="Button"  onClick={sendSuccess}>전송</button>
            </div>
        </div>
    );
}
export default SendSurvey;