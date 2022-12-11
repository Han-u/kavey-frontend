import {useDispatch,useSelector} from 'react-redux';

import {Button, ButtonGroup,Typography} from "@mui/material";
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
        dispatch(ANSWER_AGE({value:e.target.value}));
        dispatch(CHECK_ANSWER());
    };


    return (
        <div style={styles.container}>
            <div>
            <div style={{ display:'flex',flexDirection:'row' ,justifyContent : "center" }}>
                <h1 style={{color: "red"}} >*</h1>
                <Typography variant="h4" fontFamily="HallymGothic-Regular" 
                style={{marginBottom:'20px'}}>당신의 나이는?</Typography>
            </div>
            </div>
            
            <div>
                {purpose!=RESULT?  <input type="text" onChange={onChange}/>: <input type="text" value={data} readOnly={true}/>}    
            </div>
        </div>
    )
}

export default AgeResult;