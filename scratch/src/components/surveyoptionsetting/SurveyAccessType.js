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
            <Typography variant="h4" fontFamily="HallymGothic-Regular"
            style={{paddingBottom:'5px'}}
            >설문 접근 방법</Typography>
            <Typography variant="h6" fontFamily="HallymGothic-Regular"
            style={{paddingBottom:'20px'}}
            >설문 접근 방법을 선택해주세요</Typography>
            <div  style={{display: 'flex', flexDirection: 'row',justifyContent: 'center'}}>
                <div style={{width:'50%'}}>
                    <Tooltip title="링크가 있는 모든 응답자가 접근할 수 있어요!">
                        <Button variant={isPrivate==="FALSE"?"contained":"outlined"}
                        onClick={(e)=>handleClick(e.target.value)} 
                        value="FALSE">개방형</Button>
                    </Tooltip>                
                    <br></br>
                    <br></br>
                    <label for="limitPerson"><Typography fontFamily="HallymGothic-Regular">설문조사 인원 설정</Typography></label>
                    <input type="number" id="limitPerson" name="limitPerson" placeholder="(0 : 무제한)" value={limitPerson} min="0" disabled = {checkPublic()}  onChange={(e)=>handleChange(e.target.value)}/>                 
                </div>            
                <div style={{width:'50%'}}>
                    <Tooltip title="참여 요청을 받은 응답자만 접근할 수 있어요!">
                        <Button variant={isPrivate==="TRUE"?"contained":"outlined"}
                        onClick={(e)=>handleClick(e.target.value)}
                        value="TRUE">폐쇄형</Button>
                    </Tooltip>
                </div>
            </div>   
        </div>
    )
    
}

export default SurveyAccessType;