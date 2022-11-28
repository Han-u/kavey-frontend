import React from 'react';
import "../SendSurvey.css"
import {Checkbox,IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


function Email({onDelete}){
    return(
        <div className="emailListShow">
            {/* <input type="checkbox" className="inputtype1"/> */}
            <Checkbox></Checkbox>

            <input type="email" className="inputtype2" placeholder="example@gmail.com" onDoubleClick={(e)=>{
                e.stopPropagation();
            }}/>

            {/* <button className="inputtype3" onClick={(e)=>{
                onDelete();
                e.stopPropagation();
            }}>X</button> */}

            <IconButton onClick={(e)=>{
                onDelete();
                e.stopPropagation();
            }}><CloseIcon color="error"/></IconButton>

        </div>
    );
}

