import {useQuery} from 'react-query'
import axios from 'axios'
import { Button,CircularProgress } from '@mui/material'

function ResultParticipant(){
    const sid=1;
    const {isLoading,data,isError,error}=useQuery('SurveyResultInfo',()=>{
        return axios.get('http://localhost:8081/api/survey/'+sid+'/receiver')
        },
    )
    //api 로딩 출력 화면
    if(isLoading){
        return <CircularProgress />
    }
    //안될 때 화면
    if(isError){
        return <h2>Oops... {error.message}</h2>
    }


    const handleClick=()=>{
        console.log(data.data);
    }
    //다 되면 가능한 거
    return (<div>
        
        <Button onClick={handleClick}>하이</Button>
    </div>)


}

export default ResultParticipant;