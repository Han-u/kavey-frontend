import React from "react";
import {Button,Typography,Tooltip} from "@mui/material";
import { useDispatch,useSelector } from 'react-redux'
import {SET_PUBLIC_PRIVATE,SET_PEOPLE_LIMIT} from "../redux/Slices/SurveyOptionSlice"

function SurveyAccessType() {
    const isPrivate=useSelector((state)=>state.surveyOption.isPrivate);
    const limitPerson=useSelector((state)=>state.surveyOption.limitPerson);

    const dispatch=useDispatch();

    const handleClick = (e) => {
        dispatch(SET_PUBLIC_PRIVATE(e));    
    };   


    const checkPublic = ()=>{
        if (isPrivate === "FALSE")
            return "";
        else
            return "disabled";
    }
    const handleChange = (e) => {
        dispatch(SET_PEOPLE_LIMIT(e));
    }

    return(
        <div>
        <div style={{height:"210px",display:"flex",
      flexDirection:"row",width:"100%"}}>
            <div style={{width:"274px"}}>
            <Typography variant="h4" fontFamily="NanumSquare"
            style={{paddingBottom:'5px',fontWeight:"550",fontSize:"24px",marginTop:"30px"}}>
            설문 접근 방법</Typography>
            </div>
            <div  style={{marginTop:"30px",float:"left"}}>
                <div style={{float:"left"}}>
                    <Tooltip title="링크가 있는 모든 응답자가 접근할 수 있어요!">
                        <Button variant={isPrivate==="FALSE"?"contained":"outlined"}
                        onClick={(e)=>handleClick(e.target.value)} 
                        style={{width:"80px",marginRight:"10px",height:"30px"}}
                        value="FALSE">개방형</Button>
                    </Tooltip>    
                    <Tooltip title="참여 요청을 받은 응답자만 접근할 수 있어요!">
                        <Button variant={isPrivate==="TRUE"?"contained":"outlined"}
                        onClick={(e)=>handleClick(e.target.value)}
                        style={{width:"80px",height:"30px"}}
                        value="TRUE">폐쇄형</Button>
                    </Tooltip>            
                </div>            
                <div>
                    <br></br><br></br>
                    <label for="limitPerson" style={{float:"left"}}>
                        <Typography fontFamily="NanumSquare">설문조사 인원 설정</Typography>
                    </label>
                    <br></br>
                    <input type="number" id="limitPerson" name="limitPerson" placeholder="(0 : 무제한)" value={limitPerson} min="0" disabled = {checkPublic()}  onChange={(e)=>handleChange(e.target.value)}/>
                </div>
            </div>   
        </div>
        <div style={{borderBottom:"1px solid #000000",width:'70%'}}></div>
        </div>
    )
    
}

export default SurveyAccessType;