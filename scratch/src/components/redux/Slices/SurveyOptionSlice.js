import { createSlice} from '@reduxjs/toolkit'

export const SurveyOptionSlice=createSlice(
    {
        name:'SurveyOption',
        initialState:{
            title:'이름 없는 설문',
            description:'이름 없는 설문입니다',
            startDate:new Date(),
            endDate:new Date(),
            isGenderQuestion:false,
            isAgeQuestion:false,
            publicPrivate:'public',
            peopleLimit:null,
            themeColor:"lightgray",
            step:0,
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
                state.publicPrivate=action.payload;
            },
            SET_PEOPLE_LIMIT:(state,action)=>{
                state.peopleLimit=action.payload;
            },
            SET_IS_GENDER_QUESTION:(state)=>{
                state.isGenderQuestion=!state.isGenderQuestion;
            },
            SET_IS_AGE_QUESTION:(state)=>{
                state.isAgeQuestion=!state.isAgeQuestion;
            },

            //테마 바뀌려나?
            SET_THEME_TEST:(state,action)=>{
                if(state.themeColor===action.payload){
                    state.themeColor="lightgray"
                }else{
                    state.themeColor=action.payload;                    
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