import {useQuery} from 'react-query'
import axios from 'axios'
import { Button,CircularProgress } from '@mui/material'

function ResultSurveyInfo(){
    const sid=1;
    const {isLoading,data,isError,error}=useQuery('SurveyResultInfo',()=>{
        return axios.get('http://localhost:8081/api/survey/'+sid+'/page')
        },
    )
    
    if(isLoading){
        return <CircularProgress />
    }
    if(isError){
        return <h2>Oops... {error.message}</h2>
    }


    const handleClick=()=>{
        console.log(data.data);
    }
    return (<div>
        
        <Button onClick={handleClick}>하이</Button>
    </div>)


}

export default ResultSurveyInfo;