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
    <div>
      <div style={{height:"210px",display:"flex",
      flexDirection:"row",width:"100%"}}>
        <div style={{width:"274px"}}>
          <Typography variant="h4" fontFamily="NanumSquare"
          style={{paddingBottom:'5px',fontWeight:"550",fontSize:"24px",marginTop:"50px",marginRight:"50px"}}
          >설문 기간</Typography>
        </div>
        <div style={{marginTop:"50px"}}>
            <div style={{float:"left",marginBottom:"20px"}}>        
              <SurveyDatePicker></SurveyDatePicker>
            </div>
            <div >
                <Button variant="outlined" style={{marginRight:"10px",height:"30px"}} onClick={QuickButtonWeek}>7일</Button>
                <Button variant="outlined" style={{marginRight:"10px",height:"30px"}} onClick={QuickButtonDoubleWeek}>14일</Button>
                <Button variant="outlined" style={{marginRight:"10px",height:"30px"}} onClick={QuickButtonMonth}>30일</Button>
            </div>
        </div>
      </div>
      <div style={{borderBottom:"1px solid #000000",width:'70%'}}></div>
    </div>
  );
}

export default SurveyDuration;
