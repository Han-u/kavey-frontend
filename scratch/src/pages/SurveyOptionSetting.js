import SurveyGenderAge from "../components/surveyoptionsetting/SurveyGenderAge";
import SurveyTitle from '../components/surveyoptionsetting/SurveyTitle';
import SurveyAccessType from "../components/surveyoptionsetting/SurveyAccessType";
import SurveyDuration from "../components/surveyoptionsetting/SurveyDuration";
import { useSelector,useDispatch } from 'react-redux'
import { SET_PEOPLE_LIMIT ,NEXT_LEVEL, SET_USER} from "../components/redux/Slices/SurveyOptionSlice";
import {Button,Typography} from'@mui/material';
import HorizontalLinearStepper from "../components/surveyoptionsetting/public/Stepper";
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import ThemeButton from "../components/surveyoptionsetting/surveytitle/ThemeButton"
import { useEffect } from "react";

function SurveyOptionSetting() {
    const surveyOption=useSelector((state)=>state.surveyOption);
    const step=useSelector((state)=>state.surveyOption.step);

    const dispatch = useDispatch();
    const navigate=useNavigate();

    useEffect(() => {
        dispatch(SET_USER(JSON.parse(window.localStorage.getItem('profile')).data.id));
      }, [])


    const handleClick = ()=>{
        if(surveyOption.limitPerson==null){
            dispatch(SET_PEOPLE_LIMIT(0));
        }
        console.log(step)
        dispatch(NEXT_LEVEL(1));
        navigate(`/surveymake`);

    };

    const validationNext=()=>{
        if(surveyOption.title===""){
            return true;
        }else{
            return false;
        }
    }
    

    return (
        <div>
            <div style={{position:"absolute",left:"80%",top:"20%",width:"100px",backgroundColor:"white",paddingTop:"15px",paddingBottom:"15px"}}>
                <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent:"center"}}>
                        <Typography fontFamily="NanumSquare" style={{fontSize:"16px",fontWeight:"700"}}>테마</Typography>
                        <ThemeButton theme="chunsik" themeName="춘식"  src="/images/icon_chunsik.png"/>
                        <ThemeButton theme="ryan" themeName="라이언" color="brown" src="/images/icon_ryan.png"/>
                        <ThemeButton theme="jordy" themeName="죠르디"  src="/images/icon_jordy.png"/>
                        <ThemeButton theme="apeach" themeName="어피치"  src="/images/icon_apeach.png"/>
                </div>
            </div>      
            <div align='center' style={{backgroundColor:'#FFD701',
                                        height:'100px',
                                        position:'fixed',
                                        width:'100%',
                                        zIndex:'1',                                    
                                        borderBottom:'1px solid lightgray',}}>
                    <HorizontalLinearStepper step={step}></HorizontalLinearStepper>
            </div>         
            <div align='center' style={{align:'center',
                                            backgroundColor:'#F5F5F5',
                                            height:'100vh',
                                            width:'100%',
                                            paddingTop:'100px'}}>
                <div style={{backgroundColor:'#F5F5F5',width:'50%',height:'100%'}}>
                    <div style={{width:'960px',
                            height:'100%',
                            margin:'auto',backgroundColor:'white'}}>
                        <div>
                            <SurveyTitle/>
                        </div>
                        <div>
                            <SurveyDuration/>
                        </div>
                        <div>
                            <SurveyAccessType/>
                        </div>
                        <div>
                            <SurveyGenderAge/>
                        </div>
                        {/* <div align="center" style={{marginTop:'30px'}}>
                                
                                <Button variant="contained"                            
                                disabled={validationNext()}
                                onClick={handleClick}>다음으로</Button>
                                <Button variant="contained"
                                color="error"
                                style={{marginLeft:'30px'}}                            
                                onClick={handleCancle}>취소하기</Button>
                                
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default SurveyOptionSetting;