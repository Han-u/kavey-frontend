import { useState } from "react";
import {useDispatch} from 'react-redux';
import { ANSWER, ANSWER_MULTIPLE_CHECKBOX, ANSWER_MULTIPLE_RADIO } from '../../redux/Slices/SurveyAnswerSlice';
import {Typography,} from '@mui/material'
import { CHECKBOX, RADIO } from "../../redux/Slices/SurveyMakeSlice";

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
            <ResponseList purpose={purpose} question_id={id} canMulti={canMulti} type ={type} list={response}/>
        </div> 
        
    );
}

export default MultipleResult;

function ResponseList({purpose,question_id,canMulti,type,list}) {
    const dispatch = useDispatch();

    const [answer,setAnswer] = useState([]);
    
    const onCheckHandler = (e) => {
        if(type == RADIO){
            dispatch(ANSWER_MULTIPLE_RADIO({ordering:question_id,value:e.target.id}));
        }
        else if(type==CHECKBOX){
            let newAnswer = answer;
            if(e.target.checked==true){
                newAnswer= [...newAnswer,{optionId:e.target.id}];
            }
            else if(e.target.checked==false){
                const id = newAnswer.findIndex(ee=>ee.optionId==e.target.id);
                newAnswer.splice(id,1);
            }  
            setAnswer(newAnswer);
            dispatch(ANSWER_MULTIPLE_CHECKBOX({ordering:question_id,value:newAnswer}));
        }
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

