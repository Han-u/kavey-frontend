import { createSlice} from '@reduxjs/toolkit'

export const SurveyListSlice=createSlice({
    name:'SurveyList',
    initialState:{        
        value:[]
        },
    reducers:{
        setSurvey: (state,action)=>{
        //실제로는 api 통신 먼저 해야됨        
            state.value = action.payload;
        },

      deleteSurvey: (state,action)=>{
        //실제로는 api 통신 먼저 해야됨        
        const newState=state.value.filter(survey=>survey.id !==action.payload);
        // console.log(state.value);
        state.value= newState.concat();        
        },
      copySurvey:(state,action)=>{
        //실제로는 api 통신 먼저 해야됨 id값 기준으로 찾아서 복제할 필요가 있나? 인덱스 기준으로 하면 될 듯? 근데 새 id는 받아야 됨
        // state.value=state.value.concat(state.value[action.payload-1]);
        //ㄴㄴ이거 그냥 설문 값 받아서 페이지 이동시키는게 나을듯
        
        },
        }      
    }
);

export const { setSurvey,deleteSurvey ,copySurvey} = SurveyListSlice.actions;

