import React, { useState } from 'react';
import styled from 'styled-components/macro';
/* import IconButton from '@mui/material/IconButton'; */
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useHistory } from 'react-router-dom';
import useSound from 'use-sound';
import bubble from '../../Sounds/bubbles.mp3';
import { Boop } from '../../Animations/Boop';

export const BackButton = () => {
  const history = useHistory();

  const changeUrl = () => {
    history.push('/');
  };

  //Sounds
  const [play, { stop }] = useSound(bubble, { volume: 2.0 });

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div>
      <Boop rotation={10}>
        <ArrowBackIosNewRoundedIcon
          style={{ fontSize: 50 }}
          onClick={changeUrl}
          onMouseEnter={() => {
            setIsHovering(true);
            play();
          }}
          onMouseLeave={() => {
            setIsHovering(false);
            stop();
          }}
        />
      </Boop>
    </div>
  );
};

/* const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`; */
