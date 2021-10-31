import { css } from 'styled-components';

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 500px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 1000px) {
      ${props}
    }
  `;
};

export const Laptop = (props) => {
  return css`
    @media only screen and (max-width: 1500px) {
      ${props}
    }
  `;
};

export const Desktop = (props) => {
  return css`
    @media only screen and (max-width: 2000px) {
      ${props}
    }
  `;
};
