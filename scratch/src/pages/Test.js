import {Button, Typography} from "@mui/material";
import React, {useState,useEffect} from "react";
import styled from 'styled-components';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

function Test(){
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

    const data = [
        {id: 0, email: '오영석@naver.com', sendDt: '2022-10-05', res: '응답',resDay:"2022-10-03"},
        {id: 1, email: '김도성@naver.com', sendDt: '2022-10-05', res: '거절', resDay:"2022-10-03"},
        {id: 2, email: '심성@naver.com', sendDt: '2022-10-05', res: '미응답',resDay:"2022-10-03"},
        {id: 3, email: '김원@naver.com', sendDt: '2022-10-05', res: '미응답', resDay:"2022-10-03"},
        {id: 4, email: '한요한@naver.com', sendDt: '2022-10-05', res: '응답', resDay:"2022-10-03"},
        {id: 5, email: '다민이@naver.com', sendDt: '2022-10-05', res: '거절', resDay:"2022-10-03"},
        {id: 6, email: '미노이@naver.com', sendDt: '2022-10-05', res: '미응답', resDay:""},
        {id: 7, email: '기리보이@naver.com', sendDt: '2022-10-05', res: '미응답', resDay:"2022-10-03"}
    ];


    const [backData, setBackData] = useState('')
    useEffect(() => {
        axios.get('/survey/1/receiver')
            .then(response => setBackData(response.data))
            .catch(error => console.log(error))
    }, []);






    const [resStatus, setResStatus]=useState("ALL");
    const addSurveyBack1 = () => {
        setResStatus("RESPONSE");
        console.log(resStatus);
    };
    const addSurveyBack2 = () => {
        setResStatus("NONRESPONSE");
        console.log(resStatus);

    };
    const addSurveyBack3 = () => {
        setResStatus("REJECT");
        console.log(resStatus);
    };
    const addSurveyBack4 = () => {
        setResStatus("ALL");
        console.log(resStatus);
    };
    const realBack=Object.values(backData);


    var backResult = realBack.filter(data=>data.status===resStatus);
    if (resStatus==="ALL")
    {
        var backResult = realBack.filter(data=>data.attendID >= 0);
    }
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
                    </div>
                    <div>
                        <StyledTable>
                            <thead>
                            <tr>
                                <th>
                                    <input type="checkbox"/>
                                </th>
                                <th className='second-row'>이메일</th>
                                <th className='second-row'>전송날짜</th>
                                <th className='second-row'>응답여부</th>
                                <th className='second-row'>응답날짜</th>
                            </tr>
                            </thead>
                            <tbody>
                            {backResult && backResult.map((result,key)=>(
                                <tr key={key}>
                                    <td><input type="checkbox"/></td>
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

export default Test;