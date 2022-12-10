import {useQuery} from 'react-query'
import axios from 'axios'

export const RESULT_SURVEY = "RESULT_SURVEY ";
export const getSurveyResult = async (surveyId) => {
    const { data } = await  axios.get('http://localhost:8081/api/survey/'+surveyId+'/page');
    return data;
};

export const RESULT_PERSONAL = "RESULT_PERSONAL";
export const getPersonalResult= async (surveyId) => {
    const uid=1;
    const { data } = await  axios.get('http://localhost:8081/api/survey/'+surveyId+'/result/attend/'+uid);
    return data;
};


