import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import SurveyOptionSetting from "./pages/SurveyOptionSetting";
import Management from "./pages/Management";
import SurveyMake from "./pages/SurveyMake";
import Participant from "./pages/Participant";
import SendSurvey from "./pages/SendSurvey";
import LinkFloating from "../src/components/Modal/LinkFloating";
import ModalSearchParticipant from "./components/Modal/ModalSearchParticipant";
import LoginMain from "./pages/LoginMain";
import SurveyAnswer from "./pages/SurveyAnswer";
import ProxyTest from "./components/BackEnd/ProxyTest";
import MyDocument from "./pages/Report";
import SurveyResult from "./pages/SurveyResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginMain/>}/>
        <Route path="/surveyoptionsetting" element={<SurveyOptionSetting/>}/>
        <Route path="/management" element={<Management/>}/>
        <Route path="/surveymake" element={<SurveyMake/>}/>
        <Route path="/participant" element={<Participant/>}/>
        <Route path="/sendsurvey" element={<SendSurvey/>}/>
        <Route path="/linkfloating" element={<LinkFloating/>}/>
        <Route path="/searchparticipant" element={<ModalSearchParticipant/>}/>
        <Route path="/report" element={<MyDocument/>}/>
        <Route path="/answer" element={<SurveyAnswer/>}/>
        <Route path="/oauth/callback/kakao"></Route>
        <Route path="/testproxy" element={<ProxyTest/>}/>
        <Route path="/result/:surveyId" element={<SurveyResult/>}/>
      </Routes>
    </Router>
  );
}

export default App;
