import Swal from 'sweetalert2'
import {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function SurveyReject(){
    const params = new URLSearchParams(window.location.search);
    const sid=params.get("surveyId")
    const email=params.get("email")
    const url = '/api/survey/'+sid+'/reject';
    const navigate=useNavigate();
    const data = {
        "email" : email
    }

    useEffect(() => {
        Swal.fire({
            title: '응답 거절하시겠어요?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '네',
            cancelButtonText:'아니오',
        }).then(async (result) =>  {
            if (result.isConfirmed) {
                //여기에 API 심어야지
                axios.post(url, data)
                .then(response=>{
                    Swal.fire({
                        toast: true,
                        icon: 'success',
                        title: '다음에 또 오세요!',
                        position: 'top',
                        showConfirmButton: false,
                        timer: 1200,
                        timerProgressBar: false,
                        });
                        navigate('/')
                })
                .catch(error=>{
                    Swal.fire({
                        toast: true,
                        icon: 'error',
                        title: '거절에 실패했어요!',
                        position: 'top',
                        showConfirmButton: false,
                        timer: 1200,
                        timerProgressBar: false,
                        });
                })
            }
        })
    })
    return(
        <div>
        </div>
    )
}