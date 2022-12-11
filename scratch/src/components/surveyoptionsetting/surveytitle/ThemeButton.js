import {useDispatch } from 'react-redux'
import {Button,Tooltip} from '@mui/material'
import {SET_THEME_TEST} from "../../redux/Slices/SurveyOptionSlice"

function ThemeButton(props) {
  const dispatch = useDispatch();
  const handleClick=()=>{
    dispatch(SET_THEME_TEST(props.color));
  }

  return (
    <div>      
      <div style={{backgroundColor:"#FFFFFF",margin:"5px", borderRadius: '50%', width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Tooltip title={props.theme}>     
        <Button>       
        <img src={props.src} alt={props.theme} onClick={handleClick} style={{width:"40px",height:"40px"}}></img> 
        </Button>
      </Tooltip>
      </div>
    </div>
  );
}

export default ThemeButton;
