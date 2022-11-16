import {Button, Typography} from "@mui/material";
import {useState} from "react";
import styled from 'styled-components';

function Participant(){

    const data = [
        {id: 0, email: 'yowon25@naver.com', sendDt: '2022-10-05', res: '응답', resDt: '2022-10-05'},
        {id: 1, email: 'yowon25@naver.com', sendDt: '2022-10-05', res: '거절', resDt: ''},
        {id: 2, email: 'yowon25@naver.com', sendDt: '2022-10-05', res: '미응답', resDt: ''},
        {id: 3, email: 'yowon25@naver.com', sendDt: '2022-10-05', res: '미응답', resDt: ''}
    ];

    // 체크된 아이템을 담을 배열
    const [check, setCheck] = useState([]);

    // 체크박스 단일 선택
    const singleCheck = (checked, id) => {
        if (checked) {
            setCheck(prev => [...prev, id]);
        } else {
            setCheck(checked.filter((el)=> el !== id));
        }
    };

    // 체크박스 모두 선택
    const allCheck = (checked) => {
        if(checked) {
            const idArray = [];
            data.forEach((el) => idArray.push(el.id));
            setCheck(idArray);
        }
        else {
            setCheck([]);
        }
    };

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
                    </div>
                    <div>
                        <StyledTable>
                            <thead>
                            <tr>
                                <th>
                                    <input type='checkbox' name='select-all'
                                           onChange={(e) => allCheck(e.target.checked)}
                                        // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                                           checked={check.length === data.length} />
                                </th>
                                <th className='second-row'>이메일</th>
                                <th className='second-row'>전송날짜</th>
                                <th className='second-row'>응답여부</th>
                                <th className='second-row'>응답날짜</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data?.map((data, key) => (
                                <tr key={key}>
                                    <td>
                                        <input type='checkbox' name={`select-${data.id}`}
                                               onChange={(e) => singleCheck(e.target.checked, data.id)}
                                            // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                                               checked={check.includes(data.id)} />
                                    </td>
                                    <td className='second-row'>{data.email}</td>
                                    <td className='third-row'>{data.sendDt}</td>
                                    <td className='fourth-row'>{data.res}</td>
                                    <td className='fifth-row'>{data.resDt}</td>
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