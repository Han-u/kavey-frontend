import {Button,Typography} from "@mui/material";
import {useState} from "react";
import { useSelector } from 'react-redux'
import ResultSurveyInfo from "../components/SurveyResult/ResultSurveyInfo";
import ResultParticipant from "../components/SurveyResult/ResultParticipant";
function SurveyResult(){
    
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

    const [status, setStatus] = useState("info");
    const onClick = (e) => {
        setStatus(e.target.value);
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
                    여기에 설문 정보
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
                    {status === 'info'?<ResultSurveyInfo/>:null}
                    {status === 'participant'?<ResultParticipant/>:null}
                    {status === 'question'?"q":null}
                </div>
            </div>
        </div>
    )
}

export default SurveyResult;