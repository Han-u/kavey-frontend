import React from 'react';
import "../SendSurvey.css"

function Email({onDelete}){
    return(
        <div className="emailListShow">
            <input type="checkbox" className="inputtype1"/>

            <input type="email" className="inputtype2" placeholder="example@gmail.com" onDoubleClick={(e)=>{
                e.stopPropagation();
            }}/>

            <button className="inputtype3" onClick={(e)=>{
                onDelete();
                e.stopPropagation();
            }}>X</button>
        </div>
    );
}


export default Email;