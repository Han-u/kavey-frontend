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
      <div style={{backgroundColor:"#FAFAFA",margin:"5px"}}> 
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
