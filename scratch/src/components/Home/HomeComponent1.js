import React from 'react';
// import {Button} from 'reactstrap';
import { useNavigate } from 'react-router-dom'
import { faShareNodes,faFileLines,faFileExport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {Box, Button, Chip, Menu, MenuItem, Typography} from "@mui/material";




function HomeComponent1(){
    const navigate=useNavigate();

    const handleClick=()=>{
        //여기서 로그인 되어있나 검증 해주긴 해야 됨당?
        console.log("하이");
        navigate(`/surveyoptionsetting`);
    }

    return(
        <div>
        <div style={{backgroundColor:'white',margin:'auto'}}>
            <div style={{height:'80px',backgroundColor:'white',position:'fixed',width:'100%',}}>
                <header>
                    <div style={{display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height:'90px',
                                marginLeft:'5vh',
                                marginRight:'5vh'}}>
                        {/* <h3 style={{color:'yellow',fontWeight:'bold'}}>Kavey</h3> */}
                        <Typography variant="h4" fontFamily="HallymGothic-Regular" style={{color:"#1976D2"}}>Kavey</Typography>
                        <Link to="/login"><img src="/img/kakao_login.png"></img></Link>
                    </div>
                </header>
            </div>
            <div style={{backgroundColor:'white',margin:'auto',height:'100vh',paddingTop:'80px',display: 'flex', flexDirection: 'row'}}>
                <div style={{height:'100%',
                            width:'60%' ,
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'}}>
                    {/* <h1 style={{fontWeight:'bold'}}>가장 귀여운 설문 = 좋설사</h1>
                    <h5 style={{marginTop:'20px',color:'#828282'}}>세상에서 가장 귀엽고 사용자 친화적인 설문을 만나보세요!</h5> */}
                    <Typography variant="h3" fontFamily="HallymGothic-Regular">가장 귀여운 설문 == 좋설사</Typography>
                    <Typography variant="h6" fontFamily="HallymGothic-Regular">세상에서 가장 귀엽고 사용자 친화적인 설문을 만나보세요!</Typography>
                    <Button style={{marginTop:'70px'}}
                    variant="contained"
                    onClick={handleClick}
                    >설문 제작하기!</Button>
                </div>
                <div style={{height:'100%',
                            width:'40%',
                            alignItems:'center',
                            display: 'flex',
                            backgroundColor:'#FFC31E'}}>
                    <img style={{width:'100%'}}
                    src="/images/mainimage.png"/>
                </div>
            </div>
            <div style={{backgroundColor:'white',margin:'auto',height:'40vh',display:'flex',flexDirection: 'row',width:'70%'}}>
                <div style={{height:'100%',
                            width:'30%',
                            alignItems:'center',
                            display: 'flex',
                            justifyContent: 'center',
                            }}>
                <FontAwesomeIcon icon={faFileLines} size='8x'
                color='yellow'/>
                </div>
                <div style={{height:'100%',
                            width:'70%',
                            alignItems:'center',
                            display: 'flex',
                            justifyContent: 'center'
                            }}>
                                <h3 style={{fontWeight:'bold'}}>쉽고 간편한 설문 생성 및 관리</h3>                
                </div>
            </div>
            <div style={{backgroundColor:'white',margin:'auto',height:'40vh' ,display:'flex',flexDirection: 'row',width:'70%'}}>          
            <div style={{height:'100%',
                            width:'70%',
                            alignItems:'center',
                            display: 'flex',
                            justifyContent: 'center'
                            }}>   
                            <h3  style={{fontWeight:'bold'}}>특정 및 불특정 다수에게 설문 공유 가능</h3>              
                </div>
                <div style={{height:'100%',
                            width:'30%',
                            alignItems:'center',
                            display: 'flex',
                            justifyContent: 'center'
                            }}>
                    <FontAwesomeIcon icon={faShareNodes} size='8x'
                color='yellow'/>
                </div>
            </div>
            <div style={{backgroundColor:'white',margin:'auto',height:'40vh',display:'flex',flexDirection: 'row',width:'70%'}}>
            <div style={{height:'100%',
                            width:'30%',
                            alignItems:'center',
                            display: 'flex',
                            justifyContent: 'center'
                            }}>                                
                <FontAwesomeIcon icon={faFileExport} size='8x'
                color='yellow'/>
                </div>
                <div style={{height:'100%',
                            width:'70%',
                            alignItems:'center',
                            display: 'flex',
                            justifyContent: 'center'
                            }}>  
                            <h3 style={{fontWeight:'bold'}}>편리하게 사용 가능한 파일로 변환</h3>                    
                </div>
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