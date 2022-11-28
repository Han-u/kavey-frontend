import AnswerResultList from "../components/Survey/AnswerResultList";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { GET_SURVEY } from "../components/redux/Slices/SurveyAnswerSlice";


let FLAG = -1;
function SurveyAnswer() {
    const answer = useSelector((state)=>state.surveyAnswer.answer);
    const dispatch = useDispatch();

    if(FLAG==-1){
      axios.get("/api/survey/5/page").then(response => {
        //console.log(response.data);
        dispatch(GET_SURVEY({data:response.data}));
      });
    FLAG = 1; 
    }
    
    const onClick = (e) =>{
      console.log(answer);
      axios.post("/api/survey/5/submit",answer).then(response => {
        //console.log(response.data);
      });
    }
    return ( 
        <div>
          <AnswerResultList/>
          <button onClick={()=>{onClick()}}>제출</button>
        </div>
     );
}

export default SurveyAnswer;