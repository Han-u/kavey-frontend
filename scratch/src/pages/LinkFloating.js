import React, { useRef } from "react";
function LinkFloating(){
   const textInput = useRef();

     const copy = () => {
       const el = textInput.current
       el.select()
       document.execCommand("copy")
     }

     return (
       <>
         <input type="text" value="설문조사발송용 URL" ref={textInput} readOnly></input>
         <button onClick={copy}>copy</button>
       </>
     );
}

export default LinkFloating;