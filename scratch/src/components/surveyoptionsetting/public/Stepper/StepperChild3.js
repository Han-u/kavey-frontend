import { Box,Typography } from "@mui/material"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NEXT_LEVEL } from "../../../redux/Slices/SurveyOptionSlice";


function StepperChild3(){
    const navigate=useNavigate();

    const dispatch= useDispatch();

    const MoveFirst=()=>{
      dispatch(NEXT_LEVEL(-2))
      navigate(`/surveyoptionsetting`);
    }

    const MoveSecond=()=>{
      dispatch(NEXT_LEVEL(-1))
      navigate(`/surveymake`);
    }

    return(
        <Box sx={{ width: '360px',height:"80px",
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center'}}>
          <Box sx={{width:"55px",height:"55px",backgroundColor:"rgba(255, 255, 255, 0.5)",borderRadius:"44px",alignItems: 'center',display:"flex",
          justifyContent:'center'}} onClick={MoveFirst}>
            <Box sx={{width:"30px",height:"30px",borderRadius:"44px",alignItems: 'center',display:"flex",
          justifyContent:'center',border:"2px solid"}}><Typography style={{fontFamily:"NanumSquare",fontWeight:"700"}}>1</Typography>
          </Box>
        </Box>
        <Box sx={{width:"55px",height:"55px",backgroundColor:"rgba(255, 255, 255, 0.5)",borderRadius:"44px",alignItems: 'center',display:"flex",
          justifyContent:'center'}} onClick={MoveSecond}>
          <Box sx={{width:"30px",height:"30px",borderRadius:"44px",alignItems: 'center',display:"flex",
          justifyContent:'center',border:"2px solid"}}>
            <Typography style={{fontFamily:"NanumSquare",fontWeight:"700"}}>2</Typography>
          </Box>
        </Box>
        <Box sx={{width:"210px",
        height:"60px",
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
            <Typography style={{color:"white",fontSize:"24px"}}>3</Typography>
          </Box>
            <Typography style={{fontSize:"26px",fontFamily:"NanumSquare",fontWeight:"700"}}>설문 배포</Typography>
        </Box>
      </Box>
    )
}

export default StepperChild3
