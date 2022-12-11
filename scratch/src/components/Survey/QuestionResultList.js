import {useSelector} from 'react-redux';
import { ButtonGroup,Button,Typography } from '@mui/material';
import { OBJECTIVE,MULTIPLE,TRUEFALSE,STAR,RADIO,CHECKBOX } from "../redux/Slices/SurveyMakeSlice";

import ObjectResult from './QuestionResultList/ObjectResult';
import MultipleResult from './QuestionResultList/MultipleResult';
import TrueFalseResult from './QuestionResultList/TrueFalseResult';
import RatingResult from './QuestionResultList/RatingResult';
import GenderResult from './QuestionResultList/GenderResult';
import AgeResult from './QuestionResultList/AgeResult';
import { useState } from 'react';


export const MAKE = "MAKE";
export const RESPONSE = "RESPONSE";
export const RESULT = "RESULT";


function QuestionResultList({purpose,surveyOption,question}) {
    let list = [];

    if(question!==undefined){
        list = question.map(
            r => {
                switch (r.type) {
                    case OBJECTIVE:
                        return <ObjectResult purpose={purpose} q_id={r.questionId} id={r.ordering} title={r.title} required={r.required}/>
                    case MULTIPLE:
                        return <MultipleResult purpose={purpose} q_id={r.questionId}  id={r.ordering} title={r.title} required={r.required} canMulti={r.canMulti} response={r.optionList} />
                    case RADIO:
                        return <MultipleResult purpose={purpose} q_id={r.questionId}  id={r.ordering} title={r.title} required={r.required} canMulti={r.canMulti} type={r.type} response={r.optionList} />
                    case CHECKBOX:
                        return <MultipleResult purpose={purpose} q_id={r.questionId} id={r.ordering} title={r.title} required={r.required} canMulti={r.canMulti} type={r.type} response={r.optionList} />
                    case TRUEFALSE:
                        return <TrueFalseResult purpose={purpose} q_id={r.questionId}  id={r.ordering} title={r.title} required={r.required}/>
                    case STAR:
                        return <RatingResult purpose={purpose} q_id={r.questionId} id={r.ordering} title={r.title} required={r.required}/>
                }
            }
        )
    }

    return (
        <div align="center" style={{width:'800px',backgroundColor:surveyOption.theme}}>
            <div style={{width:'600px',height:'100%'}}>
                <Typography variant="h2" fontFamily="HallymGothic-Regular" style={{paddingTop:'30px',paddingBottom:'30px'}}>{surveyOption.title}</Typography>
                <Typography variant="h4" fontFamily="HallymGothic-Regular" style={{paddingBottom:'30px'}}>{surveyOption.description}</Typography>
                {surveyOption.askGender?<div><GenderResult purpose={purpose}/></div>:null}
                {surveyOption.askAge?<div><AgeResult purpose={purpose}/></div>:null}
                {list}
            </div>
        </div>
    );
}

export default QuestionResultList;