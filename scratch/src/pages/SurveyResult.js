
import {Button,Typography} from "@mui/material";
import {CircularProgress } from '@mui/material'
import {useState} from "react";
import { useQuery } from "react-query";
import { useSelector } from 'react-redux'
import ResultParticipant from "../components/SurveyResult/ResultParticipant";
import { getSurveyResult, RESULT_SURVEY } from "../components/SurveyResult/ResultQuery";
import ResultStatics from "../components/SurveyResult/ResultStatics";
import ResultSurveyInfo from "../components/SurveyResult/ResultSurveyInfo";
import {useParams} from 'react-router-dom'
function SurveyResult(){
    const { surveyId } = useParams();

    const style = {
        header : {
            display: 'flex',
            alignItems: 'center',
            padding: 30,
            justifyContent: 'space-between'
        },
        body : {
            padding: 30,
            backgroundColor: 'lightgray'
        },
        btn : {
            padding: 10,
            paddingLeft: 0,

        },
        surveyContainer: {
            padding: 20,
            backgroundColor: 'white'
        }
    }

    const {isLoading,data,isError,error} = useQuery(RESULT_SURVEY , ()=>getSurveyResult(parseInt(surveyId)));

    const [status, setStatus] = useState("info");
    const onClick = (e) => {
        setStatus(e.target.value);
    }

    if(isLoading){
        return <CircularProgress />
    }
    if(isError){
        return <h2>Oops... {error.message}</h2>
    }

    return (
        <div >
            <div style={style.header}>
                <Typography variant="h4" fontFamily="HallymGothic-Regular">
                    설문 결과 보기
                </Typography>
                <div>
                    
                    <Button variant="contained" href="/management" color="error">
                        돌아가기
                    </Button>
                </div>
            </div>
            <div style={style.body}>
                <div style={style.surveyContainer}>
                    <h1>설문 이름 : {data.title}</h1>
                    <h2>설문 설명 : {data.description}</h2>
                </div>
                <div style={{display: 'flex',flexDirection: 'row',justifyContent:'space-between'}}>
                    <div style={style.btn}>
                        <Button variant={status === 'info'? "contained": "outlined"} onClick={onClick} sx={{marginRight: 1}} value="info">설문 정보</Button>
                        <Button variant={status === 'participant'? "contained": "outlined"} onClick={onClick} sx={{marginRight: 1}} value="participant">대상자 정보</Button>
                        <Button variant={status === 'question'? "contained": "outlined"} onClick={onClick} sx={{marginRight: 1}} value="question">질문별 통계</Button>
                    </div>
                    <div style={style.btn}>
                        <Button variant="contained" href="/report">
                            리포트 작성
                        </Button>
                    </div>
                </div>
                <div style={style.surveyContainer}>
                    {status === 'info'?<ResultSurveyInfo surveyId={surveyId}/>:null}
                    {status === 'participant'?<ResultParticipant surveyId={surveyId}/>:null}
                    {status === 'question'?<ResultStatics/>:null}
                </div>
            </div>
        </div>
    )
}

export default SurveyResult;