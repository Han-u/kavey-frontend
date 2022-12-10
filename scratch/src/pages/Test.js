import {useQuery} from 'react-query'
import axios from 'axios'
import { Button,CircularProgress } from '@mui/material'

function Test(){
    const sid=1;

    const {isLoading,data,isError,error}=useQuery('SurveyResultInfo',()=>{
        return axios.get('http://localhost:8081/api/survey/'+sid+'/receiver')
    })

    if(isLoading){
        return <h2>FFFFFFFFFFFFFFF</h2>
    }
    if(isError){
        return <h2>Oops... {error.message}</h2>
    }
    const usehandleClick=()=>{
        console.log(data.data);
    }
    console.log(data.data);

    return (
        <div>
        <Button onClick={usehandleClick}>하이</Button>
        </div>
    );


}

export default Test;