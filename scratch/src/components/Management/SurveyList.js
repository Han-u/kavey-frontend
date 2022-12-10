import {Box, Button, Chip, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {useState} from "react";
import {Link} from "react-router-dom";
import '../../Management.css'
import { useDispatch } from 'react-redux'
import {deleteSurvey} from "../redux/Slices/SuveyListSlice"
import SettingsIcon from '@mui/icons-material/Settings';
import DescriptionIcon from '@mui/icons-material/Description';
function SurveyList(props) {

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete= (e) =>{
        dispatch(deleteSurvey(e));   
        // console.log(설문배열출력);
        setAnchorEl(null);
    }

    const handleCopy= (e) =>{
        // dispatch(copySurvey(e));      
        setAnchorEl(null);
    }

    const status = {
        making: '제작중',
        progress: '진행중',
        done: '설문완료'
    }

    return (
        <div>
            <div className="fold-right">
                <div style={{padding: 10, display: 'flex', flexDirection: 'column', position: "absolute", zIndex: '1', top: '-40px'}}>
                    <div>
                        <Chip label={status[props.data.status]}
                              variant={props.data.status === 'making'? "outlined" : 'filled'}
                              size="small"
                              color={props.data.status === 'making'? "primary" : props.data.status==='done'? "default": "warning"}
                              sx={{float: 'left'}}/>
                    </div>
                    <Typography variant="h6" style={{marginTop: '2px'}}>{props.data.title}</Typography>
                    <div style={{fontSize: 11}}>
                        {props.data.startDt} ~ {props.data.endDt}
                    </div>
                    {props.data.earlyTermination ?
                        <div style={{fontSize: 11}}>
                            (조기종료 {props.data.earlyTermination})
                        </div> : null}
                    <hr style={{margin: "2px"}}/>
                    {props.data.status == 'making' ?
                        null :
                        <div style={{fontSize: 13}}>
                            참여인원
                            {props.data.isOpen ?
                                <> {props.data.subject}</> :
                                <> {props.data.participation} / {props.data.subject}</>}
                        </div>
                    }
                </div>
                <div style={{position: 'absolute', bottom: '0', right: 0}}>
                    {props.data.status === 'done'?
                        <><Button style={{backgroundColor: "rgba(255, 215, 1, 0.3)", border: '1px solid #FFD701', color: "#202225", width: '110px', height: '30px', fontSize: '13px'}}>
                            결과 보기
                        </Button>
                        <IconButton aria-label="fingerprint" color="primary">
                            <DescriptionIcon />
                        </IconButton></>:
                        null
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
                        <MenuItem onClick={()=>handleDelete(props.data.id)}>설문 삭제</MenuItem>
                        {props.data.status=='making' ? <MenuItem onClick={handleClose}>설문 수정</MenuItem>:null}
                        <MenuItem onClick={()=>handleCopy(props.data.id)} >설문 복제</MenuItem>
                        {props.data.status == 'done' ? null: <MenuItem component={Link} to="/subject">설문 참여자 관리</MenuItem>}
                        {props.data.status == 'progress' ?
                            <>
                                <MenuItem onClick={handleClose}>설문 발송</MenuItem>
                                <MenuItem onClick={handleClose}>설문 조기 마감</MenuItem>
                            </> : null}
                        {props.data.status == 'done' ? <MenuItem component={Link} to="/result">결과 보기</MenuItem> : null}
                        {props.data.status == 'done' ? <MenuItem component={Link} to="/report">리포트 작성</MenuItem> : null}

                    </Menu>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default SurveyList;