import {useSelector,useDispatch} from 'react-redux';
import { ButtonGroup,Button,Typography } from '@mui/material';
import { OBJECTIVE,MULTIPLE,TRUEFALSE,STAR,RADIO,CHECKBOX } from "../redux/Slices/SurveyMakeSlice";
import ObjectResult from './QuestionResultList/ObjectResult';
import MultipleResult from './QuestionResultList/MultipleResult';
import TrueFalseResult from './QuestionResultList/TrueFalseResult';
import RatingResult from './QuestionResultList/RatingResult';
import GenderResult from './QuestionResultList/GenderResult';
import AgeResult from './QuestionResultList/AgeResult';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SET_THEME_TEST } from '../redux/Slices/SurveyOptionSlice';

export const MAKE = "MAKE";
export const RESPONSE = "RESPONSE";
export const RESULT = "RESULT";


function QuestionResultList({purpose,surveyOption,question,themeResult}) {
    let list = [];
    const dispatch=useDispatch();
    console.log(themeResult);
    if(themeResult){
        dispatch(SET_THEME_TEST(themeResult));
    }
    
    const theme=useSelector((state)=>state.surveyOption.themeForFront);
    const navigate=useNavigate();
    
    if(question!==undefined){
        list = question.map(
            r => {
                switch (r.type) {
                    case OBJECTIVE:
                        return <ObjectResult purpose={purpose} q_id={r.questionId} id={r.ordering} title={r.title} required={r.required}/>
                    case MULTIPLE:
                        return <MultipleResult purpose={purpose} q_id={r.questionId}  id={r.ordering} title={r.title} required={r.required} canMulti={r.canMulti} response={r.optionList} />
                    case RADIO:
                        return <MultipleResult purpose={purpose} q_id={r.questionId}  id={r.ordering} title={r.title} required={r.required} canMulti={r.canMulti} type={r.type} response={r.optionList} />
                    case CHECKBOX:
                        return <MultipleResult purpose={purpose} q_id={r.questionId} id={r.ordering} title={r.title} required={r.required} canMulti={r.canMulti} type={r.type} response={r.optionList} />
                    case TRUEFALSE:
                        return <TrueFalseResult purpose={purpose} q_id={r.questionId}  id={r.ordering} title={r.title} required={r.required}/>
                    case STAR:
                        return <RatingResult purpose={purpose} q_id={r.questionId} id={r.ordering} title={r.title} required={r.required}/>
                }
            }
        )
    }

    return (
        purpose!=RESULT?
            <div align="center" style={{width:'960px',backgroundColor:"white", height: '100vh'}}>
                <div align="center" style={{
                backgroundImage:theme,
                backgroundColor:"#D4E8FF",
                width:"100%",
                height:"200px",
                display:"flex",
                flexDirection:"row"}}>
                    <div style={{
                        paddingLeft: '50px',
                        justifyContent: 'center',
                    flexDirection:"column",
                    display:"flex",
                    width:"670px"}}>
                        <Typography
                        align="left"
                        style={{width:"550px",
                        borderRadius: '10px',
                        marginBottom:"10px",
                        paddingLeft:'10px',
                        fontSize:"36px",
                        fontWeight:"bold",
                        }}
                        >
                        {surveyOption.title}
                        </Typography>
                        <Typography
                        align="left"
                        style={{width:"620px",
                            borderRadius: '10px',
                        paddingLeft:'15px',fontSize:"16px"}}>
                            {surveyOption.description}
                        </Typography>
                        </div>                    
                </div>
                    {surveyOption.askGender?<div><GenderResult purpose={purpose}/></div>:null}
                    {surveyOption.askAge?<div><AgeResult purpose={purpose}/></div>:null}
                    {list}
            </div>
            :
            <div align="center" style={{width:"100%",height:"100vh",background:"#F5F5F5"}}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: 30,
                    justifyContent: 'space-between',
                    backgroundColor: '#202225',
                    height:"100px"
                }}>
                <Button variant="contained" 
                onClick={()=>{navigate(-1)}}
                style={{color: 'black', backgroundColor: '#FFD701', borderRadius: '10px'}}>
                    뒤로가기
                </Button>
                <Typography variant="h4" fontFamily="NanumSquareB" style={{color: "white"}}>
                    개인 응답 조회
                </Typography>
                <div>어떻게 알았지</div>
                
                </div>
                <div align="center" style={{width:'960px',backgroundColor:"white", height: '100vh'}}>
                    <div align="center" style={{
                    backgroundImage:theme,
                    backgroundColor:"#D4E8FF",
                    width:"100%",
                    height:"200px",
                    display:"flex",
                    flexDirection:"row"}}>
                        <div style={{
                            paddingLeft: '50px',
                            justifyContent: 'center',
                        flexDirection:"column",
                        display:"flex",
                        width:"670px"}}>
                            <Typography
                            align="left"
                            style={{width:"550px",
                            borderRadius: '10px',
                            marginBottom:"10px",
                            paddingLeft:'10px',
                            fontSize:"36px",
                            fontWeight:"bold",
                            }}
                            >
                            {surveyOption.title}
                            </Typography>
                            <Typography
                            align="left"
                            style={{width:"620px",
                                borderRadius: '10px',
                            paddingLeft:'15px',fontSize:"16px"}}>
                                {surveyOption.description}
                            </Typography>
                            </div>                    
                    </div>
                        {surveyOption.askGender?<div><GenderResult purpose={purpose}/></div>:null}
                        {surveyOption.askAge?<div><AgeResult purpose={purpose}/></div>:null}
                        {list}
                </div>
            </div>
    );
}

export default QuestionResultList;