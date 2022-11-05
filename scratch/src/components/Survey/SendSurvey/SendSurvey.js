import React, {useState} from 'react';
import EmailList from "./child/EmailList";
import Switch from "./child/Switch";

var ID=1;

function SendSurvey(){

    const [email, setEmail] = useState([{id:ID,value:"example"}]);
    const appendEmail = () => {
        ID = ID +1;
        console.log("email ID", ID);
        setEmail([...email,{id:ID,value:"example"}]);
    }

    const deleteEmail = (id)=> {
        console.log("response delete",id);
        console.log(email);
        const index = email.findIndex(r => r.id === id)
        console.log(index);
        setEmail([...email.slice(0,index),...email.slice(index+1,email.length)]);
    }
    const sendSuccess = () => {
        alert("설문전송을 완료했습니다.");
    }



    return(
        <div>
            <div>
            <button onClick={appendEmail}>추가</button>
            <input placeholder={"이메일 검색"} maxLength={50}></input>
            </div>

            <div>
            <EmailList list={email} onDelete={deleteEmail}></EmailList>
            </div>

            <div>
            <button>설문링크</button>
            <button>생략</button>
            <button onClick={sendSuccess}>전송</button>
            </div>
        </div>
    );
}
export default SendSurvey;