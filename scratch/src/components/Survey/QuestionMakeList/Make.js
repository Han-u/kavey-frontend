import { useState } from "react";
import {useDispatch} from 'react-redux';

import { UPDATE_TITLE } from "../../redux/Slices/SurveyMakeSlice";

import { DeleteButton, PlusButton } from '../../../pages/SurveyMake';

const styles = {
    container: {
        border:3,
        borderStyle: "solid",
        display: "flex",
        padding: 15,
    },
}


function Make({id, title}) {
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(UPDATE_TITLE({id:id,value:e.target.value}));
    };


    return(
        <div style={styles.container}  draggable>
            <div>
            <DeleteButton id={id}/>
            <input placeholder={title} maxLength={50} onChange={onChange} ></input>
            <PlusButton id={id}/>
            </div>
        </div>
    );
}

export default Make;