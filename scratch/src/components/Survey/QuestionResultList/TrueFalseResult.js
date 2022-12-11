import {useDispatch,useSelector} from 'react-redux';

import {Button, ButtonGroup,Typography} from "@mui/material";
import { useState } from 'react';
import { ANSWER_SUBJECTIVE, CHECK_ANSWER } from '../../redux/Slices/SurveyAnswerSlice';
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

function TrueFalseResult({purpose,q_id,id,title,required}){
    const data = useSelector((state)=>state.surveyPersonal.result);
    const filter_data = data.filter((d)=>d.questionId == q_id)
    console.log("찬반:",filter_data);
    
    const dispatch = useDispatch();

    const [clicked, setClicked] = useState();

    if(purpose == RESPONSE & clicked!=undefined){
        dispatch(ANSWER_SUBJECTIVE({ordering:id,value:clicked}));
        dispatch(CHECK_ANSWER());
    }


    return (
        <div>
        <div style={{height:"220px"}}>
            <div style={{ display:'flex',flexDirection:'row' ,justifyContent : "center",paddingTop:"30px" }}>
                {required === true && <h2 style={{color: "red"}} >*</h2> }
                <Typography fontFamily="NanumSquare"
                style={{marginBottom:'20px',fontSize:"26px"}}>{title}</Typography>
            </div>
            {/* <div>
                    <Button variant={clicked===true?"contained":"outlined"} 
                    onClick={()=>setClicked(true)} 
                    style={
                        clicked===true?
                        {width:"160px",
                        height:"60px" ,
                        marginRight:"10px"
                        ,borderRadius:"10px",
                        fontSize:"28px",
                        backgroundColor:"#FFD701",
                        border:"1px solid #D9D9D9",
                        color:"black"}
                        :
                        {width:"160px",
                        height:"60px" ,
                        marginRight:"10px"
                        ,borderRadius:"10px",
                        fontSize:"28px",
                        backgroundColor:"#FFFFFF",
                        border:"1px solid #D9D9D9",
                        color:"black"}}>찬성</Button>
                    <Button variant={clicked===false?"contained":"outlined"} 
                    onClick={()=>setClicked(false)} 
                    style={clicked===false?
                        {width:"160px",
                        height:"60px"
                        ,borderRadius:"10px",
                        fontSize:"28px",
                        backgroundColor:"#FFD701",
                        border:"1px solid #D9D9D9",
                        color:"black"}
                        :
                        {width:"160px",
                        height:"60px"
                        ,borderRadius:"10px",
                        fontSize:"28px",
                        backgroundColor:"#FFFFFF",
                        border:"1px solid #D9D9D9",
                        color:"black"}}>반대</Button>
            </div> */}
            <div>
                {purpose!=RESULT ? <div>
                <Button variant={clicked===true?"contained":"outlined"} 
                onClick={()=>setClicked(true)} 
                style={
                    clicked===true?
                    {width:"160px",
                    height:"60px" ,
                    marginRight:"10px"
                    ,borderRadius:"10px",
                    fontSize:"28px",
                    backgroundColor:"#FFD701",
                    border:"1px solid #D9D9D9",
                    color:"black"}
                    :
                    {width:"160px",
                    height:"60px" ,
                    marginRight:"10px"
                    ,borderRadius:"10px",
                    fontSize:"28px",
                    backgroundColor:"#FFFFFF",
                    border:"1px solid #D9D9D9",
                    color:"black"}}>찬성</Button>
                <Button variant={clicked===false?"contained":"outlined"} 
                onClick={()=>setClicked(false)} 
                style={clicked===false?
                    {width:"160px",
                    height:"60px"
                    ,borderRadius:"10px",
                    fontSize:"28px",
                    backgroundColor:"#FFD701",
                    border:"1px solid #D9D9D9",
                    color:"black"}
                    :
                    {width:"160px",
                    height:"60px"
                    ,borderRadius:"10px",
                    fontSize:"28px",
                    backgroundColor:"#FFFFFF",
                    border:"1px solid #D9D9D9",
                    color:"black"}}>반대</Button></div>
                :
                <ButtonGroup varient="outlined" size="large">
                    <Button variant={Boolean(filter_data[0].answer)===true?"contained":"outlined"} onClick={()=>setClicked(true)}>찬성</Button>
                    <Button variant={Boolean(filter_data[0].answer)===false?"contained":"outlined"} onClick={()=>setClicked(false)}>반대</Button>
                </ButtonGroup>
                }
                
            </div>
        </div>
        </div>
    )
}

export default TrueFalseResult;



