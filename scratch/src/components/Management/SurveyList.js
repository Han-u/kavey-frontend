import {Box, Button, Chip, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import '../../Management.css'
import { useDispatch } from 'react-redux'
import {deleteSurvey} from "../redux/Slices/SuveyListSlice"
import SettingsIcon from '@mui/icons-material/Settings';
import DescriptionIcon from '@mui/icons-material/Description';
import {IoIosLock} from "react-icons/io";
import axios from "axios";
function SurveyList(props) {
    const surveyId = props.data.surveyId;
    const resultURL = "/result/"+surveyId;
    const participantURL = "/participant/"+surveyId;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEalryClose = () => {
        setAnchorEl(null);

        const res = axios.post("api/survey/"+surveyId+"/early-closing");
        res.then(
          (res) => console.log(surveyId+"설문조기 종료  완료")
        );
        window.location.reload();
    };

    const handleDelete= (e) =>{
        const token = window.localStorage.getItem('token');
        const res = axios.delete("api/survey/"+surveyId, 
        {headers: {
            Authorization: token
        }});
        res.then(
          (res) => console.log(surveyId+"설문삭제 완료")
        );

        window.location.reload();
    }

    const handleCopy= (e) =>{
        // dispatch(copySurvey(e));      
        setAnchorEl(null);
    }

    const handleChange= (e) =>{
        console.log(e);
    }

    const status = {
        MAKING: '제작중',
        PROGRESS: '진행중',
        DONE: '설문완료'
    }
    

      

    return (
        <div>
            <div className="fold-right">
                <div style={{padding: 10, display: 'flex', flexDirection: 'column', position: "absolute", zIndex: '1', top: '-40px'}}>
                    <div>
                        <Chip label={status[props.data.status]}
                              variant={props.data.status === 'MAKING'? "outlined" : 'filled'}
                              size="small"
                              color={props.data.status === 'MAKING'? "primary" : props.data.status==='DONE'? "default": "warning"}
                              sx={{float: 'left'}}/>
                        {props.data.private ? <IoIosLock style={{marginLeft:"5px"}}/> : null}
                    </div>
                    <Typography variant="h6" style={{marginTop: '2px'}}>{props.data.title}</Typography>
                    <div style={{fontSize: 11}}>
                        {new Date(props.data.surveyStartDate).toLocaleDateString()} ~ {new Date(props.data.surveyEndDate).toLocaleDateString()}
                    </div>
                    {props.data.earlyTermination ?
                        <div style={{fontSize: 11}}>
                            (조기종료 {props.data.earlyTermination})
                        </div> : null}
                    <hr style={{margin: "2px"}}/>
                    {props.data.status == 'MAKING' ?
                         <div style={{fontSize: 13}}>
                         참여인원 <>{props.data.limitPerson==0?"∞":props.data.limitPerson}</>
                        </div> :
                        <div style={{fontSize: 13}}>
                            참여인원
                            {!props.data.private ?
                                <> {props.data.limitPerson==0?"∞":props.data.limitPerson}</>
                                :<> {props.data.participants} / {props.data.limitPerson==0?"∞":props.data.limitPerson}</>}
                            
                        </div>
                    }
                </div>
                <div style={{position: 'absolute', bottom: '0', right: 0}}>
                    {props.data.status === 'DONE'?
                        <><Button onClick={()=>navigate(resultURL)} style={{backgroundColor: "rgba(255, 215, 1, 0.3)", border: '1px solid #FFD701', color: "#202225", width: '110px', height: '30px', fontSize: '13px'}}>
                            결과 보기
                        </Button>
                        {<IconButton aria-label="fingerprint" color="primary">
                            <DescriptionIcon />
                        </IconButton>}</>
                        :null
                    }

                    <IconButton
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <SettingsIcon/>
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {/*<MenuItem onClick={handleEalryClose} >설문 확인</MenuItem>*/}
                        {props.data.status != 'PROGRESS' ? <MenuItem onClick={()=>handleDelete(props.data.id)}>설문 삭제</MenuItem>:null}
                        {/*props.data.status=='MAKING' ? <MenuItem onClick={handleClose}>설문 수정</MenuItem>:null*/}
                        {/*<MenuItem onClick={()=>handleCopy(props.data.id)} >설문 복제</MenuItem>*/}
                        {props.data.status == 'PROGRESS' ?
                            <>
                                {/*<MenuItem onClick={handleClose}>설문 발송</MenuItem>*/}
                                <MenuItem component={Link} to={participantURL}>설문 참여자 관리</MenuItem>
                                <MenuItem onClick={handleEalryClose}>설문 조기 마감</MenuItem>
                            </> : null}

                        {props.data.status == 'DONE' ? <MenuItem component={Link} to={resultURL} onClick={()=>handleChange(props.data.id)} >결과 보기</MenuItem> : null}
                        {/*props.data.status == 'DONE' ? <MenuItem component={Link} to="/report/">리포트 작성</MenuItem> : null*/}
                        

                    </Menu>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default SurveyList;