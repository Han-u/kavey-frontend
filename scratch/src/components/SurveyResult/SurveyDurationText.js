import {Button,Typography} from "@mui/material";

function SurveyDurationText(props) {
    const toDateFormat=(date) =>{
        if (!date){
            return ""
        }
        return date.split('T')[0]
    }

    const calcDurationDate=(start, end, date)=>{
    }

    const style = {
        dateLabel : {
            fontSize: '3px', fontFamily:'NanumSquareL'
        },
        dateBox : {
            backgroundColor: '#F5F5F5',
            fontFamily: 'NanumSquareR',
            fontSize: 14,
            height: 25,
            width: 100,
            display:'flex',
            alignItems: "center",
            justifyContent: 'center'
        }
    }

    return (
        <div>
            <div style={{height:"210px",display:"flex",
                flexDirection:"row",width:"100%"}}>
                <div style={{width:"274px"}}>
                    <Typography variant="h4" fontFamily="NanumSquareB"
                                style={{paddingBottom:'5px',fontSize:"24px",marginTop:"50px",marginRight:"50px"}}
                    >설문 기간</Typography>
                </div>
                <div style={{marginTop:"50px"}}>
                    <div style={{float:"left",marginBottom:"20px", display: 'flex'}}>
                        <div>
                            <div style={style.dateLabel}>
                                시작일
                            </div>
                            <div style={style.dateBox}>
                                {toDateFormat(props.startDate)}
                            </div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'end'}}>
                            &nbsp; - &nbsp;
                        </div>
                        <div>
                            <div style={style.dateLabel}>
                                종료일
                            </div>
                            <div style={style.dateBox}>
                                {toDateFormat(props.endDate)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{borderBottom:"1px solid #000000",width:'90%'}}></div>
        </div>
    );
}

export default SurveyDurationText;
