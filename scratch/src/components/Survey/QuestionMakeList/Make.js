import { useState } from "react";
import {useDispatch} from 'react-redux';

import { UPDATE_TITLE } from "../../redux/Slices/SurveyMakeSlice";

import { DeleteButton, PlusButton, RequiredButton } from '../../../pages/SurveyMake';

import {TextField} from '@mui/material'


function Make({id, title,required}) {
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(UPDATE_TITLE({id:id,value:e.target.value}));
    };


    return(
        <div style={{width:"700px",
        height:"200px",
        backgroundColor:"white",
        display: "flex",
        flexDirection:"column",
        justifyContent:'space-between',
        borderRadius: '5px'
        }}  draggable>
            <div>
                <TextField 
                placeholder={title} 
                maxLength={50} 
                onChange={onChange} 
                style={{width:"640px",
                height:"57px",marginTop:"30px"}}></TextField>
            </div>
            <div style={{display: 'flex',
            flexDirection:'row',
            justifyContent:"space-between",marginLeft:"30px",marginBottom:"20px",marginRight:"30px"}}>
                <DeleteButton id={id}/>
                <div style={{display: 'flex',
                float:"right",
                flexDirection:'row',
                }}>           
                    <RequiredButton id={id} required={required}/>
                    <PlusButton id={id}/>
                </div>
            </div>
        </div>
    );
}

export default Make;