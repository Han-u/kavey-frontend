import { useParams } from "react-router-dom";

function ResultPersonalAnswer() {
  const { surveyId,attendId } = useParams();
  
    return (
        <div>
            {surveyId}
            {attendId}
        </div>
      );
}

export default ResultPersonalAnswer;