import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SurveyDatePicker(props) {
  
  const onChange = (dates) => {
    const [start, end] = dates;
    props.setStartDate(start);
    props.setEndDate(end);
  };
  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <DatePicker      
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
