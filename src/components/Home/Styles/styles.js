import styled from 'styled-components/macro';
import { mobile } from '../../../reponsive';
export const Wrapper = styled.div`
  background-image: url('https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mobile({})}
`;
