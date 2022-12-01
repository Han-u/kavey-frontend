import {useDispatch} from 'react-redux';

import {Button, ButtonGroup,Typography} from "@mui/material";
import { useState } from 'react';
import { ANSWER_AGE, ANSWER_SUBJECTIVE } from '../../redux/Slices/SurveyAnswerSlice';
import { RESPONSE } from '../QuestionResultList';


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
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(ANSWER_AGE({value:e.target.value}));
    };


    return (
        <div style={styles.container}>
            <div>
            <div style={{ display:'flex',flexDirection:'row' ,justifyContent : "center" }}>
                {required === true && <h1 style={{color: "red"}} >*</h1> }
                <Typography variant="h4" fontFamily="HallymGothic-Regular" 
                style={{marginBottom:'20px'}}>당신의 나이는?</Typography>
            </div>
            </div>
            
            <div>
                <input type="text" onChange={onChange}/>
            </div>
        </div>
    )
}

export default AgeResult;