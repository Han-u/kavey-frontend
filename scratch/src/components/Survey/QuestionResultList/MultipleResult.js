import { useState } from "react";
import {useDispatch} from 'react-redux';
import { ANSWER } from '../../redux/Slices/SurveyAnswerSlice';
import {Typography,} from '@mui/material'
import { RADIO } from "../../redux/Slices/SurveyMakeSlice";

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

function MultipleResult({purpose,id, title,required,canMulti,type,response}) {  
    return (  
        <div style={styles.container}>
            <div style={{ display:'flex',flexDirection:'row' ,justifyContent : "center" }}>
                {required === true && <h1 style={{color: "red" }} >*</h1> }
                <Typography variant="h4" fontFamily="HallymGothic-Regular" 
                style={{marginBottom:'20px'}}>{title}</Typography>
            </div>
            <p>{canMulti}</p>
            <ResponseList question_id={id} canMulti={canMulti} type ={type} list={response}/>
        </div> 
        
    );
}

export default MultipleResult;

function ResponseList({question_id,canMulti,type,list}) {
    const onCheckHandler = (e) => {
        console.log(e.target);
        console.log(e);
    };


    let responseList;
    if(list!=undefined){
        responseList = list.map(
            r => (
                <div>
                    <input name={question_id} type={ (type == RADIO) || (canMulti==false)  ? "radio":"checkbox"} value={r.value} id={r.optionId}  onChange={(e) => onCheckHandler(e)}/> 
                    <p>{r.value}</p>
                </div>

            )
        )
    }

    return(
        <div>
            {responseList}
        </div>
    )
}

