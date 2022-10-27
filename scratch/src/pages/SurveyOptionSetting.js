
import SurveyGenderAge from "../components/surveyoptionsetting/SurveyGenderAge";


function SurveyOptionSetting(params) {
    return (
        <div>
            <div>
                여기가 타이틀
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