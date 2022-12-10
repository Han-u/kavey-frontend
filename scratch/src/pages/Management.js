import {Button, Grid, Typography} from "@mui/material";
import SurveyList from "../components/Management/SurveyList";
import {useEffect, useState} from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'




function Management(){
    const navigate=useNavigate();

    useEffect(async() =>{
        const token=window.localStorage.getItem('token');
        //토큰 유효 검증해주는 API -> 유효성 없으면 바로 토큰 삭제
        if(token===null){
            Swal.fire({
                toast: true,
                icon: 'warning',
                title: '로그인을 해주세요!',
                animation: false,
                position: 'top',
                showConfirmButton: false,
                timer: 1200,
                timerProgressBar: false,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              });
            navigate('/');
            }
    });
    
    const surveyList=useSelector((state)=>state.surveyList.value);
       
    const handleLogout=()=>{
        Swal.fire({
            title: '로그아웃 하시겠어요?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '네',
            cancelButtonText:'아니오',
        }).then((result) => {
            if (result.isConfirmed) {
                window.localStorage.clear();
                Swal.fire({
                    toast: true,
                    icon: 'success',
                    title: '다음에 또 오세요!',
                    animation: false,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 1200,
                    timerProgressBar: false,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  });
                navigate('/')

            }
        })
        
    }
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
                <Button variant="contained" onClick={()=>{const token=window.localStorage.getItem("token");const profile=window.localStorage.getItem("profile"); console.log(token,JSON.parse(profile));}}>
                    카카오정보 테스트
                </Button>
                <Button variant="contained" onClick={()=>{handleLogout()}}>
                    로그아웃 테스트
                </Button>
                <Button variant="contained" href="/surveyoptionsetting">
                    설문 제작
                </Button>
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