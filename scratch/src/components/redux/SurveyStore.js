import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import { SurveyListSlice } from "./Slices/SuveyListSlice";
import { surveyMakeSlice } from "./Slices/SurveyMakeSlice";

  const rootReducer=combineReducers({
    surveyList:SurveyListSlice.reducer,
    surveyMake:surveyMakeSlice.reducer,
    // count:countSlice.reducer,
  })

export const store = configureStore({reducer: rootReducer});

