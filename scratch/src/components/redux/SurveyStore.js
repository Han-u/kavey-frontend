import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import { SurveyListSlice } from './Slices/SuveyListSlice';

  const rootReducer=combineReducers({
    surveyList:SurveyListSlice.reducer,
    // surveyMake:SurveyMakeSlice.reducer,
    // count:countSlice.reducer,
  })

export const store = configureStore({reducer: rootReducer});

