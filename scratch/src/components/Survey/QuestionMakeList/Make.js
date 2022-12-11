import { useState } from "react";
import {useDispatch} from 'react-redux';

import { UPDATE_TITLE } from "../../redux/Slices/SurveyMakeSlice";

import { DeleteButton, PlusButton, RequiredButton } from '../../../pages/SurveyMake';

import {TextField} from '@mui/material'

const styles = {
    container: {
        border:1,
        borderStyle: "solid",
        display: "flex",
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-between",
        alignItems:'baseline'
        
    },
}

function Make({id, title,required}) {
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(UPDATE_TITLE({id:id,value:e.target.value}));
    };


    return(
        <div style={styles.container}  draggable>
                <div style={{float:'left'}}>
                    <DeleteButton id={id}/>
                </div>
                <RequiredButton id={id} required={required}/>
                <TextField placeholder={title} maxLength={50} onChange={onChange} size="small"></TextField>
                <div style={{float:'right'}}>
                    <PlusButton id={id}/>
                </div>
        </div>
    );
}

export default Make;