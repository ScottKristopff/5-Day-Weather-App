import styled from 'styled-components/macro';

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
  margin: 24px;
`;

export const WeatherButton = styled.div`
  margin-top: 32px;
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
`;

export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
