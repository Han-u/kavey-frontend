import React from "react";
import {Button,Typography,Tooltip} from "@mui/material";


function SurveyGenderAgeText(props) {
    return(
        <div style={{height:"210px",display:"flex",
            flexDirection:"row",width:"100%"}}>
            <div style={{width:"274px"}}>
                <Typography variant="h4" fontFamily="NanumSquareB"
                            style={{paddingBottom:'5px', fontSize:"24px",marginTop:"30px",marginRight:"50px"}}>
                    기본 질문</Typography>
            </div>
            <div  style={{marginTop:"30px",float:"left"}}>
                <div style={{float:"left"}}>
                        <Button variant="outlined"
                                style={{width:"80px",height:"30px",marginRight:"10px"}}
                                disabled={!props.askGender}
                        >
                            성별
                        </Button>
                        <Button variant="outlined"
                                style={{width:"80px",height:"30px"}}
                                disabled={!props.askAge}
                        >
                            연령
                        </Button>
                </div>
            </div>
        </div>
    )
}

export default SurveyGenderAgeText;