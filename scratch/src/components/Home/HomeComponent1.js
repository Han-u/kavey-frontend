import React from 'react';
import {Button} from 'reactstrap';
import { faShareNodes,faFileLines,faFileExport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeComponent1(){
    return(
        <div>
        <div style={{backgroundColor:'white',margin:'auto'}}>
            {/* 대충 컴포넌트라는 뜻 진짜 대충이네용 */}
            <div style={{height:'80px',backgroundColor:'white',position:'fixed',width:'100%',}}>
                <header>
                    <div style={{display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height:'90px',
                                marginLeft:'5vh',
                                marginRight:'5vh'}}>
                        <h3 style={{color:'yellow',fontWeight:'bold'}}>Kavey</h3>
                        <Button color="warning"><h5>Log in</h5></Button>
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
                    <h1 style={{fontWeight:'bold'}}>가장 귀여운 설문 = 좋설사</h1>
                    <h5 style={{marginTop:'20px',color:'#828282'}}>세상에서 가장 귀엽고 사용자 친화적인 설문을 만나보세요!</h5>
                    <Button color="warning" style={{marginTop:'70px'}}>Create Survey!</Button>
                </div>
                <div style={{height:'100%',
                            width:'40%',
                            alignItems:'center',
                            display: 'flex',
                            backgroundColor:'#FFC31E'}}>
                    <img style={{width:'100%'}}
                    src="data:image/png;base64,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"/>
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
                    <h6 style={{color:'#828282'}}>©가혁진. All Rights Reserved.</h6>
                    </div>
                </footer>
            </div>
        </div>
        </div>
    )
}

export default HomeComponent1;