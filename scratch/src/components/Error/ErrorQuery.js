import {IoIosSad} from "react-icons/io";

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
                <IoIosSad size="100"/>  
                <div style={{margin:"25x"}}></div>
                <h1 style={{margin:"5px"}}>에러 발생!</h1>
                <h4>"{log}"</h4>
            </div>
        </div>
     );
}

export default ErrorQuery;