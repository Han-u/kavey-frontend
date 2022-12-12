import {useQuery} from 'react-query'
import { Button,CircularProgress } from '@mui/material'
import { getSurveyResult, RESULT_SURVEY } from './other/Query';
import SurveyDurationText from "./SurveyDurationText";
import SurveyAccessTypeText from "./SurveyAccessTypeText";
import SurveyGenderAgeText from "./SurveyGenderAgeText";
import SurveyStatus from "./SurveyStatus";

function ResultSurveyInfo({surveyId}){
    const sid=1;
    const {isLoading,data,isError,error} = useQuery(RESULT_SURVEY , getSurveyResult(surveyId));

    if(isLoading){
        return <CircularProgress />
    }
    if(isError){
        return <h2>Oops... {error.message}</h2>
    }

    return (
        <div>
            <SurveyStatus status={data.status}></SurveyStatus>
            <SurveyDurationText startDate={data.surveyStartDate} endDate={data.surveyEndDate}/>
            <SurveyAccessTypeText limitPerson={data.limitPerson} private={data.private}/>
            <SurveyGenderAgeText askAge={data.askAge} askGender={data.askGender}/>
        </div>

    )


}

export default ResultSurveyInfo;