import {useSelector} from 'react-redux';

import { OBJECTIVE,MULTIPLE,TRUEFALSE,STAR,UPDATE_ORDER } from "../redux/Slices/SurveyMakeSlice"
import {useDispatch} from 'react-redux';

import ReactDragList from 'react-drag-list'

import Make from './QuestionMakeList/Make';
import MultipleMake from './QuestionMakeList/MultipleMake';




function QuestionMakeList() {
    const dispatch = useDispatch();

    const data = useSelector((state)=>state.surveyMake.question);
    const handleDragEvent = (e) => {
        dispatch(UPDATE_ORDER({prev:e.oldIndex,next:e.newIndex}));
    }   

    let list = [];
    if(data.length!==0){
        list = data.map(
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
    }
    const renderData = <ReactDragList
    dataSource={list} 
    row={(record, index) => 
    <div style={{width:'600px',backgroundColor:'white'}}>{record}</div>} onUpdate={handleDragEvent} />            
    


    return (
        <div >
            {renderData}
        </div>
    );
}




export default QuestionMakeList;