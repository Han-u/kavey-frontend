import { createSlice} from '@reduxjs/toolkit'
export const SurveyPersonalResultSlice=createSlice(
    {
        name:'SurveyAnswer',
        initialState:{
            gender:undefined,
            age:undefined,
            result:[]
        },
        reducers:{
            GET_RESULT:(state,action) =>{
                const result = action.payload.data;
                console.log(result); 
                state.result = result.responseUserAnswerDtos;
            },
        }
    }

)



export const 
{
    GET_RESULT
} = SurveyPersonalResultSlice.actions;