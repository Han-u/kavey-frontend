import {useQuery} from 'react-query'
import { Button,CircularProgress } from '@mui/material'
import { getSurveyResult, RESULT_SURVEY } from './ResultQuery';

function ResultSurveyInfo({surveyId}){
    const sid=1;
    const {isLoading,data,isError,error} = useQuery(RESULT_SURVEY , getSurveyResult(surveyId));
    
    if(isLoading){
        return <CircularProgress />
    }
    if(isError){
        return <h2>Oops... {error.message}</h2>
    }


    const handleClick=()=>{
        console.log(data);
    }
    return (<div>
        <Button onClick={handleClick}>하이</Button>
        <p>상태 : {data.status}</p>
        <p>형태 : {data.private? "폐쇄형":"개방형"}</p>
        <p>제한 인원 : {data.limitPerson}</p>
        <p>기간 : {data.surveyStartDate} ~ {data.surveyEndDate}</p>
        <p>나이 질문 여부 : {data.askAge.toString()}</p>
        <p>성별 질문 여부 : {data.askGender.toString()}</p>
        <p>테마: {data.theme}</p>
    </div>)


}

export default ResultSurveyInfo;