import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NEXT_LEVEL, TO_BACKEND_OPTION } from '../../redux/Slices/SurveyOptionSlice';
import Swal from 'sweetalert2'
import produce from 'immer';
import axios from 'axios';
import {IconButton, Typography} from "@mui/material"
import { CHECKBOX,RADIO } from '../../redux/Slices/SurveyMakeSlice';

import ReplyIcon from '@mui/icons-material/Reply';
import StepperChild1 from './Stepper/StepperChild1';
import StepperChild2 from './Stepper/StepperChild2';
import StepperChild3 from './Stepper/StepperChild3';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

function HorizontalLinearStepper(props) {
  // const [activeStep, setActiveStep] = React.useState(0);
  // const [skipped, setSkipped] = React.useState(new Set());
  const navigate=useNavigate();

  //redux
  const dispatch= useDispatch();
  const optionData = useSelector((state)=>state.surveyOption);
  const questionData = useSelector((state)=>state.surveyMake.question);
  const surveyOption=useSelector((state)=>state.surveyOption);

  
  const validationNext=()=>{
    if(surveyOption.title===""){
        return true;
    }else{
        return false;
    }
}

  const handleNext = () => {

    if(props.step ===0){

      dispatch(NEXT_LEVEL(1))
      navigate(`/surveymake`);
    }else if(props.step ===1){
      dispatch(NEXT_LEVEL(1));
      navigate(`/sendsurvey`);
    }else{      
      Swal.fire({
        title: '설문 제작을 완료하시겠어요?',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '네',
        cancelButtonText:'아니요'
      }).then((result) => {
        if (result.isConfirmed) {
          //front -> back example code 
          //db쪽 1부터 시작하므로,,, 작업이 필요합니당
          const newQuestionList = produce(questionData,(draftState) => {
            //question
            draftState.map((v,i) => {draftState[i].ordering =draftState[i].ordering+1});
            //multiple option
            draftState.map((v,i) => {draftState[i].optionNumber = draftState[i].optionList.length});
            draftState.map((v,i) => {
              draftState[i].optionList.map((vv,ii)=>{
                draftState[i].optionList[ii].ordering = draftState[i].optionList[ii].ordering+1;
                if(draftState[i].canMulti == true){
                  draftState[i].type = CHECKBOX;
                }
                else if(draftState[i].canMulti == false){
                  draftState[i].type = RADIO;
                }
                delete draftState[i].canMulti;
              })});
          })
          const newState = produce(optionData,(draftState) => {
            console.log(optionData);
            draftState.questionNumber = questionData.length;
            draftState.questionList = draftState.questionList.concat(newQuestionList);  

            delete draftState["step"];

          })
          
          console.log(newState);
          axios.post('/api/survey',newState);
                navigate(`/management`);
              
              }
            })
          }

  };
  const uCantGo=()=>{
    Swal.fire({
      toast: true,
      icon: 'error',
      title: '필수 입력을 적어주세요!',
      animation: false,
      position: 'top',
      showConfirmButton: false,
      timer: 1200,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
  }



  const handleBack = () => {
    if(props.step ===2){
      dispatch(NEXT_LEVEL(-1))
      navigate(`/surveymake`);
    }else if(props.step ===1){
      dispatch(NEXT_LEVEL(-1));
      navigate(`/surveyoptionsetting`);
    }else if(props.step===0){
      Swal.fire({
        title: '정말 취소하시겠어요?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '네',
        cancelButtonText:'아니오',
    }).then((result) => {
        if (result.isConfirmed) {
            navigate(`/management`);
        }
    })
    }
  };

  const handleCancel = () => {
      Swal.fire({
        title: '정말 취소하시겠어요?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '네',
        cancelButtonText:'아니오',
    }).then((result) => {
        if (result.isConfirmed) {
            navigate(`/management`);
        }
    })
  };

  return (
    <Box sx={{ width: '95%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    height:"100%"}} >
      {props.step===0?
      <Button
      color="inherit"
      onClick={handleCancel}
      sx={{ mr: 1 }}
      >
      <IconButton style={{color:"#202225"}}><ClearIcon fontSize="large"/></IconButton>
      </Button>
      :
      <Box>
      <Button
              color="inherit"
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              <IconButton style={{color:"#202225"}}><ReplyIcon fontSize="large"/></IconButton>
      </Button>
      <Button
      color="inherit"
      onClick={handleCancel}
      sx={{ mr: 1 }}
      >
      <IconButton style={{color:"#202225"}}><ClearIcon fontSize="large"/></IconButton>
      </Button>
      </Box>}
      

      {props.step===0?<StepperChild1/>:props.step===1?<StepperChild2/>:<StepperChild3/>}
      
      {props.step===2?
            <IconButton onClick={handleNext} style={{color:"black", fontFamily: 'NanumSquareR', fontSize: 20}}>
              완료<CheckIcon/>
            </IconButton>:
            validationNext()?
            <IconButton 
            onClick={uCantGo}
            style={{color:"red", fontFamily: 'NanumSquareR', fontSize: 20}}>
              다음으로<ArrowForwardIosIcon/>
            </IconButton>
              :
              <IconButton 
              onClick={handleNext} style={{color:"white", fontFamily: 'NanumSquareR', fontSize: 20}}>
                다음으로<ArrowForwardIosIcon/>
              </IconButton>}
            
    </Box>
  );
}

export default HorizontalLinearStepper;