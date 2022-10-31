import {useState} from 'react';

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

function SurveyNarrativeResult(props){
    console.log(props);
    return(
        <div style={styles.container}>
            만들어진 질문:{props.value}
        </div>
    );
}
export default SurveyNarrativeResult;