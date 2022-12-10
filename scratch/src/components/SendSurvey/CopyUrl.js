import React, { useRef } from 'react';
import {Button, Typography, Menu, MenuItem, Input, styled} from "@mui/material";

function CopyUrl() {

    const textInput = useRef();

    const copy = () => {
        const el = textInput.current
        el.select()
        document.execCommand("copy")
    }
    const BootstrapButton2 = styled(Button)({
        backgroundColor: '#FFD701',
        color: 'black',
        boxShadow: 'none',
        fontFamily: [
            'NanumSquare',
        ]
    });

    return (
        <>
            <input style={{width:300,
                height:35, marginLeft:20, display:"inline-block",verticalAlign:"middle" }} type="text" value="설문지링크예시" ref={textInput} readOnly></input>
            <BootstrapButton2 disabled={false} variant="contained" size="large" sx={ { borderRadius: 28 } }onClick={copy}>복사</BootstrapButton2>
        </>
    );
}

export default CopyUrl;