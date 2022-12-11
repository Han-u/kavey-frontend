import {Button, Typography, Menu, MenuItem, Input, TextField} from "@mui/material";
import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from 'axios';
import {useQuery} from 'react-query'
import "react-datepicker/dist/react-datepicker.css";
import Resend from "../components/Participant/Resend";
import '../Management.css'



function Participant(){
    const toDateFormat=(date) =>{
        if (!date){
            return ""
        }
        return date.split('T')[0]
    }

    const status = {
        RESPONSE: '응답',
        NONRESPONSE: '미응답',
        REJECT: '거절'
    }

    const style = {
        header0 : {
            flex: 1,
            flexDirection: "column",
            height: '100px'
        },
        header : {
            display: 'flex',
            alignItems: 'center',
            padding: 30,
            justifyContent: 'space-between',
            backgroundColor: '#202225',

        },
        main : {
            paddingTop:50
        },
        body : {
            padding: 30,
            backgroundColor: '#F5F5F5',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
        },
        btn : {
            display: 'flex'
        },
        Container: {
            padding: 40,
            backgroundColor: 'white',
            maxWidth: "1200px",
            width:"1200px",
            borderRadius: '0 30px 30px 30px'
        },
    };


    const [resStatus, setResStatus]=useState("ALL");
    const addSurveyBack1 = () => {setResStatus("RESPONSE"); setVisible(false);
        setVisible2(true);};
    const addSurveyBack2 = () => {setResStatus("NONRESPONSE"); setVisible(false);
        setVisible2(true);};
    const addSurveyBack3 = () => {setResStatus("REJECT"); setVisible(false);
        setVisible2(true);};
    const addSurveyBack4 = () => {setResStatus("ALL"); setVisible(false);
        setVisible2(true);};

    const [visible,setVisible] =useState(false);
    const [visible2,setVisible2] =useState(true);

    const sid=1;
    const {isLoading,data,isError,error}=useQuery('SurveyResultInfo',()=>{
        return axios.get('/api/survey/'+sid+'/receiver')
    })
    if(isLoading){return <h2>success</h2>}
    if(isError){return <h2>Oops... {error.message}</h2>}

    const realBack=Object.values(data.data);

    var backResult = realBack.filter(data=>data.status===resStatus);
    if (resStatus==="ALL")
    {var backResult = realBack.filter(data=>data.attendID >= 0);}

    const reSendSurvey =() => {
        setResStatus("RESEND");
        setVisible(true);
        setVisible2(false);
    }


    const BootstrapButton = styled(Button)({
        backgroundColor: '#FFD701',
        color: 'black',
        boxShadow: 'none',
        fontFamily: [
            'NanumSquareR',
        ],

    });

    const BootstrapButton1 = styled(Button)({
        backgroundColor: '#FFD701',
        color: 'black',
        boxShadow: 'none',
        fontFamily: [
            'NanumSquareR',
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
                <div>
                    <div style={{display: 'flex'}}>
                        <div className={'index-button ' + (resStatus === "ALL" ? 'selected' : null)} onClick={addSurveyBack4}>
                            전체
                        </div>
                        <div className={'index-button ' + (resStatus === "RESPONSE" ? 'selected' : null)} onClick={addSurveyBack1}>
                            응답
                        </div>
                        <div className={'index-button ' + (resStatus === "NONRESPONSE" ? 'selected' : null)} onClick={addSurveyBack2}>
                            미응답
                        </div>
                        <div className={'index-button ' + (resStatus === "REJECT" ? 'selected' : null)} onClick={addSurveyBack3}>
                            거절
                        </div>
                        <div className={'index-button ' + (resStatus === "RESEND" ? 'selected' : null)} onClick={reSendSurvey}>
                            재발송
                        </div>
                    </div>
                {/*<div style={style.btn}>*/}
                {/*    <BootstrapButton disabled={false} variant="contained" size="large" sx={ { borderRadius: 28 } }onClick={addSurveyBack4}>전체</BootstrapButton>*/}
                {/*    <BootstrapButton1 disabled={false} variant="contained" size="large" sx={ { borderRadius: 28 } }onClick={addSurveyBack1}>응답</BootstrapButton1>*/}
                {/*    <BootstrapButton1 disabled={false} variant="contained" size="large" sx={ { borderRadius: 28 } }onClick={addSurveyBack2}>미응답</BootstrapButton1>*/}
                {/*    <BootstrapButton1 disabled={false} variant="contained" size="large" sx={ { borderRadius: 28 } }onClick={addSurveyBack3}>거절</BootstrapButton1>*/}
                {/*    <BootstrapButton1 disabled={false} variant="contained" size="large" sx={ { borderRadius: 28 } }onClick={reSendSurvey}>재발송</BootstrapButton1>*/}
                {/*</div>*/}
                    {visible && <Resend/>}
                    {visible2 && <div style={style.Container}>
                        <div style={style.main}>
                            <StyledTable>
                                <thead>
                                <tr>
                                    <th className='check-row'></th>
                                    <th className='first-row' style={style.th}>이메일</th>
                                    <th className='second-row' style={style.th}>전송날짜</th>
                                    <th className='third-row' style={style.th}>응답여부</th>
                                    <th className='fourth-row' style={style.th}>응답날짜</th>
                                </tr>
                                </thead>

                                <tbody>
                                {backResult.map((result,key)=>(
                                    <tr key={key}>
                                        <td className='check-row'></td>
                                        <td key={result.email}>{result.sendEmail}</td>
                                        <td key={result.sendDt}>{toDateFormat(result.sendDate)}</td>
                                        <td key={result.res}>{status[result.status]}</td>
                                        <td key={result.resDay}>{toDateFormat(result.responseDate)}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </StyledTable>
                        </div>
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
        font-family: 'NanumSquareB';
        font-size: 15
      }
    }
  }
  tbody{
    tr{
      td{
        padding: 7px 15px;
        border-bottom: 1px solid #eee;
        font-family: 'NanumSquareR';
      }
    }
  }
  .check-row{
    width: 43px;
  }
  .first-row{
    width: 300px;
  }
  .second-row{
    width: 300px;
  }
  .third-row{
    width: 300px;
  }
  .fourth-row{
    width: 300px;
  }
`;

export default Participant;