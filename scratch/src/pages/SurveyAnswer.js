import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";
import { CHECK_ANSWER, GET_SURVEY } from "../components/redux/Slices/SurveyAnswerSlice";

import Swal from 'sweetalert2'
import {useNavigate, useParams} from 'react-router-dom'

import { Typography,Button} from "@mui/material";
import QuestionResultList, { RESPONSE } from "../components/Survey/QuestionResultList";
import produce from 'immer';
import { CHECKBOX } from '../components/redux/Slices/SurveyMakeSlice';
import { useEffect } from 'react';


function SurveyAnswer() {

    const { surveyId } = useParams();

    const dispatch = useDispatch();
    const navigate=useNavigate();

    const answer = useSelector((state)=>state.surveyAnswer.answer);
    const status = useSelector((state)=>state.surveyAnswer.status);


    const getPage = async () => { axios.get("/api/survey/"+parseInt(surveyId)+"/page")
    .then(response => {
      console.log(response.data);
      dispatch(GET_SURVEY({data:response.data}));
      dispatch(CHECK_ANSWER());

    })
    .catch(error => {
    })
    .then(function() {
    });
    }

    const sendAnswer = () => {
      console.log(answer);
      let reChange = [];
      const newMulti = produce(answer.surveyMultiple,(draftState) => {
        draftState.map((e,id)=>{
          if(e.questionType==CHECKBOX){
            const plus = draftState[id];
            plus.optionId.map((ee)=>{
              reChange.push({
                questionId:e.questionId,
                optionId:ee,
                questionType:CHECKBOX,
              })
            });
            draftState.splice(id,1);
          }
        })
      })
      const filnalMulti = newMulti.concat(reChange);
      const finalAnswer = produce(answer,(draftState) => {
        draftState.surveyMultiple = filnalMulti;
      })
      axios.post("/api/survey/"+parseInt(surveyId)+"/submit",finalAnswer).then(response => {
      });
    }

      useEffect(() => {
        getPage();
      }, [])


    const handleClick=()=>{
      if(status == true){
        Swal.fire({
          title: '제출하시겠어요?',
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '네',
          cancelButtonText:'아니요'
        }).then((result) => {
            if (result.isConfirmed) {
              sendAnswer();
            }
        })
      }
      else{
        Swal.fire({
          title: '양식을 채워주세요',
          icon: 'warning',
          confirmButtonColor: '#d33',
          confirmButtonText: '네',
          
        })
      }
        
    };

    return ( 
      <div align="center" style={{backgroundColor:"white"}}>
        <AnswerQuestionResultList/>
        <Button variant="contained" 
        style={{marginTop:"50px"}}
        onClick={handleClick}>제출하기</Button>
      </div>
    );

    
}

export default SurveyAnswer;





function AnswerQuestionResultList(){
  const question = useSelector((state)=>state.surveyAnswer.question);
  const surveyOption=useSelector((state)=>state.surveyAnswer.option);


  return (
  <QuestionResultList purpose={RESPONSE} surveyOption={surveyOption} question={question}/>
  );

}
