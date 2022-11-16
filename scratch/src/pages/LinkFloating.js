import React, { useRef } from "react";
import {Button, Typography} from "@mui/material";

function LinkFloating(){
   const textInput = useRef();

     const copy = () => {
       const el = textInput.current
       el.select()
       document.execCommand("copy")
     }


     return (
        <div>
         <div>
         <p>설문링크복사</p>
         </div>
         <div>
         <input type="text" value="설문조사발송용 URL" ref={textInput} readOnly></input>
         </div>
         <div>
         <button onClick={copy}>copy</button>
         </div>
       </div>
     );
}

export default LinkFloating;