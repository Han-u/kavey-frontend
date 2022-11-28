import React from 'react';
import ExamplePDF from '../components/report/ExamplePDF';
import ReactPDF from '@react-pdf/renderer';

import {Button, Grid, Typography} from "@mui/material";
import {useState} from "react";
import { useSelector } from 'react-redux'



function MyDocument(){
    // ReactPDF.render(<ExamplePDF />, `${__dirname}/example.pdf`)

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
        surveyContainer: {
            padding: 20,
            backgroundColor: 'white'
        }
    }

    const [status, setStatus] = useState("ALL");
    const onClick = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div >
            <div style={style.header}>
                <Typography variant="h4" fontFamily="HallymGothic-Regular">
                    리포트 작성
                </Typography>
                <Button variant="contained" href="/management" color="error">
                    돌아가기
                </Button>
            </div>
            <div style={style.body}>
                <div style={style.btn}>
                    <Button variant={status === 'ALL'? "contained": "outlined"} onClick={onClick} sx={{marginRight: 1}} value="ALL">전체</Button>
                    <Button variant={status === 'MAKING'? "contained": "outlined"} onClick={onClick} sx={{marginRight: 1}} value="MAKING">제작중</Button>
                    <Button variant={status === 'PROGRESS'? "contained": "outlined"} onClick={onClick} sx={{marginRight: 1}} value="PROGRESS">진행중</Button>
                    <Button variant={status === 'DONE'? "contained": "outlined"} onClick={onClick} value="DONE">설문완료</Button>
                </div>
                <div style={style.surveyContainer}>
                    <ExamplePDF></ExamplePDF>

                </div>
                <div style={style.surveyContainer}>
                    <ExamplePDF></ExamplePDF>

                </div>
            </div>
        </div>
    )
                        };



export default MyDocument;