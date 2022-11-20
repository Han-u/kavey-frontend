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
                        return <ObjectResult id={r.order} title={r.title} />
                    case MULTIPLE:
                        return <MultipleResult id={r.order} title={r.title} canMulti={r.canMulti} response={r.response}/>
                    case TRUEFALSE:
                        return <TrueFalseResult id={r.order} title={r.title}/>
                    case STAR:
                        return <RatingResult id={r.order} title={r.title}/>
                }
            }
        )
    }
    
    return (
        <div>
            {list}
        </div>
    );
}

export default AnswerResultList;