import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import HorizontalLinearStepper from "../components/surveyoptionsetting/public/Stepper"

import { CREATE_OBJECTIVE,
  CREATE_MULTIPLE,
  UPDATE_MULTIPLE_CANMULTI,
  UPDATE_MULTIPLE_CREATE_RESPONSE,
  UPDATE_MULTIPLE_UPDATE_RESPONSE,
  UPDATE_MULTIPLE_DELETE_RESPONSE,
  CREATE_TRUEFALSE,
  CREATE_STAR,
  UPDATE_TITLE,
  DELETE, 
  MULTIPLE}  from '../components/redux/Slices/SurveyMakeSlice';


import QuestionMakeList from '../components/Survey/QuestionMakeList';
import QuestionResultList from '../components/Survey/QuestionResultList';
import produce from 'immer';
  



//style
const tempStyle={
    display:"flex",
}


//이전 페이지에서 갖고올 dummy data
let dummy = {
  "user_id" : 1,
  "title" : "어떤 동물이 좋아?",
  "description": "테스트 설문입니다",
  "ask_age" : "TRUE",
  "ask_gender" : "TRUE",
  "is_private" : "FALSE",
  "limit_person" : "100",
  "start_date" : "2021-01-01T00:00",
  "end_date" : "9999-01-01T00:00",
  "theme" : 1,
  "question_number" :  2,
  "question_list" : []
}

function SurveyMake() {
  //front -> back example code 
  const step=useSelector((state)=>state.surveyOption.step);
  const selectorData = useSelector((state)=>state.surveyMake.question);

  const onClick = (e) =>{
    console.log(selectorData);
    

    const newState = produce(dummy,(draftState) => {
      draftState.question_list = selectorData;
      draftState.question_number = draftState.question_list.length;
      
      /*객관식 ordering수정 필요*/
      /*
      draftState.question_list.map((data,id)=>{
        if(data.type==MULTIPLE){
          let after = data.option_list.map((dd,ii)=>dd)
          console.log(after);
          draftState.question_list[id].option_list = after;
        }
      })
      */
  })
    console.log(newState);
    axios.post('/survey',newState);
  }


    return ( 
        <div style={{height:'100%',width:'100%',backgroundColor:'lightgray'}}>
            <div align='center' style={{height:'120px',backgroundColor:'white'}}>
                <div style={{width:"50%",padding:"30px"}}>
                    <HorizontalLinearStepper step={step}></HorizontalLinearStepper>
                </div>
            </div>
            <button onClick={onClick}>send to was</button>
            <div style={{display:"flex",width:'100%'}} >
                <div style={{marginLeft:'auto',marginRight:'auto'}}>
                  <QuestionMakeList/>
                </div>
                <div style={{marginLeft:'auto',marginRight:'auto'}}>
                  <QuestionResultList/>
                </div>
            </div>
        </div>
     );
}

export default SurveyMake;


//button 
export function PlusButton({id}){
    const dispatch = useDispatch();
    return(
      <div>
        <input type="button" value="주관식" onClick={() => {
          dispatch(CREATE_OBJECTIVE({id:id}));
        }}></input>
        <input type="button" value="객관식" onClick={() => {
          dispatch(CREATE_MULTIPLE({id:id}));
        }}></input>
        <input type="button" value="찬반" onClick={() => {
          dispatch(CREATE_TRUEFALSE({id:id}));
        }}></input>
        <input type="button" value="별점" onClick={() => {
          dispatch(CREATE_STAR({id:id}));
        }}></input>
       </div>
    );
}

export function DeleteButton({id}){
    const dispatch = useDispatch();
    return(
      <div>
        <input type="button" value="+" onClick={() => {
          dispatch(DELETE({id:id}));
        }}></input>
       </div>
    );
}
