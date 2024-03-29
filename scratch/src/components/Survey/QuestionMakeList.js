import {useSelector} from 'react-redux';

import { OBJECTIVE,MULTIPLE,TRUEFALSE,STAR,UPDATE_ORDER } from "../redux/Slices/SurveyMakeSlice"
import {useDispatch} from 'react-redux';

import ReactDragList from 'react-drag-list'

import Make from './QuestionMakeList/Make';
import MultipleMake from './QuestionMakeList/MultipleMake';
import GenderResult from './QuestionResultList/GenderResult';
import AgeResult from './QuestionResultList/AgeResult';




function QuestionMakeList() {
    const dispatch = useDispatch();
    var questionlist=[]
    var list=[]
    const data = useSelector((state)=>state.surveyMake.question);

    const age = useSelector((state)=>state.surveyOption.askAge);
    const gender = useSelector((state)=>state.surveyOption.askGender);

    const handleDragEvent = (e) => {
        dispatch(UPDATE_ORDER({prev:e.oldIndex,next:e.newIndex}));
    }   

    if(data.length!==0){
        questionlist = data.map(
            r => {
                switch (r.type) {
                    case OBJECTIVE:
                        return <Make id={r.ordering} title={r.title+" 주관식"} required={r.required}/>
                    case MULTIPLE:
                        return <MultipleMake id={r.ordering} title={r.title+" 객관식"} required={r.required}  canMulti={r.canMulti} response={r.optionList}/> 
                    case TRUEFALSE:
                        return <Make id={r.ordering} title={r.title+" 찬반"} required={r.required} />
                    case STAR:
                        return <Make id={r.ordering} title={r.title+" 별점"} required={r.required} /> 
                }
            }
        )
        list=questionlist.concat();
    }
    const renderData = <ReactDragList
    dataSource={list} 
    row={(record, index) => 
    <div style={{width:'600px',backgroundColor:'white', borderRadius: 20}}>{record}</div>} onUpdate={handleDragEvent} />
    
        

    return (
        <div >
            {renderData}
        </div>
    );
}




export default QuestionMakeList;