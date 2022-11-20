import {useDispatch} from 'react-redux';
import { ANSWER } from '../../redux/Slices/SurveyAnswerSlice';

const styles = {
    container: {
        border:3,
        borderStyle: "solid",
        padding: 15,
    },
} 



function ObjectResult({id, title}) {
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch({type:ANSWER,id:id,value:e.target.value});
    };

    return (  
        <div style={styles.container}>
            <h1>{title}</h1>
            <form>
                <input type="text" onChange={onChange}></input>
            </form>
        </div> 
        
    );
}

export default ObjectResult;