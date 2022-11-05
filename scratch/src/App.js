import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import SurveyOptionSetting from "./pages/SurveyOptionSetting";
import Management from "./pages/Management";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/survey" element={<Survey/>}/>
        <Route path="/surveyoptionsetting" element={<SurveyOptionSetting/>}/>
        <Route path="management" element={<Management/>}/>
      </Routes>
    </Router>
  );
}

export default App;
