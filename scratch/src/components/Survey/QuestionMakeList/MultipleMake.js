
import {useDispatch} from 'react-redux';
import { UPDATE_TITLE,UPDATE_MULTIPLE_CANMULTI,UPDATE_MULTIPLE_CREATE_RESPONSE,UPDATE_MULTIPLE_UPDATE_RESPONSE,UPDATE_MULTIPLE_DELETE_RESPONSE } from "../../../redux/slice/SurveyMakeSlice";

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
        dispatch({type:UPDATE_TITLE,id:id,value:e.target.value});
    };

    const onClickPlus = (e) =>{
        dispatch({type:UPDATE_MULTIPLE_CREATE_RESPONSE,questionID:id})
    }

    return(
        <div style={styles.container}>
            <button onClick={onClickPlus}>plus</button>
            <MultiButton id={id}canMulti={canMulti}/>
            <div>
            <input placeholder={title} maxLength={50} onChange={onChange} ></input>
            <ResponseList id={id} list={response}/>
            </div>
        </div>
    );
}

export default MultipleMake;

function MultiButton({id,canMulti}){
    const dispatch = useDispatch();
    const onClick = (e) =>{
        dispatch({type:UPDATE_MULTIPLE_CANMULTI,questionID:id})
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
                questionID={id}
                responseID = {r.id} 
                title={r.title} 
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


function Response({questionID ,responseID,title}){
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch({type:UPDATE_MULTIPLE_UPDATE_RESPONSE,questionID:questionID,responseID:responseID,value:e.target.value});
    };

    const onClickDelete = (e) => {
        dispatch({type:UPDATE_MULTIPLE_DELETE_RESPONSE,questionID:questionID,responseID:responseID});
    }

    return(
        <div>      
                <input type="checkbox"/>
                <input type="text" placeholder={title} onChange={onChange}/>
                <button onClick={onClickDelete}>delete</button>
        </div>
    );
}





