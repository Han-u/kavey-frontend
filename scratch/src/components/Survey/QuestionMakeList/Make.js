import { useState } from "react";
import {useDispatch} from 'react-redux';

import { UPDATE_TITLE } from "../../redux/Slices/SurveyMakeSlice";

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
        dispatch({type:UPDATE_TITLE,id:id,value:e.target.value});
    };

    return(
        <div style={styles.container}>
            <div>
            <input placeholder={title} maxLength={50} onChange={onChange} ></input>
            </div>

        </div>
    );
}

export default Make;