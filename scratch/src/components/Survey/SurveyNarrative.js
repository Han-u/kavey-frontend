import {useState} from 'react';
import SurveyNarrativeResult from "./SurveyNarrativeResult";

const styles = {
    container: {
        border:3,
        borderStyle: "solid",
        display: "flex",
        padding: 15,
    },
    btn: {
        borderStyle: "solid",
        padding: 5,
        margin: 5,
        cursor: "pointer",
        backgroundColor: "skyblue",
    }
}
function SurveyNarrative(){
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    };
    const onReset = () => {
        console.log({text});

    };

    const onMouseOver = (e) => {
        e.currentTarget.style.backgroundColor="red"
    }
    const onMouseOut = (e) => {
        e.currentTarget.style.backgroundColor="skyblue"
    }

    return(
        <div style={styles.container}>
            <div>
            <input placeholder={"원하시는 질문입력"} maxLength={50} onChange={onChange} ></input>
            <button onMouseOver={onMouseOver} onMouseOut={onMouseOut} style={styles.btn} onClick={onReset}>질문제작</button>

                <SurveyNarrativeResult value={text}/>
            </div>

        </div>
    );
}



export default SurveyNarrative;