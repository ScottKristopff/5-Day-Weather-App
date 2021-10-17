import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useFormik } from 'formik';
import * as yup from 'yup';

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

  // Form Validation;
  /*   const validationSchema = yup.object({
    city: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    password: yup
      .string('Enter a city name')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('city name is required')
      .city('Enter a valid city name')
  }); */

  /*   const WithMaterialUI = () => {
  const formik = useFormik({
    initialValues: {
      city: 'Toronto',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  }); */

  return (
    <>
      <Wrapper>
        <MainTitle>
          <h1>5 Day Weather App</h1>
        </MainTitle>
        <SearchBarWrapper>
          <form>
            <TextField
              fullWidth
              required
              name="city"
              id="city"
              label="City"
              defaultValue="Toronto"
              value={searchQuery}
              onChange={handleChange}
              color="primary"
            />
          </form>
        </SearchBarWrapper>
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
