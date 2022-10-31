import {useState} from "react";
import {Button, ButtonGroup, Container, TextField} from "@mui/material";

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        margin: 30
    },
}

function SurveyAgree(){
    const [title, setTitle] = useState("");
    const onChange = (event) => setTitle(event.target.value);
    const onClick = () => {
        alert(title);
    }

    return (
        <Container maxWidth='sm' sx={{border: 1, borderRadius: 3}}>
            <div style={styles.container}>
                <TextField
                    value={title}
                    placeholder="질문을 입력하세요"
                    onChange={onChange}
                    variant="outlined"
                    required
                    sx={{width: 800}}
                />
            </div>
            <div style={styles.container}>
                <ButtonGroup varient="outlined" size="large">
                    <Button onClick={onClick}>찬성</Button>
                    <Button onClick={onClick}>반대</Button>
                </ButtonGroup>
            </div>
        </Container>
    )
}

export default SurveyAgree;