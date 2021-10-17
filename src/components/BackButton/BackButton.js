import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useHistory } from 'react-router-dom';
export const BackButton = () => {
  const history = useHistory();

  const changeUrl = () => {
    history.push('/');
  };
  return (
    <div>
      <IconButton onClick={changeUrl}>
        <ArrowBackIosNewRoundedIcon style={{ fontSize: 50 }} />
      </IconButton>
    </div>
  );
};
