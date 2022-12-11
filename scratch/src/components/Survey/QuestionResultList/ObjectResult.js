import {useDispatch,useSelector} from 'react-redux';
import { ANSWER_SUBJECTIVE, CHECK_ANSWER } from '../../redux/Slices/SurveyAnswerSlice';
import {Typography,TextField} from '@mui/material';
import { RESPONSE,RESULT } from '../QuestionResultList';

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



function ObjectResult({purpose,q_id,id, title,required}) {
    const data = useSelector((state)=>state.surveyPersonal.result);

    const filter_data = data.filter((d)=>d.questionId == q_id);


    const dispatch = useDispatch();
    const onChange = (e) => {
        dispatch(ANSWER_SUBJECTIVE({ordering:id,value:e.target.value}));
        dispatch(CHECK_ANSWER());
    };

    return (  
        <div style={styles.container}>
            <div style={{ display:'flex',flexDirection:'row' ,justifyContent : "center" }}>
                {required === true && <h1 style={{color: "red"}} >*</h1> }
                <Typography variant="h4" fontFamily="HallymGothic-Regular"
                style={{marginBottom:'20px'}}>{title}</Typography>
            </div>
            {purpose!=RESULT?  <input type="text" label="답변을 입력해주세요" onChange={onChange}/>: <input type="text" value={filter_data[0].answer} readOnly={true}/>}    
        </div> 
        
    );
}

export default ObjectResult;