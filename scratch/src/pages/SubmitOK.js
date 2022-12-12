import {IoHappy} from "react-icons/io5";

const style = {
    outer : {
        padding: 30,
        backgroundColor: '#F5F5F5',
        display:'flex',
        alignItems:"center",
        justifyContent : "center",
        width:"100%",
        height:"100%",
    },
    inner : {
        padding: 30,
        backgroundColor: '#F5F5F5',
        textAlign : "center",
        marginTop: "20px",
        marginBottom: "20px",
        fontFamily:"NanumSquareB"
    },
}


function ErrorQuery({log}) {
    return ( 
        <div style={style.outer}>
            <div style={style.inner}>
                <IoHappy size="100"/>  
                <div style={{margin:"25x"}}></div>
                <h1 style={{margin:"5px"}}>답변이 전송되었습니다!</h1>
                <h4>"감사합니다"</h4>
            </div>
        </div>
     );
}

export default ErrorQuery;