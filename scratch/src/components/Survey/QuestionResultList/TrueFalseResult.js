import {Button, ButtonGroup,Typography} from "@mui/material";

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        backgroundColor:'white',
        border: "1px solid",
        borderRadius:8,
        flexDirection: "column",
        width:'100%',
        padding:'30px',
        marginBottom: '30px',
    },
}

function TrueFalseResult({purpose,id,title,required}){
    console.log(required)
    return (
        <div style={styles.container}>
            <div>
            <div style={{ display:'flex',flexDirection:'row' ,justifyContent : "center" }}>
                {required === true && <h1 style={{color: "red"}} >*</h1> }
                <Typography variant="h4" fontFamily="HallymGothic-Regular" 
                style={{marginBottom:'20px'}}>{title}</Typography>
            </div>
            </div>
            
            <div>
                <ButtonGroup varient="outlined" size="large">
                    <Button >찬성</Button>
                    <Button >반대</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default TrueFalseResult;