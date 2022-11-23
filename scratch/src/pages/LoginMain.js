import KakaoLogin from "../components/LoginMain/KakaoLogin";


function LoginMain() {

    return (
        <>
            <div>
                <p>Kavey Login</p>
            </div>
            <div>
                <p>
                    *설문 웹사이트 Kavey 를 이용하려면 <br /> 로그인이
                    필요합니다.
                </p>
            </div>
            <div>
                {/* 카카오 로그인 */}
                <KakaoLogin />
            </div>
            <div>
                <p>사용자 정보는 등록된 카카오 로그인 정보를 통해 제공받습니다.</p>
            </div>

        </>
    );
};

export default LoginMain;