import {useSelector} from 'react-redux';
import { Typography,Button} from "@mui/material";
import { OBJECTIVE,CHECKBOX,TRUEFALSE,STAR } from "../redux/Slices/SurveyMakeSlice";

import ObjectResult from './QuestionResultList/ObjectResult';
import MultipleResult from './QuestionResultList/MultipleResult';
import TrueFalseResult from './QuestionResultList/TrueFalseResult';
import RatingResult from './QuestionResultList/RatingResult';




function AnswerResultList() {
    const data = useSelector((state)=>state.surveyAnswer.question);
    const surveyOption=useSelector((state)=>state.surveyAnswer.option);

    let list = NaN;

    if(data!==undefined){
        list = data.map(
            r => {
                switch (r.type) {
                    case OBJECTIVE:
                        return <ObjectResult id={r.ordering} title={r.title} required={r.required} />
                    case CHECKBOX:
                        return <MultipleResult id={r.ordering} title={r.title} required={r.required} canMulti={r.canMulti} response={r.optionList}/>
                    case TRUEFALSE:
                        return <TrueFalseResult id={r.ordering}  title={r.title} required={r.required}/>
                    case STAR:
                        return <RatingResult id={r.ordering} title={r.title} required={r.required}/>
                }
            }
        )
    }
    
    return (
        <div align="center" style={{width: '100%'}}>
            <div align="center" style={{width:'800px',backgroundColor:surveyOption.theme}}>
                <div style={{width:'600px',height:'100%'}}>
                    <Typography variant="h2" fontFamily="HallymGothic-Regular" style={{paddingTop:'30px',paddingBottom:'30px'}}>{surveyOption.title}</Typography>
                    <Typography variant="h4" fontFamily="HallymGothic-Regular" style={{paddingBottom:'30px'}}>{surveyOption.description}</Typography>
                    {surveyOption.isGenderQuestion?<div>여기 성별 질문</div>:null}
                    {surveyOption.isAgeQuestion?<div>여기 나이 질문</div>:null}
                    {list}
                </div>
            </div>
        </div>
    );
}

export default AnswerResultList;