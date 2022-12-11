import { useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { ANSWER, ANSWER_MULTIPLE_CHECKBOX, ANSWER_MULTIPLE_RADIO, CHECK_ANSWER } from '../../redux/Slices/SurveyAnswerSlice';
import {Typography,} from '@mui/material'
import { CHECKBOX, RADIO } from "../../redux/Slices/SurveyMakeSlice";
import { RESPONSE,RESULT } from '../QuestionResultList';

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

function MultipleResult({purpose,q_id,id, title,required,canMulti,type,response}) {  
    return (  
        <div style={styles.container}>
            <div style={{ display:'flex',flexDirection:'row' ,justifyContent : "center" }}>
                {required === true && <h1 style={{color: "red" }} >*</h1> }
                <Typography variant="h4" fontFamily="HallymGothic-Regular" 
                style={{marginBottom:'20px'}}>{title}</Typography>
            </div>
            <p>{canMulti}</p>
            <ResponseList purpose={purpose} q_id={q_id} ordering={id} canMulti={canMulti} type ={type} list={response}/>
        </div> 
        
    );
}

export default MultipleResult;

function ResponseList({purpose,q_id,ordering,canMulti,type,list}) {
    const data = useSelector((state)=>state.surveyPersonal.result);
    const filter_data = data.filter((d)=>d.questionId == q_id);
    console.log("객관:",filter_data);
    
    const dispatch = useDispatch();

    const [answer,setAnswer] = useState([]);
    
    const onCheckHandler = (e) => {
        if(type == RADIO){
            dispatch(ANSWER_MULTIPLE_RADIO({ordering:ordering,value:e.target.id}));
            dispatch(CHECK_ANSWER());
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
            dispatch(ANSWER_MULTIPLE_CHECKBOX({ordering:ordering,value:newAnswer}));
            dispatch(CHECK_ANSWER());
        }
    };


    let responseList;
    if(list!=undefined){
        if(purpose!=RESULT){
            responseList = list.map(
                r => (
                    <div>
                        <input name={ordering} type={ (type == RADIO) || (canMulti==false)  ? "radio":"checkbox"} value={r.value} id={r.optionId}  onChange={(e) => onCheckHandler(e)}/> 
                        <p>{r.value}</p>
                    </div>
    
                )
            )
        }
        else{
            responseList = list.map(
                r => {
                    let result = filter_data.filter((dd)=>dd.answer==r.optionId);
                    return(
                        <div>
                            <input readOnly={true} checked={result.length > 0 ? true :false} name={ordering} type={ (type == RADIO) || (canMulti==false)  ? "radio":"checkbox"} value={r.value} id={r.optionId}/> 
                            <p>{r.value}</p>
                        </div>
        
                    )
                }
            )
        }
    }

    return(
        <div>
            {responseList}
        </div>
    )
}

