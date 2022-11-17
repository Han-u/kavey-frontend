import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import SurveyOptionSetting from "./pages/SurveyOptionSetting";
import Management from "./pages/Management";

import ModalTestPage from "./components/Modal/ModalTestPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/surveyoptionsetting" element={<SurveyOptionSetting/>}/>
        <Route path="/survey" element={<Survey/>}/>
        <Route path="/management" element={<Management/>}/>
      </Routes>
    </Router>
  );
}

export default App;
