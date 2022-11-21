import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import { SurveyListSlice } from "./Slices/SuveyListSlice";
import { surveyMakeSlice } from "./Slices/SurveyMakeSlice";
import { SurveyOptionSlice } from "./Slices/SurveyOptionSlice"

  const rootReducer=combineReducers({
    surveyList:SurveyListSlice.reducer,
    surveyMake:surveyMakeSlice.reducer,
    surveyOption:SurveyOptionSlice.reducer,
  })

export const store = configureStore({reducer: rootReducer});

