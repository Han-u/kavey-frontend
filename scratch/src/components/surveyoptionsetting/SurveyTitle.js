import {React} from 'react';
import {TextField,Tooltip,Typography} from "@mui/material";
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
            <div align="center" style={{backgroundColor:"#D4E8FF",
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
                    <Tooltip title="테마도 고를 수 있어요!">
                <div style={{display: 'flex', float:'right',flexDirection: 'column',margin:"auto"}}>
                    {/* <Typography fontFamily="HallymGothic-Regular">테마도 고를 수 있어요!</Typography> */}
                    <div style={{display: 'flex', flexDirection: 'row',float:'right'}}>
                        <ThemeButton theme="춘식" themeName="춘식" color="lightyellow" src="/images/chunsik.png"/>
                        <ThemeButton theme="라이언" themeName="라이언" color="brown" src="/images/ryan.png"/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row',float:'right'}}>
                        <ThemeButton theme="죠르디" themeName="죠릐" color="lightgreen" src="/images/jordy.png"/>
                        <ThemeButton theme="어피치" themeName="어피치" color="lightpink" src="/images/apeach.png"/>
                    </div>
                </div>
                </Tooltip>
            </div>
    )
};

export default SurveyTitle;