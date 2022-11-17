import ReactModal from "react-modal";
import React, { useRef } from "react";
import {Button, Typography} from "@mui/material";

const MyModal = ({ onSubmit, onClose }) => {

  
  
  const textInput = useRef();

     const copy = () => {
       const el = textInput.current
       el.select()
       document.execCommand("copy")
     }

  return (
    <ReactModal isOpen>
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
    </ReactModal>
  );
};

export default MyModal;
