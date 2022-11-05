import React, { Fragment } from 'react';


function Email({key,name,onDelete}){
    return(
        <div>
            <input type="checkbox" hello/>

            <input type="text" onDoubleClick={(e)=>{
                e.stopPropagation();
            }}/>

            <button onClick={(e)=>{
                onDelete();
                e.stopPropagation();
            }}>X</button>
        </div>
    );
}


export default Email;