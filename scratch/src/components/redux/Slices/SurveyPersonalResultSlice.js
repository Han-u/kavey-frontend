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
                result.gender!=""? state.gender = result.gender: state.age = undefined;
                result.age!=""? state.age = result.age:  state.age = undefined;
                

                state.result = result.responseUserAnswerDtos;
            },
        }
    }

)



export const 
{
    GET_RESULT
} = SurveyPersonalResultSlice.actions;