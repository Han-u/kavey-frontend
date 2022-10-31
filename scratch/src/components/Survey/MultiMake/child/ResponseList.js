import React,{useState} from 'react';
import Response from './Response';

function ResponseList({list,onDelete,onSelect}) {
    const responseList = list.map(
        r => (
            <Response 
            key = {r.id} 
            name={r.name} 
            onDelete={()=>{onDelete(r.id)}} 
            onSelect={()=>{onSelect(r.id)}}
            />
        )
    )

    return(
        <div>
            {responseList}
        </div>
    )
}

export default ResponseList;