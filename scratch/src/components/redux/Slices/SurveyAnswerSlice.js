import { configureStore ,combineReducers,createSlice} from '@reduxjs/toolkit'

export const OBJECTIVE = "OBEJCTIVE";
export const MULTIPLE = "MULTIPLE";
export const TRUEFALSE = "TRUEFALSE";
export const STAR = "STAR";

export const SurveyAnswerSlice=createSlice(
    {
        name:'SurveyAnswer',
        initialState:{
            //dummy data
            option : [],
            question: [
              ],
            answer:new Array(8),
        },
        reducers:{
            ANSWER: (state,action) => {
                const {id,value} = action;
                const newState = {...state};
                newState.answer[id-1] = value;

                state = newState;
            },
        }
    }

)



export const {ANSWER} = SurveyAnswerSlice.actions;