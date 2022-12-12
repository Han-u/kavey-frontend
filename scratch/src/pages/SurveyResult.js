
import {Button,Typography} from "@mui/material";
import {CircularProgress } from '@mui/material'
import React, {useState} from "react";
import { useQuery } from "react-query";
import ResultParticipant from "../components/SurveyResult/ResultParticipant";
import ResultStatics from "../components/SurveyResult/ResultStatics";
import ResultSurveyInfo from "../components/SurveyResult/ResultSurveyInfo";
import {useParams} from 'react-router-dom'
import { getAttendResult, getSurveyResult, RESULT_ATTEND, RESULT_SURVEY } from "../components/SurveyResult/other/Query";
import {useSelector} from "react-redux";
import SurveyTitleText from "../components/SurveyResult/SurveyTitleText";
import ErrorQuery from "../components/Error/ErrorQuery";
function SurveyResult(){
    const { surveyId } = useParams();
    const surveyOption=useSelector((state)=>state.surveyOption);

    const style = {
        header : {
            display: 'flex',
            alignItems: 'center',
            padding: 30,
            justifyContent: 'space-between',
            backgroundColor: '#202225',
        },
        body : {
            padding: 30,
            backgroundColor: '#F5F5F5'
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


    if(isLoading){
        return <CircularProgress />
    }
    if(isError){
        return <ErrorQuery/>
     
        //<h2>Oops... {error.message}</h2>
    }

    return (
        <div>
            <ErrorQuery/>
            <div style={style.header}>
                <Button variant="contained" href="/management" style={{color: 'black', backgroundColor: '#FFD701', borderRadius: '10px'}}>
                    뒤로가기
                </Button>
                <Typography variant="h4" fontFamily="NanumSquareB" style={{color: "white"}}>
                    설문 결과 보기
                </Typography>
                <Button variant="contained" href="/management" color="primary">
                    레포트작성
                </Button>
            </div>
            <div align='center' style={{align:'center',
                backgroundColor:"#F5F5F5",
                height:'100vh',
                width:'100%'}}>
                <div style={{backgroundColor:'white',width:'50%',height:'100%'}}>
                    <div style={{width:'960px',
                        height:'100%',
                        margin:'auto',backgroundColor:'white'}}>
                        <div>
                            <SurveyTitleText title={data.title} description={data.description}/>
                        </div>
                        <div>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div style={{width: 150}} onClick={() => setStatus('info')} id="info">
                                    {status === 'info'?
                                    <div style={{borderTop: '1px solid black'}}></div>:
                                        <div style={{borderTop: '1px solid white'}}></div>}
                                    <div style={{fontFamily: 'NanumSquareL', margin: 4, color: status==='info'? 'black': 'lightgray'}}>
                                        설문 정보
                                    </div>
                                </div>
                                <div style={{width: 150}} onClick={() => setStatus('participant')} id="participant">
                                    {status === 'participant'?
                                        <div style={{borderTop: '1px solid black'}}></div>:
                                        <div style={{borderTop: '1px solid white'}}></div>}
                                    <div style={{fontFamily: 'NanumSquareL', margin: 4, color: status==='participant'? 'black': 'lightgray'}}>
                                        대상자 정보
                                    </div>
                                </div>
                                <div style={{width: 150}} onClick={() => setStatus('question')} id="question">
                                    {status === 'question'?
                                        <div style={{borderTop: '1px solid black'}}></div>:
                                        <div style={{borderTop: '1px solid white'}}></div>}
                                    <div style={{fontFamily: 'NanumSquareL', margin: 4, color: status==='question'? 'black': 'lightgray'}}>
                                        질문별 통계
                                    </div>
                                </div>
                            </div>
                            {/*<div style={{display: 'flex',flexDirection: 'row',justifyContent:'space-between'}}>*/}
                            {/*    <div style={style.btn}>*/}
                            {/*        <Button variant={status === 'info'? "contained": "outlined"} onClick={onClick} sx={{marginRight: 1}} value="info">설문 정보</Button>*/}
                            {/*        <Button variant={status === 'participant'? "contained": "outlined"} onClick={onClick} sx={{marginRight: 1}} value="participant">대상자 정보</Button>*/}
                            {/*        <Button variant={status === 'question'? "contained": "outlined"} onClick={onClick} sx={{marginRight: 1}} value="question">질문별 통계</Button>*/}
                            {/*    </div>*/}
                            {/*    <div style={style.btn}>*/}
                            {/*        <Button variant="contained" href="/report">*/}
                            {/*            리포트 작성*/}
                            {/*        </Button>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div style={style.surveyContainer}>
                            {status === 'info'?<ResultSurveyInfo surveyId={surveyId}/>:null}
                            {status === 'participant'?<ResultParticipant surveyId={surveyId}/>:null}
                            {status === 'question'?<ResultStatics surveyId={surveyId} limitPerson={data.limitPerson} question={data.questionList}/>:null}
                        </div>
                        {/*<div align="center" style={{marginTop:'30px'}}>*/}

                        {/*        <Button variant="contained"*/}
                        {/*        disabled={validationNext()}*/}
                        {/*        onClick={handleClick}>다음으로</Button>*/}
                        {/*        <Button variant="contained"*/}
                        {/*        color="error"*/}
                        {/*        style={{marginLeft:'30px'}}*/}
                        {/*        onClick={handleCancle}>취소하기</Button>*/}

                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SurveyResult;