import {Button, Grid, Typography} from "@mui/material";
import SurveyList from "../components/Management/SurveyList";
import {useState} from "react";
import { useSelector } from 'react-redux'


function Management(){
    const surveyList=useSelector((state)=>state.surveyList.value); 

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

    const [status, setStatus] = useState("ALL");
    const onClick = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div >
            <div style={style.header}>
                <Typography variant="h4" fontFamily="HallymGothic-Regular">
                    설문 관리하기
                </Typography>
                <Button variant="contained" href="/surveyoptionsetting">
                    설문 제작
                </Button>
                {/* <Button variant="contained" onClick={()=>{const token=window.localStorage.getItem("token");console.log(token)}}>test</Button> */}
            </div>
            <div style={style.body}>
                <div style={style.btn}>
                    <Button variant={status === 'ALL'? "contained": "outlined"} onClick={onClick} sx={{marginRight: 1}} value="ALL">전체</Button>
                    <Button variant={status === 'MAKING'? "contained": "outlined"} onClick={onClick} sx={{marginRight: 1}} value="MAKING">제작중</Button>
                    <Button variant={status === 'PROGRESS'? "contained": "outlined"} onClick={onClick} sx={{marginRight: 1}} value="PROGRESS">진행중</Button>
                    <Button variant={status === 'DONE'? "contained": "outlined"} onClick={onClick} value="DONE">설문완료</Button>
                </div>
                <div style={style.surveyContainer}>
                    <Grid container>
                            {surveyList.map((m) =>{
                                if(status==='ALL'){
                                    return <Grid item xs={3}><SurveyList key={m.id} data={m}></SurveyList> </Grid>;
                                }else if(m.status.toUpperCase()===status){
                                    return <Grid item xs={3}><SurveyList key={m.id} data={m}></SurveyList> </Grid>;
                                }else{
                                    return null;
                                }                              
                                
                            })}
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Management;