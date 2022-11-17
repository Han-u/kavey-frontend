import {useSelector} from 'react-redux';

import { OBJECTIVE,MULTIPLE,TRUEFALSE,STAR } from "../redux/Slices/SurveyMakeSlice";

import ObjectResult from './QuestionResultList/ObjectResult';
import MultipleResult from './QuestionResultList/MultipleResult';
import TrueFalseResult from './QuestionResultList/TrueFalseResult';
import RatingResult from './QuestionResultList/RatingResult';




function QuestionResultList() {
    const data = useSelector((state)=>state.surveyMake.question);
    let list = NaN;
    if(data!==undefined){
        list = data.map(
            r => {
                switch (r.type) {
                    case OBJECTIVE:
                        return <ObjectResult id={r.id} title={r.title} />
                    case MULTIPLE:
                        return <MultipleResult id={r.id} title={r.title} canMulti={r.canMulti} response={r.response}/>
                    case TRUEFALSE:
                        return <TrueFalseResult id={r.id} title={r.title}/>
                    case STAR:
                        return <RatingResult id={r.id} title={r.title}/>
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

export default QuestionResultList;