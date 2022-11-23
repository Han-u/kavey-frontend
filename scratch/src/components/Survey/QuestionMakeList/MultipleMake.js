
import {useDispatch} from 'react-redux';

import { UPDATE_TITLE,UPDATE_MULTIPLE_CANMULTI,UPDATE_MULTIPLE_CREATE_RESPONSE,UPDATE_MULTIPLE_UPDATE_RESPONSE,UPDATE_MULTIPLE_DELETE_RESPONSE } from "../../redux/Slices/SurveyMakeSlice";

import { DeleteButton, PlusButton } from '../../../pages/SurveyMake';

const styles = {
    container: {
        border:3,
        borderStyle: "solid",
        padding: 15,
    },
}


function MultipleMake({id,title,canMulti,response}) {
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(UPDATE_TITLE({id:id,value:e.target.value}));
    };

    const onClickPlus = (e) =>{
        dispatch(UPDATE_MULTIPLE_CREATE_RESPONSE({q_id:id}))
    }


    return(
        <div style={styles.container}>
            <DeleteButton id={id}/>
            <button onClick={onClickPlus}>plus</button>
            <MultiButton id={id}canMulti={canMulti}/>
            <div>
            <input placeholder={title} maxLength={50} onChange={onChange} ></input>
            <ResponseList id={id} list={response}/>
            <PlusButton id={id}/>
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
            <button onClick={onClick}>{canMulti}</button>
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
                <input type="text" placeholder={title} onChange={onChange}/>
                <button onClick={onClickDelete}>delete</button>
        </div>
    );
}





