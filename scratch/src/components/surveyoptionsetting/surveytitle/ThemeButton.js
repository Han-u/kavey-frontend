import {useDispatch,useSelector } from 'react-redux'
import {Button} from '@mui/material'
import {SET_THEME_TEST} from "../../redux/Slices/SurveyOptionSlice"

function ThemeButton(props) {
  const themeColor=useSelector((state)=>state.surveyOption.themeColor);
  const dispatch = useDispatch();
  const handleClick=()=>{
    dispatch(SET_THEME_TEST(props.color));
  }

  return (
    <div>
      {props.themeName}
      <div style={{backgroundColor:themeColor}}>      
        <Button>       
        <img src={props.src} alt={props.theme} onClick={handleClick} style={{width:"40px",height:"40px"}}></img> 
        </Button>
      </div>
    </div>
  );
}

export default ThemeButton;
