import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import SurveyAccessType from "./components/surveyoptionsetting/SurveyAccessType";
import SurveyOptionSetting from "./pages/SurveyOptionSetting";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/survey" element={<Survey/>}/>
        <Route path="/survey_option_setting" element={<SurveyOptionSetting/>}/>
        <Route path="/survey_access_type" element={<SurveyAccessType/>}/>
      </Routes>
    </Router>
  );
}

export default App;
