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
        <div>
            <div style={{height:"230px"}}>
                <div style={{ display:'flex',flexDirection:'row' ,justifyContent : "center",paddingTop:"45px" }}>
                    {required === true && <h2 style={{color: "red"}} >*</h2> }
                    <Typography fontFamily="NanumSquareB"
                    style={{marginBottom:'20px',fontSize:"26px"}}>{title}</Typography>
                </div>
                {purpose!=RESULT?  
                <TextField label="답변을 입력해주세요" onChange={onChange} style={{width:"400px",height:"110px",marginTop:"15px"}}></TextField>
                : 
                <Typography fontFamily="NanumSquareR"
                style={{fontSize:"40px"}}>{filter_data[0].answer}</Typography>
                // <input type="text" value={filter_data[0].answer} readOnly={true}/>
                }    
            </div> 
            <div style={{borderBottom:"1px solid #000000",width:'824px'}}></div>
        </div>
    );
}

export default ObjectResult;