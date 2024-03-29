import { useParams } from "react-router-dom";
import { getSurveyResult, RESULT_SURVEY ,getPersonalResult, RESULT_PERSONAL } from './other/Query';
import {useQuery} from 'react-query'
import { Button,CircularProgress } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { GET_SURVEY } from "../redux/Slices/SurveyAnswerSlice";
import QuestionResultList, { RESULT } from "../Survey/QuestionResultList";
import produce from "immer";
import { GET_RESULT } from "../redux/Slices/SurveyPersonalResultSlice";
import ErrorQuery from "../Error/ErrorQuery";

function ResultPersonalAnswer() {
  const { surveyId,attendId } = useParams();
  const {isLoading,data,isError,error} =  useQuery(RESULT_SURVEY , ()=>getSurveyResult(parseInt(surveyId)));
 

  if(isLoading){
    return <CircularProgress />
  }
  if(isError){
    return <ErrorQuery log="값을 읽을 수 없습니다!"/>
  }

  let questionList = Object.assign(data.questionList);
  const newTmp = produce(data,(draftState) => {
    delete draftState.questionList;
  })
  let option = newTmp;
  console.log(data);
  console.log("qq",questionList);

  return (  
        <div>
            <AnswerQuestionResultList surveyId={surveyId} attendId={attendId}  surveyOption={option} question={questionList} theme={data.theme}/>
        </div>
      );  
}

export default ResultPersonalAnswer;

function AnswerQuestionResultList({surveyId,attendId ,surveyOption,question,theme}){
  const {isLoading,data,isError,error} =  useQuery(RESULT_PERSONAL , ()=>getPersonalResult(parseInt(surveyId),parseInt(attendId)));
  const dispatch = useDispatch();
  if(isLoading){
    return <CircularProgress />
  }
  if(isError){
    return <ErrorQuery log="값을 읽을 수 없습니다!"/>
  }

  console.log(data);
  dispatch(GET_RESULT({data:data}));
  return (
  <QuestionResultList purpose={RESULT} surveyOption={surveyOption} question={question} themeResult={theme}/>
  );

}