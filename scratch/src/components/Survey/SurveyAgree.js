import {useState} from "react";
import {Button, ButtonGroup} from "@mui/material";

const styles = {
    container: {
        border:3,
        borderStyle: "solid",
        padding: 15,
    },
    container2: {
        display: "flex",
        justifyContent: "center",
        margin: 30
    },
    questionInput: {
        width: 300
    },
    agree: {
        display: "flex",
        justifyContent: "center"
    },
    btn: {
        borderStyle: "solid",
        padding: 10,
        margin: 5,
        cursor: "pointer",
        backgroundColor: "skyblue",

    }
}

function SurveyAgree(){
    const [title, setTitle] = useState("");
    const onChange = (event) => setTitle(event.target.value);
    const onClick = () => {
        alert(title);
    }

    return (
        <div style={styles.container}>
            <div style={styles.container2}>
                <input
                    value= {title}
                    type="text"
                    placeholder="질문을 입력하세요."
                    style={styles.questionInput}
                    onChange={onChange}
                />
            </div>
            <div style={styles.agree}>
                <ButtonGroup varient="outlined" size="large">
                    <Button onClick={onClick}>찬성</Button>
                    <Button onClick={onClick}>반대</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default SurveyAgree;