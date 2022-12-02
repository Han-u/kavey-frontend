import {useDispatch} from 'react-redux';

import {Button, ButtonGroup,Typography} from "@mui/material";
import { useState } from 'react';
import { ANSWER_GENDER, ANSWER_SUBJECTIVE, CHECK_ANSWER } from '../../redux/Slices/SurveyAnswerSlice';
import { RESPONSE } from '../QuestionResultList';

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

function GenderResult({purpose,id,title,required}){
    const dispatch = useDispatch();

    const [gender, setGender] = useState();

    if(purpose == RESPONSE & gender!=undefined){
        dispatch(ANSWER_GENDER({value:gender}));
        dispatch(CHECK_ANSWER());
    }


    return (
        <div style={styles.container}>
            <div>
            <div style={{ display:'flex',flexDirection:'row' ,justifyContent : "center" }}>
                <h1 style={{color: "red"}} >*</h1>
                <Typography variant="h4" fontFamily="HallymGothic-Regular" 
                style={{marginBottom:'20px'}}>당신의 성별은?</Typography>
            </div>
            </div>
            
            <div>
                <ButtonGroup varient="outlined" size="large">
                    <Button variant={gender==="MALE"?"contained":"outlined"} onClick={()=>setGender("MALE")}>남자</Button>
                    <Button variant={gender==="FEMALE"?"contained":"outlined"} onClick={()=>setGender("FEMALE")}>여자</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default GenderResult;



