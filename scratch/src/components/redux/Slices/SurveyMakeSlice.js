import { createSlice} from '@reduxjs/toolkit'

import produce from "immer";

export const OBJECTIVE = "OBEJCTIVE";
export const MULTIPLE = "MULTIPLE";
export const TRUEFALSE = "TRUEFALSE";
export const STAR = "STAR";

export const surveyMakeSlice=createSlice(
    {
        name:'surveyMake',
        initialState:{
            //surveyTitle:"",
            //surveyDesc:"",
            //surveyIsGenderQuestion:true,
            //surveyIsAgeQuestion:true,
            question:[ {   
                title:1+"번째 질문",
                required:true,
                ordering:0,
                type:OBJECTIVE,
                option_number:0,
                option_list:[]
            }],
        },
        reducers:{
        CREATE_OBJECTIVE: (state,action) => {
            const {id} = action.payload;
            
            const newQuestion = [...state.question];
            newQuestion.splice(id+1,0,{   
                title:newQuestion.length+1+"번째 질문",
                required:true,
                ordering:id+1,
                type:OBJECTIVE,
                option_number:0,
                option_list:[]
            })
            newQuestion.map((r,i)=>{newQuestion[i].ordering=i});
            state.question = newQuestion;
        },


        CREATE_MULTIPLE : (state,action) => {
            const {id} = action.payload;
            
            const newQuestion = [...state.question];
            newQuestion.splice(id+1,0,{   
                title:newQuestion.length+1+"번째 질문",
                required:true,
                ordering:id+1,
                type:MULTIPLE,
                option_number:0,
                option_list:[{value:1+"번째 선택요소",ordering:0,data:"??"}],
                canMulti:"true",
            })
            newQuestion.map((r,i)=>{newQuestion[i].ordering=i});
            state.question = newQuestion;
        }, 

            UPDATE_MULTIPLE_CANMULTI : (state,action) => {
                const {q_id} = action.payload;
                const newState = produce(state,(draftState) => {
                    if(draftState.question[q_id].canMulti=="true"){
                        draftState.question[q_id].canMulti = "false";
                    }
                    else{
                        draftState.question[q_id].canMulti = "true";
                    }
                })
                state.question = newState.question;
            }, 

            UPDATE_MULTIPLE_CREATE_RESPONSE : (state,action) => {
                const {q_id} = action.payload;
                const newState = produce(state,(draftState) => {
                    let response = draftState.question[q_id].option_list;
                    response = [...response,{value:response.length+1+"번째 선택요소",ordering:response.length,data:"??"}]
                    draftState.question[q_id].option_list = response;
                })
                state.question = newState.question;
            },            
            UPDATE_MULTIPLE_UPDATE_RESPONSE : (state,action) => {
                const {q_id,r_id,value} = action.payload;
                const newState = produce(state,(draftState) => {
                    let response = draftState.question[q_id].option_list;
                    response[r_id].value = value;
                    draftState.question[q_id].option_list = response;
                })
                state.question = newState.question;
            },
            UPDATE_MULTIPLE_DELETE_RESPONSE : (state,action) => {
                const {q_id,r_id} = action.payload;
                console.log(q_id,r_id);
                const newState = produce(state,(draftState) => {
                    let response = draftState.question[q_id].option_list;
                    response.splice(r_id,1);
                    response.map((r,id)=>response[id].ordering = id);
                    draftState.question[q_id].option_list = response;
                })
                state.question = newState.question;
            },
        CREATE_TRUEFALSE : (state,action) => {
            const {id} = action.payload;
            
            const newQuestion = [...state.question];
            newQuestion.splice(id+1,0,{   
                title:newQuestion.length+1+"번째 질문",
                required:true,
                ordering:id+1,
                type:TRUEFALSE,
                option_number:0,
                option_list:[]
            })
            newQuestion.map((r,i)=>{newQuestion[i].ordering=i});
            state.question = newQuestion;
        }, 

        CREATE_STAR : (state,action) => {
            const {id} = action.payload;
            
            const newQuestion = [...state.question];
            newQuestion.splice(id+1,0,{   
                title:newQuestion.length+1+"번째 질문",
                required:true,
                ordering:id+1,
                type:STAR,
                option_number:0,
                option_list:[]
            })
            newQuestion.map((r,i)=>{newQuestion[i].ordering=i});
            state.question = newQuestion;
        }, 

        UPDATE_TITLE: (state,action) => {
            const {id,value} = action.payload;
            const newState = produce(state,(draftState) => {
                draftState.question[id].title=value;
            })
            console.log(newState.question[id].title);
            //?오ㅐ state = newState는 안되냐;
            state.question = newState.question;
        },    

        UPDATE_ORDER:(state,action) =>{
            const {prev,next} = action.payload;
            console.log(prev,next);
            const newState = produce(state,(draftState) => {
                if(prev>next){
                    console.log("small");
                    const tmp = draftState.question[prev];
                    draftState.question.splice(next,0,tmp);
                    draftState.question.splice(prev+1,1);
                }
                else{
                    console.log("large");
                    const tmp = draftState.question[prev];
                    draftState.question.splice(next,0,tmp);
                    draftState.question.splice(prev,1);
                }
                draftState.question.map((r,i)=>{draftState.question[i].ordering=i});
            })
            state.question = newState.question;
        },

        DELETE : (state,action) => {
            const {id} = action.payload;
            
            const newQuestion = [...state.question];
            newQuestion.splice(id,1,)
            newQuestion.map((r,i)=>{newQuestion[i].ordering=i});
            state.question = newQuestion;

        },
    }
    }

)



export const {
    CREATE_OBJECTIVE,
    CREATE_MULTIPLE,
    UPDATE_MULTIPLE_CANMULTI,
    UPDATE_MULTIPLE_CREATE_RESPONSE,
    UPDATE_MULTIPLE_UPDATE_RESPONSE,
    UPDATE_MULTIPLE_DELETE_RESPONSE,
    CREATE_TRUEFALSE,
    CREATE_STAR,
    UPDATE_TITLE,
    UPDATE_ORDER,
    DELETE,} = surveyMakeSlice.actions;