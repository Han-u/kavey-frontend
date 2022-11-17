import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';


const styles = {
  container: {
      border:3,
      borderStyle: "solid",
      padding: 15,
  },
}

function RatingResult({id,title}) {
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
    };

    return (
        <Wrap style={styles.container}>
            <h1>{title}</h1>
            <Stars>
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
        </Wrap>
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
  padding-top: 5px;

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