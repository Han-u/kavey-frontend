import React, { useRef,useState } from "react";
import {Button, Typography, Menu, MenuItem, Input, styled,TextField} from "@mui/material";
import CopyUrl from "./CopyUrl";
import Swal from "sweetalert2";

function CreateUser({ username, email, onChange, onCreate,onSend }) {
    const style = {
        text : {
            color:'black',
            fontFamily: 'NanumSquareR'
        },
        inputSpace: {
            paddingTop:10
        }
    }


    const check = () => {
        Swal.fire({
            title: '설문지를 발송하시겠습니까?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '네',
            cancelButtonText:'아니요'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("발송완료~~");
            }
        })
    }

    const BootstrapButton2 = styled(Button)({

        color: 'black',
        boxShadow: 'none',
        fontFamily: [
            'NanumSquareB',
        ],
        fontSize: '20px'
    });

    return (
        <div>
            <div>
                <h2 style={style.text}>설문 질의응답자 리스트</h2>
                <div style={style.inputSpace}>
                    <Input name="email" placeholder="이메일입력해주세요" onChange={onChange} value={email}
                    style={{width: 250}}/>
                    <BootstrapButton2 size="large" onClick={onCreate}>+</BootstrapButton2>
                </div>
            </div>
        </div>
    );
}

export default CreateUser;