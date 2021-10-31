import React, { useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useHistory } from 'react-router-dom';
import useSound from 'use-sound';
import bubble from '../../Sounds/bubbles.mp3';
import { Boop } from '../../Animations/Boop';
import styled from 'styled-components/macro';
import { mobile } from '../../../reponsive';

export const BackButton = () => {
  const history = useHistory();

  const changeUrl = () => {
    history.push('/');
  };

  //Sounds
  /*  const [play, { stop }] = useSound(bubble, { volume: 2.0 }); */

  /*   const [isHovering, setIsHovering] = useState(false); */

  return (
    <Container>
      <Boop rotation={10}>
        <ArrowContainer>
          <ArrowBackIosNewRoundedIcon
            style={{ fontSize: 50 }}
            onClick={changeUrl}
            /*            isHovering={isHovering}
            onMouseEnter={() => {
              setIsHovering(true);
              mute();
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              stop();
            }} */
          />
        </ArrowContainer>
      </Boop>
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
  position: relative;
`;

const ArrowContainer = styled.div`
  ${mobile({
    cursor: 'pointer',
    position: 'absolute',
    left: '10px',
    right: '0',
    bottom: '0',
    top: '3'
  })}
`;
