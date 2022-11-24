import SurveyDatePicker from "./surveyduration/SurveyDatePicker";
import {Button,Typography,ButtonGroup} from "@mui/material";
import { useDispatch } from 'react-redux'
import {SET_STARTDATE,SET_ENDDATE} from "../redux/Slices/SurveyOptionSlice"
import Swal from 'sweetalert2'

function SurveyDuration() {
  const dispatch = useDispatch(); 

  const QuickButtonWeek=()=>{
    const beforeDate=new Date();
    const afterDate=new Date();
    afterDate.setDate(afterDate.getDate()+7)
    dispatch(SET_STARTDATE(beforeDate));
    dispatch(SET_ENDDATE(afterDate));   
    Swal.fire({
      toast: true,
      icon: 'success',
      title: '설정됐어요!',
      animation: false,
      position: 'bottom',
      showConfirmButton: false,
      timer: 1200,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
  };

  const QuickButtonDoubleWeek=()=>{
    const beforeDate=new Date();
    const afterDate=new Date();
    afterDate.setDate(afterDate.getDate()+14)
    dispatch(SET_STARTDATE(beforeDate));
    dispatch(SET_ENDDATE(afterDate));
    Swal.fire({
      toast: true,
      icon: 'success',
      title: '설정됐어요!',
      animation: false,
      position: 'bottom',
      showConfirmButton: false,
      timer: 1200,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
  };

  const QuickButtonMonth=()=>{
    const beforeDate=new Date();
    const afterDate=new Date();
    afterDate.setDate(afterDate.getDate()+30)

    dispatch(SET_STARTDATE(beforeDate));
    dispatch(SET_ENDDATE(afterDate));
    Swal.fire({
      toast: true,
      icon: 'success',
      title: '설정됐어요!',
      animation: false,
      position: 'bottom',
      showConfirmButton: false,
      timer: 1200,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
  };
  return (
    <div align="center">
      <Typography variant="h4" fontFamily="HallymGothic-Regular"
      style={{paddingBottom:'5px'}}
      >설문 기간 설정</Typography>
      <Typography variant="h6" fontFamily="HallymGothic-Regular"
      style={{paddingBottom:'10px'}}
      >설문 기간을 정해주세요</Typography>
      <div style={{width:'50%'}}>
        <ButtonGroup variant="outlined" style={{margin:'10px'}}>
          <Button onClick={QuickButtonWeek}>7일</Button>
          <Button onClick={QuickButtonDoubleWeek}>14일</Button>
          <Button onClick={QuickButtonMonth}>30일</Button>
        </ButtonGroup>
      </div>
      <div align="center">        
        <SurveyDatePicker></SurveyDatePicker>
      </div>
    </div>
  );
}

export default SurveyDuration;
