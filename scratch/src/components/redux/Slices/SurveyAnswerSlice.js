import { configureStore ,combineReducers,createSlice} from '@reduxjs/toolkit'
import { MULTIPLE } from './SurveyMakeSlice';


export const SurveyAnswerSlice=createSlice(
    {
        name:'SurveyAnswer',
        initialState:{
            option:[],
            question:[],
            answer : {
                userId : 1,
                gender : "MALE",
                age : 10,
                surveySubjective : [],
                surveyMultiple : []
            },
        },
        reducers:{
            GET_SURVEY:(state,action) =>{
                //parsing (option / question 분리)
                let data = action.payload.data;

                //question 분리
                state.question = Object.assign(data.questionList);
                //answer 폼 생성
                let multipleAnswer = [];
                let subjectiveAnswer = [];
                data.questionList.map((d,id)=>{
                    switch(d.type){
                        case MULTIPLE:
                            multipleAnswer.push({
                                questionId:d.questionId,
                                optionId:17, //ordering아닌 optionid임 
                                questionType:d.type
                            });
                            
                        break
                        default:
                            subjectiveAnswer.push({
                                questionId:d.questionId,
                                value:"빈값"
                            });
                        break
                    }
                })
                state.answer.surveyMultiple = Object.assign(multipleAnswer);
                state.answer.surveySubjective = Object.assign(subjectiveAnswer);
                //option 분리
                delete data.questionList;
                state.option = data;
            },
            ANSWER: (state,action) => {

            },
        }
    }

)



export const {GET_SURVEY,ANSWER} = SurveyAnswerSlice.actions;