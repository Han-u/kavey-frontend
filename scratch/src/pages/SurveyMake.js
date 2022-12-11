import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import HorizontalLinearStepper from "../components/surveyoptionsetting/public/Stepper"
import {React,useState} from 'react'
import { CREATE_OBJECTIVE,
  CREATE_MULTIPLE,
  CREATE_TRUEFALSE,
  CREATE_STAR,
  DELETE,}  from '../components/redux/Slices/SurveyMakeSlice';


import QuestionMakeList from '../components/Survey/QuestionMakeList';
import QuestionResultList from '../components/Survey/QuestionResultList';
import produce from 'immer';

import {Menu,MenuItem,Button,IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { TO_BACKEND_OPTION } from '../components/redux/Slices/SurveyOptionSlice';


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
            <div align="center" style={{display:"flex",width:'100%',paddingTop:'130px'}} >
              {/* <Button onClick={()=>console.log(test)}>출력</Button> */}
                <div style={{marginLeft:'auto',marginRight:'auto',width:'50%'}}>
                  <QuestionMakeList/>
                </div>
                <div style={{marginLeft:'auto',
                marginRight:'auto',
                width:'50%',
                borderLeft:'1px solid lightgray'}}>
                  <QuestionResultList/>
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
        <Button
        id="basic-button"
        variant="outlined" 
        size="small"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        +
      </Button>
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
        <MenuItem onClick={() => {
          dispatch(CREATE_MULTIPLE({id:id}));
          handleClose();
        }}>객관식</MenuItem>
        <MenuItem onClick={() => {
          dispatch(CREATE_TRUEFALSE({id:id}));
          handleClose();
        }}>찬반</MenuItem>
        <MenuItem onClick={() => {
          dispatch(CREATE_STAR({id:id}));
          handleClose();
        }}>별점</MenuItem>
      </Menu>


       </div>
    );
}

export function DeleteButton({id}){
    const dispatch = useDispatch();
    return(
      <div>
        <IconButton variant="contained" color="error" size="small" 
        onClick={() => {dispatch(DELETE({id:id}));
        }}><DeleteIcon /></IconButton>
       </div>
    );
}
