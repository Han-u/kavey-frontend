import {React} from 'react';
import {TextField,Tooltip,Typography} from "@mui/material";
import { useDispatch,useSelector } from 'react-redux'
import {SET_TITLE,SET_DESCRIPTION} from "../redux/Slices/SurveyOptionSlice"

function SurveyTitle(){

    const dispatch = useDispatch();
    const title=useSelector((state)=>state.surveyOption.title);
    const description=useSelector((state)=>state.surveyOption.description);
    const theme=useSelector((state)=>state.surveyOption.themeForFront);

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
            <div align="center" 
            style={{backgroundColor:"#D4E8FF",
            backgroundImage:theme,
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
                    <TextField
                    placeholder="설문 제목"
                    sc={{border:0}}
                    variant="standard"
                    required
                    error={validationTitle()?true:false}
                    helperText={validationTitle()?"* 필수 입력입니다.":false}
                    onChange={(e)=>handleChangeTitle(e.target.value)}
                    value={title}
                    InputProps={{
                        disableUnderline:true,
                        style:{fontSize:25, fontFamily:'NanumSquareB'}
                    }}
                    InputLabelProps={{
                        style:{fontWeight:700}
                    }}
                    style={{width:"550px",
                    backgroundColor:"rgba(255,255,255,0.4)",
                    borderRadius: '10px',
                    marginBottom:"10px",
                    paddingLeft:'10px'
                    }}
                    />
                    <TextField
                        placeholder="설문 상세 설명"
                    variant="standard"
                    InputProps={{
                        disableUnderline:true,
                        style:{fontSize:15, fontFamily:'NanumSquareB', paddingTop: '8px'},

                    }}
                    onChange={(e)=>handleChangeDesc(e.target.value)}
                    value={description}
                    size="small"
                    style={{width:"620px",
                        borderRadius: '10px',
                        minHeight:"40px",
                    backgroundColor:"rgba(255,255,255,0.4)",
                    paddingLeft:'10px'}}
                    />
                    </div>
            </div>
    )
};

export default SurveyTitle;