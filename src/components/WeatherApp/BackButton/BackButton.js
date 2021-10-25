import React, { useState } from 'react';
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
          isHovering={isHovering}
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
