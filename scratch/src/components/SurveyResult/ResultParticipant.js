import {useQuery} from 'react-query'
import { Button,CircularProgress } from '@mui/material'
import { ATTEND_NONRESPONSE, ATTEND_RESPONSE, getAttendResult, RESULT_ATTEND} from './ResultQuery';


function ResultParticipant({surveyId}) {
    const {isLoading,data,isError,error} = useQuery(RESULT_ATTEND, ()=>getAttendResult(surveyId));
    
    if(isLoading){
        return <CircularProgress />
    }
    if(isError){
        return <h2>Oops... {error.message}</h2>
    }

    let filter = ""
    
    const handleClick=()=>{
        console.log(data);
    }

    const filterClick=(f)=>{
        f!=undefined ? filter = f : filter ="";
        console.log(filter);
    }


    return (
        <div>
            <Button onClick={handleClick}>하이</Button>
            <div>
                <Button onClick={()=>filterClick()}>전체</Button>
                <Button onClick={()=>filterClick(ATTEND_RESPONSE)}>응답</Button>
                <Button onClick={()=>filterClick(ATTEND_NONRESPONSE)}>무응답</Button>
            </div>
            <ParticipantList participant = {filter!=""? data.filter(d => d.status == filter) : data}/>
        </div>
    )
}

export default ResultParticipant;


function ParticipantList({participant}) {
    let list = participant.map( (d) => 
        <div>
            <p>{d.attendID}</p>
            <p>{d.sendEmail}</p>
            <p>{d.status}</p>
            <p>{d.responseDate}</p>   
            <p>{d.sendDate}</p>
            <p>-----------------</p>
        </div>
    )

    return (
        <div>
            {list}
        </div>
    )
}

