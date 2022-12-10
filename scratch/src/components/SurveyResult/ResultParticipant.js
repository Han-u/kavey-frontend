import {useQuery} from 'react-query'
import { Button,CircularProgress } from '@mui/material'
import { getPersonalResult, RESULT_PERSONAL } from './ResultQuery';


function ResultParticipant({surveyId}) {
    const {isLoading,data,isError,error} = useQuery(RESULT_PERSONAL, ()=>getPersonalResult(surveyId) );
    
    if(isLoading){
        return <CircularProgress />
    }
    if(isError){
        return <h2>Oops... {error.message}</h2>
    }

    
    const handleClick=()=>{
        console.log(data);
    }
    return (<div>
        <Button onClick={handleClick}>하이</Button>
        <p>{data.userId}</p>
    </div>)
}

export default ResultParticipant;