import {useSelector} from 'react-redux';

import { OBJECTIVE,MULTIPLE,TRUEFALSE,STAR } from "../redux/Slices/SurveyMakeSlice";

import ObjectResult from './QuestionResultList/ObjectResult';
import MultipleResult from './QuestionResultList/MultipleResult';
import TrueFalseResult from './QuestionResultList/TrueFalseResult';
import RatingResult from './QuestionResultList/RatingResult';




function AnswerResultList() {
    const data = useSelector((state)=>state.surveyAnswer.question);
    let list = NaN;

    if(data!==undefined){
        list = data.map(
            r => {
                switch (r.type) {
                    case OBJECTIVE:
                        return <ObjectResult id={r.ordering} title={r.title} />
                    case MULTIPLE:
                        return <MultipleResult id={r.ordering} title={r.title} canMulti={r.canMulti} response={r.optionList}/>
                    case TRUEFALSE:
                        return <TrueFalseResult id={r.ordering} title={r.title}/>
                    case STAR:
                        return <RatingResult id={r.ordering} title={r.title}/>
                }
            }
        )
    }
    
    return (
        <div style={{backgroundColor:'lightgray'}}>
        <div style={{width:'600px',backgroundColor:'white',margin:'auto'}}>
            {list}
        </div>
        </div>
    );
}

export default AnswerResultList;