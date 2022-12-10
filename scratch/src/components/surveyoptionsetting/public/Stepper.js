import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NEXT_LEVEL, TO_BACKEND_OPTION } from '../../redux/Slices/SurveyOptionSlice';
import Swal from 'sweetalert2'
import produce from 'immer';
import axios from 'axios';
import {Typography} from "@mui/material"

const steps = ['설문 기본 설정', '설문 제작', '설문 배포'];

function HorizontalLinearStepper(props) {
  // const [activeStep, setActiveStep] = React.useState(0);
  // const [skipped, setSkipped] = React.useState(new Set());
  const navigate=useNavigate();

  //redux
  const dispatch= useDispatch();
  const optionData = useSelector((state)=>state.surveyOption);
  const questionData = useSelector((state)=>state.surveyMake.question);

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
            //option
            draftState.map((v,i) => {draftState[i].optionNumber = draftState[i].optionList.length});
            draftState.map((v,i) => {
              draftState[i].optionList.map((vv,ii)=>{
                draftState[i].optionList[ii].ordering = draftState[i].optionList[ii].ordering+1;
              })});
          })
          const newState = produce(optionData,(draftState) => {
            console.log(optionData);
            draftState.questionNumber = questionData.length;
            draftState.questionList = draftState.questionList.concat(newQuestionList);  


            if(draftState.theme=="lightpink"){
              draftState.theme="APEACH";
            }
            //삭제
            delete draftState["step"];

          })
          
          console.log(newState);
          axios.post('/api/survey',newState);
                navigate(`/management`);
              
              }
            })
          }
    
      
    // setSkipped(newSkipped);
  };



  const handleBack = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if(props.step ===2){
      // setActiveStep((prevActiveStep) => prevActiveStep + 1);
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

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={props.step}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
        //   if (isStepOptional(index)) {
        //     labelProps.optional = (
        //       <Typography variant="caption">Optional</Typography>
        //     );
        //   }
        //   if (isStepSkipped(index)) {
        //     stepProps.completed = false;
        //   }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {props.step === steps.length ? (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography> */}
          {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box> */}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step </Typography> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              {props.step===0?<Typography style={{color:"red"}} >취소</Typography>:'뒤로'}
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}
            <Button onClick={handleNext}>
              {props.step === steps.length - 1 ? '완료' : '다음'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default HorizontalLinearStepper;