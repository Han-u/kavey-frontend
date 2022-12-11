import {useQuery} from 'react-query'
import {CircularProgress } from '@mui/material'
import { getStaticsResult, RESULT_STATICS } from './other/Query';
import { Barchart, Piechart } from './other/Chart';
import { OBJECTIVE, STAR, TRUEFALSE } from '../redux/Slices/SurveyMakeSlice';
import produce from 'immer';

const style = {
    questionContainer: {
      margin: 30
    },
    title: {
        fontFamily: 'NanumSquareR', fontSize: 30
    },
    description : {
        fontFamily: 'NanumSquareL', fontSize: 15
    },
    subText: {
        width: 500,
        backgroundColor: '#FAFAFA',
        margin: 10,
        padding: 10,
        fontFamily: 'NanumSquareR',
        fontSize: 15
    },
    hr : {
        border: '1px solid black',
        width: '85%'
    }
}

function ResultStatics({surveyId,limitPerson,question}) {
    const {isLoading,data,isError,error} = useQuery(RESULT_STATICS, ()=>getStaticsResult(surveyId));

    if(isLoading){
        return <CircularProgress />
    }
    if(isError){
        return <h2>Oops... {error.message}</h2>
    }

    
    return (
        <div>
            <AttendStatics attendCount={data.attendCount} limitPerson={limitPerson}/>
            <QuestionStaticsList statics={data.responseQuestionResultList} question={question}/>
        </div>
      );
}
export default ResultStatics;

function AttendStatics({attendCount,limitPerson}){
  if(limitPerson!==undefined){
    let data = [
      {
        "id": "참가",
        "label": "참가",
        "value": attendCount,
        "color": "#000000 "
      },
      {
        "id": "미참가",
        "label": "미참가",
        "value": limitPerson-attendCount,
        "color":"hsl(308, 70%, 50%)"
      },
    ]
    return(
      <div style={{
          width: '80%',
          background: "#FAFAFA",
          borderRadius: 10}}>
          <div style={{paddingTop: 15}}>
              <span style={style.title}>응답 현황</span><br/>
              <span style={style.description}>참여자 : 총 {attendCount}명</span>
          </div>
        <Piechart data={data}/>
      </div>
    )
  } 
  else{
    return(
        <div style={{
            width: '80%',
            background: "#FAFAFA",
            borderRadius: 10}}>
            <div style={{paddingTop: 15}}>
                <span style={{fontFamily: 'NanumSquareR', fontSize: 30}}>응답 현황</span><br/>
                <span style={{fontFamily: 'NanumSquareL', fontSize: 15}}>참여자 : 총 {attendCount}명</span>
            </div>
        </div>
    )
  }
}


function QuestionStaticsList({statics,question}) {
  console.log(statics);
  let graphs = statics.map(d=>{
    let s;
    switch (d.type){
      case OBJECTIVE:
        s = d.answerCountList.map((dd)=>(
          <div style={style.subText}>{dd.value}</div>
        ));
        return (
            <div>
                <div style={style.questionContainer}>
                    <p style={style.title}>{d.questionId} 주관식 질문 : {question.filter(dd=>dd.questionId===d.questionId)[0].title}</p>
                    <p style={style.description}>총 응답자 : {d.attendCount} 명</p>
                    {s}
                </div>
                <div style={style.hr}></div>
            </div>
        )
      break;
      case TRUEFALSE:
      case STAR:
        let dc={};
        d.answerCountList.map((dd)=>{
          let keyname =String(dd.value);
          dc[keyname] = 0;
        });

        let keys = Object.keys(dc);
        let tmp=Object.assign(dc);
        s = d.answerCountList.map((dd)=>{
          const newTmp = produce(tmp,(draftState) => {
            draftState["x"] = dd.value;
            draftState[dd.value] = dd.count;
          })
          return newTmp;  
        }  
        );

        return <div>
            <div style={style.questionContainer}>
            <p style={style.title}>{d.questionId} 별점 평점 질문 : {question.filter(dd=>dd.questionId===d.questionId)[0].title}</p>
            <p style={style.description}>총 응답자 : {d.attendCount} 명</p>
            <Barchart  keys={keys} data={s}/>
        </div>
          <div style={style.hr}></div>
        </div>


      break;
      default:
        s = d.answerCountList.map((dd)=>(
          {
            "id": dd.value,
            "label": dd.value,
            "value": dd.count,
          }
        ));
          return <div>
              <div style={style.questionContainer}>
                  <p style={style.title}>{d.questionId} 객관식 질문 : {question.filter(dd=>dd.questionId===d.questionId)[0].title}</p>
                  <p style={style.description}>총 응답자 : {d.attendCount} 명</p>
                  <Piechart  data={s}/>
              </div>
              <div style={style.hr}></div>
          </div>
      break;
    }
  })



  return (
      <div>
        {graphs}
      </div>
    );
}



