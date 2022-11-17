import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import SurveyOptionSetting from "./pages/SurveyOptionSetting";
import LinkFloating from "./pages/LinkFloating";
import SendSurvey from "./pages/SendSurvey";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/survey" element={<Survey/>}/>
        <Route path="/surveyoptionsetting" element={<SurveyOptionSetting/>}/>
        <Route path="/linkfloating" element={<LinkFloating/>}/>
        <Route path="/sendsurvey" element={<SendSurvey/>}/>
      </Routes>
    </Router>
  );
}

export default App;
