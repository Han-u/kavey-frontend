import { useParams } from "react-router-dom";
import ErrorQuery from "../components/Error/ErrorQuery";

function ErrorPage() {
    const {code}=useParams();
    return (    
        <ErrorQuery log={code}/>
     );
}

export default ErrorPage;