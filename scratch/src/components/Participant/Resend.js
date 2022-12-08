import {Button, Typography, Menu, MenuItem, Input} from "@mui/material";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useQuery} from 'react-query'
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import styled from 'styled-components';

export default function Resend() {
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

    const [search, setSearch] = useState("");



    // 체크된 아이템을 담을 배열
    const [checkItems, setCheckItems] = useState([]);

    // 체크박스 단일 선택
    const handleSingleCheck = (checked, attendID) => {
        if (checked) {
            // 단일 선택 시 체크된 아이템을 배열에 추가
            setCheckItems(prev => [...prev, attendID]);
        } else {
            // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
            setCheckItems(checkItems.filter((el) => el !== attendID));
        }
    };

    // 체크박스 전체 선택
    const handleAllCheck = (checked) => {
        if(checked) {
            // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
            const idArray = [];
            ddata.forEach((el) => idArray.push(el.attendID));
            setCheckItems(idArray);
        }
        else {
            // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
            setCheckItems([]);
        }
    }
    const sid=1;
    const {isLoading,data,isError,error}=useQuery('SurveyResultInfo',()=>{
        return axios.get('http://localhost:8081/api/survey/'+sid+'/receiver')
    })
    if(isLoading){return <h2>success</h2>}
    if(isError){return <h2>Oops... {error.message}</h2>}


    const realBack=Object.values(data.data);
    var ddata = realBack.filter(data=>data.status==="NONRESPONSE");
    const onSend = () => {
        Swal.fire({
            title: '설문지를 재발송 하시겠습니까?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '네',
            cancelButtonText:'아니요'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("발송완료~~");
                console.log(checkItems);
                /*
                --------------------------API로 대체 되어야합니다------------------------------------------
                 */
            }
        })
    }
    const onChange = (e) => {
        setSearch(e.target.value)
    }
    const filterTitle = ddata.filter((p) => {
        return p.sendEmail.includes(search)
    })




    return (
        <div>
            <div style={style.Container}>
                <div style={style.btn}>
                    <input type="text" value={search} onChange={onChange} placeholder="search email"/>
                    <Button onClick={onSend}>재전송</Button>
                </div>

        <StyledTable>
            <thead>
            <tr>
                <th>
                    <input type='checkbox' name='select-all'
                           onChange={(e) => handleAllCheck(e.target.checked)}
                        // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                           checked={checkItems.length === ddata.length ? true : false} />
                </th>
                <th className='second-row'>이메일</th>
                <th className='second-row'>전송날짜</th>
                <th className='second-row'>응답여부</th>
                <th className='second-row'>응답날짜</th>
            </tr>
            </thead>
            <tbody>
            {filterTitle?.map((ddata, key) => (
                <tr key={key}>
                    <td>
                        <input type='checkbox' name={`select-${ddata.attendID}`}
                               onChange={(e) => handleSingleCheck(e.target.checked, ddata.attendID)}
                            // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                               checked={checkItems.includes(ddata.attendID) ? true : false} />
                    </td>
                    <td className='second-row'>{ddata.sendEmail}</td>
                    <td className='second-row'>{ddata.sendDate}</td>
                    <td className='second-row'>{ddata.status}</td>
                    <td className='second-row'>{ddata.responseDate}</td>
                </tr>
            ))}
            </tbody>
        </StyledTable>
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
