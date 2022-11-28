import React, {useRef} from "react";
import {Button} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch,useSelector } from 'react-redux'
import {SET_STARTDATE,SET_ENDDATE} from "../../redux/Slices/SurveyOptionSlice"
import Swal from 'sweetalert2'

function SurveyDatePicker() {

  const dispatch=useDispatch();
  const startDate=useSelector((state)=>state.surveyOption.startDate);
  const endDate=useSelector((state)=>state.surveyOption.endDate);



  let datepicker=useRef(null); 

  const onChange = (dates) => {
    const [start, end] = dates;
    const date=new Date();
    if((start.getDate()< date.getDate()&& start.getMonth()<=date.getMonth())
    ||(start.getDate()>= date.getDate()&& start.getMonth()<date.getMonth()) ){
      Swal.fire({
        title: '기간은 현재 날짜보다 \n 빠를 수 없습니다!',
        icon: 'error',
        confirmButtonText: '확인'
      })
      datepicker.setOpen(false);
    }else{      
      dispatch(SET_STARTDATE(start));
      dispatch(SET_ENDDATE(end));
    }    
  };
  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <Button size="large" variant="outlined" className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </Button>
  ));
  return (
    <DatePicker
      ref={(r)=>datepicker=r}
      dateFormat="yyyy/MM/dd"
      customInput={<ExampleCustomInput />}
      placeholderText="기간을 정해주세요"
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      withPortal
      selectsRange
    />
  );
}

export default SurveyDatePicker;
