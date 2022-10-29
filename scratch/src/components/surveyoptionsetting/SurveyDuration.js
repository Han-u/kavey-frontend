import SurveyDatePicker from "./surveyduration/SurveyDatePicker";
import React, { useState } from "react";

function SurveyDuration() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const QuickButtonWeek=()=>{
    const beforeDate=new Date();
    const afterDate=new Date();
    setStartDate(beforeDate);
    afterDate.setDate(afterDate.getDate()+7)
    setEndDate(afterDate);    
  };

  const QuickButtonDoubleWeek=()=>{
    const beforeDate=new Date();
    const afterDate=new Date();
    setStartDate(beforeDate);
    afterDate.setDate(afterDate.getDate()+14)
    setEndDate(afterDate);
  };

  const QuickButtonMonth=()=>{
    const beforeDate=new Date();
    const afterDate=new Date();
    setStartDate(beforeDate);
    afterDate.setDate(afterDate.getDate()+30)
    setEndDate(afterDate);
  };
  return (
    <div align="center">
      <h2>2. 설문 기간 설정</h2>
      <h3>기간을 정해주세요</h3>
      <div>
        <button onClick={QuickButtonWeek}>7일</button>
        <button onClick={QuickButtonDoubleWeek}>14일</button>
        <button onClick={QuickButtonMonth}>30일</button>
      </div>
      <div align="center">
        <h4>시작 기간 ~ 종료 기간</h4>
        <SurveyDatePicker startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate}></SurveyDatePicker>
      </div>
      {/* <button onClick={()=>console.log(startDate,endDate)}>테스트</button> */}
    </div>
  );
}

export default SurveyDuration;
