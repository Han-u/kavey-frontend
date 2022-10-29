
import SurveyGenderAge from "../components/surveyoptionsetting/SurveyGenderAge";
import SurveyTitle from '../components/surveyoptionsetting/SurveyTitle';
import SurveyAccessType from "../components/surveyoptionsetting/SurveyAccessType";


function SurveyOptionSetting(params) {
    return (
        <div>
            <div>
                <SurveyTitle title="1. 설문 제목"/>
            </div>
            <div>
                여기가 기간 설정
            </div>
            <div>
                <SurveyAccessType/>
            </div>
            <div>
                <SurveyGenderAge/>
            </div>
        </div>
    )
    
}

export default SurveyOptionSetting;