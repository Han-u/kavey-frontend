import {Button, Grid, Typography} from "@mui/material";
import SurveyList from "../components/Management/SurveyList";
import {useState} from "react";
import { useSelector } from 'react-redux'
import '../Management.css'


function Management(){
    const surveyList=useSelector((state)=>state.surveyList.value);
        
    // const mock = [
    //     {
    //         id:1, status: 'making', title: "설문제목1",
    //         startDt: '2022-10-02', endDt:'2022-11-03',
    //         isOpen: true, subject: 0, participation: 0
    //     },
    //     {
    //         id:2, status: 'progress', title: "설문제목2",
    //         startDt: '2022-10-02', endDt:'2022-11-03',
    //         isOpen: false, subject: 31, participation: 0
    //     },
    //     {
    //         id:3, status: 'done', title: "설문제목3",
    //         startDt: '2022-10-02', endDt:'2022-11-03',
    //         isOpen: false, subject: 55, participation: 15
    //     },
    //     {
    //         id:4, status: 'done', title: "설문제목4",
    //         startDt: '2022-10-02', endDt:'2022-11-03',
    //         isOpen: true, subject: 55, participation: 0,
    //         earlyTermination: '2022-11-01'
    //     },
    //     {
    //         id:5, status: 'done', title: "설문제목5",
    //         startDt: '2022-10-02', endDt:'2022-11-03',
    //         isOpen: false, subject: 31, participation: 3
    //     },
    //     {
    //         id:6, status: 'done', title: "설문제목6",
    //         startDt: '2022-10-02', endDt:'2022-11-03',
    //         isOpen: true, subject: 31, participation: 4
    //     },
    //     {
    //         id:7, status: 'done', title: "설문제목7",
    //         startDt: '2022-10-02', endDt:'2022-11-03',
    //         isOpen: true, subject: 31, participation: 2
    //     }
    // ]

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
            backgroundColor: '#F5F5F5',
            display: 'flex',
            justifyContent: 'center',
            height: '100vh'
        },
        btn : {
            padding: 10,
            paddingLeft: 0,

        },
        surveyContainer: {
            padding: 20,
            backgroundColor: 'white',
            maxWidth: "1200px",
            borderRadius: '0 30px 30px 30px'
        }
    }

    const [status, setStatus] = useState("ALL");
    const onClick = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div>
            <div style={style.header}>
                <div style={{display: 'flex', alignItems:'center'}}>
                    <img src='images/Subtract.png' width='35px' height='35px'/>
                    <span style={{color: 'white', marginLeft: '10px'}}> 한소연 님, <br/> 오늘 하루도 좋-설사 하세요!</span>

                </div>
                <Typography variant="h4" fontFamily="NanumSquareB" style={{color: "white"}}>
                    설문 관리하기
                </Typography>
                <Button variant="contained" href="/surveyoptionsetting" style={{color: 'black', backgroundColor: '#FFD701', borderRadius: '10px'}}>
                    설문 제작
                </Button>
            </div>
            <div style={style.body}>
                {/*<div style={style.btn}>*/}
                {/*    <Button variant={status === 'ALL'? "contained": "outlined"} onClick={onClick} sx={{marginRight: 1}} value="ALL">전체</Button>*/}
                {/*    <Button variant={status === 'MAKING'? "contained": "outlined"} onClick={onClick} sx={{marginRight: 1}} value="MAKING">제작중</Button>*/}
                {/*    <Button variant={status === 'PROGRESS'? "contained": "outlined"} onClick={onClick} sx={{marginRight: 1}} value="PROGRESS">진행중</Button>*/}
                {/*    <Button variant={status === 'DONE'? "contained": "outlined"} onClick={onClick} value="DONE">설문완료</Button>*/}
                {/*</div>*/}
                <div>
                    <div style={{display: 'flex'}}>
                        <div className={'index-button ' + (status === "ALL" ? 'selected' : null)}>
                            전체
                        </div>
                        <div className={'index-button ' + (status === "MAKING" ? 'selected' : null)}>
                            제작중
                        </div>
                        <div className={'index-button ' + (status === "PROGRESS" ? 'selected' : null)}>
                            진행중
                        </div>
                        <div className={'index-button ' + (status === "DONE" ? 'selected' : null)}>
                            설문완료
                        </div>
                    </div>
                    <div style={style.surveyContainer}>
                        <Grid container>
                            {surveyList.map((m) =>{
                                if(status==='ALL'){
                                    return <Grid item xs={3} style={{justifyContent:'center', display: 'flex'}}><SurveyList key={m.id} data={m}></SurveyList> </Grid>;
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
        </div>
    )
}

export default Management;