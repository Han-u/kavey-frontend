import { configureStore ,combineReducers,createSlice} from '@reduxjs/toolkit'
import produce from 'immer';
import { CHECKBOX, MULTIPLE ,RADIO} from './SurveyMakeSlice';


export const SurveyAnswerSlice=createSlice(
    {
        name:'SurveyAnswer',
        initialState:{
            option:[],
            question:[],
            answer : {
                userId : 2,
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
                        case CHECKBOX:
                            multipleAnswer.push({
                                questionId:d.questionId,
                                optionId:[], //ordering아닌 optionid임 
                                questionType:CHECKBOX,
                            });
                        break
                        case RADIO:
                            multipleAnswer.push({
                                questionId:d.questionId,
                                optionId:"", //ordering아닌 optionid임 
                                questionType:RADIO,
                            });
                        break
                        default:
                            subjectiveAnswer.push({
                                questionId:d.questionId,
                                value:""
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
            ANSWER_SUBJECTIVE: (state,action) => {
                const {ordering,value} = action.payload;

                const q_id = state.question.find(e=>e.ordering === ordering).questionId;

                const newState = produce(state.answer.surveySubjective,(draftState) => {
                    var i = draftState.findIndex(e=>e.questionId == q_id);
                    draftState[i].value = value;
                })
                state.answer.surveySubjective = newState;

            },
            ANSWER_MULTIPLE_RADIO: (state,action) => {

            },
            ANSWER_MULTIPLE_CHECKBOX: (state,action) => {

            },
        }
    }

)



export const 
{
    GET_SURVEY,
    ANSWER_SUBJECTIVE,
    ANSWER_MULTIPLE_RADIO,
    ANSWER_MULTIPLE_CHECKBOX,
} = SurveyAnswerSlice.actions;