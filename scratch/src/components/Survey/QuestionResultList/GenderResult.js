import {useDispatch,useSelector} from 'react-redux';

import {Button, ButtonGroup,Typography} from "@mui/material";
import { useState } from 'react';
import { ANSWER_GENDER, ANSWER_SUBJECTIVE, CHECK_ANSWER } from '../../redux/Slices/SurveyAnswerSlice';
import { RESPONSE, RESULT } from '../QuestionResultList';

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        backgroundColor:'white',
        border: "1px solid",
        borderRadius:8,
        flexDirection: "column",
        width:'100%',
        padding:'30px',
        marginBottom: '30px',
    },
}

function GenderResult({purpose,id,title,required}){
    const data = useSelector((state)=>state.surveyPersonal.gender);
    console.log("성별성별성별성별성별:",data);
    const dispatch = useDispatch();

    const [gender, setGender] = useState();

    if(purpose == RESPONSE & gender!=undefined){
        dispatch(ANSWER_GENDER({value:gender}));
        dispatch(CHECK_ANSWER());
    }


    return (
        <div>
        <div style={{height:"210px"}}>
            <div style={{ display:'flex',flexDirection:'row' ,justifyContent : "center",paddingTop:"45px" }}>
            <h1 style={{color: "red"}} >*</h1>
                <Typography fontFamily="NanumSquareB"
                style={{marginBottom:'20px',fontSize:"26px"}}>성별을 선택해주세요!</Typography>
            </div>
            <div>
            {purpose!=RESULT? 
            <div>
            <Button variant={gender==="MALE"?"contained":"outlined"} 
            onClick={()=>setGender("MALE")} 
            style={
                gender==="MALE"?
                {width:"130px",
                height:"50px" ,
                marginRight:"10px"
                ,borderRadius:"10px",
                fontSize:"24px",
                backgroundColor:"#FFD701",
                border:"1px solid #D9D9D9",
                color:"black"}
                :
                {width:"130px",
                height:"50px" ,
                marginRight:"10px"
                ,borderRadius:"10px",
                fontSize:"24px",
                backgroundColor:"#FFFFFF",
                border:"1px solid #D9D9D9",
                color:"black"}}>남자</Button>
            <Button variant={gender==="FEMALE"?"contained":"outlined"} 
            onClick={()=>setGender("FEMALE")} 
            style={gender==="FEMALE"?
                {width:"130px",
                height:"50px"
                ,borderRadius:"10px",
                fontSize:"24px",
                backgroundColor:"#FFD701",
                border:"1px solid #D9D9D9",
                color:"black"}
                :
                {width:"130px",
                height:"50px"
                ,borderRadius:"10px",
                fontSize:"24px",
                backgroundColor:"#FFFFFF",
                border:"1px solid #D9D9D9",
                color:"black"}}>여자</Button>
                </div>
            :
            <div>
            <Button variant={data==="MALE"?"contained":"outlined"}  
            style={
                data==="MALE"?
                {width:"130px",
                height:"50px" ,
                marginRight:"10px"
                ,borderRadius:"10px",
                fontSize:"24px",
                backgroundColor:"#FFD701",
                border:"1px solid #D9D9D9",
                color:"black",
                fontFamily:"NanumSquareB"}
                :
                {width:"130px",
                height:"50px" ,
                marginRight:"10px"
                ,borderRadius:"10px",
                fontSize:"24px",
                backgroundColor:"#FFFFFF",
                border:"1px solid #D9D9D9",
                color:"black",
                fontFamily:"NanumSquareR"}}>남자</Button>
            <Button variant={data==="FEMALE"?"contained":"outlined"} 
            style={data==="FEMALE"?
                {width:"130px",
                height:"50px"
                ,borderRadius:"10px",
                fontSize:"24px",
                backgroundColor:"#FFD701",
                border:"1px solid #D9D9D9",
                color:"black",
                fontFamily:"NanumSquareB"}
                :
                {width:"130px",
                height:"50px"
                ,borderRadius:"10px",
                fontSize:"24x",
                backgroundColor:"#FFFFFF",
                border:"1px solid #D9D9D9",
                color:"black",
                fontFamily:"NanumSquareR"}}>여자</Button>
                </div>

            // <ButtonGroup varient="outlined" size="large">
            //         <Button variant={data==="MALE"?"contained":"outlined"} >남자</Button>
            //         <Button variant={data==="FEMALE"?"contained":"outlined"} >여자</Button>
            // </ButtonGroup>
            }          
            </div>
        </div>
        <div style={{borderBottom:"1px solid #000000",width:'700px'}}></div>
        </div>
    )
}

export default GenderResult;



