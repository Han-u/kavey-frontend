import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import SurveyOptionSetting from "./pages/SurveyOptionSetting";


import ModalTestPage from "./components/Modal/ModalTestPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>        
        <Route path="/modaltestpage" element={<ModalTestPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
