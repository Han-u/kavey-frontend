import { elementAcceptingRef } from '@mui/utils';
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
                userId : 1,
                gender : "",
                age : "",
                surveySubjective : [],
                surveyMultiple : []
            },

            status : false,
            mustAnswerId : [],
        },
        reducers:{
            GET_SURVEY:(state,action) =>{
                //parsing (option / question 분리)
                let data = action.payload.data;
                
                //question 분리
                console.log(data);
                state.question = Object.assign(data.questionList);

                //응답 체크 시 필요할 데이터
                let check = [];
                //answer 폼 생성
                let multipleAnswer = [];
                let subjectiveAnswer = [];
                data.questionList.map((d,id)=>{
                    if(d.required == true){
                        check.push(d.questionId);
                    }
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
                state.mustAnswerId = Object.assign(check);
                //option 분리
                delete data.questionList;
                state.option = data;
            },
            ANSWER_GENDER: (state,action) => {
                const {value} = action.payload;
                state.answer.gender=value;
            },

            ANSWER_AGE: (state,action) => {
                const {value} = action.payload;
                state.answer.age=value;
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
                const {ordering,value} = action.payload;

                const q_id = state.question.find(e=>e.ordering === ordering).questionId;

                const newState = produce(state.answer.surveyMultiple,(draftState) => {
                    var i = draftState.findIndex(e=>e.questionId == q_id);
                    draftState[i].optionId = value;
                })
                state.answer.surveyMultiple = newState;

            },
            ANSWER_MULTIPLE_CHECKBOX: (state,action) => {
                const {ordering,value} = action.payload;
                console.log(ordering,value);

                const q_id = state.question.find(e=>e.ordering === ordering).questionId;

                const newState = produce(state.answer.surveyMultiple,(draftState) => {
                    var i = draftState.findIndex(e=>e.questionId == q_id);
                    draftState[i].optionId = value.map(e=>e.optionId);
                })
                state.answer.surveyMultiple = newState;

            },
            
            CHECK_ANSWER: (state,action) => {
                let flag = 1;
                if(state.option.askGender==false && state.option.askAge==false){ 
                    state.status = true;
                }
                else{
                    if(flag != -1 && state.option.askGender==true){
                        (state.answer.gender!='')? state.status = true :  flag=-1; 
                     }
                     if(flag != -1 && state.option.askAge==true){
                         (state.answer.age!='')? state.status = true : flag=-1; 
                     }
                }
                let cnt = 0;
                state.mustAnswerId.map((e)=>{
                    if(flag!=-1){
                        const i = state.answer.surveySubjective.findIndex(ee=>ee.questionId==e);
                        console.log("check1",e,i);
                        if(i == -1){
                            const ii = state.answer.surveyMultiple.findIndex(ee=>ee.questionId==e);
                            console.log("check2",e,ii);
                            if(state.answer.surveyMultiple[ii].questionType==RADIO){
                                console.log("radio");
                                (state.answer.surveyMultiple[ii].optionId!='') ? cnt+=1 : flag=-1; 
                            }
                            else if(state.answer.surveyMultiple[ii].questionType==CHECKBOX){
                                console.log("checkbox");
                                (state.answer.surveyMultiple[ii].optionId.length>0 ) ? cnt+=1 : flag=-1; 
                            }
                        }
                        else{
                            (state.answer.surveySubjective[i].value!=='') ? cnt+=1 : flag=-1; 
                        }
                    }
                })
                console.log(state.status);
                if(cnt<state.mustAnswerId.length){
                    state.status = false;
                }
            },
        }
    }

)



export const 
{
    GET_SURVEY,
    ANSWER_GENDER,
    ANSWER_AGE,
    ANSWER_SUBJECTIVE,
    ANSWER_MULTIPLE_RADIO,
    ANSWER_MULTIPLE_CHECKBOX,
    CHECK_ANSWER,
} = SurveyAnswerSlice.actions;