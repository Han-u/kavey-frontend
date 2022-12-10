import {useQuery} from 'react-query'
import {CircularProgress } from '@mui/material'
import { getStaticsResult, RESULT_STATICS } from './other/Query';
import { Barchart, Piechart } from './other/Chart';
import { OBJECTIVE, STAR, TRUEFALSE } from '../redux/Slices/SurveyMakeSlice';
import produce from 'immer';


function ResultStatics({surveyId,limitPerson}) {
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
            <QuestionStaticsList statics={data.responseQuestionResultList}/>
        </div>
      );
}
export default ResultStatics;

function AttendStatics({attendCount,limitPerson}){
  console.log(attendCount,limitPerson);
  if(limitPerson!=undefined){
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
      <div>
        <h1>참가자 수</h1>
        <Piechart data={data}/>
      </div>
    )
  } 
  else{
    return(
    <div>
        <h1>참가자 수</h1>
        <h1>{attendCount}</h1>
    </div>
    )
  }
}


function QuestionStaticsList({statics}) {  
  console.log(statics);
  let graphs = statics.map(d=>{
    let s;
    switch (d.type){
      case OBJECTIVE:
        s = d.answerCountList.map((dd)=>(
          <p>{dd.value}</p>
        ));
        return <div>
            <h2>type : {d.type}</h2>
            <h2>카운트 수 : {d.attendCount}</h2>
            <p>{s}</p>
          </div>
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
            <h2>type : {d.type}</h2>
            <h2>카운트 수 : {d.attendCount}</h2>
            <Barchart  keys={keys} data={s}/>
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
            <h2>type : {d.type}</h2>
            <h2>카운트 수 : {d.attendCount}</h2>
            <Piechart  data={s}/>
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



