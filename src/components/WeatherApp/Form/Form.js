import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Form = ({ searchQuery, handleWeatherFetchClick, setSearchQuery }) => {
  //Handlers
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const history = useHistory();

  const apiWeatherCallAndChangeUrl = () => {
    handleWeatherFetchClick();
    history.push('/WeatherUI');
  };

  return (
    <>
      <Wrapper>
        <MainTitle>
          <h1>Your Weather</h1>
        </MainTitle>
        <InputContainer>
          <Input value={searchQuery} onChange={handleChange} placeholder="Toronto" />
        </InputContainer>
        <WeatherButton>
          <Button
            size="large"
            variant="contained"
            color="primary"
            value={searchQuery}
            disabled={!searchQuery}
            onClick={apiWeatherCallAndChangeUrl}
          >
            Weather Forecast
          </Button>
        </WeatherButton>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: min(80vh, 500px);
  flex: 1;
`;

const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 4vw + 1rem, 5rem);
  margin: 24px;
`;

const WeatherButton = styled.div`
  margin-top: 32px;
`;

const SearchBarWrapper = styled.div`
  width: 800px;
  height: min-content;
`;

const InputContainer = styled.div`
  width: 30%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

/* const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`; */
