import ReactModal from "react-modal";
import {Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";

const MyModal = () => {
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
        {id: 0, email: 'aaakyle3444@naver.com', sendDt: '2020-02-02T00:00:00', res: 'RESPONSE',resDay:"2020-02-02T00:00:00"},
        {id: 1, email: 'james9@naver.com', sendDt: '2022-10-05', res: 'NONRESPONSE', resDay:"2022-09-30T00:00:00"},
        {id: 2, email: 'kimwon9@naver.com', sendDt: '2022-10-05', res: 'RESPONSE',resDay:"2022-09-30T00:00:00"},
        {id: 3, email: 'wowme9@naver.com', sendDt: '2022-10-05', res: 'REJECT', resDay:"2022-11-30T00:00:00"}
    ];



    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const filterTitle = data.filter((p) => {
        return p.email.includes(search)
    })







    return (
        <ReactModal isOpen>
            <div>
                <Button className="Button" component={Link} to="/participant">X</Button>
                <div style={style.header}>
                    <Typography variant="h4" fontFamily="HallymGothic-Regular">
                        설문_참여자_검색_해주세요!
                    </Typography>
                </div>
                <div style={style.body}>
                    <div style={style.Container}>
                        <div style={style.btn}>
                            <input type="text" value={search} onChange={onChange} />
                        </div>

                        <div>
                            <StyledTable>
                                <thead>
                                <tr>
                                    <th>
                                        <input type='checkbox'/>
                                    </th>
                                    <th className='second-row'>이메일</th>
                                    <th className='second-row'>전송날짜</th>
                                    <th className='second-row'>응답여부</th>
                                    <th className='second-row'>응답날짜</th>
                                </tr>
                                </thead>
                                <tbody>

                                {filterTitle.map((result,key) => <tr key={key}>
                                    <td>
                                        <input type='checkbox'/>
                                    </td>
                                    <td key={result.email}>{result.email}</td>
                                    <td key={result.sendDt}>{result.sendDt}</td>
                                    <td key={result.res}>{result.res}</td>
                                    <td key={result.resDay}>{result.resDay}</td>
                                </tr>)}

                                </tbody>
                            </StyledTable>
                        </div>
                    </div>

                </div>
            </div>
        </ReactModal>
    );
};
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


export default MyModal;