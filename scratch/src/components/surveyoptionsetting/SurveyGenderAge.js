import React from "react";
import { useState } from "react";

function SurveyGenderAge(props) {

    const [gender, setGender] = useState(true)
    const [age, setAge] = useState(true)
    

    const handleGenderChange = (e) => {

        
        if(gender === true)
            setGender(false);
        else
            setGender(true);

        console.log("gender : "+ gender);

        
    };

    const handleAgeChange = (e) => {
        if(age === true)
            setAge(false);
        else
            setAge(true);

        console.log("age : "+ age);
    };



    return(
        <div>
            <h1>4. 인적 사항 질문 추가</h1>
            <div>

                <input type={"checkbox"} defaultChecked ={gender} onChange={(e)=>handleGenderChange(e)}/> 성별
                <input type={"checkbox"} defaultChecked ={age} onChange={(e)=>handleAgeChange(e)}/> 연령대
                
            </div>


        </div>
    )
    
}

export default SurveyGenderAge;