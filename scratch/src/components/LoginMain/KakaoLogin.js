import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { FRONT_URL } from "../const/Const";

const KakaoLogin = () => {
  // 카카오 개발자 앱 키 선언
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = '//http://210.109.60.59:10158/login';
  // const REDIRECT_URI = 'http://localhost:3000/login';
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // 인가코드 받아오기
  const code =  new URL(window.location.href).searchParams.get("code");
  
  // 로그인 성공시 MyPage로 이동시키기위해 useNavigate 사용
  const navigate = useNavigate();
  
  const sid=window.localStorage.getItem('sid');

  useEffect(() => {
    (async () => {
      try {
        const res = await axios
          // 백엔드 주소 뒤에 인가코드 붙여서 GET 설정
          // 백엔드는 이 주소를 통해 뒤에 붙여져있는 인가코드를 전달 받게 된다.
          .get(
            `http://210.109.60.59:10156/api/oauth/token?code=${code}`
          )
          // 백엔드 쪽에서 보내준 응답 확인
          .then((response) => {
            // console.log("응답 확인", response);
            // 이때,
            // 백엔드로부터 받아온 헤더값에 저장되어있는 authorization 을 접근해 token 이라는 변수에 저장
            const token = response.headers.authorization;
            // 이 토큰은 프론트엔드, 즉 현재 내 서버에 저장
            window.localStorage.setItem("token", token);
            // console.log("token 값 확인", token);
          });
        // console.log(res);
      } catch (e) {
        // 에러 발생 시, 에러 응답 출력
        console.error(e);
      }

      // 위에서 setItem 을 사용하여 내부에 저장시킨 토크을 다시 불러온다
      // 이때, 내부 저장소에서 가져온 토큰을 다시 token 이라는 변수에 담는다
      const token = window.localStorage.getItem("token");

      try {
        console.log(token)
        const res = await axios
          // 이때, post가 아닌 get으로 접근
          // 접근 주소 = 백엔드에서 설정한 주소

          .get(
            "http://210.109.60.59:10156/api/me",
            {
              // 헤더값에는 받아온 토큰을 Authorization과 request 에 담아서 전송
              headers: {
                Authorization: token,
                request: token,
              },
            }
          )
          // 위에서 백엔드가 토큰을 잘받고 처리해서 유저정보를 다시 넘겨준다면, 그 응답을 처리
          // data 라는 변수에 유저 정보를 저장하고, setItem을 사용해 로컬에 다시 저장
          .then((data) => {
            // console.log(typeof(data))
            window.localStorage.setItem("profile", JSON.stringify(data));
            // console.log(data);
            // 만약, 유저정보를 잘 불러왔다면 navigate를 사용해 프론트엔드에서 설정한 마이페이지 경로를 설정해서 이동
            if (data) {
              Swal.fire({
                toast: true,
                icon: 'success',
                title: data.data.nickname+'님 안녕하세요!',
                animation: false,
                position: 'top',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: false,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              });
              if(sid){
                window.localStorage.removeItem('sid');
                navigate(`/answer/${sid}`);
              }else{
                navigate("../management");

              }
            }
          });
        // console.log(res);
      } catch (e) {
        // 에러 발생 시, 에러 응답 출력
        console.error(e);
      }
    })();
  }, []);

  return (
    <>
    {/* <Button href={KAKAO_AUTH_URI}><img src="/img/kakao_login.png"/></Button> */}
      {/* <a href={KAKAO_AUTH_URI} >카카오로 시작하기</a> */}
    </>
  );
};

export default KakaoLogin;