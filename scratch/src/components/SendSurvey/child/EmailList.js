import React,{useState} from 'react';
import Email from './Email';


function EmailList({list,onDelete}) {
    const emailList = list.map(
        r => (
            <Email
                key = {r.id}
                name={r.name}
                onDelete={()=>{onDelete(r.id)}}
            />
        )
    )
    return(
        <div>
            {emailList}
        </div>
    )
}

export default EmailList;