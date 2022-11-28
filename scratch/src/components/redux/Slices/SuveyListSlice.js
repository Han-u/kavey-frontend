import { createSlice} from '@reduxjs/toolkit'

export const SurveyListSlice=createSlice({
    name:'SurveyList',
    initialState:{        
        value:[
            /*
            {
                id:1, status: 'making', title: "설문제목1",
                startDt: '2022-10-02', endDt:'2022-11-03',
                isOpen: true, subject: 0, participation: 0
            },
            {
                id:2, status: 'progress', title: "설문제목2",
                startDt: '2022-10-02', endDt:'2022-11-03',
                isOpen: false, subject: 31, participation: 0
            },
            {
                id:3, status: 'done', title: "설문제목3",
                startDt: '2022-10-02', endDt:'2022-11-03',
                isOpen: false, subject: 55, participation: 15
            },
            {
                id:4, status: 'done', title: "설문제목4",
                startDt: '2022-10-02', endDt:'2022-11-03',
                isOpen: true, subject: 55, participation: 0,
                earlyTermination: '2022-11-01'
            },
            {
                id:5, status: 'done', title: "설문제목5",
                startDt: '2022-10-02', endDt:'2022-11-03',
                isOpen: false, subject: 31, participation: 3
            },
            {
                id:6, status: 'done', title: "설문제목6",
                startDt: '2022-10-02', endDt:'2022-11-03',
                isOpen: true, subject: 31, participation: 4
            },
            {
                id:7, status: 'done', title: "설문제목7",
                startDt: '2022-10-02', endDt:'2022-11-03',
                isOpen: true, subject: 31, participation: 2
            }
            */
        ]},
    reducers:{
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

export const { deleteSurvey ,copySurvey} = SurveyListSlice.actions;

