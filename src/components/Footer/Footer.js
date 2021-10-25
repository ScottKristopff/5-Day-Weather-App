import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Container = styled.div`
  display: flex;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;

const Footer = () => {
  return (
    <Container>
      <Center>
        <SocialContainer>
          <Facebook />
          <Instagram />
          <Twitter />
        </SocialContainer>
        <Desc>
          © 2021 - Your Weather <span>&hearts;</span>
        </Desc>
      </Center>
    </Container>
  );
};

export default Footer;
