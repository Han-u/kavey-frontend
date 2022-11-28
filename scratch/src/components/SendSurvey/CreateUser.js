import React, { useRef,useState } from "react";
import {Button, Typography, Menu, MenuItem, Input} from "@mui/material";
import CopyUrl from "./CopyUrl";
import Swal from "sweetalert2";

function CreateUser({ username, email, onChange, onCreate,onSend }) {


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




    const checkEmail = (e) => {
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        // 형식에 맞는 경우 true 리턴
        if (regExp.test(e.target.value)==false)
        {
            alert("올바른 이메일을 입력해주세요");
        }
    }

    const [visible,setVisible] =useState(false);


    return (
        <div>
            <div>
                <Input name="email" placeholder="이메일입력해주세요" onChange={onChange} value={email} onBlur={checkEmail}/>
                <Button onClick={onCreate}>피설문자추가</Button>
                <Button onClick={() => {setVisible(!visible);}}>{visible ? "설문지링크복사페이지닫기" : "설문지링크복사페이지열기"}</Button>
                <Button onClick={onSend}>발송</Button>
            </div>
            {visible && <CopyUrl/>}
        </div>
    );
}

export default CreateUser;