import React, { useRef, useState }from 'react';

function QuesctionTitle({onSetting}){
    const [titleState,setTitle] = useState("1.질문이름");
    const onchange = (e) =>{
        console.log("title change",e.target.value);
        setTitle(e.target.value);
    }

    const onKeyPress = (e) => {
        if(e.key == 'Enter'){
            onSetting(titleState);
            //style 변환 코드 
        }
    }

    return (
        <div>
            <input type="text" onChange={onchange} onKeyPress={onKeyPress}/>
        </div>
    );
};

export default QuesctionTitle;