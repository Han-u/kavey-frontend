import {Button, Grid, Typography} from "@mui/material";
import SurveyList from "../components/Management/SurveyList";
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import '../Management.css'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";
import { setSurvey } from "../components/redux/Slices/SuveyListSlice";



function Management(){
    const surveyList=useSelector((state)=>state.surveyList.value);
    const dispatch = useDispatch();
    const url="/api/survey/"

    //GET 설문 리스트 
    useEffect(() => {
        const token = window.localStorage.getItem('token');
        const res = axios.get(url, 
        {headers: {
            Authorization: `Bearer ${token}`
        }});
        res.then(
            (res) => {dispatch(setSurvey(res.data))}
        );
    }, [])
      


    //USER 쪽 
    const navigate=useNavigate();
    if(window.localStorage.getItem('profile')){
        var userData=JSON.parse(window.localStorage.getItem('profile')).data.nickname;
    }
    
    // useEffect(async() =>{
    //     const token=window.localStorage.getItem('token');
    //     //토큰 유효 검증해주는 API -> 유효성 없으면 바로 토큰 삭제
    //     if(token===null){
    //         Swal.fire({
    //             toast: true,
    //             icon: 'warning',
    //             title: '로그인을 해주세요!',
    //             animation: false,
    //             position: 'top',
    //             showConfirmButton: false,
    //             timer: 1200,
    //             timerProgressBar: false,
    //             didOpen: (toast) => {
    //               toast.addEventListener('mouseenter', Swal.stopTimer)
    //               toast.addEventListener('mouseleave', Swal.resumeTimer)
    //             }
    //           });
    //         navigate('/');
    //         }else{
    //             const test=JSON.parse(window.localStorage.getItem('profile')).data;
    //             console.log(test);
    //         }
    // });
    



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
    
    const style = {
        header : {
            display: 'flex',
            alignItems: 'center',
            padding: 30,
            justifyContent: 'space-between',
            backgroundColor: '#202225',
            height:"100px"

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
            width:"1200px",
            borderRadius: '0 30px 30px 30px'
        }
    }

    const [status, setStatus] = useState("ALL");
    const onClick = (e) => {
        console.log(e);
        setStatus(e);
    }

    return (
        <div>
            <div style={style.header}>
                <div style={{display: 'flex', alignItems:'center'}}>
                    <img src="/images/Subtract.png" width='35px' height='35px' onClick={handleLogout}/>
                    <span style={{color: 'white', marginLeft: '10px'}}> {userData} 님, <br/> 오늘 하루도 좋-설사 하세요!</span>

                </div>
                <Typography variant="h4" fontFamily="NanumSquareB" style={{color: "white"}}>
                    설문 관리하기
                </Typography>
                <Button variant="contained" href="/surveyoptionsetting" style={{color: 'black', backgroundColor: '#FFD701', borderRadius: '10px'}}>
                    설문 제작
                </Button>
                {/* <Button variant="contained" onClick={()=>{const token=window.localStorage.getItem("token");console.log(token)}}>test</Button> */}
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
                        <div className={'index-button ' + (status === "ALL" ? 'selected' : null)} onClick={()=>{onClick("ALL")}}>
                            전체
                        </div>
                        <div className={'index-button ' + (status === "MAKING" ? 'selected' : null)} onClick={()=>{onClick("MAKING")}}>
                            제작중
                        </div>
                        <div className={'index-button ' + (status === "PROGRESS" ? 'selected' : null)} onClick={()=>{onClick("PROGRESS")}}>
                            진행중
                        </div>
                        <div className={'index-button ' + (status === "DONE" ? 'selected' : null)} onClick={()=>{onClick("DONE")}}>
                            설문완료
                        </div>
                    </div>
                    <div style={style.surveyContainer}>
                        <Grid container>
                            {surveyList.length ===0?<Typography fontFamily="NanumSquareB" style={{fontSize:"250px",margin:"auto"}}>텅</Typography>:surveyList.map((m) =>{
                                if(status==='ALL'){
                                    return <Grid item xs={3} style={{justifyContent:'center', display: 'flex'}}><SurveyList key={m.id} data={m}></SurveyList> </Grid>;
                                }else if(m.status.toUpperCase()===status){
                                    return <Grid item xs={3} style={{justifyContent:'center', display: 'flex'}}><SurveyList key={m.id} data={m}></SurveyList> </Grid>;
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