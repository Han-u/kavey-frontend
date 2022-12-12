import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import HorizontalLinearStepper from "../components/surveyoptionsetting/public/Stepper"
import {React,useState} from 'react'
import { CREATE_OBJECTIVE,
  CREATE_MULTIPLE,
  CREATE_TRUEFALSE,
  CREATE_STAR,
  DELETE,
  UPDATE_REQUIRED,}  from '../components/redux/Slices/SurveyMakeSlice';


import QuestionMakeList from '../components/Survey/QuestionMakeList';
import QuestionResultList, { MAKE } from '../components/Survey/QuestionResultList';
import produce from 'immer';

import {Menu,MenuItem,Button,IconButton,Tooltip, Typography,Divider} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { TO_BACKEND_OPTION } from '../components/redux/Slices/SurveyOptionSlice';
import CheckIcon from '@mui/icons-material/Check';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
//style
const tempStyle={
    display:"flex",
}


function SurveyMake() {
  const step=useSelector((state)=>state.surveyOption.step);
  const test=useSelector((state)=>state.surveyMake.question);

    return ( 
        <div style={{height:'100%',width:'100%'}}>
            <div align='center' style={{backgroundColor:'#FFD701',
                                        height:'100px',
                                        position:'fixed',
                                        width:'100%',
                                        zIndex:'1',                                    
                                        borderBottom:'1px solid lightgray',}}>
                    <HorizontalLinearStepper step={step}></HorizontalLinearStepper>
            </div>    
            <div align="center" style={{display:"flex",width:'100%',paddingTop:'100px' ,backgroundColor:'#F5F5F5',height:"100%"}} >
                <div style={{width:'50%'}}>
                  <QuestionMakeList/>
                </div>
                <div style={{
                width:'50%',
                backgroundColor:'white'}}>
                  <MakeQuestionResultList/>
                </div>
            </div>
        </div>
     );
}

export default SurveyMake;


//button 
export function PlusButton({id}){
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
      <div>
        {/* <input type="button" value="주관식" onClick={() => {
          dispatch(CREATE_OBJECTIVE({id:id}));
        }}></input>
        <input type="button" value="객관식" onClick={() => {
          dispatch(CREATE_MULTIPLE({id:id}));
        }}></input>
        <input type="button" value="찬반" onClick={() => {
          dispatch(CREATE_TRUEFALSE({id:id}));
        }}></input>
        <input type="button" value="별점" onClick={() => {
          dispatch(CREATE_STAR({id:id}));
        }}></input> */}
        <IconButton
        id="basic-button"
        variant="outlined" 
        size="small"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ControlPointIcon sx={{fontSize:'30px' ,marginLeft:"15px"}}></ControlPointIcon>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => {
          dispatch(CREATE_OBJECTIVE({id:id}));
          handleClose();
        }}>주관식</MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={() => {
          dispatch(CREATE_MULTIPLE({id:id}));
          handleClose();
        }}>객관식</MenuItem>
        <Divider sx={{ my: 0.5 }} />

        <MenuItem onClick={() => {
          dispatch(CREATE_TRUEFALSE({id:id}));
          handleClose();
        }}>찬반</MenuItem>
        <Divider sx={{ my: 0.5 }} />

        <MenuItem onClick={() => {
          dispatch(CREATE_STAR({id:id}));
          handleClose();
        }}>별점</MenuItem>
      </Menu>


       </div>
    );
}

export function DeleteButton({id}){
    const question = useSelector((state)=>state.surveyMake.question);
    const dispatch = useDispatch();

    if( question.length >= 2){
      return(
        <div>
          <IconButton variant="contained"
          onClick={() => {dispatch(DELETE({id:id}));
          }}><DeleteIcon /></IconButton>
         </div>
      );

    }
    else{
      return(
        <div>
          <Tooltip title="질문은 하나 이상 필요합니다!">
          <IconButton variant="contained"  size="small" ><DeleteIcon/></IconButton>
            </Tooltip>
         </div>
      );

    }
    
}


export function RequiredButton({id,required}){
  const dispatch = useDispatch();
  return(
    <div>
      <Button variant="standard" 
      style={required?
        {backgroundColor:"#FF5442",borderRadius:"22px",color:"white"}:
        {borderRadius:"22px",backgroundColor:"#EDEDED",color:"black"}
    }
      onClick={() => {dispatch(UPDATE_REQUIRED({id:id}));
      }}><CheckIcon/><Typography 
      fontFamily={"NanumSquare"} 
      style={{fontWeight:"400",fontSize:"14px"}}>필수답변</Typography>
      </Button>
     </div>
  );
}

export function MakeQuestionResultList(){
    const surveyOption=useSelector((state)=>state.surveyOption);
    const question = useSelector((state)=>state.surveyMake.question);



    return (
    <QuestionResultList purpose={MAKE} surveyOption={surveyOption} question={question}/>
    );

}
