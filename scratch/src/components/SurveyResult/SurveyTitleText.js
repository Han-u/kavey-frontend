import {React} from 'react';
function SurveyTitleText(props){

    return(
        <div align="center" style={{backgroundColor:"#D4E8FF",
            width:"100%",
            height:"200px",
            display:"flex",
            flexDirection:"row"}}>
            <div style={{
                paddingLeft: '60px',
                justifyContent: 'center',
                alignItems: 'start',
                flexDirection:"column",
                display:"flex",
                width:"670px"}}>
                <div style={{
                    fontSize: 25,
                    fontFamily: "NanumSquareB",
                    height: 45,
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    {props.title}
                </div>
                <div style={{
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: "NanumSquareR",
                    fontSize: 15
                }}>
                    {props.description}
                </div>
            </div>
        </div>
    )
};

export default SurveyTitleText;