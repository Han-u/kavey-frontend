import {useSelector} from 'react-redux';
import { Typography,Button} from "@mui/material";
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'

import { OBJECTIVE,MULTIPLE,TRUEFALSE,STAR } from "../redux/Slices/SurveyMakeSlice";

import ObjectResult from './QuestionResultList/ObjectResult';
import MultipleResult from './QuestionResultList/MultipleResult';
import TrueFalseResult from './QuestionResultList/TrueFalseResult';
import RatingResult from './QuestionResultList/RatingResult';




function AnswerResultList() {
    const data = useSelector((state)=>state.surveyAnswer.question);
    const surveyOption=useSelector((state)=>state.surveyOption);
    const navigate=useNavigate();

    const handleClick=()=>{
        Swal.fire({
            title: '제출하시겠어요?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '네',
            cancelButtonText:'아니요'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate(`/submit`);
            }
        })
    };

    let list = NaN;

    if(data!==undefined){
        list = data.map(
            r => {
                switch (r.type) {
                    case OBJECTIVE:
                        return <ObjectResult id={r.ordering} title={r.title} />
                    case MULTIPLE:
                        return <MultipleResult id={r.ordering} title={r.title} canMulti={r.canMulti} response={r.optionList}/>
                    case TRUEFALSE:
                        return <TrueFalseResult id={r.ordering} title={r.title}/>
                    case STAR:
                        return <RatingResult id={r.ordering} title={r.title}/>
                }
            }
        )
    }
    
    return (
        <div align="center" style={{width: '100%'}}>
            <div align="center" style={{width:'800px',backgroundColor:surveyOption.themeColor}}>
                <div style={{width:'600px',height:'100%'}}>
                    <Typography variant="h2" fontFamily="HallymGothic-Regular" style={{paddingTop:'30px',paddingBottom:'30px'}}>{surveyOption.title}</Typography>
                    <Typography variant="h4" fontFamily="HallymGothic-Regular" style={{paddingBottom:'30px'}}>{surveyOption.description}</Typography>
                    {surveyOption.isGenderQuestion?<div>여기 성별 질문</div>:null}
                    {surveyOption.isAgeQuestion?<div>여기 나이 질문</div>:null}
                    {list}
                    <Button variant="contained" onClick={handleClick}>제출하기</Button>
                </div>
            </div>
        </div>
    );
}

export default AnswerResultList;