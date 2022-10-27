import {React,useState} from 'react';
import ThemeButton from './surveytitle/ThemeButton'

function SurveyTitle(props){

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");

    return( 
            <div align="center">       
                <div style={{display: 'flex', flexDirection: 'row',float:'right'}}>
                    <ThemeButton theme="춘식" themeName="춘식"/>
                    <ThemeButton theme="라이언" themeName="라이언"/>
                    <ThemeButton theme="죠르디" themeName="죠릐"/>
                    <ThemeButton theme="어피치" themeName="어피치"/>
                </div>
                <h2 style={{clear:'both'}}>{props.title}</h2>
                <input type="text" name="title" placeholder="설문 제목을 입력하세요" onChange={(e)=>setTitle(e.target.value)} value={title}></input>
                <br></br>
                <input type="text" name="description" placeholder="설문 상세 설명을 입력하세요" onChange={(e)=>setDescription(e.target.value)} value={description}></input>
                {/* <button onClick={()=>console.log(title)}></button> */}
            </div>        
    )
};

export default SurveyTitle;