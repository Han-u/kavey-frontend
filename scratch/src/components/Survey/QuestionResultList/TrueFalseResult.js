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

function TrueFalseResult({id,title}){

    return (
        <div style={styles.container}>
            <Typography variant="h4" fontFamily="HallymGothic-Regular" 
            style={{marginBottom:'20px'}}>{title}</Typography>
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