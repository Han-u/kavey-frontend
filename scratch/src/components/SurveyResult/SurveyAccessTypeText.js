import React from "react";
import {Button,Typography,Tooltip} from "@mui/material";

function SurveyAccessTypeText(props) {
    return(
        <div>
            <div style={{height:"210px",display:"flex",
                flexDirection:"row",width:"100%"}}>
                <div style={{width:"274px"}}>
                    <Typography variant="h4" fontFamily="NanumSquareB"
                                style={{paddingBottom:'5px',fontSize:"24px",marginTop:"30px"}}>
                        설문 접근 방법</Typography>
                </div>
                <div  style={{marginTop:"30px",float:"left"}}>
                    <div style={{float:"left"}}>
                        <Button variant="outlined"
                                disabled={!!props.private}
                                style={{width:"80px",marginRight:"10px",height:"30px"}}>개방형</Button>
                        <Button variant="outlined"
                                disabled={!props.private}
                                style={{width:"80px",height:"30px"}}>폐쇄형</Button>
                    </div>
                    <div>
                        <br></br><br></br>
                        <label for="limitPerson" style={{float:"left"}}>
                            <Typography fontFamily="NanumSquareR" style={{fontSize: '15px'}}>설문조사 인원 설정</Typography>
                        </label>
                        <br></br>
                        <input style={{backgroundColor: '#F5F5F5', border: '0px'}} type="number" id="limitPerson" name="limitPerson" value={props.limitPerson} min="0" disabled = {true}/>
                    </div>
                </div>
            </div>
            <div style={{borderBottom:"1px solid #000000",width:'90%'}}></div>
        </div>
    )

}

export default SurveyAccessTypeText;