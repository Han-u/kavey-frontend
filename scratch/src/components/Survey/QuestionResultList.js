import {useSelector} from 'react-redux';

import { OBJECTIVE,MULTIPLE,TRUEFALSE,STAR } from "../redux/Slices/SurveyMakeSlice";

import ObjectResult from './QuestionResultList/ObjectResult';
import MultipleResult from './QuestionResultList/MultipleResult';
import TrueFalseResult from './QuestionResultList/TrueFalseResult';
import RatingResult from './QuestionResultList/RatingResult';




function QuestionResultList() {
    const data = useSelector((state)=>state.surveyMake.question);
    let list = [];
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
        <div style={{width:'600px',backgroundColor:'white',height:'100%'}}>
            {list}
        </div>
    );
}

export default QuestionResultList;