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
      </Routes>
    </Router>
  );
}

export default App;
