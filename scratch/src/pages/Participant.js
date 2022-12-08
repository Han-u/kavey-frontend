import {Button, Typography, Menu, MenuItem, Input} from "@mui/material";
import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from 'axios';
import {useQuery} from 'react-query'

import "react-datepicker/dist/react-datepicker.css";
import Resend from "../components/Participant/Resend";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import CopyUrl from "../components/SendSurvey/CopyUrl";


function Participant(){
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
        Container: {
            padding: 20,
            backgroundColor: 'white'
        }
    };


    const [resStatus, setResStatus]=useState("ALL");
    const addSurveyBack1 = () => {setResStatus("RESPONSE");};
    const addSurveyBack2 = () => {setResStatus("NONRESPONSE");};
    const addSurveyBack3 = () => {setResStatus("REJECT");};
    const addSurveyBack4 = () => {setResStatus("ALL");};

    const [visible,setVisible] =useState(false);

    const sid=1;
    const {isLoading,data,isError,error}=useQuery('SurveyResultInfo',()=>{
        return axios.get('http://localhost:8081/api/survey/'+sid+'/receiver')
    })
    if(isLoading){return <h2>success</h2>}
    if(isError){return <h2>Oops... {error.message}</h2>}

    const realBack=Object.values(data.data);

    var backResult = realBack.filter(data=>data.status===resStatus);
    if (resStatus==="ALL")
    {var backResult = realBack.filter(data=>data.attendID >= 0);}




    return (
        <div>
            <div style={style.header}>
                <Typography variant="h4" fontFamily="HallymGothic-Regular">
                    설문 참여자 관리
                </Typography>
            </div>
            <div style={style.body}>
                <div style={style.Container}>
                    <div style={style.btn}>
                        <Button onClick={addSurveyBack1}>응답</Button>
                        <Button onClick={addSurveyBack2}>미응답</Button>
                        <Button onClick={addSurveyBack3}>거절</Button>
                        <Button onClick={addSurveyBack4}>전체</Button>
                        <Button onClick={() => {setVisible(!visible);}}>{visible ? "재발송페이지닫기" : "재발송페이지열기"}</Button>

                    </div>
                    {visible && <Resend/>}

                    <div>
                        <StyledTable>
                            <thead>
                            <tr>
                                <th className='second-row'>이메일</th>
                                <th className='second-row'>전송날짜</th>
                                <th className='second-row'>응답여부</th>
                                <th className='second-row'>응답날짜</th>
                            </tr>
                            </thead>

                            <tbody>
                            {backResult.map((result,key)=>(
                                <tr key={key}>
                                    <td key={result.email}>{result.sendEmail}</td>
                                    <td key={result.sendDt}>{result.sendDate}</td>
                                    <td key={result.res}>{result.status}</td>
                                    <td key={result.resDay}>{result.responseDate}</td>
                                </tr>
                            ))}
                            </tbody>
                        </StyledTable>
                    </div>
                </div>

            </div>
        </div>
    )
}

const StyledTable = styled.table`
  text-align: center;
  border-collapse: collapse;
  thead{
    tr{
      th{
        padding: 10px 15px;
        background-color: #888;
        color: #fff;
        font-weight: 700;
      }
    }
  }
  tbody{
    tr{
      td{
        padding: 7px 15px;
        border-bottom: 1px solid #eee;
      }
    }
  }
  .second-row{
    width: 150px;
  }
`;

export default Participant;