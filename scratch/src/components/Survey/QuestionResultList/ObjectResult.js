import {useDispatch} from 'react-redux';
import { ANSWER_SUBJECTIVE } from '../../redux/Slices/SurveyAnswerSlice';
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



function ObjectResult({purpose,id, title,required}) {
    const dispatch = useDispatch();
    const onChange = (e) => {
        dispatch(ANSWER_SUBJECTIVE({ordering:id,value:e.target.value}));
    };

    return (  
        <div style={styles.container}>
            <div style={{ display:'flex',flexDirection:'row' ,justifyContent : "center" }}>
                {required === true && <h1 style={{color: "red"}} >*</h1> }
                <Typography variant="h4" fontFamily="HallymGothic-Regular"
                style={{marginBottom:'20px'}}>{title}</Typography>
            </div>
            <TextField label="답변을 입력해주세요" onChange={onChange}></TextField>
        </div> 
        
    );
}

export default ObjectResult;