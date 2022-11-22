import {Button, Typography, Menu, MenuItem, Input} from "@mui/material";
import React, {useState, useRef} from "react";
import styled from 'styled-components';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



function Participant(){


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

    const [checkItems, setCheckItems] = useState([]);
    // 체크박스 단일 선택
    const handleSingleCheck = (checked, id) => {
        if (checked) {
            // 단일 선택 시 체크된 아이템을 배열에 추가
            setCheckItems(prev => [...prev, id]);
        } else {
            // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    };
    const handleAllCheck = (checked) => {
        if(checked) {
            // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
            const idArray = [];
            result.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        }
        else {
            // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
            setCheckItems([]);
        }
    }

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
    const [resState, setResState]=useState("전체");



    const addSurveyItem1 = () => {
        setResState("응답");
        console.log(resState);
    };
    const addSurveyItem2 = () => {
        setResState("미응답");
        console.log(resState);

    };
    const addSurveyItem3 = () => {
        setResState("거절");
        console.log(resState);

    };
    const addSurveyItem4 = () => {
        setResState("전체");
        console.log(resState);

    };
    var result = data.filter(data=>data.res===resState);
    if (resState==="전체")
    {
        var result = data.filter(data=>data.id >= 0);
    }






    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate);
    const [endDate, setEndDate] = useState(new Date());
    console.log(endDate);












    const [visible1, setVisible1]=useState(false);
    const [visible2, setVisible2]=useState(false);



    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const filterTitle = data.filter((p) => {
        return p.email.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })




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
                        <Button>재전송</Button>
                        <Button onClick={addSurveyItem1}>응답</Button>
                        <Button onClick={addSurveyItem2}>미응답</Button>
                        <Button onClick={addSurveyItem3}>거절</Button>
                        <Button onClick={addSurveyItem4}>전체</Button>
                        <input type="text" value={search} onChange={onChange} />



                    </div>

                    <div>
                        <StyledTable>
                            <thead>
                            <tr>
                                <th>
                                    <input type='checkbox' name='select-all'
                                           onChange={(e) => handleAllCheck(e.target.checked)}
                                        // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                                           checked={checkItems.length === data.length ? true : false} />
                                </th>
                                <th className='second-row'>이메일</th>
                                <th className='second-row'><button onClick={() => {
                                    setVisible1(!visible1);
                                }}>전송날짜</button>{visible1 && <DatePicker selected={startDate} onChange={date => setStartDate(date)} />}</th>
                                <th className='second-row'>응답여부</th>
                                <th className='second-row'><button onClick={() => {
                                    setVisible2(!visible2);
                                }}>응답날짜</button>{visible2 && <DatePicker selected={endDate} onChange={date => setEndDate(date)} />}</th>


                            </tr>
                            </thead>
                            <tbody>

                            {filterTitle.map((data,key) => <tr key={key}>
                                <td>
                                    <input type='checkbox'
                                           onChange={(e) => handleSingleCheck(e.target.checked, result.id)}
                                           checked={checkItems.includes(result.id) ? true : false} />
                                </td>
                                <td key={data.email}>{data.email}</td>
                                <td key={data.sendDt}>{data.sendDt}</td>
                                <td key={data.res}>{data.res}</td>
                                <td key={data.resDay}>{data.resDay}</td>
                                <td className='second-row'>{data.title}</td>
                            </tr>)}


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