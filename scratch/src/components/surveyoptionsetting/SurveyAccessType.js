import React from "react";
import { useState } from "react";

function SurveyAccessType(props) {
    const [PublicPrivate, setPublicPrivate] = useState("public")
    const [PeopleLimit, setPeopleLimit] = useState()

    const handlepublic_surveyChange = (e) => {
        setPublicPrivate("public");
        console.log("public setting : "+ PublicPrivate);

        
    };
    const handleprivate_surveyChange = (e) => {
        setPublicPrivate("private");
        console.log("survey setting : "+ PublicPrivate);
    };


    const checkPublic = ()=>{
        if (PublicPrivate === "public")
            return "";
        else
            return "disabled";
    }
    const handleChange = (e) => {
        // console.log(e.target.value);
        setPeopleLimit(e.target.value);
    }

    return(
        <div>
            <h2>3. 설문 응답 설정</h2>
            <div  style={{display: 'flex', flexDirection: 'row',justifyContent: 'center' , width:'600px'}}>
            <div style={{width:'50%'}}>
                <input type="radio" id="publivSurvey" name="SurveylAccess" value="publivSurvey" defaultChecked onChange={(e) => handlepublic_surveyChange(e)} />
                <label for="publivSurvey">개방형</label>
                <p>
                <label for="peopleLimit">설문조사 인원 설정  (0-100):</label>
                <p/>
                <input type="number" id="peopleLimit" name="peopleLimit" placeholder="(0 : 무제한)" value={PeopleLimit} min="0" disabled = {checkPublic()}  onChange={handleChange}/>
                </p>
                
            </div>            
            <div style={{width:'50%'}}>
                <input type="radio" id="privateSurvey" name="SurveylAccess" value="privateSurvey" onChange={(e) => handleprivate_surveyChange(e)}/>
                <label for="privateSurvey">폐쇄형</label>
            </div>
             </div>   
        </div>
    )
    
}

export default SurveyAccessType;