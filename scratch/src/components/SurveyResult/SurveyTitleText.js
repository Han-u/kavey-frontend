import {React,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { SET_THEME_TEST } from '../redux/Slices/SurveyOptionSlice';
function SurveyTitleText(props){
    var theme
    switch(props.theme){
        case "chunsik":
            theme="url('/images/theme_chunsik.png')";
            break;
        case "ryan":
            theme="url('/images/theme_ryan.png')";
            break;
        case "jordy":
            theme="url('/images/theme_jordy.png')";
            break
        case "apeach":
            theme="url('/images/theme_apeach.png')";
            break;
    }
    

    return(
        <div align="center" style={{backgroundColor:"#D4E8FF",
            backgroundImage:theme,
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