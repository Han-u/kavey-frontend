import SurveyDatePicker from "./surveyduration/SurveyDatePicker";
import React, { useState } from "react";

function SurveyDuration() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const QuickButtonWeek=()=>{
    const beforeDate=new Date();
    const afterDate=new Date();
    setStartDate(beforeDate);
    setEndDate(afterDate.setDate(afterDate.getDate()+7));
  };

  const QuickButtonDoubleWeek=()=>{
    const beforeDate=new Date();
    const afterDate=new Date();
    setStartDate(beforeDate);
    setEndDate(afterDate.setDate(afterDate.getDate()+14));
  };

  const QuickButtonMonth=()=>{
    const beforeDate=new Date();
    const afterDate=new Date();
    setStartDate(beforeDate);
    setEndDate(afterDate.setDate(afterDate.getDate()+30));
  };
  return (
    <div align="center">
      <h2>2. 설문 기간 설정</h2>
      <div>
        <button onClick={QuickButtonWeek}>7일</button>
        <button onClick={QuickButtonDoubleWeek}>14일</button>
        <button onClick={QuickButtonMonth}>30일</button>
      </div>
      <div align="center">
        <SurveyDatePicker startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate}></SurveyDatePicker>
      </div>
    </div>
  );
}

export default SurveyDuration;
