import MultiMake from "../components/Survey/MultiMake/MultiMake";
import SurveyAgree from "../components/Survey/SurveyAgree";
import {Button, Container, Grid, IconButton, Menu, MenuItem, Paper, TextField, Typography} from "@mui/material";
import {useState} from "react";

function Survey(){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const addSurveyItem = () => {
        setAnchorEl(null);
    };


    const [inputs, setInputs] = useState({title: "행운의 설문", desc: "이 설문은 영국에서 최초로 시작되어"});
    const {title, desc} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }


    const styles = {
        container: {
            backgroundColor:'lightgray',
            textAlign:'center'
        },
        subtitle: {
            padding: 9,
        },
        paper: {
            height: "100vh"
        },
        title: {
            margin: 3,
            display: 'inline-flex',
            flexFlow: 'row wrap',
            justifyContent:'center'
        }
    }

    return (
        <Grid container rowSpacing={1} columnSpacing={{xs: 1}} sx={styles.container}>
            <Grid item xs={12}>
                <Container sx={{p:2}}>
                    <Typography variant="h4" fontFamily="HallymGothic-Regular">
                        설문 제작하기
                    </Typography>
                </Container>
            </Grid>
            <Grid item xs={6}>
                <Paper sx={styles.paper}>
                    <div style={styles.subtitle}>
                        <Typography variant="h5" fontFamily="HallymGothic-Regular">
                            결과 출력 화면
                        </Typography>
                    </div>
                    <div>
                        <p>{title}</p>
                        <p>{desc}</p>
                        <div style={{borderBlock: 'solid', borderColor:'lightgray', borderWidth: '8px', padding:10, margin:13}}>
                            성별을 선택해주세요
                            <div>
                                <Button variant="contained" sx={{backgroundColor:"dodgerblue"}}>남</Button>
                                <Button variant="contained" sx={{backgroundColor: "palevioletred"}}>여</Button>
                            </div>
                        </div>
                        <div style={{borderBlock: 'solid', borderColor:'lightgray', borderWidth: '8px', padding:10, margin:13, display: 'grid'}}>
                            나이대를 선택해 주세요
                            <div style={{display:'inline-flex', justifyContent:'center'}}>
                                <Button variant="outlined">20대 미만</Button>
                                <Button variant="outlined">20대</Button>
                                <Button variant="outlined">30대</Button>
                                <Button variant="outlined">40대</Button>
                                <Button variant="outlined">50대</Button>
                            </div>
                        </div>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper sx={styles.paper}>
                    <div style={styles.subtitle}>
                        <Typography variant="h5" fontFamily="HallymGothic-Regular">
                            설문 제작 화면
                        </Typography>
                    </div>
                    <div style={styles.title}>
                        <label style={{fontFamily: "HallymGothic-Regular"}}>설문 제목을 입력하세요</label>
                        <TextField sx={{width: "90%"}} name="title" value={title} onChange={onChange}></TextField>
                        <label style={{fontFamily: "HallymGothic-Regular"}}>설문 설명을 입력하세요</label>
                        <TextField sx={{width: "90%"}} name="desc" value={desc} onChange={onChange}></TextField>
                    </div>
                    <div>

                    </div>
                    <div>
                        <Button
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            variant="outlined"
                        >
                            질문 생성
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={addSurveyItem}>객관식</MenuItem>
                            <MenuItem onClick={addSurveyItem}>주관식</MenuItem>
                            <MenuItem onClick={addSurveyItem}>찬반</MenuItem>
                            <MenuItem onClick={addSurveyItem}>평점-별점</MenuItem>
                            <MenuItem onClick={addSurveyItem}>평점-숫자</MenuItem>
                        </Menu>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Survey;