import {useState} from "react";
import {Button, ButtonGroup, Container, TextField} from "@mui/material";

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        margin: 30
    },
}

function TrueFalseResult({id,title}){

    return (
        <Container maxWidth='sm' sx={{border: 1, borderRadius: 3}}>
            <h1>
                {title}
            </h1>
            <div style={styles.container}>
                <ButtonGroup varient="outlined" size="large">
                    <Button >찬성</Button>
                    <Button >반대</Button>
                </ButtonGroup>
            </div>
        </Container>
    )
}

export default TrueFalseResult;