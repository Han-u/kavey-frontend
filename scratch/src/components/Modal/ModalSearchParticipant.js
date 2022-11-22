import ReactModal from "react-modal";
import {Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";

const MyModal = ({ onSubmit, onClose }) => {

    const handleClickSubmit = () => {
        onSubmit();
    };

    const handleClickCancel = () => {
        onClose();

    };

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
            backResult.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        }
        else {
            // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
            setCheckItems([]);
        }
    }






















    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
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
        <ReactModal isOpen>
            <div>
                <Button className="Button" component={Link} to="/participant">X</Button>
                <div style={style.header}>
                    <Typography variant="h4" fontFamily="HallymGothic-Regular">
                        설문 참여자 검색
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
                                        <input type='checkbox' name='select-all'
                                               onChange={(e) => handleAllCheck(e.target.checked)}
                                            // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                                               checked={checkItems.length === backResult.length ? true : false} />
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
