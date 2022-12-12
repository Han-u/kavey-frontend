import {useQuery} from 'react-query'
import { Button,CircularProgress } from '@mui/material'
import { ATTEND_NONRESPONSE, ATTEND_RESPONSE, getAttendResult, RESULT_ATTEND} from './other/Query';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import styled from "styled-components";

let filter = "ALL";
function ResultParticipant({surveyId}) {
    const {isLoading,data,isError,error} = useQuery(RESULT_ATTEND, ()=>getAttendResult(surveyId));
    const [reData,setReData] = useState();

    if(isLoading){
        return <CircularProgress />
    }
    if(isError){
        return <h2>Oops... {error.message}</h2>
    }

    const filterClick=(f)=>{
        filter = f;
        filter !== "ALL" ? setReData(Object.assign(data).filter(d => d.status===filter)): setReData(Object.assign(data));
    }

    return (
        <div style={{}}>
            <div style={{paddingBottom: 10, display: 'flex'}}>
                <Button variant="outlined" style={{width:"70px",height:"30px",marginRight:"10px"}} onClick={()=>filterClick("ALL")}>전체</Button>
                <Button variant="outlined" style={{width:"70px",height:"30px",marginRight:"10px"}} onClick={()=>filterClick(ATTEND_RESPONSE)}>응답</Button>
                <Button variant="outlined" style={{width:"70px",height:"30px",marginRight:"10px",fontSize:"12px"}} onClick={()=>filterClick(ATTEND_NONRESPONSE)}>무응답</Button>
            </div>
            <div>
                {filter !== "ALL"? <ParticipantList surveyId={surveyId} participant = {reData} />:<ParticipantList surveyId={surveyId} participant = {data} />}
            </div>
        </div>
    )
}

export default ResultParticipant;



function ParticipantList({surveyId,participant}) {
    const navigate=useNavigate();
    const handleClick=(attendId)=>{
        navigate(`/result/`+surveyId+'/personal/'+attendId);
    }

    const status = {
        RESPONSE: '응답 보러 가기 ↗',
        NONRESPONSE: '미응답',
        REJECT: '거절'
    }

    const toDateFormat=(date) =>{
        if (!date){
            return ""
        }
        return date.split('T')[0]
    }

    let list;
    if(participant !== undefined){
        list = participant.map( (d) =>
            <tr key={d.attendId}>
                <td>
                    <input type='checkbox'/>
                </td>
                <td className='second-row'>{d.sendEmail}</td>
                <td className='second-row'>{toDateFormat(d.sendDate)}</td>
                <td className='second-row'>{d.status===ATTEND_RESPONSE?
                    <a href="javascript:void(0);" onClick={()=>handleClick(d.attendID)}>{status[d.status]}</a>: status[d.status]}
                    </td>
                <td className='second-row'>{toDateFormat(d.responseDate)}</td>
                {/*{d.status==ATTEND_RESPONSE? <button onClick={()=>handleClick(d.attendID)}>링크맨</button>:null}*/}
            </tr>

        )
    }

    return (
        <div>
            <StyledTable>
                <thead>
                <tr>
                    <th className='check-row'><input type='checkbox'/></th>
                    <th className='first-row'>이메일</th>
                    <th className='second-row'>전송날짜</th>
                    <th className='third-row'>응답여부</th>
                    <th className='fourth-row'>응답날짜</th>
                </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </StyledTable>
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
        font-family: 'NanumSquareL';
        font-size: 15px
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

