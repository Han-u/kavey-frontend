import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import SurveyOptionSetting from "./pages/SurveyOptionSetting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/survey" element={<Survey/>}/>
        <Route path="/surveyoptionsetting" element={<SurveyOptionSetting/>}/>
      </Routes>
    </Router>
  );
}

export default App;
