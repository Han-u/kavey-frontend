import {React,useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Typography} from "@mui/material";
import Swal from 'sweetalert2'




function HomeComponent1(){

    useEffect(() =>{
        var divObj = document.getElementById("mainDiv");
        var setHeight= document.body.offsetHeight-587;
        divObj.style.height=`${setHeight}px`;
        window.addEventListener('resize', () =>{
            setHeight= document.body.offsetHeight-587;
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
            <div style={{height:'60px',backgroundColor:'#FFD701',width:'100%'}}>
                    <div style={{display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: '100%',
                                marginLeft:'3vh',
                                marginRight:'3vh'}}>
                        {/* <h3 style={{color:'yellow',fontWeight:'bold'}}>Kavey</h3> */}
                        <Typography variant="h4" fontFamily="HallymGothic-Regular" style={{color:"#1976D2"}}>Kavey</Typography>
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
                    {/* <h1 style={{fontWeight:'bold'}}>가장 귀여운 설문 = 좋설사</h1>
                    <h5 style={{marginTop:'20px',color:'#828282'}}>세상에서 가장 귀엽고 사용자 친화적인 설문을 만나보세요!</h5> */}
                    <Typography variant="h3" fontFamily="NanumSquareB">가장 귀여운 설문 == 좋설사</Typography>
                    <Typography variant="h6" fontFamily="NanumSquareL">세상에서 가장 귀엽고 사용자 친화적인 설문을 만나보세요!</Typography>
                    <Button style={{marginTop:'60px', borderRadius: '28px', fontFamily: "NanumSquareL", backgroundColor: "#202225"}}
                            variant="contained"
                            onClick={handleClick}
                    >설문 제작하기</Button>
                </div>
            </div>
            <div>
                <img id="kakaoImage" src="images/mainLogoFriends_1920.png" style={{maxWidth: '100%', backgroundColor: '#FFD701'}}/>
            </div>
            <div style={{backgroundColor:'white', display: 'flex', justifyContent: 'center'}}>
                <img src="images/main.png" height= '800px' style={{marginBottom: '150px'}}/>
            </div>
            {/*<div style={{backgroundColor:'white',margin:'auto',height:'100vh',paddingTop:'60px',display: 'flex', flexDirection: 'row'}}>*/}
            {/*    <div style={{height:'100%',*/}
            {/*                width:'60%' ,*/}
            {/*                alignItems: 'center',*/}
            {/*                display: 'flex',*/}
            {/*                flexDirection: 'column',*/}
            {/*                justifyContent: 'center'}}>*/}
            {/*        /!* <h1 style={{fontWeight:'bold'}}>가장 귀여운 설문 = 좋설사</h1>*/}
            {/*        <h5 style={{marginTop:'20px',color:'#828282'}}>세상에서 가장 귀엽고 사용자 친화적인 설문을 만나보세요!</h5> *!/*/}
            {/*        <Typography variant="h3" fontFamily="HallymGothic-Regular">가장 귀여운 설문 == 좋설사</Typography>*/}
            {/*        <Typography variant="h6" fontFamily="HallymGothic-Regular">세상에서 가장 귀엽고 사용자 친화적인 설문을 만나보세요!</Typography>*/}
            {/*        <Button style={{marginTop:'70px'}}*/}
            {/*        variant="contained"*/}
            {/*        onClick={handleClick}*/}
            {/*        >설문 제작하기!</Button>*/}
            {/*    </div>*/}
            {/*    <div style={{height:'100%',*/}
            {/*                width:'40%',*/}
            {/*                alignItems:'center',*/}
            {/*                display: 'flex',*/}
            {/*                backgroundColor:'#FFC31E'}}>*/}
            {/*        <img style={{width:'100%'}}*/}
            {/*        src="/images/mainimage.png"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div style={{backgroundColor:'white',margin:'auto',height:'40vh',display:'flex',flexDirection: 'row',width:'70%'}}>*/}
            {/*    <div style={{height:'100%',*/}
            {/*                width:'30%',*/}
            {/*                alignItems:'center',*/}
            {/*                display: 'flex',*/}
            {/*                justifyContent: 'center',*/}
            {/*                }}>*/}
            {/*    <FontAwesomeIcon icon={faFileLines} size='8x'*/}
            {/*    color='yellow'/>*/}
            {/*    </div>*/}
            {/*    <div style={{height:'100%',*/}
            {/*                width:'70%',*/}
            {/*                alignItems:'center',*/}
            {/*                display: 'flex',*/}
            {/*                justifyContent: 'center'*/}
            {/*                }}>*/}
            {/*                    <h3 style={{fontWeight:'bold'}}>쉽고 간편한 설문 생성 및 관리</h3>                */}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div style={{backgroundColor:'white',margin:'auto',height:'40vh' ,display:'flex',flexDirection: 'row',width:'70%'}}>          */}
            {/*<div style={{height:'100%',*/}
            {/*                width:'70%',*/}
            {/*                alignItems:'center',*/}
            {/*                display: 'flex',*/}
            {/*                justifyContent: 'center'*/}
            {/*                }}>   */}
            {/*                <h3  style={{fontWeight:'bold'}}>특정 및 불특정 다수에게 설문 공유 가능</h3>              */}
            {/*    </div>*/}
            {/*    <div style={{height:'100%',*/}
            {/*                width:'30%',*/}
            {/*                alignItems:'center',*/}
            {/*                display: 'flex',*/}
            {/*                justifyContent: 'center'*/}
            {/*                }}>*/}
            {/*        <FontAwesomeIcon icon={faShareNodes} size='8x'*/}
            {/*    color='yellow'/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div style={{backgroundColor:'white',margin:'auto',height:'40vh',display:'flex',flexDirection: 'row',width:'70%'}}>*/}
            {/*<div style={{height:'100%',*/}
            {/*                width:'30%',*/}
            {/*                alignItems:'center',*/}
            {/*                display: 'flex',*/}
            {/*                justifyContent: 'center'*/}
            {/*                }}>                                */}
            {/*    <FontAwesomeIcon icon={faFileExport} size='8x'*/}
            {/*    color='yellow'/>*/}
            {/*    </div>*/}
            {/*    <div style={{height:'100%',*/}
            {/*                width:'70%',*/}
            {/*                alignItems:'center',*/}
            {/*                display: 'flex',*/}
            {/*                justifyContent: 'center'*/}
            {/*                }}>  */}
            {/*                <h3 style={{fontWeight:'bold'}}>편리하게 사용 가능한 파일로 변환</h3>                    */}
            {/*    </div>*/}
            {/*</div>*/}
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