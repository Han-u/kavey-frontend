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
  DELETE }  from '../components/redux/Slices/SurveyMakeSlice';


import QuestionMakeList from '../components/Survey/QuestionMakeList';
import QuestionResultList from '../components/Survey/QuestionResultList';
  



//style
const tempStyle={
    display:"flex",
}



function SurveyMake() {
  const step=useSelector((state)=>state.surveyOption.step);

  
  const selectorData = useSelector(state=>state.question);

  const onClick = (e) =>{
    console.log("?");
    console.log(selectorData);
    axios.post('/rest/create',selectorData);
  }


    return ( 
        <div style={{height:'100%',width:'100%',backgroundColor:'lightgray'}}>
            <div align='center' style={{height:'120px',backgroundColor:'white'}}>
                <div style={{width:"50%",padding:"30px"}}>
                    <HorizontalLinearStepper step={step}></HorizontalLinearStepper>
                </div>
            </div>
            <button onClick={onClick}>send to was</button>
            <div> 
                <PlusButton/>
                <DeleteButton/>
            </div>
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


//button 
function PlusButton(props){
    const dispatch = useDispatch();
    return(
      <div>
        <input type="button" value="주관식" onClick={() => {
          dispatch({type : CREATE_OBJECTIVE});
        }}></input>
        <input type="button" value="객관식" onClick={() => {
          dispatch({type : CREATE_MULTIPLE});
        }}></input>
        <input type="button" value="찬반" onClick={() => {
          dispatch({type : CREATE_TRUEFALSE});
        }}></input>
        <input type="button" value="별점" onClick={() => {
          dispatch({type : CREATE_STAR});
        }}></input>
       </div>
    );
}

function DeleteButton(props){
    const dispatch = useDispatch();
    return(
      <div>
        <input type="button" value="+" onClick={() => {
          dispatch({type : DELETE});
        }}></input>
       </div>
    );
}

export default SurveyMake;