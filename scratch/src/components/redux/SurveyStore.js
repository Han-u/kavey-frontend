import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import { SurveyMakeSlice } from './slices/SurveyMakeSlice'
import { SurveyListSlice } from './slices/SurveyListSlice';


  const rootReducer=combineReducers({
    surveyList:SurveyListSlice.reducer,
    surveyMake:SurveyMakeSlice.reducer,
    // count:countSlice.reducer,
  })




export const store = configureStore({reducer: rootReducer});

