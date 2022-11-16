import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import SurveyOptionSetting from "./pages/SurveyOptionSetting";
import LinkFloating from "./pages/LinkFloating";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/survey" element={<Survey/>}/>
        <Route path="/surveyoptionsetting" element={<SurveyOptionSetting/>}/>
        <Route path="/linkfloating" element={<LinkFloating/>}/>
      </Routes>
    </Router>
  );
}

export default App;
