import React from "react";
import {Button,Typography,Tooltip} from "@mui/material";
import { useDispatch,useSelector } from 'react-redux'
import {SET_IS_GENDER_QUESTION,SET_IS_AGE_QUESTION} from "../redux/Slices/SurveyOptionSlice"


function SurveyGenderAge() {

    const age=useSelector((state)=>state.surveyOption.askAge);
    const gender=useSelector((state)=>state.surveyOption.askGender);
    const dispatch= useDispatch();

    const handleGenderChange = () => {
        dispatch(SET_IS_GENDER_QUESTION());
    };

    const handleAgeChange = () => {
        dispatch(SET_IS_AGE_QUESTION());
    };

    return(
        <div>
            <Typography variant="h4" fontFamily="HallymGothic-Regular"
            style={{paddingBottom:'5px'}}
            >인적 사항 질문</Typography>
            <Typography variant="h6" fontFamily="HallymGothic-Regular"
            style={{paddingBottom:'20px'}}
            >기본 인적 사항 질문 유무를 골라주세요</Typography>
            <div  style={{display: 'flex', flexDirection: 'row',justifyContent: 'center'}}>
                <div style={{width:'50%'}}>
                    <Tooltip title="성별 질문을 추가할게요!">
                        <Button variant={gender?"contained":"outlined"}
                        onClick={()=>handleGenderChange()}>
                            성별
                        </Button>
                    </Tooltip>
                </div>
                <div style={{width:'50%'}}>
                    <Tooltip title="연령대 질문을 추가할게요!">
                        <Button variant={age?"contained":"outlined"}
                        onClick={()=>handleAgeChange()}>
                            연령
                        </Button>
                    </Tooltip>
                </div>
            </div>
        </div>
    )    
}

export default SurveyGenderAge;