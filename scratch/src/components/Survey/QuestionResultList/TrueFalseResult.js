import {useDispatch} from 'react-redux';

import {Button, ButtonGroup,Typography} from "@mui/material";
import { useState } from 'react';
import { ANSWER_SUBJECTIVE, CHECK_ANSWER } from '../../redux/Slices/SurveyAnswerSlice';
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

function TrueFalseResult({purpose,id,title,required}){
    const dispatch = useDispatch();

    const [clicked, setClicked] = useState();

    if(purpose == RESPONSE & clicked!=undefined){
        dispatch(ANSWER_SUBJECTIVE({ordering:id,value:clicked}));
        dispatch(CHECK_ANSWER());
    }


    return (
        <div style={styles.container}>
            <div>
            <div style={{ display:'flex',flexDirection:'row' ,justifyContent : "center" }}>
                {required === true && <h1 style={{color: "red"}} >*</h1> }
                <Typography variant="h4" fontFamily="HallymGothic-Regular" 
                style={{marginBottom:'20px'}}>{title}</Typography>
            </div>
            </div>
            
            <div>
                <ButtonGroup varient="outlined" size="large">
                    <Button variant={clicked===true?"contained":"outlined"} onClick={()=>setClicked(true)}>찬성</Button>
                    <Button variant={clicked===false?"contained":"outlined"} onClick={()=>setClicked(false)}>반대</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default TrueFalseResult;



