import { useState } from "react";
import {useDispatch} from 'react-redux';
import { ANSWER, ANSWER_MULTIPLE_CHECKBOX, ANSWER_MULTIPLE_RADIO, CHECK_ANSWER } from '../../redux/Slices/SurveyAnswerSlice';
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
        <div>
        <div>
            <div style={{ display:'flex',flexDirection:'row' ,justifyContent : "center",paddingTop:"45px" }}>
                {required === true && <h2 style={{color: "red"}} >*</h2> }
                <Typography fontFamily="NanumSquare"
                style={{marginBottom:'20px',fontSize:"26px"}}>{title}</Typography>
            </div>
            <p>{canMulti}</p>
            <ResponseList purpose={purpose} question_id={id} canMulti={canMulti} type ={type} list={response}/>
        </div> 
        <div style={{borderBottom:"1px solid #000000",width:'824px'}}></div>
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
            dispatch(ANSWER_MULTIPLE_CHECKBOX({ordering:question_id,value:newAnswer}));
            dispatch(CHECK_ANSWER());
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

