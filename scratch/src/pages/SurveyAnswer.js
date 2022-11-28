import AnswerResultList from "../components/Survey/AnswerResultList";
import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";
import { GET_SURVEY } from "../components/redux/Slices/SurveyAnswerSlice";

import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'

import { Typography,Button} from "@mui/material";


let FLAG = -1;
function SurveyAnswer() {
    const answer = useSelector((state)=>state.surveyAnswer.answer);
    const dispatch = useDispatch();

    const navigate=useNavigate();

    const handleClick=()=>{
        Swal.fire({
            title: '제출하시겠어요?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '네',
            cancelButtonText:'아니요'
        }).then((result) => {
            if (result.isConfirmed) {
              console.log(answer);
              axios.post("/api/survey/5/submit",answer).then(response => {
              });
                //navigate(`/submit`);
            }
        })
    };


    if(FLAG==-1){
      axios.get("/api/survey/5/page").then(response => {
        //console.log(response.data);
        dispatch(GET_SURVEY({data:response.data}));
      });
    FLAG = 1; 
    }
    

    return ( 
        <div align="center">
          <AnswerResultList/>
          <Button variant="contained" onClick={handleClick}>제출하기</Button>
        </div>
     );
}

export default SurveyAnswer;