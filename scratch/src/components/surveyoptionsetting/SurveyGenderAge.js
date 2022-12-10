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
        <div style={{height:"210px",display:"flex",
      flexDirection:"row",width:"100%"}}>
            <div style={{width:"274px"}}>
            <Typography variant="h4" fontFamily="NanumSquare"
            style={{paddingBottom:'5px',fontWeight:"550",fontSize:"24px",marginTop:"30px",marginRight:"50px"}}>
            기본 질문</Typography>
            </div>
            <div  style={{marginTop:"30px",float:"left"}}>
                <div style={{float:"left"}}>
                <Tooltip title="성별 질문을 추가할게요!">
                        <Button variant={gender?"contained":"outlined"}
                        style={{width:"80px",height:"30px",marginRight:"10px"}}
                        onClick={()=>handleGenderChange()}>
                            성별
                        </Button>
                    </Tooltip> 
                    <Tooltip title="연령대 질문을 추가할게요!">
                        <Button variant={age?"contained":"outlined"}
                        style={{width:"80px",height:"30px"}}
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