import { css } from 'styled-components';

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 550px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 1100px) {
      ${props}
    }
  `;
};

export const Laptop = (props) => {
  return css`
    @media only screen and (min-width: 1500px) {
      ${props}
    }
  `;
};

export const Desktop = (props) => {
  return css`
    @media only screen and (max-width: 1501px) {
      ${props}
    }
  `;
};
