import {Button, Chip, Typography} from "@mui/material";
import React from "react";

function SurveyStatus(props){
    const status = {
        MAKING: '제작중',
        PROGRESS: '진행중',
        DONE: '설문완료'
    }

    return (
      <div>
          <div style={{height:"130px",display:"flex",
              flexDirection:"row",width:"100%"}}>
              <div style={{width:"274px"}}>
                  <Typography variant="h4" fontFamily="NanumSquareB"
                              style={{paddingBottom:'5px',fontSize:"24px",marginTop:"50px",marginRight:"50px"}}
                  >설문 상태</Typography>
              </div>
              <div style={{marginTop:"50px"}}>
                  <Chip label={status[props.status]}
                        variant={props.status === 'MAKING'? "outlined" : 'filled'}
                        size="large"
                        color={props.status === 'MAKING'? "primary" : props.status==='DONE'? "default": "warning"}
                        sx={{float: 'left'}}
                  />
              </div>
          </div>
          <div style={{borderBottom:"1px solid #000000",width:'90%'}}></div>
      </div>
    );
}

export default SurveyStatus;