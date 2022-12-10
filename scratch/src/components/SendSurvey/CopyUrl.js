import React, { useRef } from 'react';
import {Button, Typography, Menu, MenuItem, Input} from "@mui/material";

function CopyUrl() {

    const textInput = useRef();

    const copy = () => {
        const el = textInput.current
        el.select()
        document.execCommand("copy")
    }

    return (
        <>
            <input type="text" value="설문지링크예시" ref={textInput} readOnly></input>
            <button onClick={copy}>복사</button>
        </>
    );
}

export default CopyUrl;