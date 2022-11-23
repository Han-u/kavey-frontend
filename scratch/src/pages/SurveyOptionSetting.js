import SurveyGenderAge from "../components/surveyoptionsetting/SurveyGenderAge";
import SurveyTitle from '../components/surveyoptionsetting/SurveyTitle';
import SurveyAccessType from "../components/surveyoptionsetting/SurveyAccessType";
import SurveyDuration from "../components/surveyoptionsetting/SurveyDuration";
import { useSelector,useDispatch } from 'react-redux'
import { SET_PEOPLE_LIMIT ,NEXT_LEVEL} from "../components/redux/Slices/SurveyOptionSlice";
import {Button} from'@mui/material';
import HorizontalLinearStepper from "../components/surveyoptionsetting/public/Stepper";
import {useNavigate} from 'react-router-dom'


function SurveyOptionSetting() {
    const surveyOption=useSelector((state)=>state.surveyOption);
    const step=useSelector((state)=>state.surveyOption.step);

    const dispatch = useDispatch();
    const navigate=useNavigate();

    const handleClick = ()=>{
        if(surveyOption.peopleLimit==null){
            dispatch(SET_PEOPLE_LIMIT(0));
        }
        console.log(step)
        console.log(surveyOption);
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
            <div align='center' style={{backgroundColor:'white',height:'120px'}}>
                <div style={{width:"50%",padding:"30px"}}>
                    <HorizontalLinearStepper step={step}></HorizontalLinearStepper>
                </div>
            </div>
            <div style={{align:'center',backgroundColor:surveyOption.themeColor,height:'100%'}}>
                <div style={{width:'600px',
                        height:'100%',
                        margin:'auto',backgroundColor:'white',padding:'0px 30px 30px 30px'}}>
                    <div>
                        <SurveyTitle/>
                    </div>
                    <div style={{paddingTop:'30px'}}>
                        <SurveyDuration/>
                    </div>
                    <div align="center" style={{paddingTop:'30px'}}>
                        <SurveyAccessType/>
                    </div>
                    <div align="center" style={{paddingTop:'30px'}}>
                        <SurveyGenderAge/>
                    </div>
                    <div align="center" style={{marginTop:'50px'}}>
                            <Button variant="contained"                            
                            disabled={validationNext()}
                            onClick={handleClick}>다음으로</Button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default SurveyOptionSetting;