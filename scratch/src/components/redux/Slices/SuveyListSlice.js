import { createSlice} from '@reduxjs/toolkit'

export const SurveyListSlice=createSlice({
    name:'SurveyList',
    initialState:{        
        value:
        /*
            [
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
        ]
            */
            [
                {
                    "title": "세빈테스트",
                    "limitPerson": 20,
                    "surveyStartDate": "2022-12-01T10:30:54.473",
                    "surveyEndDate": "2022-12-31T10:30:54.473",
                    "earlyEndDate": null,
                    "status": "PROGRESS",
                    "private": false
                },
                {
                    "title": "세빈테스트",
                    "limitPerson": 16,
                    "surveyStartDate": "2022-12-02T07:38:31.06",
                    "surveyEndDate": "2023-01-01T07:38:31.06",
                    "earlyEndDate": null,
                    "status": "PROGRESS",
                    "private": true
                },
                {
                    "title": "이름 없는 설문",
                    "limitPerson": 0,
                    "surveyStartDate": "2022-12-02T08:51:21.219",
                    "surveyEndDate": "2022-12-02T08:51:21.219",
                    "earlyEndDate": "2022-12-02T17:51:40.199472",
                    "status": "DONE",
                    "private": false
                },
                {
                    "title": "이름 없는 설문",
                    "limitPerson": 1,
                    "surveyStartDate": "2022-12-02T08:59:23.594",
                    "surveyEndDate": "2023-01-01T08:59:23.594",
                    "earlyEndDate": null,
                    "status": "PROGRESS",
                    "private": false
                },
                {
                    "title": "이름 없는 설문",
                    "limitPerson": 1,
                    "surveyStartDate": "2022-12-02T08:59:23.594",
                    "surveyEndDate": "2023-01-01T08:59:23.594",
                    "earlyEndDate": null,
                    "status": "PROGRESS",
                    "private": false
                },
                {
                    "title": "stream test",
                    "limitPerson": 2000,
                    "surveyStartDate": "2022-12-04T07:56:35.895",
                    "surveyEndDate": "2023-01-03T07:56:35.895",
                    "earlyEndDate": null,
                    "status": "PROGRESS",
                    "private": false
                },
                {
                    "title": "이름 없는 설문123",
                    "limitPerson": 222,
                    "surveyStartDate": "2022-12-04T08:14:55.744",
                    "surveyEndDate": "2023-01-03T08:14:55.744",
                    "earlyEndDate": null,
                    "status": "PROGRESS",
                    "private": false
                },
                {
                    "title": "postgres sink connector 확인용!",
                    "limitPerson": 0,
                    "surveyStartDate": "2022-12-04T09:17:03.12",
                    "surveyEndDate": "2023-01-03T09:17:03.12",
                    "earlyEndDate": null,
                    "status": "PROGRESS",
                    "private": false
                },
                {
                    "title": "어떤 동물이 좋아?",
                    "limitPerson": 100,
                    "surveyStartDate": "2021-01-01T00:00:00",
                    "surveyEndDate": "9999-01-01T00:00:00",
                    "earlyEndDate": null,
                    "status": "PROGRESS",
                    "private": false
                },
                {
                    "title": "이름 없는 설문",
                    "limitPerson": 0,
                    "surveyStartDate": "2022-12-09T04:21:43.889",
                    "surveyEndDate": "2022-12-09T04:21:43.889",
                    "earlyEndDate": "2022-12-09T13:25:20.327254",
                    "status": "DONE",
                    "private": false
                },
                {
                    "title": "이름 없는 설문",
                    "limitPerson": 0,
                    "surveyStartDate": "2022-12-10T10:09:50.608",
                    "surveyEndDate": "2022-12-10T10:09:50.608",
                    "earlyEndDate": "2022-12-10T19:10:00.257417",
                    "status": "DONE",
                    "private": false
                },
                {
                    "title": "이름 없는 설문",
                    "limitPerson": 0,
                    "surveyStartDate": "2022-12-10T10:09:50.608",
                    "surveyEndDate": "2022-12-10T10:09:50.608",
                    "earlyEndDate": "2022-12-10T19:10:20.158062",
                    "status": "DONE",
                    "private": false
                },
                {
                    "title": "어떤 동물이 좋아?",
                    "limitPerson": 100,
                    "surveyStartDate": "2000-11-01T16:23:00",
                    "surveyEndDate": "2001-12-01T16:24:00",
                    "earlyEndDate": "2022-12-10T21:05:50.541757",
                    "status": "DONE",
                    "private": false
                },
                {
                    "title": "이름 없는 설문",
                    "limitPerson": 0,
                    "surveyStartDate": "2022-12-10T12:06:35.039",
                    "surveyEndDate": "2022-12-17T12:06:35.039",
                    "earlyEndDate": null,
                    "status": "PROGRESS",
                    "private": false
                },
                {
                    "title": "이름 없는 설문",
                    "limitPerson": 0,
                    "surveyStartDate": "2022-12-10T12:06:35.039",
                    "surveyEndDate": "2022-12-17T12:06:35.039",
                    "earlyEndDate": null,
                    "status": "PROGRESS",
                    "private": false
                },
                {
                    "title": "이름 없는 설문",
                    "limitPerson": 0,
                    "surveyStartDate": "2022-12-10T12:06:35.039",
                    "surveyEndDate": "2022-12-17T12:06:35.039",
                    "earlyEndDate": null,
                    "status": "PROGRESS",
                    "private": false
                },
                {
                    "title": "이름 없는 설문",
                    "limitPerson": 0,
                    "surveyStartDate": "2022-12-10T12:27:40.207",
                    "surveyEndDate": "2022-12-10T12:27:40.207",
                    "earlyEndDate": "2022-12-10T21:42:50.522673",
                    "status": "DONE",
                    "private": false
                },
                {
                    "title": "이름 없는 설문",
                    "limitPerson": 0,
                    "surveyStartDate": "2022-12-10T12:52:00.272",
                    "surveyEndDate": "2022-12-10T12:52:00.272",
                    "earlyEndDate": "2022-12-10T21:56:10.827285",
                    "status": "DONE",
                    "private": false
                },
                {
                    "title": "이름 없는 설문",
                    "limitPerson": 0,
                    "surveyStartDate": "2022-12-10T16:06:41.188",
                    "surveyEndDate": "2022-12-10T16:06:41.188",
                    "earlyEndDate": "2022-12-11T01:07:10.640628",
                    "status": "DONE",
                    "private": false
                }
            ]
        },
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

