import React from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useHistory } from 'react-router-dom';
import { Boop } from '../../Animations/Boop';
import styled from 'styled-components/macro';
import { mobile } from '../../../reponsive';

export const BackButton = () => {
  const history = useHistory();

  const changeUrl = () => {
    history.push('/');
  };

  return (
    <Container>
      <Boop rotation={10}>
        <ArrowContainer>
          <ArrowBackIosNewRoundedIcon style={{ fontSize: 50 }} onClick={changeUrl} />
        </ArrowContainer>
      </Boop>
    </Container>
  );
};

const Container = styled.div``;

const ArrowContainer = styled.div`
  ${mobile({
    cursor: 'pointer',
    display: 'none'
  })}
`;
