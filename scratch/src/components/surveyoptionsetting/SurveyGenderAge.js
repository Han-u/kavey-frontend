import React from "react";
import {Button,Typography} from "@mui/material";
import { useDispatch,useSelector } from 'react-redux'
import {SET_IS_GENDER_QUESTION,SET_IS_AGE_QUESTION} from "../redux/Slices/SurveyOptionSlice"


function SurveyGenderAge() {

    const age=useSelector((state)=>state.surveyOption.isAgeQuestion);
    const gender=useSelector((state)=>state.surveyOption.isGenderQuestion);
    const dispatch= useDispatch();

    const handleGenderChange = () => {
        dispatch(SET_IS_GENDER_QUESTION());
    };

    const handleAgeChange = () => {
        dispatch(SET_IS_AGE_QUESTION());
    };

    return(
        <div>
            <Typography variant="h4">인적 사항 질문 추가</Typography>
            <div  style={{display: 'flex', flexDirection: 'row',justifyContent: 'center'}}>
                <div style={{width:'50%'}}>
                    <Button variant={gender?"contained":"outlined"}
                    onClick={()=>handleGenderChange()}
                    >성별</Button>
                </div>
                <div style={{width:'50%'}}>
                    <Button variant={age?"contained":"outlined"}
                    onClick={()=>handleAgeChange()}
                    >연령</Button>
                </div>
            </div>
        </div>
    )    
}

export default SurveyGenderAge;