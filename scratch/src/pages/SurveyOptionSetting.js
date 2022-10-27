
import SurveyGenderAge from "../components/surveyoptionsetting/SurveyGenderAge";


import SurveyTitle from '../components/surveyoptionsetting/SurveyTitle';

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
                여기가 응답 설정
            </div>
            <div>
                <SurveyGenderAge/>
            </div>
        </div>
    )
    
}

export default SurveyOptionSetting;