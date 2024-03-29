import React, { useState, useEffect } from 'react';

import {useDispatch,useSelector} from 'react-redux';
import {  ANSWER_SUBJECTIVE, CHECK_ANSWER } from '../../redux/Slices/SurveyAnswerSlice';
import { RESPONSE, RESULT } from '../QuestionResultList';

import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import { Typography } from '@mui/material';




const styles = {
  container: {
      display: "flex",
      justifyContent: "center",
      backgroundColor:'white',
      border: "1px solid",
      borderRadius:8,
      flexDirection: "column",
      width:'100%',
      padding:'30px',
      marginBottom: '30px',
  },
}
let FLAG = -1;
function RatingResult({purpose,q_id,id,title,required}) {
    const data = useSelector((state)=>state.surveyPersonal.result);
    const filter_data = data.filter((d)=>d.questionId == q_id)

    const dispatch = useDispatch();

    const [clicked, setClicked] = useState([false, false, false, false, false]);

    const StarClick = index => {
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
            clickStates[i] = i <= index;
        }
        setClicked(clickStates);
    };

    if(filter_data!=undefined && purpose==RESULT && FLAG ==-1){
      StarClick(filter_data[0].answer-1);
      FLAG=1;
    }

    useEffect(() => {
      let score = clicked.filter(Boolean).length;
      if(score!=0){
        sendReview();
      }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clicked]);

    const sendReview = () => {
        let score = clicked.filter(Boolean).length;
        if(purpose == RESPONSE & score!=undefined){
          dispatch(ANSWER_SUBJECTIVE({ordering:id,value:score}));
          dispatch(CHECK_ANSWER());
        }
    };
    return (
      <div>
      <div style={{height:"220px"}}>
          <div style={{ display:'flex',flexDirection:'row' ,justifyContent : "center",paddingTop:"30px" }}>
              {required === true && <h2 style={{color: "red"}} >*</h2> }
              <Typography fontFamily="NanumSquareB"
              style={{marginBottom:'20px',fontSize:"26px"}}>{title}</Typography>
          </div>
            {/* <div style={{display:'flex',flexDirection:'column',alignItems: 'center',justifyContent : "center"}}> */}
              {purpose!=RESULT? 
              <div style={{display:'flex',flexDirection:'column',alignItems: 'center',justifyContent : "center"}}>
                <Stars align="center">
                {ARRAY.map(el => {
                      return (
                        <FaStar
                            key={el}
                            size="50"
                            onClick={() => StarClick(el)}
                            className={clicked[el] && 'yellowStar'}
                        />
                    );
                    }
                )}
              </Stars>
              </div>
              : 
              <div style={{display:'flex',flexDirection:'column',alignItems: 'center',justifyContent : "center"}}>
                <StarsResult align="center">
                {ARRAY.map(el => {
                      return (
                        <FaStar
                            key={el}
                            size="50"
                            className={clicked[el] && 'yellowStar'}
                        />
                    );
                    }
                )}
              </StarsResult>
              </div>
                
              }
            {/* </div> */}
        </div>
          <div style={{borderBottom:"1px solid #000000",width:'700px'}}></div>
        </div>
    );
}

export default RatingResult;

const ARRAY = [0, 1, 2, 3, 4];

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const RatingText = styled.div`
  color: #787878;
  font-size: 15px;
  font-weight: 400;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 30px;
  padding-bottom: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;


const StarsResult = styled.div`
  display: flex;
  padding-top: 30px;
  padding-bottom: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }
  .yellowStar {
    color: #fcc419;
  }
`;





