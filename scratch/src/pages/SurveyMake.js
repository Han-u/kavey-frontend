import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';

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
  const selectorData = useSelector(state=>state.question);

  const onClick = (e) =>{
    console.log("?");
    console.log(selectorData);
    axios.post('/rest/create',selectorData);
  }


    return ( 
        <div>
            <button onClick={onClick}>send to was</button>
            <div style={{display:"flex"}} >
                <QuestionMakeList/>
                <QuestionResultList/>
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
