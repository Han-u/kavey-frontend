import React, {useRef} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SurveyDatePicker(props) {
  
  let datepicker=useRef(null); 

  const onChange = (dates) => {
    const [start, end] = dates;
    const date=new Date();
    if(start.getDate()< date.getDate()&& start.getMonth()<=date.getMonth() ){
      // console.log(start.getDate(),date.getDate());
      alert("기간은 현재 날짜보다 빠를 수 없습니다!");
      datepicker.setOpen(false);
    }else{
      props.setStartDate(start);
      props.setEndDate(end);
    }    
  };
  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <DatePicker
      ref={(r)=>datepicker=r}
      customInput={<ExampleCustomInput />}
      placeholderText="기간을 정해주세요"
      onChange={onChange}
      startDate={props.startDate}
      endDate={props.endDate}
      selectsRange
    />
  );
}

export default SurveyDatePicker;
