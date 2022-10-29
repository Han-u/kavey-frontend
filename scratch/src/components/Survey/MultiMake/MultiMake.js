import React, { useRef, useState } from 'react';
import QuesctionTitle from './child/QuesctionTitle';
import MutilSingleChoice from './child/MutilSingleChoice';
import ResponseList from './child/ResponseList';
var ID = 1;

function MultiMake(props) {
    const [titleState,setTitle] = useState("1.질문이름");

    const settingTitle = (title) => {
        console.log("title set",title);
        setTitle(title);
    }
    
    const [modeState, setMode] = useState("m");
    const selectQuesctionMode = (mode) =>{
        if(modeState!=mode){
            setMode(mode);
            console.log("mode change",mode);
        }
    }

    const [responses, setResponse] = useState([{id:ID,value:"value"}]);
    const appendResponse= ()=>{
        ID = ID + 1 ;   
        console.log("response append",ID);
        setResponse([...responses,{id:ID,value:"value"}]);
    }

    const deleteResponse = (id)=> {
      console.log("response delete",id);
      console.log(responses);
      const index = responses.findIndex(r => r.id === id)
      console.log(index);
      setResponse([...responses.slice(0,index),...responses.slice(index+1,responses.length)]);
    }

    const seletResponse = (id) => {
        console.log("response check",id);
    }



    return (
        <div>
          <QuesctionTitle onSetting= {settingTitle} />
          <button onClick={appendResponse}>응답추가</button>
          <MutilSingleChoice onSelect={selectQuesctionMode}/>
          <ResponseList list={responses} onDelete={deleteResponse} onSelect={seletResponse}/>
        </div>
    )

}
export default MultiMake;
