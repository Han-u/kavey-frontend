import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import { SurveyListSlice } from "./Slices/SuveyListSlice";
import { surveyMakeSlice } from "./Slices/SurveyMakeSlice";
import { SurveyAnswerSlice } from './Slices/SurveyAnswerSlice';
import { SurveyOptionSlice } from "./Slices/SurveyOptionSlice"
import { SurveyPersonalResultSlice } from './Slices/SurveyPersonalResultSlice';

  const rootReducer=combineReducers({
    surveyList:SurveyListSlice.reducer,
    surveyMake:surveyMakeSlice.reducer,
    surveyAnswer:SurveyAnswerSlice.reducer,
    surveyOption:SurveyOptionSlice.reducer,
    surveyPersonal:SurveyPersonalResultSlice.reducer,
  })

export const store = configureStore({reducer: rootReducer});

