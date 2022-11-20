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
            question: [
                {
                  id: 1,
                  order: 1,
                  type: 'OBEJCTIVE',
                  title: '1번째 질문'
                },
                {
                  id: 2,
                  order: 2,
                  type: 'OBEJCTIVE',
                  title: '2번째 질문'
                },
                {
                  id: 3,
                  order: 3,
                  type: 'MULTIPLE',
                  title: '3번째 질문',
                  canMulti: 'true',
                  response: [
                    {
                      id: 1,
                      title: '1번째 선택요소'
                    }
                  ]
                },
                {
                  id: 4,
                  order: 4,
                  type: 'STAR',
                  title: '4번째 질문'
                },
                {
                  id: 5,
                  order: 5,
                  type: 'STAR',
                  title: '5번째 질문'
                },
                {
                  id: 6,
                  order: 6,
                  type: 'STAR',
                  title: '6번째 질문'
                },
                {
                  id: 7,
                  order: 7,
                  type: 'OBEJCTIVE',
                  title: '7번째 질문'
                },
                {
                  id: 8,
                  order: 8,
                  type: 'MULTIPLE',
                  title: '8번째 질문',
                  canMulti: 'false',
                  response: [
                    {
                      id: 1,
                      title: '1번째 선택요소'
                    },
                    {
                      id: 2,
                      title: '2번째 선택요소'
                    },
                    {
                      id: 3,
                      title: '3번째 선택요소'
                    },
                    {
                      id: 4,
                      title: '4번째 선택요소'
                    }
                  ]
                }
              ],
            answer:new Array(8),
        },
        reducers:{
            ANSWER: (state,action) => {
                const {id,value} = action;
                console.log(id);
                console.log(value);
                const newState = {...state};
                newState.answer[id-1] = value;

                state = newState;
            },
        }
    }

)



export const {ANSWER} = SurveyAnswerSlice.actions;