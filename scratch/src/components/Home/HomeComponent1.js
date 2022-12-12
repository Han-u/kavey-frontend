import {React,useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Typography,Link} from "@mui/material";
import Swal from 'sweetalert2'




function HomeComponent1(){

    useEffect(() =>{
        var divObj = document.getElementById("mainDiv");
        var setHeight= document.body.offsetHeight-627;
        divObj.style.height=`${setHeight}px`;
        window.addEventListener('resize', () =>{
            setHeight= document.body.offsetHeight-627;
            divObj.style.height=`${setHeight}px`;
        })        
    })

    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = 'http://localhost:3000/login';
    const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const navigate=useNavigate();

    const handleClick=()=>{
        const token=window.localStorage.getItem('token');
        if(token===null){
            Swal.fire({
                toast: true,
                icon: 'info',
                title: '로그인을 진행할게요!',
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
              window.location.href=KAKAO_AUTH_URI;
        }else{
            navigate('/surveyoptionsetting')
        }
}

    return(
        <div>
        <div style={{backgroundColor:'white',margin:'auto'}}>
            <div style={{height:'100px',backgroundColor:'#FFD701',width:'100%'}}>
                    <div style={{display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: '100%',
                                marginLeft:'3vh',
                                marginRight:'3vh'}}>
                        <Link href="/" underline="none"><Typography variant="h4" fontFamily='Inter'
                        style={{color:"white"}}>Kavey</Typography></Link>
                        <Button href={KAKAO_AUTH_URI}><img src="/img/kakao_login.png"/></Button>
                    </div>
            </div>
            <div id="mainDiv" style={{backgroundColor: "#FFD701"}}>
            <hr style={{margin: '1px', color: 'white'}}/>
                <div style={{height:'100%',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'}}>
                    <Typography variant="h3" fontFamily="NanumSquareB">가장 귀여운 설문 == 좋설사</Typography>
                    <Typography variant="h6" fontFamily="NanumSquareL">세상에서 가장 귀엽고 사용자 친화적인 설문을 만나보세요!</Typography>
                    <Button style={{marginTop:'60px', borderRadius: '28px', fontFamily: "NanumSquareL", backgroundColor: "#202225"}}
                            variant="contained"
                            onClick={handleClick}
                    >설문 제작하기</Button>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent:"center", background: 'linear-gradient(#FFD701 62.3%, #FFFFFF 27.7%)'}}>
                <img id="kakaoImage" src="images/mainLogoFriends_1920.png" style={{maxWidth: '100%', backgroundColor: '#FFD701'}}/>
            </div>
            <div style={{backgroundColor:'white', display: 'flex', justifyContent: 'center'}}>
                <img src="images/main.png" height= '800px' style={{marginBottom: '150px'}}/>
            </div>
            <div style={{backgroundColor:'white',height:'100px'}}>
                <footer>
                    <div style={{alignItems:'center',justifyContent: 'center',display: 'flex',flexDirection: 'row'}}>
                    <h6 style={{color:'#828282'}}>©매천동의 전민종. All Rights Reserved.</h6>
                    </div>
                </footer>
            </div>
        </div>
        </div>
    )
}

export default HomeComponent1;