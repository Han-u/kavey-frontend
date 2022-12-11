import {useQuery} from 'react-query'
import axios from 'axios'

export const RESULT_SURVEY = "RESULT_SURVEY";
export const getSurveyResult = async (surveyId) => {
    const { data } = await  axios.get('/api/survey/'+surveyId+'/page');
    return data;
};

export const RESULT_ATTEND = "RESULT_ATTEND";
export const getAttendResult = async (surveyId) => {
    const { data } = await  axios.get('/api/survey/'+surveyId+'/receiver');
    return data;
};
export const ATTEND_RESPONSE = "RESPONSE"
export const ATTEND_NONRESPONSE = "NONRESPONSE"


export const RESULT_ALL = "RESULT_ALL";
export const getAllResult= async (surveyId) => {
    const { data } = await  axios.get('/api/survey/'+surveyId+'/result/attends/');
    return data;
};


export const RESULT_PERSONAL = "RESULT_PERSONAL";
export const getPersonalResult= async (surveyId,attendId) => {
    const { data } = await  axios.get('/api/survey/'+surveyId+'/result/attend/'+attendId);
    return data;
};


export const RESULT_STATICS = "RESULT_STATICS";
export const getStaticsResult= async (surveyId) => {
    const { data } = await  axios.get('/api/survey/'+surveyId+'/result/');
    return data;
};





