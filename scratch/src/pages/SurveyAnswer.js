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
import {SET_THEME_TEST} from "../components/redux/Slices/SurveyOptionSlice"


function SurveyAnswer() {
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = 'http://localhost:3000/login';
    const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const { surveyId } = useParams();

    const dispatch = useDispatch();
    const navigate=useNavigate();

    const answer = useSelector((state)=>state.surveyAnswer.answer);
    const status = useSelector((state)=>state.surveyAnswer.status);

    useEffect(() => {
      const token = window.localStorage.getItem('token');
      if(token===null){
        console.log("토큰없다");
        window.localStorage.setItem('sid',surveyId);
        window.location.href=KAKAO_AUTH_URI;
      }
    
    }, [])
      
    const getPage = async () => { axios.get("/api/survey/"+parseInt(surveyId)+"/page")
    .then(response => {
      console.log(response.data);
      dispatch(GET_SURVEY({data:response.data}));
      dispatch(CHECK_ANSWER());
      console.log(response.data.theme)
      dispatch(SET_THEME_TEST(response.data.theme));
    })
    .catch(error => {
      const code = error.response.data.code;
      const message = error.response.data.message;
      console.log(code,message);
      navigate('/error/'+message);
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
      const url = "/api/survey/"+parseInt(surveyId)+"/submit";
      const token = window.localStorage.getItem('token');
      console.log(token); 
        const res = axios.post(url,finalAnswer,
        {headers: {
            Authorization: token
        }});
        res.then(
          (res) => console.log(surveyId+"설문응답 완료")
        )
        .catch(error => {
          const code = error.response.data.code;
          const message = error.response.data.message;
          console.log(code,message);
          navigate('/error/'+message);
        })


      //axios.post("/api/survey/"+parseInt(surveyId)+"/submit",finalAnswer).then(response => {});
    }

      useEffect(() => {
        getPage();
      }, [])


    const handleClick=()=>{
      // console.log(window.localStorage.getItem('token'))
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
      <div align="center" style={{backgroundColor: '#F5F5F5'}}>
        <AnswerQuestionResultList/>
          <div style={{padding: 50}}>
              <Button variant="contained" onClick={handleClick}>제출하기</Button>
          </div>
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

