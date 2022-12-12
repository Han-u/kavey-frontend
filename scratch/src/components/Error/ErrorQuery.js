import {IoIosSad} from "react-icons/io";

const style = {
    outer : {
        padding: 30,
        backgroundColor: '#F5F5F5',
        alignItems:"center",
        justifyContent : "center",
        width:"100%",height:"100%",
    },
    inner : {
        padding: 30,
        backgroundColor: '#F5F5F5',
        textAlign : "center",
        marginTop: "20px",
        marginBottom: "20px",
    },
}


function ErrorQuery() {
    return ( 
        <div style={style.outer}>
            <div style={style.inner}>
                <IoIosSad size="100"/>  
                <div style={{margin:"30px"}}></div>
                <h1>에러 발새앵앵으애으엉</h1>
            </div>
        </div>
     );
}

export default ErrorQuery;