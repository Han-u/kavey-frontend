
import {useDispatch} from 'react-redux';

import { UPDATE_TITLE,UPDATE_MULTIPLE_CANMULTI,UPDATE_MULTIPLE_CREATE_RESPONSE,UPDATE_MULTIPLE_UPDATE_RESPONSE,UPDATE_MULTIPLE_DELETE_RESPONSE } from "../../redux/Slices/SurveyMakeSlice";

import { DeleteButton, PlusButton,RequiredButton } from '../../../pages/SurveyMake';

import {Button,IconButton,TextField,Tooltip} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import TrueFalseResult from '../QuestionResultList/TrueFalseResult';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const styles = {
    container: {
        border:1,
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column",
        padding: 15,
        // backgroundColor: "black"
    },
}


function MultipleMake({id,title,required,canMulti,response}) {
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(UPDATE_TITLE({id:id,value:e.target.value}));
    };

    const onClickPlus = (e) =>{
        dispatch(UPDATE_MULTIPLE_CREATE_RESPONSE({q_id:id}))
    }


    return(
        <div style={{width:"700px",
        backgroundColor:"white",
        display: "flex",
        flexDirection:"column",
        justifyContent:'space-between',
        borderRadius: '5px'
        }}  draggable>
            <TextField 
                placeholder={title} 
                maxLength={50} 
                onChange={onChange} 
                style={{width:"640px",
                height:"57px",marginTop:"30px",marginLeft:"30px"}}></TextField>
                <Button onClick={onClickPlus}>보기추가</Button>
            <div>
                <ResponseList id={id} list={response}/>
            </div>
            <div style={{display: 'flex',
            flexDirection:'row',
            justifyContent:"space-between",marginLeft:"30px",marginBottom:"20px",marginRight:"30px"}}>
                <DeleteButton id={id}/>
                <div style={{display: 'flex',
                    float:"right",
                    flexDirection:'row',}}>                    
                        <MultiButton id={id}canMulti={canMulti}/>
                        <RequiredButton id={id} required={required}/>
                        <PlusButton id={id}/>
                </div>
            </div>
            <div>
            
            </div>
            
        </div>
    );
}

export default MultipleMake;

function MultiButton({id,canMulti}){
    const dispatch = useDispatch();
    const onClick = (e) =>{
        dispatch(UPDATE_MULTIPLE_CANMULTI({q_id:id}))
    }

    return (
        <div>
            <Tooltip title="복수응답 허용 여부에요">
                {/* <Button variant="outlined" size="small" onClick={onClick}>{canMulti.toString()}</Button> */}
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="복수응답" onClick={onClick}></FormControlLabel>
                </FormGroup>
            </Tooltip>
        </div>
    );
}

function ResponseList({id,list}) {
    let canDelete = list.length < 2 ? false : true;
    let responseList;
    if(list!=undefined){
        responseList = list.map(
            r => (
                <Response 
                q_id={id}
                r_id = {r.ordering} 
                title={r.value} 
                canDelete={canDelete}
                />
            )
        )
    }

    return(
        <div>
            {responseList}
        </div>
    )
}


function Response({q_id,r_id,title,canDelete}){
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(UPDATE_MULTIPLE_UPDATE_RESPONSE({q_id:q_id,r_id:r_id,value:e.target.value}));
    };

    const onClickDelete = (e) => {
        dispatch(UPDATE_MULTIPLE_DELETE_RESPONSE({q_id:q_id,r_id:r_id}));
        
    }


    return(
        <div>      
                <TextField variant="standard" size="small" placeholder={title} onChange={onChange}
                style={{marginLeft:'10px'}}
                />
                {canDelete ? 
                    <IconButton onClick={onClickDelete}><CloseIcon color="error"/></IconButton>
                    :
                    <Tooltip title="보기는 하나 이상 필요합니다!">
                        <IconButton><CloseIcon color="error"/></IconButton>
                    </Tooltip>
                }
                
        </div>
    );
}





