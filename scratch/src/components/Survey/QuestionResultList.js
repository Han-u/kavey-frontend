import {useSelector} from 'react-redux';
import { ButtonGroup,Button,Typography } from '@mui/material';
import { OBJECTIVE,MULTIPLE,TRUEFALSE,STAR } from "../redux/Slices/SurveyMakeSlice";

import ObjectResult from './QuestionResultList/ObjectResult';
import MultipleResult from './QuestionResultList/MultipleResult';
import TrueFalseResult from './QuestionResultList/TrueFalseResult';
import RatingResult from './QuestionResultList/RatingResult';




function QuestionResultList() {
    const surveyOption=useSelector((state)=>state.surveyOption);
    const data = useSelector((state)=>state.surveyMake.question);
    
    let list = [];

    if(data!==undefined){
        list = data.map(
            r => {
                switch (r.type) {
                    case OBJECTIVE:
                        return <ObjectResult id={r.ordering} title={r.title} />
                    case MULTIPLE:
                        return <MultipleResult id={r.ordering} title={r.title} canMulti={r.canMulti} response={r.option_list}/>
                    case TRUEFALSE:
                        return <TrueFalseResult id={r.ordering} title={r.title}/>
                    case STAR:
                        return <RatingResult id={r.ordering} title={r.title}/>
                }
            }
        )
    }
    console.log(list);

    return (
        <div align="center" style={{width:'800px',backgroundColor:surveyOption.themeColor}}>
            <div style={{width:'600px',height:'100%'}}>
                <Typography variant="h2" fontFamily="HallymGothic-Regular" style={{paddingTop:'30px',paddingBottom:'30px'}}>{surveyOption.title}</Typography>
                <Typography variant="h4" fontFamily="HallymGothic-Regular" style={{paddingBottom:'30px'}}>{surveyOption.description}</Typography>
                {surveyOption.isGenderQuestion?<div>여기 성별 질문</div>:null}
                {surveyOption.isAgeQuestion?<div>여기 나이 질문</div>:null}
                {list}
            </div>
        </div>
    );
}

export default QuestionResultList;