import React from "react";
import {Button,Typography} from "@mui/material";
import { useDispatch,useSelector } from 'react-redux'
import {SET_PUBLIC_PRIVATE,SET_PEOPLE_LIMIT} from "../redux/Slices/SurveyOptionSlice"

function SurveyAccessType() {
    const publicPrivate=useSelector((state)=>state.surveyOption.publicPrivate);
    const peopleLimit=useSelector((state)=>state.surveyOption.peopleLimit);

    const dispatch=useDispatch();

    const handleClick = (e) => {
        dispatch(SET_PUBLIC_PRIVATE(e));    
    };   


    const checkPublic = ()=>{
        if (publicPrivate === "public")
            return "";
        else
            return "disabled";
    }
    const handleChange = (e) => {
        dispatch(SET_PEOPLE_LIMIT(e));
    }

    return(
        <div>
            <Typography variant="h4">설문 응답 설정</Typography>
            <div  style={{display: 'flex', flexDirection: 'row',justifyContent: 'center'}}>
                <div style={{width:'50%'}}>
                    <Button variant={publicPrivate==="public"?"contained":"outlined"}
                    onClick={(e)=>handleClick(e.target.value)} 
                    value="public">개방형</Button>                
                    <p>
                    <label for="peopleLimit">설문조사 인원 설정</label>
                    <input type="number" id="peopleLimit" name="peopleLimit" placeholder="(0 : 무제한)" value={peopleLimit} min="0" disabled = {checkPublic()}  onChange={(e)=>handleChange(e.target.value)}/>
                    </p>                    
                </div>            
                <div style={{width:'50%'}}>
                    <Button variant={publicPrivate==="private"?"contained":"outlined"}
                    onClick={(e)=>handleClick(e.target.value)}
                    value="private">폐쇄형</Button>
                    
                </div>
             </div>   
        </div>
    )
    
}

export default SurveyAccessType;