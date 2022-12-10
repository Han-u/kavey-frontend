import SurveyGenderAge from "../components/surveyoptionsetting/SurveyGenderAge";
import SurveyTitle from '../components/surveyoptionsetting/SurveyTitle';
import SurveyAccessType from "../components/surveyoptionsetting/SurveyAccessType";
import SurveyDuration from "../components/surveyoptionsetting/SurveyDuration";
import { useSelector,useDispatch } from 'react-redux'
import { SET_PEOPLE_LIMIT ,NEXT_LEVEL} from "../components/redux/Slices/SurveyOptionSlice";
import {Button} from'@mui/material';
import HorizontalLinearStepper from "../components/surveyoptionsetting/public/Stepper";
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'


function SurveyOptionSetting() {
    const surveyOption=useSelector((state)=>state.surveyOption);
    const step=useSelector((state)=>state.surveyOption.step);

    const dispatch = useDispatch();
    const navigate=useNavigate();

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
            <div align='center' style={{backgroundColor:'white',
                                        height:'120px',
                                        position:'fixed',
                                        width:'100%',
                                        zIndex:'1',
                                        paddingTop:'30px',
                                        borderBottom:'1px solid lightgray',}}>
                <div style={{width:"50%",backgroundColor: 'white'}}>
                    <HorizontalLinearStepper step={step}></HorizontalLinearStepper>
                </div>
            </div>
            
            <div align='center' style={{align:'center',
                                            backgroundColor:surveyOption.theme,
                                            height:'100vh',
                                            width:'100%',
                                            paddingTop:'120px'}}>
                <div style={{backgroundColor:'#F5F5F5',height:'100%'}}>
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