import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import { SurveyListSlice } from './slices/SuveyListSlice';

  const rootReducer=combineReducers({
    surveyList:SurveyListSlice.reducer,
    // surveyMake:SurveyMakeSlice.reducer,
    // count:countSlice.reducer,
  })

export const store = configureStore({reducer: rootReducer});

