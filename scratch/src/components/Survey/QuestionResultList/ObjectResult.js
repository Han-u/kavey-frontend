import {useDispatch} from 'react-redux';
import { ANSWER } from '../../redux/Slices/SurveyAnswerSlice';
import {Typography,TextField} from '@mui/material';

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        backgroundColor:'white',
        border: "1px solid",
        borderRadius:8,
        flexDirection: "column",
        width:'100%',
        padding:'30px',
        marginBottom: '30px',
    },
}



function ObjectResult({id, title}) {
    const dispatch = useDispatch();
    const onChange = (e) => {
        dispatch({type:ANSWER,id:id,value:e.target.value});
    };

    return (  
        <div style={styles.container}>
            <Typography variant="h4" fontFamily="HallymGothic-Regular"
            style={{marginBottom:'20px'}}
            >{title}</Typography>
            <TextField label="답변을 입력해주세요" onChange={onChange}></TextField>
        </div> 
        
    );
}

export default ObjectResult;