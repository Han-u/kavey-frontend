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
            <div> 
                <PlusButton/>
                <DeleteButton/>
            </div>
            <div style={{display:"flex"}} >
                <QuestionMakeList/>
                <QuestionResultList/>
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