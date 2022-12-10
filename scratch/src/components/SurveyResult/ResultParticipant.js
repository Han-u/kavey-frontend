import {useQuery} from 'react-query'
import { Button,CircularProgress } from '@mui/material'
import { ATTEND_NONRESPONSE, ATTEND_RESPONSE, getAttendResult, RESULT_ATTEND} from './other/Query';
import { useState } from 'react';
import Swal from 'sweetalert2'

let filter = "ALL";
function ResultParticipant({surveyId}) {
    const {isLoading,data,isError,error} = useQuery(RESULT_ATTEND, ()=>getAttendResult(surveyId));
    const [reData,setReData] = useState();

    if(isLoading){
        return <CircularProgress />
    }
    if(isError){
        return <h2>Oops... {error.message}</h2>
    }

    
    const handleClick=()=>{
        console.log(data);
    }


    const filterClick=(f)=>{
        filter = f;
        filter != "ALL" ? setReData(Object.assign(data).filter(d => d.status===filter)): setReData(Object.assign(data));
    }

    return (
        <div>
            <Button onClick={handleClick}>하이</Button>
            <div>
                <Button onClick={()=>filterClick("ALL")}>전체</Button>
                <Button onClick={()=>filterClick(ATTEND_RESPONSE)}>응답</Button>
                <Button onClick={()=>filterClick(ATTEND_NONRESPONSE)}>무응답</Button>
            </div>
            {filter != "ALL"? <ParticipantList participant = {reData} />:<ParticipantList participant = {data} />}
        </div>
    )
}

export default ResultParticipant;



function ParticipantList({participant}) {
const handleClick=()=>{
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
        })
}

    let list;
    if(participant!=undefined){
        list = participant.map( (d) => 
            <div>
                <p>{d.attendID}</p>
                <p>{d.sendEmail}</p>
                <p>{d.status}</p>
                <p>{d.responseDate}</p>   
                <p>{d.sendDate}</p>
                {d.status==ATTEND_RESPONSE? <button onClick={handleClick}>링크맨</button>:null}
                <p>-----------------</p>
            </div>
        )
    }

    return (
        <div>
            {list}
        </div>
    )
}

