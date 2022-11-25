import { createSlice} from '@reduxjs/toolkit'

export const SurveyOptionSlice=createSlice(
    {
        name:'SurveyOption',
        initialState:{
            userId: 1,
            title:'이름 없는 설문',
            description:'이름 없는 설문입니다',
            askAge:false,
            askGender:false,
            isPrivate:'FALSE', 
            limitPerson:null,
            startDate:new Date(),
            endDate:new Date(),
            theme:"lightgray",
            questionNumber:0,
            questionList:[],
            step:0, //프론트용
        },
        reducers:{
            SET_TITLE:(state,action)=>{
                state.title=action.payload;
            },
            SET_DESCRIPTION:(state,action)=>{
                state.description=action.payload;
            },
            SET_STARTDATE:(state,action)=>{
                state.startDate=action.payload;       
            },
            SET_ENDDATE:(state,action)=>{
                state.endDate=action.payload;
            },
            SET_PUBLIC_PRIVATE:(state,action)=>{
                state.isPrivate=action.payload;
            },
            SET_PEOPLE_LIMIT:(state,action)=>{
                state.limitPerson=action.payload;
            },
            SET_IS_GENDER_QUESTION:(state)=>{
                state.askGender=!state.askGender;
            },
            SET_IS_AGE_QUESTION:(state)=>{
                state.askAge=!state.askAge;
            },
            //테마 바뀌려나?

            SET_THEME_TEST:(state,action)=>{
                if(state.theme===action.payload){
                    state.theme="lightgray"
                }else{
                    state.theme=action.payload;                    
                }
                
            },

            NEXT_LEVEL:(state,action)=>{
                state.step=state.step+action.payload;
            },


        }
    }
);


export const {
    SET_TITLE,
    SET_DESCRIPTION,
    SET_STARTDATE,
    SET_ENDDATE,
    SET_PUBLIC_PRIVATE,
    SET_PEOPLE_LIMIT,
    SET_IS_GENDER_QUESTION,
    SET_IS_AGE_QUESTION,
    SET_THEME_TEST,
    NEXT_LEVEL,

} = SurveyOptionSlice.actions;

