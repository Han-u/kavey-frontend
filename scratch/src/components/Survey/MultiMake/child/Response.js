import React, { Fragment } from 'react';


function Response({key,name,onDelete,onSelect}){
    return(
        <div>      
                <input type="checkbox" hello/>

                <input type="text" onDoubleClick={(e)=>{
                    onSelect();
                    e.stopPropagation();
                }}/>

                <button onClick={(e)=>{ 
                    onDelete();
                    e.stopPropagation();
                }}>del</button>                
        </div>
    );
}


export default Response;