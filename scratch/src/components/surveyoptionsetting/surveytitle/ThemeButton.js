import {useDispatch } from 'react-redux'
import {Button,Tooltip} from '@mui/material'
import {SET_THEME_TEST} from "../../redux/Slices/SurveyOptionSlice"

function ThemeButton(props) {
  const dispatch = useDispatch();
  const handleClick=()=>{
    dispatch(SET_THEME_TEST(props.theme));
  }

  return (
    <div>      
      <div>
      <Tooltip title={props.themeName} placement="right">     
        <Button>       
        <img src={props.src} alt={props.theme} onClick={handleClick} style={{width:"50px",height:"50px"}}></img> 
        </Button>
      </Tooltip>
      </div>
    </div>
  );
}

export default ThemeButton;
