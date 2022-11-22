import { useState } from "react";

import {useDispatch} from 'react-redux';
import { ANSWER } from '../../redux/Slices/SurveyAnswerSlice';

const styles = {
    container: {
        border:3,
        borderStyle: "solid",
        padding: 15,
    },
}

function MultipleResult({id, title,canMulti,response}) {    
    return (  
        <div style={styles.container}>
            <h1>{title}</h1>
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



