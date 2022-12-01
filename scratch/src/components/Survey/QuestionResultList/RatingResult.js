import React, { useState, useEffect } from 'react';

import {useDispatch} from 'react-redux';
import { ANSWER } from '../../redux/Slices/SurveyAnswerSlice';

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

function RatingResult({purpose,id,title,required}) {
    const dispatch = useDispatch();

    const [clicked, setClicked] = useState([false, false, false, false, false]);

    const StarClick = index => {
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
            clickStates[i] = i <= index;
        }
        setClicked(clickStates);
    };

    useEffect(() => {
        sendReview();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clicked]);

    const sendReview = () => {
        let score = clicked.filter(Boolean).length;
        console.log({score});
        dispatch({type:ANSWER,id:id,value:score});
    };

    return (
        <div style={styles.container}>
            <div style={{ display:'flex',flexDirection:'row' ,justifyContent : "center" }}>
              {required === true && <h1 style={{color: "red"}} >*</h1> }
              <Typography variant="h4" fontFamily="HallymGothic-Regular">{title}</Typography>
            </div>
            <div align="center">
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
                  })}
              </Stars>
              <RatingText>별점 누를 때 텍스트 변경</RatingText>
            </div>
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
  margin-left:140px;

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