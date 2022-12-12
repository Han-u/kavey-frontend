import {useDispatch,useSelector} from 'react-redux';

import {FormControl,InputLabel,Select,MenuItem,Typography} from "@mui/material";
import { useState } from 'react';
import { ANSWER_AGE, ANSWER_SUBJECTIVE, CHECK_ANSWER } from '../../redux/Slices/SurveyAnswerSlice';
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


function AgeResult({purpose,id,title,required}) {
    const data = useSelector((state)=>state.surveyPersonal.age);
    console.log("나이나이나ㅣ이나이나인:",data);
    const dispatch = useDispatch();

    const onChange = (e) => {
        // console.log(e.target.value);
        dispatch(ANSWER_AGE({value:e.target.value}));
        dispatch(CHECK_ANSWER());
    };


    return (
        <div>
            <div style={{height:"210px"}}>
                <div style={{ display:'flex',flexDirection:'row' ,justifyContent : "center",paddingTop:"45px" }}>
                <h1 style={{color: "red"}} >*</h1>
                    <Typography fontFamily="NanumSquareB"
                    style={{marginBottom:'20px',fontSize:"26px"}}>나이대를 골라주세요!</Typography>
                </div>
                <div>
                    {purpose!==RESULT? 
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={data}
                            label="Age"
                            onChange={onChange}
                        >
                            <MenuItem value={0}>10대 미만</MenuItem>
                            <MenuItem value={10}>10대</MenuItem>
                            <MenuItem value={20}>20대</MenuItem>
                            <MenuItem value={30}>30대</MenuItem>
                            <MenuItem value={40}>40대</MenuItem>
                            <MenuItem value={50}>50대</MenuItem>
                            <MenuItem value={60}>60대</MenuItem>
                            <MenuItem value={70}>70대</MenuItem>
                            <MenuItem value={80}>80대</MenuItem>
                            <MenuItem value={90}>90대</MenuItem>
                        </Select>
                    </FormControl>
                    : 
                    <Typography fontFamily="NanumSquareB"
                    style={{fontSize:"40px"}}>{data}</Typography>
                    // <input type="text" value={data} readOnly={true}/>
                    }    
                </div>
            </div>
            <div style={{borderBottom:"1px solid #000000",width:'824px'}}></div>
        </div>
    )
}

export default AgeResult;