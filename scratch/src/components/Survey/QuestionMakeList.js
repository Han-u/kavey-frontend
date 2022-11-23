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
        console.log(e);
        dispatch({type:UPDATE_ORDER,prev:e.oldIndex,next:e.newIndex});
    }   


    let list = [];
    if(data.length!==0){
        list = data.map(
            r => {
                switch (r.type) {
                    case OBJECTIVE:
                        return <Make id={r.order} title={r.title+" 주관식"} />
                    case MULTIPLE:
                        return <MultipleMake id={r.order} title={r.title+" 객관식"} canMulti={r.canMulti} response={r.response}/> 
                    case TRUEFALSE:
                        return <Make id={r.order} title={r.title+" 찬반"} />
                    case STAR:
                        return <Make id={r.order} title={r.title+" 별점"} /> 
                }
            }
        )
    }

    


    return (
        <div style={{width:'600px',backgroundColor:'white'}}>
            <ReactDragList
            dataSource={list}
            row={(record, index) => <div>{record}</div>}
            onUpdate={handleDragEvent}
            />
        </div>
    );
}




export default QuestionMakeList;