import { createSlice} from '@reduxjs/toolkit'

export const SurveyOptionSlice=createSlice(
    {
        name:'SurveyOption',
        initialState:{
            userId:undefined,
            //JSON.parse(window.localStorage.getItem('profile')).data.id,
            title:'이름 없는 설문',
            description:'이름 없는 설문입니다',
            askAge:false,
            askGender:false,
            isPrivate:'FALSE', 
            limitPerson:null,
            startDate:new Date(),
            endDate:new Date(),
            theme:null,
            questionNumber:0,
            questionList:[],
            step:0, //프론트용
            themeForFront:null,//프론트용22
        },
        reducers:{
            SET_USER:(state,action)=>{
                state.userId=action.payload;
            },
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
                    state.theme=null
                    state.themeForFront=null
                }else{
                    state.theme=action.payload
                    switch(action.payload){
                        case "chunsik":
                            state.themeForFront="url('/images/theme_chunsik.png')";
                            break;
                        case "ryan":
                            state.themeForFront="url('/images/theme_ryan.png')";
                            break;
                        case "jordy":
                            state.themeForFront="url('/images/theme_jordy.png')";
                            break
                        case "apeach":
                            state.themeForFront="url('/images/theme_apeach.png')";
                            break;
                    }
                }
                
                
                
            },

            NEXT_LEVEL:(state,action)=>{
                state.step=state.step+action.payload;
            },


        }
    }
);


export const {
    SET_USER,
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

