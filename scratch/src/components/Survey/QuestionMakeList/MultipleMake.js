
import {useDispatch} from 'react-redux';

import { UPDATE_TITLE,UPDATE_MULTIPLE_CANMULTI,UPDATE_MULTIPLE_CREATE_RESPONSE,UPDATE_MULTIPLE_UPDATE_RESPONSE,UPDATE_MULTIPLE_DELETE_RESPONSE } from "../../redux/Slices/SurveyMakeSlice";

import { DeleteButton, PlusButton,RequiredButton } from '../../../pages/SurveyMake';

import {Button,IconButton,TextField,Tooltip} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

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
        <div style={styles.container} draggable>
            <div style={{flexDirection: 'row',
                        display:'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        paddingBottom:'10px'}}>
                <DeleteButton id={id}/>
                <RequiredButton id={id} required={required}/>
                <TextField placeholder={title} maxLength={50} onChange={onChange} size="small"></TextField>
                <PlusButton id={id}/>
            </div>
            <div>
            <MultiButton id={id}canMulti={canMulti}/>
            <Button onClick={onClickPlus}>보기추가</Button>
            </div>
            <div>
                <ResponseList id={id} list={response}/>
            </div>
            <div style={{float:'right'}}>
                
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
                <Button variant="outlined" size="small" onClick={onClick}>{canMulti.toString()}</Button>
            </Tooltip>
        </div>
    );
}

function ResponseList({id,list}) {
    let responseList;
    if(list!=undefined){
        responseList = list.map(
            r => (
                <Response 
                q_id={id}
                r_id = {r.ordering} 
                title={r.value} 
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


function Response({q_id,r_id,title}){
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(UPDATE_MULTIPLE_UPDATE_RESPONSE({q_id:q_id,r_id:r_id,value:e.target.value}));
    };

    const onClickDelete = (e) => {
        dispatch(UPDATE_MULTIPLE_DELETE_RESPONSE({q_id:q_id,r_id:r_id}));
    }

    return(
        <div>      
                <input type="checkbox"/>
                <TextField variant="standard" size="small" placeholder={title} onChange={onChange}
                style={{marginLeft:'10px'}}
                />
                <IconButton onClick={onClickDelete}><CloseIcon color="error"/></IconButton>
        </div>
    );
}





