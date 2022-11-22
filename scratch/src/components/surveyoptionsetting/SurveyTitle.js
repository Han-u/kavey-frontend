import {React} from 'react';
import {TextField,Typography} from "@mui/material";
import ThemeButton from './surveytitle/ThemeButton'
import { useDispatch,useSelector } from 'react-redux'
import {SET_TITLE,SET_DESCRIPTION} from "../redux/Slices/SurveyOptionSlice"


function SurveyTitle(){

    const dispatch = useDispatch();
    const title=useSelector((state)=>state.surveyOption.title);
    const description=useSelector((state)=>state.surveyOption.description);

    const handleChangeTitle=(e)=>{
        dispatch(SET_TITLE(e));
    }

    const handleChangeDesc=(e)=>{
        dispatch(SET_DESCRIPTION(e));
    }

    const validationTitle=()=>{
        if(title===""){
            return true;
        }else{
            return false;
        }
    }


    return( 
            <div align="center">       
                <div style={{display: 'flex', flexDirection: 'row',float:'right'}}>
                    <ThemeButton theme="춘식" themeName="춘식" color="lightyellow" src="/images/chunsik.png"/>
                    <ThemeButton theme="라이언" themeName="라이언" color="brown" src="/images/ryan.png"/>
                    <ThemeButton theme="죠르디" themeName="죠릐" color="lightgreen" src="/images/jordy.png"/>
                    <ThemeButton theme="어피치" themeName="어피치" color="lightpink" src="/images/apeach.png"/>
                </div>
                <div style={{clear:'both',paddingTop:'30px'}}>
                    <Typography variant="h4">설문 제목 및 설명</Typography>
                    <TextField label="설문 제목을 입력하세요" variant="outlined" 
                    error={validationTitle()?true:false}
                    helperText={validationTitle()?"필수 입력입니다.":false}
                    fullWidth margin="normal"
                    onChange={(e)=>handleChangeTitle(e.target.value)} 
                    value={title} />
                    <TextField label="설문 상세 설명을 입력하세요" variant="outlined"
                    fullWidth margin="normal"
                    onChange={(e)=>handleChangeDesc(e.target.value)} 
                    value={description} 
                    />
                    </div>
            </div>        
    )
};

export default SurveyTitle;