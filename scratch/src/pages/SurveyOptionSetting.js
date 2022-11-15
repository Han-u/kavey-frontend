
import SurveyGenderAge from "../components/surveyoptionsetting/SurveyGenderAge";
import SurveyTitle from '../components/surveyoptionsetting/SurveyTitle';
import SurveyAccessType from "../components/surveyoptionsetting/SurveyAccessType";
import SurveyDuration from "../components/surveyoptionsetting/SurveyDuration";


function SurveyOptionSetting(params) {

    return (
        <div style={{align:'center'}}>
            <div style={{width:'600px',margin:'auto'}}>
            <div>
                <SurveyTitle title="1. 설문 제목"/>
            </div>
            <div>
                <SurveyDuration/>
            </div>
            <div align="center">
                <SurveyAccessType/>
            </div>
            <div align="center">
                <SurveyGenderAge/>
            </div>
            <div align="center" style={{marginTop:'50px'}}>
                <button>다음으로</button>
            </div>
            </div>
        </div>
    )
    
}

export default SurveyOptionSetting;