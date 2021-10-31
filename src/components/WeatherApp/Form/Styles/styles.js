import styled from 'styled-components/macro';
import { mobile } from '../../../../reponsive';
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: min(80vh, 500px);
  flex: 1;
`;

export const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 4vw + 1rem, 5rem);
  /* margin: 24px; */
  ${mobile({ textAlign: 'center', width: '300px' })}
`;

export const WeatherButton = styled.div`
  margin-top: 22px;
`;

export const SearchBarWrapper = styled.div`
  width: 800px;
  height: min-content;
`;

export const InputContainer = styled.div`
  width: 30%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '300px'
  })}
`;

//Form Styles (Styled Components)
/* 
export const Input = styled.input`
  padding: 20px;
  margin: 10px 0px;
  width: 575px;
  border-radius: 5px;
  ${mobile({
    width: '300px'
  })};
`; */

/* export const FormWrapper = styled.form`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
 */
/* export const ErrorMessageSpan = styled.span`
  color: red;
  font-weight: 500;
  font-size: 0.75rem;
  display: none;
  ${mobile({
    color: 'red',
    fontWeight: '500',
    paddingLeft: '25px'
  })}
`;
 */
