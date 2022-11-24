import { useState } from "react";
import {useDispatch} from 'react-redux';
import { ANSWER } from '../../redux/Slices/SurveyAnswerSlice';
import {Typography,} from '@mui/material'

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

function MultipleResult({id, title,canMulti,response}) {    
    return (  
        <div style={styles.container}>
            <Typography variant="h4" fontFamily="HallymGothic-Regular" 
            style={{marginBottom:'20px'}}>{title}</Typography>
            <p>{canMulti}</p>
            <ResponseList question_id={id}list={response}/>
        </div> 
        
    );
}

export default MultipleResult;

function ResponseList({question_id,list}) {
    let responseList;
    if(list!=undefined){
        responseList = list.map(
            r => (
                <Response 
                question_id = {question_id}
                response_id = {r.id} 
                title={r.value} 
                />
            )
        )
    }

    return(
        <div>
            {responseList}
        </div>
    )
}

function Response({question_id,response_id,title}){
    const onCheckHandler = (e,id) => {
        console.log(e.currentTarget.checked);
        console.log(id);
        //dispatch({type:ANSWER,question_id:question_id,response_id:id});
    };
    return(
        <div>   
                <input type="checkbox" onChange={(e) => onCheckHandler(e,response_id)}></input>
                <p>{title}</p>
        </div>
    );
}



