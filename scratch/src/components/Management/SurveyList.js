import {Box, Button, Chip, Menu, MenuItem, Typography} from "@mui/material";
import {useState} from "react";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux'
import {deleteSurvey} from "../redux/Slices/SuveyListSlice"
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
        <Box sx={{width: 200, height: 200, margin: 1, backgroundColor: 'lightgray'}}>
            <div style={{padding: 10}}>
                <Chip label={status[props.data.status]} variant="outlined"
                    sx={{backgroundColor: 'white', float: 'right'}}/>
                <Typography variant="h6">{props.data.title}</Typography>
                <div style={{fontSize: 13}}>
                    {props.data.startDt} ~ {props.data.endDt}
                </div>
                {props.data.status == 'making' ?
                    null :
                    <div style={{fontSize: 13}}>
                        참여인원
                        {props.data.isOpen ?
                            <> {props.data.subject}</> :
                            <> {props.data.participation} / {props.data.subject}</>}
                    </div>
                }

                {props.data.earlyTermination ?
                    <div style={{fontSize: 13}}>
                        (조기종료 {props.data.earlyTermination})
                    </div> : null}

                <div style={{float: 'right'}}>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        
                    >
                        관리
                    </Button>
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
                        {props.data.status == 'done' ? <MenuItem component={Link} to="/report">리포트 작성</MenuItem> : null}

                    </Menu>
                </div>
            </div>
        </Box>
    )
}

export default SurveyList;