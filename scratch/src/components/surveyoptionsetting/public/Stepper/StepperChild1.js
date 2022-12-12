import { Box,Typography } from "@mui/material"
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NEXT_LEVEL } from "../../../redux/Slices/SurveyOptionSlice";
import Swal from 'sweetalert2'


function StepperChild1(){
    const navigate=useNavigate();

    const dispatch= useDispatch();

    const surveyOption=useSelector((state)=>state.surveyOption.title);

    const MoveSecond=()=>{
      if(surveyOption===""){
        Swal.fire({
          toast: true,
          icon: 'error',
          title: '필수 입력을 적어주세요!',
          animation: false,
          position: 'top',
          showConfirmButton: false,
          timer: 1200,
          timerProgressBar: false,

        });
      }else{
        dispatch(NEXT_LEVEL(1))
        navigate(`/surveymake`);
      }
      
    }

    const MoveThird=()=>{
      if(surveyOption===""){
        Swal.fire({
          toast: true,
          icon: 'error',
          title: '필수 입력을 적어주세요!',
          animation: false,
          position: 'top',
          showConfirmButton: false,
          timer: 1200,
          timerProgressBar: false,

        });
      }else{
        dispatch(NEXT_LEVEL(2))
        navigate(`/sendsurvey`);
    }
      }
      

    return(
        <Box sx={{ width: '420px',height:"80px",
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center'}}>        
        <Box sx={{width:"250px",
        height:"50px",
        backgroundColor:"white",
        borderRadius:"44px",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'}}>
          <Box sx={{backgroundColor:"black",
          width:"36px",height:"36px",borderRadius:"44px",
          marginRight:"12px",alignItems: 'center',display: 'flex',
          justifyContent:'center'
        }}>
            <Typography style={{color:"white",fontSize:"20px"}}>1</Typography>
          </Box>
            <Typography style={{fontSize:"23px",fontFamily:"NanumSquareB"}}>설문 기본 설정</Typography>
        </Box>
          <Box sx={{width:"50px",height:"50px",backgroundColor:"rgba(255, 255, 255, 0.5)",borderRadius:"44px",alignItems: 'center',display:"flex",
          justifyContent:'center'}} onClick={MoveSecond}>
            <Typography style={{fontFamily:"NanumSquareB",fontWeight:"700"}}>2</Typography>
        </Box>
        <Box sx={{width:"50px",height:"50px",backgroundColor:"rgba(255, 255, 255, 0.5)",borderRadius:"44px",alignItems: 'center',display:"flex",
          justifyContent:'center'}} onClick={MoveThird}>
            <Typography style={{fontFamily:"NanumSquareB",fontWeight:"700"}}>3</Typography>
        </Box>
      </Box>
    )
}

export default StepperChild1
