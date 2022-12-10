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
        <p>{data.status}</p>
        <p>{data.private}</p>
        <p>{data.limitPerson}</p>
        <p>{data.surveyStartDate}</p>
        <p>{data.surveyEndDate}</p>
        <p>{data.askAge}</p>
        <p>{data.askGender}</p>
        <p>{data.theme}</p>
    </div>)


}

export default ResultSurveyInfo;