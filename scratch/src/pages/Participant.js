import {Button, Typography, Menu, MenuItem, Input, TextField} from "@mui/material";
import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from 'axios';
import {useQuery} from 'react-query'
import "react-datepicker/dist/react-datepicker.css";
import Resend from "../components/Participant/Resend";



function Participant(){
    const style = {
        header0 : {
            flex: 1,
            flexDirection: "column",
        },
        header : {
            display: 'flex',
            alignItems: 'center',
            padding: 30,
            justifyContent: 'space-between',
            backgroundColor: '#202225',

        },
        main : {
            paddingTop:35
        },



        body : {
            padding: 30,
            backgroundColor: '#F5F5F5'
        },
        btn : {
            padding: 10,
            paddingLeft: 0,

        },
        Container: {
            margin:60,
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
    const [visible2,setVisible2] =useState(true);

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

    const reSendSurvey =() => {
        setVisible(!visible);
        setVisible2(!visible2);
    }


    const BootstrapButton = styled(Button)({
        backgroundColor: '#FFD701',
        color: 'black',
        boxShadow: 'none',
        fontFamily: [
            'NanumSquare',
        ],

    });

    const BootstrapButton1 = styled(Button)({
        backgroundColor: '#FFD701',
        color: 'black',
        boxShadow: 'none',
        fontFamily: [
            'NanumSquare',
        ],
        marginLeft:15,

    });




    return (
        <div>
            <div style={style.header}>
                <Button variant="contained" href="/management" style={{color: 'black', backgroundColor: '#FFD701', borderRadius: '10px'}}>
                    뒤로가기
                </Button>

                <Typography variant="h4" fontFamily="NanumSquareB" style={{color: "white"}}>
                    설문 참여자 관리하기
                </Typography>

                <p style={{color:'#202225'}}>--</p>

            </div>
            <div style={style.body}>
                <div style={style.Container}>
                    <div style={style.btn}>
                        <BootstrapButton disabled={false} variant="contained" size="large" sx={ { borderRadius: 28 } }onClick={addSurveyBack4}>전체</BootstrapButton>
                        <BootstrapButton1 disabled={false} variant="contained" size="large" sx={ { borderRadius: 28 } }onClick={addSurveyBack1}>응답</BootstrapButton1>
                        <BootstrapButton1 disabled={false} variant="contained" size="large" sx={ { borderRadius: 28 } }onClick={addSurveyBack2}>미응답</BootstrapButton1>
                        <BootstrapButton1 disabled={false} variant="contained" size="large" sx={ { borderRadius: 28 } }onClick={addSurveyBack3}>거절</BootstrapButton1>
                        <BootstrapButton1 disabled={false} variant="contained" size="large" sx={ { borderRadius: 28 } }onClick={reSendSurvey}>재발송</BootstrapButton1>
                    </div>
                    {visible && <Resend/>}
                    {visible2 && <div style={style.main}>
                        <StyledTable>
                            <thead>
                            <tr>
                                <th className='first-row'>이메일</th>
                                <th className='second-row'>전송날짜</th>
                                <th className='third-row'>응답여부</th>
                                <th className='fourth-row'>응답날짜</th>
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
                    </div>}
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
        background-color: #F5F5F5;
        color: black;
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
  .first-row{
    width: 150px;
  }
  .second-row{
    width: 300px;
  }
  .third-row{
    width: 150px;
  }
  .fourth-row{
    width: 300px;
  }
`;

export default Participant;